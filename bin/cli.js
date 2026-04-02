#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const skillName = process.argv[3];

const sourceDir = path.join(__dirname, '../skills');
const targetDir = path.join(process.cwd(), '.agents/skills');

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

function listSkills() {
    return fs.readdirSync(sourceDir).filter(f => fs.lstatSync(path.join(sourceDir, f)).isDirectory());
}

if (command !== 'add') {
  console.log(`\nUsage: npx github:donghuc/product-design-agent-skills- add <skill_name|all>\n`);
  console.log(`Available skills:`);
  listSkills().forEach(s => console.log(`  - ${s}`));
  console.log(`\nExample: npx github:donghuc/product-design-agent-skills- add ui_design_architect\n`);
  process.exit(1);
}

if (!skillName) {
  console.error("\n❌ Error: Please provide a skill name or 'all'.");
  console.log(`Example: npx github:donghuc/product-design-agent-skills- add all\n`);
  process.exit(1);
}

if (skillName === 'all') {
  console.log(`\n📦 Installing all skills to ./.agents/skills/...`);
  copyFolderSync(sourceDir, targetDir);
  console.log('✅ Successfully installed all skills!\n');
} else {
  const specificSource = path.join(sourceDir, skillName);
  const specificTarget = path.join(targetDir, skillName);

  if (!fs.existsSync(specificSource)) {
    console.error(`\n❌ Error: Skill '${skillName}' not found in the library.`);
    console.log(`Available skills:`);
    listSkills().forEach(s => console.log(`  - ${s}`));
    console.log('');
    process.exit(1);
  }

  console.log(`\n📦 Installing '${skillName}' to ./.agents/skills/${skillName}...`);
  copyFolderSync(specificSource, specificTarget);
  console.log(`✅ Successfully installed ${skillName}!\n`);
}

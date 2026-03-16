# Product Design Agent Skills

A collection of AI Agent skills specifically designed to assist, evaluate, and govern product design workflows. These skills are intended for multi-agent systems where agents specialize in UX research, UI generation, and strategic alignment.

## 📦 Available Skills

| Skill Name | Description | Status |
| :--- | :--- | :--- |
| **[UX Strategy Guardian](./skills/ux_strategy_guardian)** | Validates UX flows and UI proposals against product strategy, UX principles, and design system rules. Acts as a governance layer. | Stable |

*(More skills coming soon...)*

## 🚀 Installation

You can install this collection of skills using **npm** directly from GitHub:

```bash
npm install git+https://github.com/donghuc/product-design-agent-skills-.git
```

### Usage After Installation

Once installed, the skills will be located in your `node_modules/@donghuc/product-design-agent-skills/skills/`. 

You can then copy them to your agent's skills directory:

```bash
cp -r node_modules/@donghuc/product-design-agent-skills/skills/ux_strategy_guardian /path/to/your/project/.agents/skills/
```

## 📂 Manual Installation

Inside each skill's folder, you will find:
- A `SKILL.md` containing the core agent prompt/instructions and YAML metadata.
- A `README.md` detailing the inputs, behaviors, and expected outputs.
- An `examples/` folder showing concrete JSON payloads.

## 🤝 Contributing

We welcome additions! To submit a new skill:
1. Fork the repository.
2. Create a new folder under `skills/` (using snake_case).
3. Ensure you include a `SKILL.md`, a `README.md`, and an `examples/` directory.
4. Submit a Pull Request.

## 📄 License

MIT License. See `LICENSE` for details.

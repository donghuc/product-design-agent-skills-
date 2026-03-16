# Product Design Agent Skills

A collection of AI Agent skills specifically designed to assist, evaluate, and govern product design workflows. These skills are intended for multi-agent systems where agents specialize in UX research, UI generation, and strategic alignment.

## 📦 Available Skills

| Skill Name | Description | Status |
| :--- | :--- | :--- |
| **[UX Strategy Guardian](./skills/ux_strategy_guardian)** | Validates UX flows and UI proposals against product strategy, UX principles, and design system rules. | Stable |
| **[Design System Spec Writer](./skills/design_system_spec_writer)** | Parses Figma data to generate formal UI Specification Guidelines for AI consumption. | Stable |
| **[UI Design Architect](./skills/ui_design_architect)** | Synthesizes specs and strategy into platform-optimized design briefs and execution prompts. | Stable |
| **[Heuristic UI Auditor](./skills/heuristic_ui_auditor)** | Codifies the logic of the Heuristic AI Figma plugin for objective, deduction-based UX/UI audits. | Stable |

*(More skills coming soon...)*

## 🔑 Figma & MCP Dependencies

To ensure these skills are portable, we have separated the "Visual Extraction" from the "Logic Synthesis":
- **Design System Spec Writer**: 🔴 **Connection Required.** This is the only skill that needs the Figma MCP server or API access to extract data from your design files.
- **Other Skills (Architect, Guardian, Auditor)**: 🟢 **Text-Only.** These skills only process the generated Markdown specifications or JSON node data. They do NOT require any external API connections, making them 100% portable for users without a Figma setup.

## 🔄 Recommended Workflow

For the best results, use these skills in the following order to create a high-fidelity, strategy-aligned design loop:

1.  **Map the Design System**: Use the **[Design System Spec Writer](./skills/design_system_spec_writer)** with a Figma URL to generate a `ui_spec_artifact`. This serves as the machine-readable "source of truth" for your brand.
2.  **Architect the UI**: Pass the `ui_spec_artifact` and your `product_foundation` into the **[UI Design Architect](./skills/ui_design_architect)**. It will generate a platform-optimized (mobile-first) design brief and execution prompt.
3.  **Build the Component**: Use the output from the Architect to generate the UI using your preferred tool (e.g., Stitch, v0, or manual code).
4.  **Audit for Friction**: Run the **[Heuristic UI Auditor](./skills/heuristic_ui_auditor)** on the generated UI to identify accessibility failures, usability friction, and hierarchy issues using objective scoring.
5.  **Strategic Governance**: Finally, use the **[UX Strategy Guardian](./skills/ux_strategy_guardian)** to perform a final review. It ensures the built component perfectly aligns with your high-level product principles and vision.

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

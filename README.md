# Product Design Agent Skills

A collection of AI Agent skills specifically designed to assist, evaluate, and govern product design workflows. These skills are intended for multi-agent systems where agents specialize in UX research, UI generation, and strategic alignment.

## 📦 Available Skills

| Skill Name | Description | Status |
| :--- | :--- | :--- |
| **[Problem Framing Orchestrator](./skills/problem_framing_orchestrator)** | Interactive agent that structures and validates problem framing before any design begins. | New |
| **[Product Spec Strategist](./skills/product_spec_strategist)** | Converts raw specs into actionable design roadmaps, suggests UX flows, and identifies edge cases. | Stable |
| **[UX Strategy Guardian](./skills/ux_strategy_guardian)** | Validates UX flows and UI proposals against product strategy, UX principles, and design system rules. | Stable |
| **[Design System Spec Writer](./skills/design_system_spec_writer)** | Parses Figma data to generate formal UI Specification Guidelines for AI consumption. | Stable |
| **[UI Design Architect](./skills/ui_design_architect)** | Synthesizes specs and strategy into platform-optimized design briefs and execution prompts. | Stable |
| **[Heuristic UI Auditor](./skills/heuristic_ui_auditor)** | Codifies the logic of the Heuristic AI Figma plugin for objective, deduction-based UX/UI audits. | Stable |

*(More skills coming soon...)*

## 🔑 Figma & MCP Dependencies

To ensure these skills are portable, we have separated the "Visual Extraction" from the "Logic Synthesis":
- **Design System Spec Writer**: 🔴 **Connection Required.** This is the only skill that needs the Figma MCP server or API access to extract data from your design files.
- **Other Skills (Orchestrator, Strategist, Architect, Guardian, Auditor)**: 🟢 **Text-Only.** These skills only process the generated Markdown specifications or JSON node data. They do NOT require any external API connections, making them 100% portable for users without a Figma setup.

## 🔄 Recommended Workflow

For the best results, use these skills in the following order to create a high-fidelity, strategy-aligned design loop:

1.  **Frame the Problem**: Use the **[Problem Framing Orchestrator](./skills/problem_framing_orchestrator)** to interactively define and validate the "Why" and "Who" before any specs exist.
2.  **Strategize the Feature**: Use the **[Product Spec Strategist](./skills/product_spec_strategist)** to turn the framed problem into an actionable design brief with 3 UX flow options.
3.  **Map the Design System**: Use the **[Design System Spec Writer](./skills/design_system_spec_writer)** with a Figma URL to generate a `ui_spec_artifact`.
4.  **Architect the UI**: Pass the chosen UX flow and the `ui_spec_artifact` into the **[UI Design Architect](./skills/ui_design_architect)** to generate an execution prompt.
5.  **Build the Component**: Use the Architect's output to generate the UI using your preferred tool (e.g., Stitch, v0, or manual code).
6.  **Audit for Friction**: Run the **[Heuristic UI Auditor](./skills/heuristic_ui_auditor)** to identify accessibility and usability issues.
7.  **Strategic Governance**: Finally, use the **[UX Strategy Guardian](./skills/ux_strategy_guardian)** to ensure the build aligns perfectly with your high-level principles.

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

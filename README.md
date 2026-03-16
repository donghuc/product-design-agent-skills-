# Product Design Agent Skills

A collection of AI Agent skills specifically designed to assist, evaluate, and govern product design workflows. These skills are intended for multi-agent systems where agents specialize in UX research, UI generation, and strategic alignment.

## 📦 Available Skills

| Skill Name | Description | Status |
| :--- | :--- | :--- |
| **[UX Strategy Guardian](./skills/ux_strategy_guardian)** | Validates UX flows and UI proposals against product strategy, UX principles, and design system rules. Acts as a governance layer. | Stable |

*(More skills coming soon...)*

## 🚀 How to Use

If your agent framework supports file-based skill instructions (like `.agents/skills/`), you can directly copy the relevant skill folders into your project.

```bash
# Example: Adding the UX Strategy Guardian skill
cp -r product-design-agent-skills/skills/ux_strategy_guardian /path/to/your/project/.agents/skills/
```

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

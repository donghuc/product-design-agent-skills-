# Product Design Agent Skills (End-to-End Suite)

A collection of specialized AI Agent skills designed to support, evaluate, and govern the modern **Product Design Cycle**. These skills turn generic LLMs into domain experts for UX research, UI architecture, and strategic governance.

---

## 🔄 The 5-Phase Product Design Cycle

Our skills are structured to follow a rigorous design workflow, ensuring that strategy and user-centric logic drive every visual decision.

### Phase 1: Problem Framing
**Role**: Product Strategist / UX Lead
- **[Problem Framing Orchestrator](./skills/problem_framing_orchestrator)**: **Interactive Absolute Step 0.** Defines the "Why" and "Who" before any specs or roadmap exist. Challenges vague thinking and aligns problems with product strategy.

### Phase 2: Idea Exploration
**Role**: Product Designer / UX Strategist
- **[Concept Exploration Orchestrator](./skills/concept_exploration_orchestrator)**: **Solution Triangulation.** Explores 3-5 distinct interaction concepts and evaluates them against core principles and trade-offs before committing to a path.

### Phase 3: Rapid Prototyping
**Role**: Interaction Designer / PM / UX Architect
- **[Product Spec Strategist](./skills/product_spec_strategist)**: **Roadmap Generator.** Converts chosen concepts into a 3-flow design roadmap (Happy/Power/Guided) with actionable checklists.
- **[UI Design Architect](./skills/ui_design_architect)**: **Adaptive Planner.** Used in *Prototyping Mode* to fast-map screens, variations, and mandatory interaction states (Loading, Error, Empty, Success).

### Phase 4: Design System Application
**Role**: Design Ops / UI Designer
- **[Design System Spec Writer](./skills/design_system_spec_writer)**: **Figma Translator.** Parses raw Figma files via MCP to generate machine-readable UI Guideline artifacts (tokens, spacing, components).
- **[UI Design Architect](./skills/ui_design_architect)**: **adaptive Planner.** Used in *Spec-Compliant Mode* to skin layouts with 100% adherence to Design System tokens.

### Phase 5: Validation & Review
**Role**: Design Director / Auditor / Validation Lead
- **[Heuristic UI Auditor](./skills/heuristic_ui_auditor)**: **Self-Correction Layer.** Performs objective, 0-100 scored audits based on Nielsen’s 10 Heuristics and WCAG 2.1 accessibility.
- **[UX Strategy Guardian](./skills/ux_strategy_guardian)**: **MCP-Enhanced Gatekeeper.** Inspects actual Figma node structures to detect detached instances, semantic variant errors, and strategic drift.
- **[Validation & Simulation Agent](./skills/validation_simulation_agent)**: **Behavioral Stress Test.** Simulates specific user personas (Impatient, First-time, etc.) to detect friction and hidden failure points.

---

## 🔑 Figma & MCP Dependencies

To ensure maximum portability, we separate "Visual Extraction" from "Logic Synthesis":
- **Design System Spec Writer**: 🔴 **Connection Required.** Needs Figma MCP or API to extract live data.
- **Other Skills (Orchestrator, Strategist, Architect, Guardian, Auditor, Validation Agent)**: 🟢 **Text-Only.** These process Markdown specs or JSON node data. They are 100% portable and do not require external connections.

---

## 🚀 Installation

Install this collection using **npm** directly from GitHub:

```bash
npm install git+https://github.com/donghuc/product-design-agent-skills-.git
```

### Usage After Installation
Skills are located in `node_modules/@donghuc/product-design-agent-skills/skills/`. To use them in your own agent workflow:

```bash
cp -r node_modules/@donghuc/product-design-agent-skills/skills/ui_design_architect /path/to/project/.agents/skills/
```

---

## 📂 Repository Structure
Each skill folder contains:
- `SKILL.md`: The core system instructions and YAML metadata for the agent.
- `README.md`: Input/Output schema and usage guidance.
- `examples/`: Concrete JSON payloads for testing and reference.

---

## 🤝 Contributing
We welcome new specialized design skills! 
1. Create a snake_case folder under `skills/`.
2. Include a `SKILL.md`, `README.md`, and `examples/` directory.
3. Submit a Pull Request.

## 📄 License
MIT License.

# Product Design Agent Skills (Anti-Hallucination Suite)
A collection of specialized AI Agent skills designed to support, evaluate, and govern the modern **Product Design Cycle**. These skills turn generic LLMs into domain experts for UX research, UI architecture, and strategic governance.

📚 **[Read the Detailed Library Walkthrough](./docs/walkthrough.md)** - A complete guide on how and when to use each of the 16 skills in your daily design process.

---

## 🔄 The 5-Phase Product Design Cycle (16 Skills)

Our skills are structured to follow a rigorous design workflow, ensuring that strategy and user-centric logic drive every visual decision. Our suite introduces strict Anti-Hallucination rules, Source Citations, and Confidence Tagging across the entire suite.

### Level 0: Global Orchestration
**Role**: Project Manager / Meta-Agent
- **[Product Design Workflow Orchestrator](./skills/product_design_workflow_orchestrator)**: The entry point for all design work. Acts as a router, keeping track of the current phase and directing the user to the correct specialized skills below without hallucinating context.

### Phase 1: Problem Framing
**Role**: Product Strategist / UX Researcher
- **[Problem Framing Orchestrator](./skills/problem_framing_orchestrator)**: Interactively defines the "Why" and "Who". Now supports document ingestion for grounded framing.
- **[User Research Synthesizer](./skills/user_research_synthesizer)**: 🆕 Ingests raw user research data and produces structured insight maps. Every theme directly links to a source quote.

### Phase 2: Idea Exploration
**Role**: Product Designer / UX Strategist
- **[Concept Exploration Orchestrator](./skills/concept_exploration_orchestrator)**: Explores distinct interaction concepts and evaluates tradeoffs based on real-world reference constraints.
- **[Reference & Benchmark Collector](./skills/reference_benchmark_collector)**: 🆕 Searches for and organizes verifiable, real-world precedent designs so designers don't reinvent the wheel.
- **[UX Metrics Designer](./skills/ux_metrics_designer)**: 🆕 Defines clear, behavior-driven UX metrics for a feature or flow based on the HEART framework.

### Phase 3: Rapid Prototyping
**Role**: Interaction Designer / PM / UX Architect / UX Writer
- **[Product Spec Strategist](./skills/product_spec_strategist)**: Converts chosen concepts into a 3-flow design roadmap (Happy/Power/Guided) anchored in real behavioral data.
- **[UI Design Architect](./skills/ui_design_architect)**: Fast-maps screens and mandatory interaction states in *Prototyping Mode*.
- **[Content & Copy Strategist](./skills/content_copy_strategist)**: 🆕 Generates and validates all UI copy against brand voice constraints, preventing "Lorem Ipsum" leaks.

### Phase 4: Production Design & Build
**Role**: Design Ops / UI Designer / Creative Technologist
- **[Design System Spec Writer](./skills/design_system_spec_writer)**: Parses raw Figma files via MCP to generate machine-readable UI Guidelines. Includes deprecation tracking.
- **[UI Design Architect](./skills/ui_design_architect)**: Applied in *Spec-Compliant Mode* to skin layouts with 100% adherence to Design System tokens.
- **[Design System Drift Detector](./skills/design_system_drift_detector)**: Strict deterministic diff checker that catches unauthorized overrides and custom tokens.
- **[Creative Frontend Coder](./skills/creative_frontend_coder)**: 🆕 Translates structural blueprints into production-grade frontend code (React, HTML/CSS). Strictly complies with DS tokens, or uses an "Anti-Slop" creative manifesto if no DS exists.

### Phase 5: Validation & Review
**Role**: Design Director / Auditor / QA Lead
- **[Heuristic UI Auditor](./skills/heuristic_ui_auditor)**: Objective, scored audits based on Nielsen’s Heuristics and extended WCAG accessibility checks.
- **[UX Strategy Guardian](./skills/ux_strategy_guardian)**: MCP-Enhanced gatekeeper. Now includes cross-screen consistency checks.
- **[Validation & Simulation Agent](./skills/validation_simulation_agent)**: Simulates specific user personas to detect friction, grounded in real persona data.
- **[Handoff Quality Checker](./skills/handoff_quality_checker)**: 🆕 Final gatekeeper ensuring design output strictly passes a team-maintained Engineering checklist.

---

## 🛡️ The Anti-Hallucination Framework

All skills operate under strict guardrails to prevent AI "confident nonsense":
1. **Confidence Tagging**: Every output is labeled `[GROUNDED]`, `[INFERRED]`, or `[SPECULATIVE]`.
2. **"I Don't Know" Permission**: Agents are explicitly forbidden from filling information gaps with guesses.
3. **Source Citations**: Auditors must cite specific WCAG/Nielsen criteria.
4. **Human Checkpoints**: Mandatory pauses at critical decision points to ensure human-in-the-loop governance.
5. **Standard Handoff Schema**: Context loss is minimized by using `skill_handoff_schema.json` between steps.

## ⌨️ Integrated Slash Commands
Every skill now possesses predefined `/slash` triggers to drastically speed up your workflow (e.g., typing `/audit` will skip pleasantries and immediately execute a 40-point heuristic sweep). Each skill's `SKILL.md` lists its specific available shortcuts.

---

## 🔑 Figma & MCP Dependencies
- **Connection Required** (🔴): `Design System Spec Writer`, `Design System Drift Detector`, `UX Strategy Guardian (MCP Mode)`.
- **Text-Only** (🟢): All other orchestrators, synthesizers, and architects. 100% portable.

---

## 🚀 Installation & Usage

You don't need to download the entire repository manually. You can use our built-in CLI installer via `npx` to fetch exactly what you need directly into your local `.agents/skills` folder.

**To install a specific skill:**
```bash
npx github:donghuc/product-design-agent-skills- add ui_design_architect
```

**To install all 16 skills at once:**
```bash
npx github:donghuc/product-design-agent-skills- add all
```

## 📄 License
MIT License.

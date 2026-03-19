# Product Design Agent Skills: Detailed Walkthrough

This guide provides a comprehensive breakdown of the 13 skills in the v2.0 Anti-Hallucination Suite. It is designed to help Product Designers and AI Agents collaborate effectively across the 5-phase Product Design Cycle, ensuring that AI operates safely without generating "confident nonsense".

---

## Phase 1: Problem Framing
*Goal: Define the "Why" and "Who" before any UI is discussed.*

### 1. Problem Framing Orchestrator
- **What it does**: Interactively guides the definition of the problem space, target users, and desired outcomes. It prevents premature UI generation.
- **When Agent Activates**: Automatically triggers when a user pastes a vague product requirement document (PRD) or states a new feature goal.
- **When Designer Should Use**: Use this as your "Absolute Step 0" before opening Figma. It forces stakeholders to clarify assumptions.
- **Pro Tip**: Use the `context_documents` input to feed the agent real PRDs, forcing it to extract `[GROUNDED]` quotes rather than summarizing from memory.

### 2. User Research Synthesizer
- **What it does**: Processes messy qualitative data (interviews, surveys, support tickets) into structured, thematic insights.
- **When Agent Activates**: When raw user transcripts or feedback datasets are shared in the context window.
- **When Designer Should Use**: To distill hundreds of qualitative data points into 3-4 actionable insights that are 100% grounded in user quotes.
- **Pro Tip**: Never let the AI guess user pain. Funnel the explicit output of this synthesizer directly into the Orchestrator to ensure the problem definition is rooted in reality.

---

## Phase 2: Idea Exploration
*Goal: Solution Triangulation and pattern validation.*

### 3. Concept Exploration Orchestrator
- **What it does**: Generates and evaluates 3-5 distinct interaction concepts for a framed problem. It stress-tests ideas across usability, complexity, and technical feasibility.
- **When Agent Activates**: After problem framing is complete and the designer signals readiness to explore solution models.
- **When Designer Should Use**: To break out of "first-idea fixation". Use it to explore alternative mental models (e.g., proactive automation vs. reactive user control) before committing to a flow.
- **Pro Tip**: Pay close attention to the agent's `⚠️ HUMAN CHECKPOINT` when selecting a concept. The choice made here heavily restricts UI generation later.

### 4. Reference & Benchmark Collector
- **What it does**: Explores and organizes real-world precedent designs and interaction patterns from direct and indirect competitors.
- **When Agent Activates**: When embarking on a highly complex or standardized flow (e.g., checkout, onboarding) where reinventing the wheel is dangerous.
- **When Designer Should Use**: When you need to justify an interaction model to stakeholders using established industry patterns.
- **Pro Tip**: Pair this skill with Concept Exploration to ensure the AI's generated concepts are anchored in verifiable real-world products.

---

## Phase 3: Rapid Prototyping
*Goal: Structural layout, UX flows, and copy.*

### 5. Product Spec Strategist
- **What it does**: Converts chosen concepts into an actionable 3-flow design roadmap (Happy Path, Power Path, Guided Path) with detailed edge cases.
- **When Agent Activates**: Once a specific interaction concept has been selected and approved via a human checkpoint.
- **When Designer Should Use**: To map out the logical architecture of a feature before drawing boxes on a screen. 
- **Pro Tip**: Feed it `behavioral_data` (like Mixpanel drops) to ensure the 3 UX flows are built around how users *actually* behave, rather than how we hope they behave.

### 6. UI Design Architect (Prototyping Mode)
- **What it does**: Fast-maps structural screens, generates variation dimensions (e.g., list vs. grid), and mandates the 4 core states (Loading, Error, Empty, Success).
- **When Agent Activates**: When taking an abstract UX flow and turning it into a concrete screen-by-screen prompt for build tools like Stitch or v0.
- **When Designer Should Use**: When you need to generate multiple architectural variations quickly to explore layout density and navigation patterns.
- **Pro Tip**: Demand motion specs! The Architect can provide `trigger -> animation -> duration -> easing` formulas for every transition.

### 7. Content & Copy Strategist
- **What it does**: Generates and validates all UI copy against brand voice guidelines and reading level constraints.
- **When Agent Activates**: Automatically runs over wireframes or structural prompts to eliminate "Lorem Ipsum" and generic placeholders.
- **When Designer Should Use**: To ensure the words on the screen are empathetic and clear before handing the design to engineering.
- **Pro Tip**: Always provide a specific `brand_voice_guideline` input. If left blank, the AI will refuse to guess your brand's tone.

---

## Phase 4: Design System Application
*Goal: Production design and strict adherence to brand tokens.*

### 8. Design System Spec Writer
- **What it does**: Parses raw Figma files (via MCP) to extract colors, typography, spacing, and component definitions into a machine-readable artifact.
- **When Agent Activates**: When a new Figma Design System library is connected or when the system suspects a token update.
- **When Designer Should Use**: Use this skill to keep your AI agents updated on the latest brand guidelines without manually writing documentation.
- **Pro Tip**: It automatically flags **Deprecated** components. Run this monthly to audit your library's health.

### 9. UI Design Architect (Spec Mode)
- **What it does**: Takes structural UI plans and applies strict Design System tokens to them, outputting a high-fidelity prompt.
- **When Agent Activates**: When moving from a wireframe/prototype into a final, production-ready build prompt.
- **When Designer Should Use**: When you want an external build tool (like Stitch) to generate code that looks exactly like your brand, not a generic template.
- **Pro Tip**: Never run this mode without first running the Spec Writer, or the AI will guess your brand colors.

### 10. Design System Drift Detector
- **What it does**: A strict diff-checker that compares an implemented screen against the extracted DS guidelines.
- **When Agent Activates**: After a screen is built, the agent uses MCP to scan the node properties mathematically.
- **When Designer Should Use**: To catch unauthorized custom HEX codes, rogue pixel values, and detached instances before they enter the codebase.
- **Pro Tip**: This agent does not use inference. If it flags something as `[GROUNDED]`, it means the absolute mathematical value is wrong.

---

## Phase 5: Validation & Review
*Goal: UX/Accessibility audits and behavioral stress tests.*

### 11. Heuristic UI Auditor
- **What it does**: Performs objective, 0-100 scored audits using Nielsen's 10 Heuristics and extended WCAG 2.1 accessibility checks.
- **When Agent Activates**: When a built screen or high-fidelity prototype is provided for review.
- **When Designer Should Use**: Treat this as your automated QA layer. Run it to catch contrast ratio failures, touch target sizes, and focus-order traps.
- **Pro Tip**: Pass a `previous_audit_id` string when re-running the skill. The auditor will automatically track which issues you resolved and which are new.

### 12. UX Strategy Guardian
- **What it does**: An MCP-Enhanced gatekeeper that inspects actual Figma node structures to catch semantic errors. It now enforces Cross-Screen Consistency.
- **When Agent Activates**: To perform a deep "Strategic Audit" validating that the implementation aligns with the original product goals.
- **When Designer Should Use**: Run this across an entire flow (not just one screen) to ensure a button looks and behaves exactly the same on screen 1 as it does on screen 5.
- **Pro Tip**: If MCP is connected, it verifies component variants. If a user receives a "Destructive" warning but the button variant used is "Success", the Guardian flags it.

### 13. Validation & Simulation Agent
- **What it does**: Simulates specific user personas (Impatient, Confused, Low-Skill) navigating the flow to detect friction and hidden failure points.
- **When Agent Activates**: When the flow is complete and ready for the final behavioral "Stress Test".
- **When Designer Should Use**: To simulate a usability test without scheduling real users. It forces the flow through failure scenarios (e.g., network drops mid-task).
- **Pro Tip**: Supply actual `persona_cards` based on your real user research. It prevents the AI from relying on generic archetypes.

### 14. Handoff Quality Checker
- **What it does**: The absolute final hurdle. It validates that a design package satisfies every item on an engineering-provided "Definition of Ready" checklist.
- **When Agent Activates**: When the designer attempts to mark the ticket as "Ready for Dev".
- **When Designer Should Use**: Use this to automatically check if you remembered to export SVGs, document motion specs, and design the empty states.
- **Pro Tip**: The AI is explicitly forbidden from inventing criteria here. It only grades against the exact list your tech leads provided.

---

## The Hand-Off Process
To ensure seamless transitions across these 14 skills, all agents employ standard `skill_handoff_schema.json` payloads. This guarantees that `[GROUNDED]` context from Problem Framing successfully makes it all the way to the Handoff Quality Checker without being lost to AI forgetfulness or hallucination.

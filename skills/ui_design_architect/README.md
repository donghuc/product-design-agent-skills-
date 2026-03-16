# UI Design Architect

**ID:** `ui_design_architect`
**Category:** Design Implementation

## Overview

The UI Design Architect is the "Synthesizer" of the design workflow. While the **Spec Writer** defines the rules and the **Guardian** reviews the results, the **Architect** is the one who plans the actual build.

It takes your high-level ideas, filters them through your UX Strategy, and skins them using your UI Specification to create a perfect, platform-optimized design brief.

> [!TIP]
> This skill **does not require Figma access**. It only needs the text-based UI Specification produced by the Spec Writer (or manually provided). This makes it portable and easy to use even if you don't have a live design system connection.


## When to Trigger

Trigger this skill when you are ready to:
- Generate a new screen from scratch.
- Refactor an existing UI to align with a new design system.
- Create a detailed prompt for an external tool like **Stitch** or **V0**.

## Key Responsibilities

1. **Enforces Mobile-First**: Automatically adjusts all proposals for mobile screen sizes (430px max width) by default.
2. **Token Mapping**: Ensures every button, text string, and container uses exactly what is defined in your `ui_spec_guideline`.
3. **Strategic Filtering**: Checks if the requested feature even makes sense for your `ux_strategy` before planning the build.

## How to use in the Workflow

1. Get your tokens from the **Design System Spec Writer**.
2. Run the **UI Design Architect** to plan the screen.
3. Use the output prompt in **Stitch** to build it.
4. Pass the result to the **UX Strategy Guardian** for a final audit.

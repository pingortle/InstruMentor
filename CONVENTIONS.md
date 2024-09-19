### Rails Code Conventions (Essentials)

- **DRY**: No duplication.
- **KISS**: Prefer simplicity.
- **Composition > Inheritance**.
- **Explicit > Implicit**.
- **Refactor regularly**.
- **Separation of Concerns**: One responsibility per module.
- **Use Adapters** to bridge systems.
- **Design Patterns**: Promote reuse and maintainability.
- **Small, single-purpose functions**.
- **Single Responsibility Principle** for classes.
- **Use objects over primitives** for complex data.

#### Code Organization
- Prefer duplication over complex indirection.
- Meaningful names; single-focus methods/classes.
- Logical structure; support classes in the same file.

#### Rails-Specific
- Follow Rails conventions; always use generators.
- Use partials, Tailwind for views.
- Restart with `rails restart`.
- AVOID `rails server`.

#### Testing
- Use Minitest; prioritize meaningful tests and coverage.
- Use fixtures for test data.

#### Version Control
- Clear commit messages; atomic, focused commits.

#### Code Review
- Check for adherence and give constructive feedback.

#### Communication
- Be concise.

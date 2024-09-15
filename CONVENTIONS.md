# Team Conventions

## Principles

1. DRY (Don't Repeat Yourself): Avoid code duplication when possible.
2. KISS (Keep It Simple, Stupid): Prefer simple, readable solutions over complex ones.
3. Composition over Inheritance: Favor object composition over class inheritance.
4. Explicit over Implicit: Write clear, self-explanatory code.
5. Small steps, one at a time: Break down complex tasks into smaller, manageable steps. Do them one at a time.
6. Wait for feedback: Don't rush to implement new features or make changes without getting feedback from the team.

## Code Organization

1. Prefer duplication over indirection when indirection would add unnecessary complexity.
2. Use meaningful and descriptive names for variables, methods, and classes.
3. Keep methods and classes focused on a single responsibility.
4. Organize code logically within files and across the project structure.

## Rails-specific Guidelines

1. Follow Rails conventions unless there's a compelling reason not to.
2. Use partials in the `app/views/shared` directory to promote reusability and consistency across views.
3. Leverage Tailwind classes in views and partials for consistent styling.
4. Use `rails restart` instead of `rails server` for restarting the application. The server will be handled separately.
5. Keep ChromeDriver up to date with the latest Chrome version installed on your system. This is crucial for system tests to run properly.
6. ALWAYS use Rails generators for creating new controllers, models, and other components. This is crucial for maintaining consistency and leveraging Rails conventions. After generation, you can then modify the generated files as needed. Never skip this step or attempt to manually create files that should be generated.

## Testing

1. Use Minitest for all testing in the Rails application.
2. Write comprehensive tests for models, controllers, and complex logic.
3. Aim for high test coverage, but prioritize meaningful tests over 100% coverage.
4. Use fixtures for test data, leveraging Rails' built-in fixture system.
5. Organize tests logically, mirroring the structure of the app directory.

## Version Control

1. Write clear, concise commit messages that explain the "why" behind changes.
2. Keep commits focused and atomic, addressing a single concern per commit.

## Code Review

1. Review code for adherence to this style guide.
2. Provide constructive feedback and suggestions for improvement.
3. Ensure new code maintains or improves the overall quality of the codebase.

Remember: This guide is a living document. Update it as the team's practices evolve and improve.

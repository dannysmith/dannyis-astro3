---
description: Main index of Cursor rules and guidelines
globs: ['**/*']
alwaysApply: true
---

# Cursor Rules and Guidelines

This document serves as the main index for all Cursor rules and guidelines in this project.

## Available Rules

1. [Project Structure](project-structure.md)

   - Guidelines for organizing project files and directories
   - Architecture patterns and best practices
   - Technical implementation details

2. [Styling Guide](styling-guide.md)

   - Visual design standards
   - CSS architecture and organization
   - Component styling guidelines
   - CSS variables and theming

3. [Task Management](task-list.md)
   - Guidelines for creating and managing task lists
   - Task tracking and progress updates
   - Implementation planning

## How to Use These Rules

1. Each rule file contains specific guidelines for its domain
2. Rules are applied based on file patterns specified in the `globs` field
3. Some rules are always applied (`alwaysApply: true`)
4. Rules can be customized per project by modifying the respective files

## Adding New Rules

To add a new rule:

1. Create a new markdown file in the `.cursor/rules` directory
2. Include the required frontmatter:
   ```yaml
   ---
   description: Brief description of the rule
   globs: ['pattern/to/match']
   alwaysApply: false
   ---
   ```
3. Add the rule to this index file
4. Document the rule with clear guidelines and examples

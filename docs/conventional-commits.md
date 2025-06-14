# Conventional Commit Standard

The following was taken directly from https://www.conventionalcommits.org/en/v1.0.0 on 2025-06-09.

## Summary

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with @Semantic Versioning, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

- **fix**: a commit of the _type_ `fix` patches a bug in your codebase (this correlates with `PATCH` in Semantic Versioning).
- **feat**: a commit of the _type_ `feat` introduces a new feature to the codebase (this correlates with `MINOR` in Semantic Versioning).
- **BREAKING CHANGE**: a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with `MAJOR` in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.

Types other than `fix` and `feat` are allowed, for example `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, `test`, and others.

Footers other than `BREAKING CHANGE:` may be provided and follow a convention similar to @git trailer format, e.g. `Acked-by`, `Reviewed-by`, `Co-authored-by`.

We encourage using a scope, when it's helpful, to identify the surface area of a commit. A scope may be provided after a type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays`.

## Examples

```
feat: allow provided config object to extend other config files

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

```
feat!: send an email to the customer when a product is shipped
```

```
feat(api)!: send an email to the customer when a product is shipped
```

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

```
docs: correct spelling of CHANGELOG
```

```
feat(lang): add Polish language
```

```
fix: prevent racing of requests

Introduce a request id and a reference for the latest request. Duplicated requests are dropped once a newer request is made.

Reviewed-by: Z
Refs: #123
```

## Specification

1. Commits MUST be prefixed with a type, which consists of a noun, `feat`, `fix`, etc., followed by an optional scope, and a REQUIRED terminal colon and space.
2. The type `feat` MUST be used when a commit adds a new feature to your application or library.
3. The type `fix` MUST be used when a commit represents a bug fix for your application.
4. A scope MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., `fix(parser):`
5. A description MUST immediately follow the colon and space after the type/scope prefix. The description is a short summary of the code changes, e.g., `fix: array parsing issue when multiple spaces`.
6. A longer commit body MAY be provided after the short description, providing additional contextual information about the code changes. The body MUST begin one blank line after the description.
7. The body MAY include multiple paragraphs.
8. One or more footers MAY be provided one blank line after the body. Each footer MUST consist of a word token, followed by either a `: ` and a string value (e.g., `BREAKING CHANGE: environment variables now take precedence over config files`), or a `#` and an issue number (e.g., `Resolves: #123`).
9. Breaking changes MUST be indicated in the footer, or with a `!` immediately before the `:` in the type/scope prefix. The footer MUST begin with the phrase `BREAKING CHANGE:`, followed by a description of the change, the justification, and migration notes.
10. If a `!` is used, a `BREAKING CHANGE:` footer is optional, but may still be included for clarity.
11. Types other than `feat` and `fix` MAY be used in your commit messages, e.g., `chore`, `docs`, `style`, `refactor`, `perf`, `test`, etc.
12. The commit message MUST NOT be longer than 100 characters. This allows the message to be easier to read on GitHub as well as in various git tools.
13. A longer description of the commit MAY be provided in the body of the message. Each line of the body MUST be limited to 100 characters.
14. The body MUST begin one blank line after the description.
15. Footer lines MUST be separated from the body by a blank line.
16. Breaking changes MUST be indicated with a `BREAKING CHANGE:` in the footer or a `!` after the type/scope. The text of the breaking change MUST be provided in the footer.

## Why Use Conventional Commits

- Automatically generating CHANGELOGs
- Automatically determining a semantic version bump (based on the types of commits in a PR)
- Communicating the nature of changes to teammates, the public, and other stakeholders
- Triggering build and publish processes
- Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history

## FAQ

### How should I version my initial development?

The specification is only concerned with how commit messages are structured. However, @SemVer dictates that versions start at 0.1.0 and increments from there.

### What do I do if I accidentally use the wrong commit type?

You can use `git rebase -i` to change the commit message if it has not been pushed. If the commit has been pushed, consider using a follow-up commit that clarifies or corrects the previous message.

### Are BREAKING CHANGEs only valid for `feat` and `fix` types?

No. Any commit type can include a breaking change. For example, a `chore` or `refactor` commit can have a `BREAKING CHANGE:` footer.

### Can I use `BREAKING-CHANGE` instead of `BREAKING CHANGE`?

Yes. Both are treated equivalently.

### Can I use multiple types in a single commit?

Prefer separate commits for each type, as this allows for more granular release notes and changelogs.

### Can I omit the commit body?

Yes. Only the header is required. The body and footer are optional.

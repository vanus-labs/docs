# Vanus Documentation Contributing Guide

Welcome to Vanus documentation👋! We're so excited that you're interested in contributing.

## What you can contribute

You can improve Vanus documentation from multiple aspects:

- Fix typos or format (punctuation, space, indentation, code block, etc.)
- Update inappropriate or misunderstanding content
- Add missing content or new documents
- Delete useless content or outdated documents
- Localize or translate documents

## Before you contribute

### Sign your work

Our project uses [Developer Certificate of Origin](https://developercertificate.org/) (DCO) to ensure that contributors are allowed to make the contribution and the project has the right to distribute it under its license.

1. Set your user.name and user.email git configs (the email address must match your primary GitHub email).
```bash
$ git config --global user.name "Joe Smith" 
$ git config --global user.email "joe.smith@email.com"
```
2. Sign your commit with `git commit -s`
```bash
$ git commit -sm "chore: this is my commit message"
```
3. If your git config information is set properly, then use `git log` to check your commit information, it will look something like this:
```
Author: Joe Smith <joe.smith@email.com>
Date:   Mon Oct 31 14:26:42 2022 +0800
    chore: this is my commit message
    
    Signed-off-by: Joe Smith <joe.smith@email.com>
```
Note: the Author and Signed-off-by lines should match. Otherwise, your PR will be rejected by the automated DCO check.

### Commit message style

We recommend using [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) to write a good commit message.

Please use following commit types to write a commit message:

```shell
style: fix typos or format which does not change the meaning of original content
docs: changes to documentation content. Changes can be adding missing content or new documents, deleting useless content or outdated documents or updating inappropriate or misunderstanding descriptions
ci: changes to action files and scripts
chore: changes to other chore files
```

Examples:
```
style: fix vanus-introduction typos
docs[website]: add new document how-to-contribute.md
docs: delete outdated overview section
docs[README]: update broken links
docs: add Chinese translation of how-to-contribute.md
ci: add pull_request template
chore[website]: add sidebars.js to build website
```

### Pull Request title style

The style of a PR title follows the structure of the `Commit message style`:

```
<type>[optional scope]: <description>
```

## How to contribute

### Open an issue

When you find something inappropriate and want to make it better, or find something in our documentation confuses you, you 
can open an issue to tell us.

### Find an existing issue

When you find an issue you want to address, leave a comment to tell that you want to work on this. Docs-team will assign 
the issue to you.

### React to an issue

Feel free to add your reactions to the existing issues. We will take them in consideration in our prioritization plan.

### Open a Pull Request

Open a Pull Request to solve an existing issue or suggest any changes.

### Edit this page

Click the `Edit this page` pencil icon on the bottom of each page of the website to suggest any changes.
# Introduction

We would like to keep the Git history short and concise with every Pull Request that is merged. With this said, please follow this guide.

## Folder name and structure

All component folders *must* have the same name as the files inside.

```
+ ExampleComponent
  - ExampleComponent.scss
  - ExampleComponent.js
  - ExampleComponent.spec.js
```

## Commit messages

We forsee there being 3-4 different types of changes: chore, fix, feature, enhancement. These types allow us to better understand the purpose of the commit without having to dive into the code.
With this in mind, please write commit messages as follow: `type(module): message`. Example:

```
feat(button): introduce new button feature
```

## Pull Requests

You can open a pull request for any changes you want to add to the code, if the PR requires multiple steps then add a list to it and we'll keep track of changes and reviews. *Follow the commit message style*

### PR Reviews

Code reviews will be done by either [Baruch Velez](https://github.com/baruchvlz) or [Sai Satchitanand](https://github.com/saibs)

<div align="center">
  <img src="./public/logo.svg" width="100px" height="100px"/>
</div>

<h1 align="center">@elonehoo/eslint-config</h1>

<div align="center">
  <a href="https://www.npmjs.com/package/@elonehoo/eslint-config">
    <img src="https://img.shields.io/npm/v/@elonehoo/eslint-config?color=81A2BE&label=" />
  </a>
</div>

## Features

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```bash
pnpm add -D eslint @elonehoo/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@elonehoo"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

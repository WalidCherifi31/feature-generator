# Flutter Feature Generator

A VS Code extension that generates a feature folder structure following clean architecture principles for Flutter projects.

## Features

- Creates a complete feature structure following clean architecture
- Generates all necessary boilerplate code
- Follows Flutter best practices
- Supports BLoC pattern

## Usage

1. Open Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type "Create New Flutter Feature"
3. Enter your feature name
4. The extension will create the following structure:

```
lib/
└── feature-name/
    ├── data/
    │   ├── models/
    │   └── datasources/
    │   └── repositories/
    ├── domain/
    │   ├── entities/
    │   ├── repositories/
    │   └── usecases/
    └── presentation/
        ├── screens/
        ├── widgets/
        └── controllers/
```

## Requirements

- VS Code 1.80.0 or higher
- Flutter project

## Extension Settings

This extension contributes the following commands:

* `feature-generator.createFeature`: Create a new Flutter feature

## Known Issues

Report issues at [GitHub repository](https://github.com/WalidCherifi31/feature-generator/issues)

## Release Notes

### 1.0.0

Initial release of Flutter Feature Generator

---

## Working with the Extension

* Create a new feature with the command palette
* All necessary files and folders will be created automatically
* Each file contains basic boilerplate code following clean architecture principles

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
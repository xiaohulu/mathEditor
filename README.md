# MathEditor

[![Build Status](https://travis-ci.org/xiaohulu/mathEditor.svg?branch=master)](https://travis-ci.org/xiaohulu/mathEditor)

MathEditor is a WYSIWYG math editor.
If you can read, then you can write.

### Installation

To start working with this package, clone the repository and run `npm install`.

## Testing

Test cases MUST be written using [Intern](https://theintern.io/) using the Object test interface and Assert assertion interface.

### From a browser

```sh
npm start
```

* Navigate to `http://localhost:9000/__intern/` to run tests.
* Navigate to `http://localhost:9000` to view MathEditor demo page.

## Code style

This repository uses [`prettier`](https://prettier.io/) for code styling rules and formatting.
A pre-commit hook is installed automatically and configured to run `prettier` against all staged files as per the configuration in the projects `package.json`.

An additional npm script to run `prettier` (with write set to `true`) against all `src` and `test` project files is available by running:

```bash
npm run prettier
```
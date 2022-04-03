## Hexlet tests, CodeClimate check and linter status:
[![Actions Status](https://github.com/rafagabidulin/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/rafagabidulin/frontend-project-lvl2/actions)
[![nodejs](https://github.com/rafagabidulin/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)](https://github.com/rafagabidulin/frontend-project-lvl2/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/43b008f9380d53c5052d/maintainability)](https://codeclimate.com/github/rafagabidulin/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/43b008f9380d53c5052d/test_coverage)](https://codeclimate.com/github/rafagabidulin/frontend-project-lvl2/test_coverage)

## Description
This repository is utility? which shows thi difference between two files. It works with `.yml(.yaml)` or `.json` formats.

## Installation
Step 1 — clone this repository
```$ git clone https://github.com/rafagabidulin/frontend-project-lvl2.git```

Step 2 — install the dependencies
```
$ make install
```

Step 3 — install the packages
```
$ sudo npm link
```

## Commands in terminal
Help window:
```
gendiff -h
```

Show difference with between two files:
```
gendiff file1.json file2.json
```

Show difference with stylish format:
```
gendiff --format stylish file1.json file2.json
```


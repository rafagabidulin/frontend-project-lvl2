## Hexlet tests, CodeClimate check and linter status:
[![Actions Status](https://github.com/rafagabidulin/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/rafagabidulin/frontend-project-lvl2/actions)
[![nodejs](https://github.com/rafagabidulin/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)](https://github.com/rafagabidulin/frontend-project-lvl2/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/43b008f9380d53c5052d/maintainability)](https://codeclimate.com/github/rafagabidulin/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/43b008f9380d53c5052d/test_coverage)](https://codeclimate.com/github/rafagabidulin/frontend-project-lvl2/test_coverage)

## Description
This repository is a utility, which shows thi difference between two files. It works with `.yml(.yaml)` or `.json` formats.

## Installation
Step 1 — clone this repository
```
$ git clone https://github.com/rafagabidulin/frontend-project-lvl2.git
```

Step 2 — install the dependencies
```
$ make install
```

Step 3 — install the packages
```
$ make link
```

## Commands in terminal
Help window:
```
$ gendiff -h
```

Show difference between two files:
```
$ gendiff file1.json file2.json
```

Show difference with stylish format:
```
$ gendiff --format stylish file1.json file2.json
```

## Run tests
Run linter
```
$ make lint
```

Run test
```
$ make test
```

Run test coverage
```
$ make test-coverage
```

## Ascinema records
### Difference between two flat JSON and YAML files:
[![asciicast](https://asciinema.org/a/q71g5Cl8HCJvYKBEjSjakydta.svg)](https://asciinema.org/a/q71g5Cl8HCJvYKBEjSjakydta)

### Difference between two nested JSON and YAML files (stylish format):
[![asciicast](https://asciinema.org/a/7dp80BGWEuHKBq4P7GWZEa7HT.svg)](https://asciinema.org/a/7dp80BGWEuHKBq4P7GWZEa7HT)

### Difference between two nested JSON and YAML files (plain format):
[![asciicast](https://asciinema.org/a/HTqdkJrbpAP7gGKV1PKIYJgTs.svg)](https://asciinema.org/a/HTqdkJrbpAP7gGKV1PKIYJgTs)

### Difference between two nested JSON and YAML files (json format):
[![asciicast](https://asciinema.org/a/tXEomv8Fqr2FozWwpAagX1vCX.svg)](https://asciinema.org/a/tXEomv8Fqr2FozWwpAagX1vCX)





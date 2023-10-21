# devsuE2E
E2E automation for Devsu using Cypress

## Introduction

Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

It is possible to run the tests on different devices using viewport.

## Table of contents

* [Getting started](#getting-started)
* [Running tests](#running-tests)
* [Reports](#reports)

## Getting Started

To get started, you need to install the local dependencies using yarn:

``` bash
# install and link project dependencies
yarn install
```
## Running tests

run the entire test suite of a project, using the commands follow:

For Chrome

```bash
yarn cy:run:chrome
```
For Firefox

```bash
yarn cy:run:firefox
```
## Reports

The reports will be generated automatically and stored in:

cypress\results
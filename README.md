# CARDS MANAGEMENT MONOREPO

## 1. Development Configurations

### - Husky + Lint-staged + commit-msg-linter

**COMAND TO FIX PRE-PUSH HOOKS**(In case it do not works on your local enviroment)
```bash
chmod ug+x .husky/*
```

We have husky installed running these commands:

#### Pre-commit

- lint-staged (with prettier + eslint + tests)
This step format our code, ensures that everything is following our lint pattern and check if all tests are passing

- chmod 755 ./.husky/hooks/check_branch_naming.sh && bash ./.husky/hooks/check_branch_naming.sh
This step ensures that we are following a branch name pattern according to the following regex

```
'^(develop|homolog|main|((hotfix|bugfix|fix|feature|feat|improvement|chore|style|refactor)\/[a-zA-Z0-9_\-]+))$'
```
-- Valid branch name example: "feature/custom-logger"

-- Valid branch name example: "fix/dropdown-menu"

- git-commit-msg-linter
This step ensures our commit is following conventional commits pattern and some additional rules

```
  max-length: 100 characters
  correct format: <type>[scope]: <subject>
  example: docs: update README to add developer tips

  type:
    feat     A new feature.
    fix      A bug fix.
    docs     Documentation only changes.
    style    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
    refactor A code change that neither fixes a bug nor adds a feature.
    test     Adding missing tests or correcting existing ones.
    chore    Changes to the build process or auxiliary tools and libraries such as documentation generation.
    perf     A code change that improves performance.
    ci       Changes to your CI configuration files and scripts.
    build    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
    temp     Temporary commit that won't be included in your CHANGELOG.

  scope:
    Optional, can be anything specifying the scope of the commit change.
    For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc.
    In App Development, scope can be a page, a module or a component.

  subject:
    Brief summary of the change in present tense. Not capitalized. No period at the end.
```
-- Valid commit msg example: "feat: add specific colors to each log level"

-- Valid commit msg example: "fix: align icons"

#### Pre-push

```bash
nx run-many -t build
```
This step ensures that everything is build correctly. 

### - ENVs

- If you have an account on https://www.dotenv.org/ within our organization (vinibozko@gmail.com, gabrielcolle3@hotmail.com,herlon36@gmail.com) use the following instructions to manage envs. 
- [Docs](https://www.dotenv.org/docs/)

<!-- Command to connect project to dotenv and create env.vault 
```bash
npx dotenv-vault@latest new vlt_f2ab52b776fb773b880be523efc57531b931a4a3e1af9c03b2d95986a6bb2a
``` -->
<!-- **Do not run this command it's only to connect the project and it is already done**  -->

Command to pull latest env version 
```bash
npx dotenv-vault@latest pull <enviroment-optional>
```

Command to push env changes 
```bash
npx dotenv-vault@latest push <enviroment-optional>
```
Available environments : development,ci, staging, production

- If you do not have an account on dotenv, ask the env files for one of the maintainers (vinibozko@gmail.com, gabrielcolle3@hotmail.com,herlon36@gmail.com)


## 2. Project Commands

Availables apps/projects at this moment:
- client
- api

To run an app. 
```
nx serve <app>  
```

To build a project 
```
nx build <project>  
```

To run the tests of a project 
```
nx test <project>  
```

To run multiple projects command
(-t=task, -p=project -- Both accept multiple inputs like "-t build test" "-p project1 project2")
```
nx run-many -t <task name(build, serve, test)> [-p <projects you want to run the coomand>]
```

## Would be useful to install NX vscode extension, then you have a complete overview of the monorepo and have access to all commands.

# Contributing to generator-ngx-rocket :rocket:

Thank you for contributing to the ngX-Rocket generator! :heart:

## Report a bug

Before creating an issue please make sure you have checked out the docs. You might want to also try searching Github.
It's pretty likely someone has already asked a similar question.

If you haven't found your answer please feel free to create an issue on Github.

Issues can be reported in the [issue tracker](https://github.com/ngx-rocket/generator-ngx-rocket/issues).
Since the generator have various combinations and is updated frequently, it can be hard for us to assess the root cause
without knowing which modules and versions are being used and what your configuration looks like, so **it helps us
immensely if you can link to a simple example that reproduces your issue**.

## Pull Requests

We :heart: pull requests and we're continually working to make it as easy as possible for people to contribute.

If you want to contribute but don't know on where you can help, check the
[issues](https://github.com/ngx-rocket/generator-ngx-rocket/issues) and look for ones with the `PR-welcome` label.

We prefer small pull requests with minimal code changes. The smaller they are the easier they are to review and merge.
A team member will pick up your PR and review it as soon as they can. They may ask for changes or reject your pull
request. This is not a reflection of you as an engineer or a person. Please accept feedback graciously as we will also
try to be sensitive when providing it.

Although we generally accept many PRs they can be rejected for many reasons. We will be as transparent as possible but
it may simply be that you do not have the same context or information regarding the roadmap that the core team members
have. We value the time you take to put together any contributions so we pledge to always be respectful of that time
and will try to be as open as possible so that you don't waste it. :smile:

**All PRs should be accompanied with tests and pass the linting rules.**

### Code style

We use [XO](https://github.com/sindresorhus/eslint-config-xo-space) code style, which is enforced by
[ESLint](https://github.com/eslint/eslint). You should configure your IDE/code editor to report issue directly, as
ESLint is supported by most IDE/code editors natively or via plugins.

When using `npm test` to run tests it will also run ESLint. You can also lint your code changes separately by using
`npm run lint`.

### Generator contribution mini-guide

1. Clone this repo.

2. Install dependencies: `npm install -g yeoman && npm install`

3. Make the generator available globally, so that `yo ngx-rocket` uses your own version: `npm link .`

4. Create a `sample` folder (or use any other folder external to the project), go in there and generate a base to work
   from it: `yo ngx-rocket`

5. Init a new git repo and commit make the initial commit: `git init && git add . && git commit -m "Initial commit"`

6. Develop from there until you're happy, then report back your changes to the generator templates. Use the git diff to
   isolate your changes.
   
7. Add new [test cases](#testing), if needed.

8. Submit pull request against the `master` branch.

### Testing

To run generator tests you can use the `npm test` script.
It will run all test scenarios located under the `scripts/tests/` folder.

If your changes add new generator options or prompts, don't forget to create new test scenarios accordingly, see the
existing tests for example.

A test scenario consists in running the generator with predefined options, then run the `test:ci`, `e2e` and `build`
NPM tasks. See `scripts/test.sh` for details.

As a complement to this tests, you should also make sure the UI and behavior of the generator is also correct.

## Contributor Code of Conduct

As contributors and maintainers of this project, we pledge to respect all people who contribute through reporting
issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.

We are committed to making participation in this project a harassment-free experience for everyone, regardless of level
of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size,
race, ethnicity, age, or religion.

Examples of unacceptable behavior by participants include the use of sexual language or imagery, derogatory comments or
personal attacks, trolling, public or private harassment, insults, or other unprofessional conduct.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits,
issues, and other contributions that are not aligned to this Code of Conduct. Project maintainers who do not follow the
Code of Conduct may be removed from the project team.

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by opening an issue or contacting
one or more of the project maintainers.

This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), version 1.0.0,
available at [http://contributor-covenant.org/version/1/0/0/](http://contributor-covenant.org/version/1/0/0/).

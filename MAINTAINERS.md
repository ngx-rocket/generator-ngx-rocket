# Maintainer guide

This is a small guide dedicated to project maintainers.

## Prerequisites

To generate the project's changelog after a release, you need to install [Github changelog generator](https://github.com/skywinder/github-changelog-generator)
with `[sudo] gem install github_changelog_generator`.

You also need to generate a Github token following [this guide](https://github.com/skywinder/github-changelog-generator#github-token)
and add it to your shell profile: `export CHANGELOG_GITHUB_TOKEN="«your-40-digit-github-token»"`.

If you have errors like `API rate limit exceeded for github_username.` during changelog generation, you have an issue
with your token setup.

## Releasing a new version

Before releasing a new version, you should check for dependencies updates with `npm outdated`, and update them if
needed. Don't forget to run `npm run lint` after update in case `eslint` was updated.

Then follow these steps:

1. Update your local master branch

2. Make sure you have no pending changes

3. Generate projects on all 3 UI branches (Bootstrap, Ionic and Material) and perform a visual sanity check
   (would love to automate this!)

4. Bump the `package.json` version according to [semver](https://semver.org), and commit the changes using the new
   version as the commit message.

5. Run `npm publish`. The new version will be tagged and pushed automatically through the `postpublish` script.

6. Run `npm run deploy` to update the various branches of the [starter kit](https://github.com/ngx-rocket/starter-kit)
   repository.

7. Run `npm run changelog`. This will create a commit with the new updated `CHANGELOG.md`, but it will not be pushed so
   you can check it up before pushing.

8. Done! :tropical_drink:


## Website notes

### HTTPS setup

HTTPS for the website is enabled through [CloudFlare](https://gist.github.com/cvan/8630f847f579f90e0c014dc5199c337b).
Make sure that HTTPS redirection is enabled in the CloudFlare settings.

# Maintainer guide

This is a small guide dedicated to project maintainers.

## Prerequisites

You need to generate a Github token with the `repo` permissions, following [this guide](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).
Then add this line to your shell profile: `export GITHUB_TOKEN="«your-40-digit-github-token»"`.

## Releasing a new version

Before releasing a new version, you should check for dependencies updates with `npm outdated`, and update them if needed.
Don't forget to run `npm run lint` after update in case `xo` was updated.

Then follow these steps:

1. Update your local master branch

2. Make sure you have no pending changes

3. Generate projects on all 3 UI branches (Bootstrap, Ionic and Material) and perform a visual sanity check
   (would love to automate this!)

4. Run this command:
```
curl -H "Accept: application/vnd.github.everest-preview+json" \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -d '{ "event_type": "release" }' \
  https://api.github.com/repos/ngx-rocket/generator-ngx-rocket/dispatches
```

5. Check that the `release` workflow has succeeded on GitHub Actions pane.

6. Done! :tropical_drink: Now you can tell the world a new version is out! :speaker:

## Website notes

### HTTPS setup

HTTPS for the website is enabled through [CloudFlare](https://gist.github.com/cvan/8630f847f579f90e0c014dc5199c337b).
Make sure that HTTPS redirection is enabled in the CloudFlare settings.

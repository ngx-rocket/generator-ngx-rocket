#!/bin/bash

# Deploy generated projects to ngx-starter-kit repository

set -e

CWD=`pwd`
VERSION=`node -p -e "require('./package.json').version"`
SCRIPT_FOLDER=$CWD/`dirname "${BASH_SOURCE[0]}"`
DEPLOY_FOLDER=$CWD/deploy
DEPLOY_APP_NAME="ngX-Rocket"
REPOSITORY=https://$GITHUB_TOKEN@github.com/ngx-rocket/starter-kit.git

function cleanup() {
    cd $CWD
    rm -rf $DEPLOY_FOLDER
}

function prepare_repo() {
    mkdir -p $DEPLOY_FOLDER
    cd $DEPLOY_FOLDER

    git init
    git pull $REPOSITORY $BRANCH
    git rm -rf .
    git clean -fxd
}

function update_repo() {
    rm .yo-rc.json
    git reset HEAD README.md
    git checkout -- README.md
    git add -A
    git commit -m "Updated from generator v$VERSION"

    if [ "$BRANCH" == "master" ]; then
        git tag -a v$VERSION -m "v$VERSION";
    else
        git tag -a v$VERSION+$BRANCH -m "v$VERSION+$BRANCH";
    fi

    git push $REPOSITORY HEAD:$BRANCH
    git push $REPOSITORY HEAD:$BRANCH --tags

    cleanup
}

# Cleanup deploy folder in case of error
trap cleanup ERR

# Use web/bootstrap for master branch
BRANCH=master
prepare_repo
ngx new --skip-install --automate "$SCRIPT_FOLDER/tests/app/web/bootstrap-authentication.json" "$DEPLOY_APP_NAME"
update_repo

# Add cordova/ionic as mobile example branch
BRANCH=cordova/ionic
prepare_repo
ngx new --skip-install --automate "$SCRIPT_FOLDER/tests/app/cordova/ionic-authentication.json" "$DEPLOY_APP_NAME"
update_repo

# Add pwa/material branch
BRANCH=pwa/material
prepare_repo
ngx new --skip-install --automate "$SCRIPT_FOLDER/tests/app/web/material-authentication.json" "$DEPLOY_APP_NAME"
update_repo

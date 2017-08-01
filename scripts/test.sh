#!/bin/bash

# Simple testing script, that generates all kinds of projects and checks that
# generated projects build and pass tests.

set -e

CWD=`pwd`
SCRIPT_FOLDER=`dirname "${BASH_SOURCE[0]}"`
TEST_FOLDER=$CWD/sample-app
CACHE_FOLDER=$CWD/cache
TEST_APP_NAME="Sample App"
TEST_CASES=$SCRIPT_FOLDER/tests/**/*.json

function cleanup() {
    cd $CWD
    rm -rf $TEST_FOLDER
    rm -rf $CACHE_FOLDER
}

# Cleanup test folder in case of error
trap cleanup ERR

mkdir -p $CACHE_FOLDER

for file in $TEST_CASES
do

    mkdir -p $TEST_FOLDER
    cd $TEST_FOLDER

    if [ -d $CACHE_FOLDER/node_modules ]; then
        mv $CACHE_FOLDER/node_modules .
    fi

    echo
    echo -------------------------------------------------------------
    echo Testing generator with $file
    echo -------------------------------------------------------------
    echo

    echo Generating project...
    yo ngx-rocket --no-analytics --automate "$CWD/$file" "$TEST_APP_NAME" > /dev/null

    echo Running unit tests...
    npm run test:ci > /dev/null
    echo Running e2e tests...
    npm run e2e > /dev/null
    echo Building app...
    npm run build > /dev/null

    mv node_modules $CACHE_FOLDER

    cd $CWD
    rm -rf $TEST_FOLDER

done

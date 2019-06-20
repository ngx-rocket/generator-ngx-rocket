#!/bin/bash

# Simple testing script, that generates all kinds of projects and checks that
# generated projects build and pass tests.

set -e

CWD=`pwd`
SCRIPT_FOLDER=`dirname "${BASH_SOURCE[0]}"`
TEST_FOLDER=$CWD/sample-app
CACHE_FOLDER=$CWD/cache
TEST_APP_NAME="Sample App"

if [ -n "$1" ]; then
    TEST_CASES=$SCRIPT_FOLDER/tests/$1.json
elif [ -n "$TEST_ADDON" ]; then
    TEST_CASES=$SCRIPT_FOLDER/tests/addon/*.json
else
    TEST_CASES=$SCRIPT_FOLDER/tests/app/**/*.json
fi

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
    echo -------------------------------------------------------------------------------
    echo Testing generator with $file
    echo -------------------------------------------------------------------------------
    echo

    if [ -n "$TEST_ADDON" ]; then

        # generators/addon test
        ngx new --addon --no-analytics --automate "$CWD/$file" "$TEST_APP_NAME" --no-insights

        npm run test

    elif [ -n "$TEST_ANDROID" ]; then

        ngx new --no-analytics --automate "$CWD/$file" "$TEST_APP_NAME" --no-insights

        # cordova android
        npm run cordova:prepare --no-progress
        npm run cordova:build android --no-progress

    elif [ -n "$TEST_IOS" ]; then

        ngx new --no-analytics --automate "$CWD/$file" "$TEST_APP_NAME" --no-insights

        # cordova
        npm run cordova:prepare --no-progress
        npm run cordova:build ios --debug --no-progress

    else

        # generators/app test
        ngx new --no-analytics --automate "$CWD/$file" "$TEST_APP_NAME" --no-insights

        npm run test:ci -- --no-progress
        npm run e2e
        npm run build -- --no-progress

    fi

    if [ -z "$1" ]; then
        mv node_modules $CACHE_FOLDER
    fi

    cd $CWD
    rm -rf $TEST_FOLDER

done

FROM circleci/android:api-28-node8-alpha

MAINTAINER https://ngx-rocket.com/home

# Install Cordova and Ionic
RUN sudo npm install -g ionic cordova
RUN cordova telemetry off
RUN CI=true ionic config set -g daemon.update

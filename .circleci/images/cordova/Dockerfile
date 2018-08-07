FROM circleci/android:api-28-node8-alpha

# install cordova and ionic
RUN sudo npm install -g ionic cordova
RUN cordova telemetry off
RUN CI=true ionic config set -g daemon.updates false
RUN ionic config set -g telemetry false

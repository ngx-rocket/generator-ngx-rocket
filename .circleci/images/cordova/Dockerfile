FROM circleci/android:api-28-node8

USER root

# Install Gradle Version: 4.9
RUN curl --silent --show-error --location --fail --retry 3 --output /tmp/gradle.zip https://services.gradle.org/distributions/gradle-4.9-bin.zip && unzip -d /opt /tmp/gradle.zip && rm /tmp/gradle.zip && ln -s /opt/gradle-* /opt/gradle && /opt/gradle/bin/gradle -version

# Update PATH for Java tools
ENV PATH="/opt/gradle/bin:$PATH"

USER circleci

# Install cordova and ionic
RUN sudo npm install -g ionic cordova
RUN cordova telemetry off
RUN CI=true ionic config set -g daemon.updates false
RUN ionic config set -g telemetry false

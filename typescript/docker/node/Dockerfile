FROM node:20.11.0-alpine
ARG UID
ARG GID

RUN apk --no-cache add shadow bash
RUN groupmod -g ${GID} node && usermod -u "$UID" -g "$GID" node


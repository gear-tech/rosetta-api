FROM node:18
MAINTAINER GEAR

WORKDIR /usr/src

COPY package.json    \
     yarn.lock       \
     .yarnrc.yml     \
     ./

COPY .yarn .yarn
COPY client client
COPY server server

RUN yarn install
RUN yarn build

EXPOSE 8080

CMD [ "yarn", "start" ]

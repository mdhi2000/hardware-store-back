FROM node:14-alpine as base

USER node
WORKDIR /home/node

COPY package*.json /home/node
COPY yarn.lock /home/node

RUN yarn

# ---

FROM base as production

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY . /home/node/

RUN yarn build && npm prune --production

CMD ["yarn", "start:prod"]
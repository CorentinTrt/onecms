FROM node:20.13-alpine3.19 as builder
LABEL authors="Corentin"

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

ENV NODE_ENV=${NODE_ENV}

WORKDIR /srv/onecms

COPY . ./

RUN yarn global add node-gyp
RUN yarn install

RUN chown -R node:node /srv/onecms
ENV PATH /srv/onecms/node_modules/.bin:$PATH

USER node

RUN yarn build

CMD ["yarn", "develop"]


#FROM node:20.13-alpine3.19 as builder
#LABEL authors="Corentin"
#
#RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
#
#ENV NODE_ENV=${NODE_ENV}
#
#WORKDIR /srv/onecms
#
#COPY package.json ./
#
#RUN yarn global add node-gyp
#RUN yarn install
#
#RUN chown -R node:node /srv/onecms
#ENV PATH /srv/onecms/node_modules/.bin:$PATH
#
#USER node
#
#RUN yarn run build
#
#FROM node:20.13-alpine3.19 as runner
#LABEL authors="Corentin"
#
#WORKDIR /srv/onecms
#
#COPY . .
#COPY --from=builder /srv/onecms/node_modules ./
#
#RUN chown -R node:node /srv/onecms
#ENV PATH /srv/onecms/node_modules/.bin:$PATH
#
#USER node
#
#CMD ["yarn", "run", "develop"]

FROM node:14-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY . ./

EXPOSE 80

CMD ["yarn", "start"]
FROM node:16-alpine AS deps
WORKDIR /app
COPY package.json ./
COPY . .
RUN yarn install --network-timeout 60000
RUN yarn build
EXPOSE 3000
ENV PORT 3000
CMD ["yarn", "start"]

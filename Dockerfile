FROM node:16-alpine

WORKDIR '/factorial'

COPY package.json .
RUN npm install

COPY . .

CMD ["npm", "run", "start"]
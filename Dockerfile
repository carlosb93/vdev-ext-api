FROM node:14-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

WORKDIR /opt
COPY package*.json ./
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app

EXPOSE 3000

CMD ["npm","run", "start"]



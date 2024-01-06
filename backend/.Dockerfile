FROM node:18.18.2   

WORKDIR /backend
COPY package*.json /backend/
RUN npm install
COPY . /backend
EXPOSE 8080
FROM node:18.18.2   

WORKDIR /frontend
COPY package*.json /frontend/
RUN npm install
COPY . /frontend
EXPOSE 4200
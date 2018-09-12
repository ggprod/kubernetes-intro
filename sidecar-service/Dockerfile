FROM node:8.10

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY index.js .

# defined in package.json
CMD [ "npm", "start" ]
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Bundle app source
COPY . .

ENV PORT=3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

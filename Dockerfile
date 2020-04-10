# Include node image
FROM node:13

# Where app will run
RUN mkdir -p /app

#Changes where commands will be run
WORKDIR /app

#copies our app locally into build location + dependecy definitions
COPY package*.json /app/

#installs dependencies
RUN npm install
RUN npm install -g @angular/cli

#gets all code for app
COPY . /app/

#exposes port for access 
EXPOSE 4200 49153

# starts app - edit to package.json ensures start means host 0.0.0.0
CMD ["npm", "start"]
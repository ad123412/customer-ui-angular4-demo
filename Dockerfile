FROM node:8

ENV HOME=/usr/src/app
RUN mkdir -p $HOME
WORKDIR $HOME

USER root

##RUN npm install -g @angular/cli
##RUN npm install -g -f angular-cli

COPY . /usr/src/app

#delete node_modules ... we dont need this as we are using .dockerignore to ignore the folder node_modues
##RUN rm -rf node_modules

# Install dependecies
RUN npm install

EXPOSE 4200

# Serve the app
CMD ["npm", "start"]

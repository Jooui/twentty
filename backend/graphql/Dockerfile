FROM ubuntu:18.04
WORKDIR /home/server/graphql
COPY . .
RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm
RUN apt install -y mongodb
RUN npm install -g npm@6.14.8
RUN npm install
EXPOSE 3001
RUN chmod +x init.sh
CMD [ "./init.sh" ]
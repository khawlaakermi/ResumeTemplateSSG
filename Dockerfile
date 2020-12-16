FROM node:12.14.1-alpine
RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --update-cache \
  --repository http://dl-3.alpinelinux.org/alpine/edge/community \
  --repository http://dl-3.alpinelinux.org/alpine/edge/main \
  && rm -fR /var/cache/apk/*
RUN apk add git
RUN npm install -g gatsby-cli
WORKDIR /app
RUN gatsby new my-resume https://github.com/masoudkarimif/gatsby-starter-clean-resume
WORKDIR /app/my-resume
#RUN rm /app/my-resume/gatsby-config.js
RUN ls
RUN npm install 
EXPOSE 8000
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]
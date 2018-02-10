#!/bin/bash
PWD=$(pwd)
SCRIPT_WORKDIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
BASENAME_LOWER=$(basename $SCRIPT_WORKDIR | tr '[:upper:]' '[:lower:]')

APP_IMAGE_NAME=calctest
APP_CONTAINER_NAME=calctest


install(){
    
    build_image
    composer
    npminstall
    browserify
    web_up
}

build_image(){

    docker build -t $APP_IMAGE_NAME $SCRIPT_WORKDIR/docker/apache
}

npminstall(){
    
    docker run -it --rm -v $SCRIPT_WORKDIR:/usr/src -w /usr/src node:9.5 bash -c "npm install"
}

browserify(){
    
    docker run -it --rm -v $SCRIPT_WORKDIR:/usr/src -w /usr/src node:9.5 bash -c "npx browserify ./assets/js/index.js -o ./public/js/app.js"
}

composer(){
    
    docker run --rm -it -v $SCRIPT_WORKDIR:/app composer:1.5 install
}

web_up(){
    
    docker run -d --name $APP_CONTAINER_NAME -p 9999:80 -v $SCRIPT_WORKDIR:/var/www/html $APP_IMAGE_NAME
}

$1
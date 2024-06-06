#! /bin/bash

echo "Building docker image..."
docker build . --file Dockerfile --tag docker-frontend

echo "Running docker container..."
docker-compose up -d

sleep 3
echo "...🚀 Application running on: http://localhost:4200"

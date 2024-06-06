#! /bin/bash

echo "Building docker image..."
docker build . --file Dockerfile --tag loic-random-user-cards

echo "Running docker container..."
docker-compose up -d

sleep 3
echo "...🚀 Application running on: http://localhost:4200"

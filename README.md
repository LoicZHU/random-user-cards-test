# RandomUserCardsTest
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Requirements
- Among these [Node.js](https://nodejs.org/en/download/package-manager) versions:
  - `^14.20.0`
  - `^16.13.0`
  - `^18.10.0`
- If you want to use Docker:
  - [Docker](https://docs.docker.com/get-docker/)
  - [Docker Compose](https://docs.docker.com/compose/install/)

## Getting started
### Installation without Docker
- Clone the repository
- Run `npm install` to install the dependencies
- Run `npm start` to start the development server
- Navigate to http://localhost:4200/

### Installation with Docker
- Clone the repository
- Solution 1:
  - Give execute permission to the `docker-entrypoint.sh` file
  - Run `./docker-entrypoint.sh` to build the Docker image and start the container
  - Navigate to http://localhost:4200/
- Solution 2:
  - Run `docker build --file Dockerfile --tag loic-random-user-cards .` to build the Docker image
  - Run `docker-compose up -d` to start the container
  - Navigate to http://localhost:4200/

## Tasks
- Main task:
  - [x] Display multiple cards with random user data
- Bonuses:
  - [x] a button that adds 10 persons
  - [x] delete a specific user card
  - [x] a gender filter
  - [x] order by date of birth

## Tests
- Run `npm run test:coverage` to run the tests and generate the coverage report.

## Notes
### Improvements
- UI/UX
- code
- tests

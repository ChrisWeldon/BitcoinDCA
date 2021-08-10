## BitcoinDCA
% Author: Chris Evans

An open-source project to allow for non-custodial dollar-cost-averaging of Bitcoin using your Coinbase/Gemini Keys.

## Stack
 - Backend: Node-Express
 - Database: MySQL + Sequelize
 - Proxy-Server: NGINX
 - Frontend: React + Redux
 - Deployment: Docker

## Installation Instructions

1. Ensure Docker is installed on your machine:

Visit [https://www.docker.com/products/docker-desktop]

2. Clone repository to get the source code on your machine:

```$ sudo git clone https://github.com/ChrisWeldon/BitcoinDCA.git```

3. Build the docker images:

```$ sudo docker-compose -f docker-compose.dev.yml up --build```


*NOTE: If nodemon is not found or installed by the Dockerfile, install nodemon manually on your machines:*
```
$ cd bitcoindca
$ sudo npm install --save nodemon
```

## Development
To run development mode:

```$ sudo docker-compose -f docker-compose.dev.yml up -d```

`-d` tag runs in detached mode. Omit `-d` to watch the output logs realtime.

Software automatically reruns with nodemon.

Access to the backend at `localhost:5000`.
Access to the frontend at `localhost:3000`.
Access to mysql directly at `root p@ssw0rd1 @ localhost:3306`.

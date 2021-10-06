# Docker Jokes JS

Playing around with Docker following the book <a href="https://www.amazon.com/Learn-Docker-Month-Lunches-Stoneman/dp/1617297054">Learn Docker Month</a>

## Build image
docker image build -t docker-jokes-js .

## Build Container
docker container run --name docker-jokes-js -d -p 802:80 docker-jokes-js

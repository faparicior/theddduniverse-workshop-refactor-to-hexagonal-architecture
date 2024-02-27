
user:= $(shell id -u)
group:= $(shell id -g)
current_dir = $(shell pwd)

install:
	docker compose run --rm --interactive --tty --user $(user)\
	  node npm install
.PHONY: install

test:
	docker compose run --rm --interactive --tty --user $(user)\
	  node npm run test
.PHONY: test

console:
	docker compose run --rm --interactive --tty --user $(user)\
	  node /bin/bash
.PHONY: console

build-image:
	docker compose -f docker-compose.yml build node
.PHONY: build-image

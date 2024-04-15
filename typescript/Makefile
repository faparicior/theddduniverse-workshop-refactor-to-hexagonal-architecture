
user:= $(shell id -u)
group:= $(shell id -g)
current_dir = $(shell pwd)

install:
	docker compose run --rm --interactive --tty --user $(user)\
	  node-ddduniverse npm install
.PHONY: install

tests:
	docker compose run --rm --interactive --tty --user $(user)\
	  node-ddduniverse npm run test
.PHONY: test

console:
	docker compose run --rm --interactive --tty --user $(user)\
	  node-ddduniverse /bin/bash
.PHONY: console

build-image:
	docker compose -f docker-compose.yml build node-ddduniverse
.PHONY: build-image

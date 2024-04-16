
UID=$(shell id -u)
GID=$(shell id -g)
current_dir = $(shell pwd)

install:
	docker compose run --rm --interactive --tty --user $(UID)\
	  node-ddduniverse npm install
.PHONY: install

tests:
	docker compose run --rm --interactive --tty --user $(UID)\
	  node-ddduniverse npm run test
.PHONY: test

console:
	docker compose run --rm --interactive --tty --user $(UID)\
	  node-ddduniverse /bin/bash
.PHONY: console

build-image:
	docker compose -f docker-compose.yml build --build-arg GID=$(GID) --build-arg UID=$(UID) node-ddduniverse
.PHONY: build-image

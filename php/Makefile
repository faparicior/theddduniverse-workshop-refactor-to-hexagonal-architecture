
user:= $(shell id -u)
group:= $(shell id -g)
current_dir = $(shell pwd)

composer-install:
	docker run --rm --interactive --tty \
	  --volume $(current_dir):/app \
	  -u $(user):$(group) \
	  composer install
.PHONY: composer-install

composer:
	docker run --rm --interactive --tty \
	  --volume $(current_dir):/app \
	  -u $(user):$(group) \
	  composer $(param)
.PHONY: composer

composer-autoload:
	docker run --rm --interactive --tty \
	  --volume $(current_dir):/app \
	  -u $(user):$(group) \
	  composer dump-autoload
.PHONY: composer-autoload

tests:
	docker run -u $(user):$(group) -it --rm --name demo-app -v $(current_dir)/:/usr/src/app -w /usr/src/app php:8.3.2-cli-bullseye php /usr/src/app/vendor/phpunit/phpunit/phpunit /usr/src/app/tests/E2e
.PHONY: tests

console:
	docker compose run --rm php /bin/bash
.PHONY: console


build-image:
	docker compose -f docker-compose.yml build php
.PHONY: build-image

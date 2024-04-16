
UID=$(shell id -u)
GID=$(shell id -g)
current_dir = $(shell pwd)

composer-install:
	docker run --rm --interactive --tty \
	  --volume $(current_dir):/app \
	  -u $(UID):$(GID) \
	  composer install
.PHONY: composer-install

composer:
	docker run --rm --interactive --tty \
	  --volume $(current_dir):/app \
	  -u $(UID):$(GID) \
	  composer $(param)
.PHONY: composer

composer-autoload:
	docker run --rm --interactive --tty \
	  --volume $(current_dir):/app \
	  -u $(UID):$(GID) \
	  composer dump-autoload
.PHONY: composer-autoload

tests:
	docker compose run --rm --interactive --tty --user $(UID) -v $(current_dir)/:/usr/src/app -w /usr/src/app \
	  php-ddduniverse php /usr/src/app/vendor/phpunit/phpunit/phpunit /usr/src/app/tests/E2e
.PHONY: tests

console:
	docker compose run --rm php-ddduniverse /bin/bash
.PHONY: console

build-image:
	docker compose -f docker-compose.yml build --build-arg GID=$(GID) --build-arg UID=$(UID) php-ddduniverse
.PHONY: build-image

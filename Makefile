DEV_COMPOSE_FILE=DockerComposeDev.yml

### DOCKER COMPOSE COMMANDS

.PHONY: cb
cb:
	docker compose -f $(DEV_COMPOSE_FILE) build

.PHONY: cu
cu:
	docker compose -f $(DEV_COMPOSE_FILE) up

.PHONY: cub
cub:
	docker compose -f $(DEV_COMPOSE_FILE) up --build

.PHONY: cudb
cudb:
	docker compose -f $(DEV_COMPOSE_FILE) -f $(DEBUG_COMPOSE_FILE) up --build

.PHONY: cd
cd:
	docker compose -f $(DEV_COMPOSE_FILE) down

###

#TODO
DOCKERCONTEXT_DIR:=./
DOCKERFILE_DIR:=./

.PHONY: run-tests
run-tests:
	docker compose -f $(DEV_COMPOSE_FILE) -f $(TEST_COMPOSE_FILE) run --build api-node
PROJECT_PATH = $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
BE_PATH = $(PROJECT_PATH) / backend

keycloak:
	docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:21.1.1 start-dev
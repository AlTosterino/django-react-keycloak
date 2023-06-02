# Django + React + Keycloak Example

This repository shows bare minimum for integrating keycloak with Django and React

> Note that this is just an example, source code is not in the best shape

## Prerequisites
- Docker and docker-compose

## Running
- Run `docker-compose up`

## Configuring Keycloak

- Open `localhost:8080` 
- Open `Administration Console` and login with default admin credentials
  - Login: `admin` Password: `admin`
- Open `Realm settings` (found at bottom left)
- Set `Frontend URL` to `http://localhost:8080`
  - Save
- Open `Clients` (found at top left)
- Click on `Create client`
- Put `Client ID` as `react`
- Click `Next` until you see `Root URL` option
- Set `Root URL` to `http://localhost:5173/`
- Click `Save`
- Open `Clients` (found at top left)
- Click on `Create client`
- Put `Client ID` as `backend`
- Click `Next` until you see `Root URL` option
- Set `Root URL` to `http://localhost:8000/`
- Click `Save`

### Adding Registration
- Open `localhost:8080` 
- Open `Administration Console` and login with default admin credentials
- Open `Realm settings` (found at bottom left)
- Click on `Login` tab
- Turn on `User registration`

Now you are ready to open `http://localhost:5173` to play with React app
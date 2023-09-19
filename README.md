# Dockerium

## Instalation

```sh
# Install Docker if you haven't already
curl -fsSL https://get.docker.com | sh
# Create a network for Dockerium's use
docker network create dockerium
# Remove "-p 8080:8080" and "--api.insecure=true" when in production
docker run -d --name traefik --network dockerium -p 8080:8080 -p 80:80 -v /var/run/docker.sock:/var/run/docker.sock traefik:v2.10.4 --api.insecure=true --providers.docker
```

## Screenshots

- Login

  ![IMG](/docs/imgs/login.png)

- Dashboard

  ![IMG](/docs/imgs/dashboard.png)

- Docker

  ![IMG](/docs/imgs/docker.png)

- Users

  ![IMG](/docs/imgs/users.png)

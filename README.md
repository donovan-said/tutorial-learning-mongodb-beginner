# Tutorial Learning MongoDB Beginner

A repository to use as a base template for other repositories and templates.

## Run Docker MongoDB Container

```shell
docker-compose up -d
docker ps
docker volume ls
```

## Connect with Mongosh

```shell
mongosh admin -u root -p rootpassword
```

## Shutdown the Docker Container

```shell
# Shutdown without deleting all containers
docker-compose stop
# Shutdown with deleting all containers
docker-compose down
```

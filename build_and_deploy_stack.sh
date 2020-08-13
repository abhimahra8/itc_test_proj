#!/usr/bin/env bash
docker build -f ./Dockerfile -t itc_project:1.1 . && docker-compose pull && docker stack deploy -c docker-compose.yml itc_project

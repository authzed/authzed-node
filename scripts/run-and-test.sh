#! /bin/sh

docker compose up -d --wait
yarn only-run-tests
docker compose down
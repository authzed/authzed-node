#! /bin/sh

set -e

docker compose up -d --wait
yarn only-run-tests
docker compose down
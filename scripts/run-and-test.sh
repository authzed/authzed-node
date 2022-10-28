#! /bin/sh

set -e

exit_code=0
docker compose up -d --wait
yarn only-run-tests || exit_code=$?
docker compose down
exit $exit_code
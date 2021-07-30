docker stop zed-testserver && docker rm zed-testserver
docker run -d -p 50051:50051 --name=zed-testserver quay.io/authzed/zed-testserver:latest run
sleep 1
jasmine --config=jasmine.json
docker stop zed-testserver
docker rm zed-testserver

build:
	cd ./client; yarn run build
	which dep || go get -v -u github.com/golang/dep/cmd/dep
	cd ./server; dep ensure; go build -o bin/server
run:
	./server/bin/server
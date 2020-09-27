build:
	cd ./client; yarn run build
	which dep || go get -v -u github.com/golang/dep/cmd/dep
	cd ./server; dep ensure; GOOS=linux GOARCH=amd64 go build main.go -o bin/server
run:
	./server/bin/server

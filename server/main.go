package main

import (
	"fmt"
	"os"
	"path/filepath"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/ping", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		fmt.Fprintln(w, "pong")
	}).Methods("GET")
	router.PathPrefix("/").Handler(
		http.FileServer(http.Dir(getProjectRootDir() + "public")))
	fmt.Println("service start")
	http.ListenAndServe(":8080", router)
}

func getProjectRootDir() string {
	exe, _ := os.Executable()
	projectRootDir := filepath.Dir(exe) + "../../"
	return projectRootDir
}
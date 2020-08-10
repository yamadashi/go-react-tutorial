package main

import (
	"fmt"
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
		http.FileServer(http.Dir("public")))
	fmt.Println("service start")
	http.ListenAndServe(":8080", router)
}

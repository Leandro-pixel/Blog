import axios from "axios" //o axios da uma configurada de um objeto global, assim vamos aproveitar a URL base dos posts

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type" : "application/json",
    }
});

export default blogFetch;

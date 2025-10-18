axios.defaults.baseURL = "http://127.0.0.1:8000";

function login(email, password) {
    return axios.post("/login", { email, password });
}

function register(name, email, password, password_confirmation) {
    return axios.post("/register", {
        name,
        email,
        password,
        password_confirmation,
    });
}

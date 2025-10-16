axios.defaults.baseURL = 'http://127.0.0.1:8000';

function login(email, password) {
    return axios.post('/login', { email, password });
}

function register(nama, email, password) {
    return axios.post('/register', { nama, email, password });
}

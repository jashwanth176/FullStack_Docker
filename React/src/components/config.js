const config = {
    // Backend base url - uses environment variable or defaults to localhost
    // In Docker, VITE_API_URL should be set to the backend service URL
    url: import.meta.env.VITE_API_URL || "http://localhost:2030"
}

export default config;

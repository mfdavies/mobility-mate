const apiUrl = process.env.REACT_APP_FLASK_API_URL || 'http://localhost:8080';
console.log(process.env.REACT_APP_FLASK_API_URL);
export default apiUrl;
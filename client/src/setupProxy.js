const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',  // Replace '/api' with the appropriate API endpoint you want to proxy
        createProxyMiddleware({
            target: 'http://localhost:8800',  // Replace 'http://localhost:8800' with your backend server URL
            changeOrigin: true,
            secure:false
        })
    );
};

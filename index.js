const http = require('http');

const ENV_VARS = ['LOG_LEVEL', 'API_URL', 'FEATURE_FLAG', 'DB_PASSWORD', 'STRIPE_KEY'];

const server = http.createServer((req, res) => {
  const results = {};
  ENV_VARS.forEach(key => {
    const val = process.env[key];
    results[key] = val ? 'SET (' + val.slice(0, 4) + '****)' : 'NOT SET';
  });
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(JSON.stringify(results, null, 2));
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Listening on port ' + port);
});// pe trigger
// vercel pe trigger

// Packages
const readline = require('readline-sync');
const ping = require('ping');

// Ping function
function ping_run(host_array) {
  return Promise.all(host_array.map(host => ping.promise.probe(host)));
}

// Start script
async function start() {
  while (true) {
    try {
      const host = readline.question('(IP or Address) Host name: ');
      // Split using , and change to array
      const host_array = host.split(',');
      const results = await ping_run(host_array);
      results.forEach(result => console.log(result));
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  }
}

start();

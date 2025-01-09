// Prosta aplikacja odbierająca żądania i generująca odpowiedzi.

// Załaduj wszystkie niezbędne  biblioteki.
var http = require('http');
var url = require('url');
var redis = require('redis');

// Podłącz się do aktywnego serwera Redis.
// Interfejs API createClient jest wywoływany za pomocą:
//  -- 6379 (portu, który jest nasłuchiwany przez serwer Redis),
//  -- redis (nazwa usługi — kontenera, w którym uruchomiony jest serwer Redis.

var client = redis.createClient(6379, 'redis');

// Zdefiniuj pary klucz-wartość serwera Redis.

// Wszystkie zaprezentowane klucze zaczynają się od „/”, ponieważ
// parser URL zawsze przetwarza ten znak jako pierwszy.
client.set("/", "Witaj w pomocy Docker Compose. \n W celu uzyskania pomocy wpisz nazwę polecenia w adresie URL.\n", redis.print);
client.set("/build", "Buduje lub przebudowuje usługi.", redis.print);
client.set("/kill", "Wyłącza kontenery.", redis.print);

var server = http.createServer(function (request, response) {
  var href = url.parse(request.url, true).href;
  response.writeHead(200, {"Content-Type": "text/plain"});

  // Skorzystaj z adresu URL i odczytaj odpowiedź (wartość).
  client.get(href, function (err, reply) {
    if ( reply == null ) response.write("Polecenie: " + href.slice(1) + " jest nieobsługiwane.\n");
    else response.write(reply + "\n");
    response.end();
  });
});

console.log("Nasłuch portu nr 80");
server.listen(80);

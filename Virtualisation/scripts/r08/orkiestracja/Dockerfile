###############################################
# Plik Dockerfile budujący prostą aplikację sieciową.
###############################################

# Obraz bazowy: node.js.
FROM node:latest

# Autor: dr Peter.
MAINTAINER Dr. Peter <peterindia@gmail.com>

# Zainstaluj sterownik redis dla modułu node.js.
RUN npm install redis

# Skopiuj plik z kodem do obrazu.
ADD example.js /myapp/example.js

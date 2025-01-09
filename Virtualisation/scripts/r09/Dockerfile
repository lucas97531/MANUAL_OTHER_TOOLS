
##################################################################
# Plik Dockerfile budujący kontener unittest funkcji hit i getHit.
##################################################################

# Obraz bazowy: python.
FROM python:latest

# Autor: dr Peter.
MAINTAINER Dr. Peter <peterindia@gmail.com>

# Zainstaluj sterownik Redis dla pythona i imitacji bazy danych.
RUN pip install redis && pip install mockredispy

# Skopiuj kod źródłowy i testujący do obrazu Dockera.
ADD src/ /src/

# Zmień katalog roboczy na /src/.
WORKDIR /src/

# Domyślnie wykonywanym programem ma być procedura testowa...
ENTRYPOINT python3 -m unittest

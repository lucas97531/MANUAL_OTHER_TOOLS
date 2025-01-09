# -*- coding: utf-8 -*-

import redis 
# Połącz się z serwerem Redis.
r = redis.StrictRedis(host='0.0.0.0', port=6379, db=0) 

# Zwiększ liczbę zapytań.
def hit(usr): 
    r.incr(usr) 

# Zwróć liczbę zapytań.
def getHit(usr): 
    return (r.get(usr)) 
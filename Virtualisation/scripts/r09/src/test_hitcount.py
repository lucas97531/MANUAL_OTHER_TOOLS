# -*- coding: utf-8 -*-

import unittest 
from unittest.mock import patch 

# Imitacja bazy danych Redis. 
import mockredis 
import hitcount 

class HitCountTest(unittest.TestCase): 


    @patch('hitcount.r',
        mockredis.mock_strict_redis_client(host='0.0.0.0', 
        port=6379,  db=0)) 
    def testOneHit(self): 
        # Zwiększ liczbę interakcji z użytkownikiem user1. 
        hitcount.hit("user1") 
        # Upewnij się, że liczba interakcji z użytkownikiem user1 wynosi 1.
        self.assertEqual(b'1', hitcount.getHit("user1")) 

if __name__ == '__main__': 
    unittest.main() 
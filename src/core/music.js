//bytebeat
t = t * 8000 / 44100,
xa = (~t >> 11 & 1), // on/off beat; &1 gets last bit
xb = (~t >> 14 & 1), // on/off beat; &1 gets last bit
a = (t / 4 * (4 | t >> 13 & 3) >> xa) & 32,
b = 1/t*sin(t) & 32,

d = cos(12 * cbrt(t % 4096)) * 28 + 32, 		// drumb
n = (t * random() | t / 16 >> 2) & 16,  		// noise
[a+d+n+b, a+d+n+b];


// another song
maintrack=[1, 0, 2, 4, 0, 2, 3, 2, 1.5, 2, 1, 0, 2, 3, 2, 1.5],
(
sin(pow(2, (-t / 2048) % 8) * 100) // drums
/
2 
+ tan(cbrt(sin(t * maintrack[t >> 13 & 15] / 41)))
/
[2, 3, 4, 6, 8, 12, 16, 24]
[t / [1, 1.5][t >> 12 & 1] >> 10 & 7]
/
4

+ cbrt(asin(sin(t / [2, 3, 2.5, 4][t >> 16 & 3] / 41))) // base
/ 6 // loudness of base
)*127+127;

//v2
maintrack=[1, 0, 2, 4, 0, 2, 3, 2, 1.5, 2, 1, 0, 2, 3, 2, 1.5],
n = (t * random() | t / 2048 >> 2) & 16,  		// noise
(
sin(pow(2, (-t / 2048) % 8) * 60) // drums
/
n
/
2 + tan(cbrt(sin(t * maintrack[t >> 13 & 15] / 30)))
/
[2, 3, 4, 6, 8, 12, 16, 24]
[t / [1, 1.5][t >> 12 & 1] >> 10 & 7]
/
4 + cbrt(asin(sin(t / [2, 3, 2.5, 4][t >> 16 & 3] / 10))) // base
/ 20 // loudness of base
)*127+127
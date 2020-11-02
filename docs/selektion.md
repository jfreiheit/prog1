# Selektion

In [**Programmablaufstrukturen**](./start/#programmablaufstrukturen) haben wir uns die drei Kontrollstrukturen angeschaut, die in Programmen vorkommen können:

- die [**Sequenz**](./start/#die-sequenz),
- die [**Iteration**](./start/#die-iteration) und
- die [**Selektion**](./start/#die-selektion). 

Wir betrachten nun die Selektion genauer und schauen uns an, wie wir sie in Java umsetzen. 

## `if...else`

Bei der Selektion ist die Ausführung von Anweisungen von einer Bedingung abhängig. Angenommen, wir wollen erreichen, dass eine Zahl `number` halbiert wird, wenn sie gerade ist oder sie wird mit 3 multipliziert und 1 addiert, wenn sie ungerade ist. Es findet also eine Selektion der Anwesiungen statt, je nachdem ob `number` gerade ist oder nicht. Als "Pseudocode" sieht das so aus:

```bash
wenn (number ist gerade)
	dann teile number durch 2
sonst
	multipliziere number mit 3 und addiere 1
```

In Java gibt es dafür die `if ... else`-Anweisung:

```java
if(number%2 == 0)
{
	number = number / 2;
}
else
{
	number = 3 * number +1;
}
```

Das heißt, es wird zunächst eine Bedingung (ein Ausdruck vom Typ `boolean`) geprüft. Ist der Wert dieser Bedingung `true`, dann wird der erste Anweisungsblock ausgeführt. Ist der Wert der Bedingung jedoch `false`, dann wird der zweite Anweisungsblock (der nach dem `else`) ausgeführt. Es wird also genau einer der beiden Anweisungsblöcke ausgeführt - entweder der eine oder der andere (je nach Wert der Bedingung). 

Noch ein Beispiel aus dem [**euklidischen Algorithmus**](./start/#beispiel-euklidischer-algorithmus):

```java
if(a > b)
{
	a = a - b;
}
else
{
	b = b - a;
}
```
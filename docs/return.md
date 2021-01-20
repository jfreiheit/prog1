# `return`

Da wir das bis jetzt noch nicht ausführlich genug erläutert haben, beschäftigen wir uns hier nochmal mit `return`. Eine Methode, die einen Rückgabetyp hat (also nicht `void`), **muss** einen Wert von diesem Typ zurückgeben:

```java
public Type method()
{
	// Implementierung der Methode
	return valueOfType;
}
```

Dabei sind einige Sachen zu beachten:

1. Nach der `return`-Anweisung wird die Methode sofort verlassen.
2. Alle Pfade durch die Methode müssen mit einem `return` enden.

## Sofortiges Verlassen nach `return`

> Nach der `return`-Anweisung wird die Methode sofort verlassen!

Anweisungen, die nach der `return`-Anweisung kommen, sind nicht mehr erreichbar, sogenannter *dead code* (oder *unreachable code*). Beispiel:

```java linenums="1"
public int sum(int n)
{
	int sum = 0;
	for(int nr=1; nr <= n; nr++)
	{
		sum += nr;
	}
	return sum;
	System.out.println("Diese Ausgabe erfolgt nicht mehr! Es handelt sich hierbei um unerreichbaren Code");
}
```

Die Methode `sum(int n)` berechnet die Summe aller Zahlen von `1` bis `n`. Diese Summe wird zurückgegeben. In der Methodendeklaration (im Methodenkopf) wird vereinbart, dass die Methode einen Wert vom Typ `int` zurückgibt. Dies passiert auch (in Zeile `8`). `sum` ist vom Typ `int`. Nach Aufruf der `return`-Anweisung in Zeile `8` wird die Methode *sofort*  verlassen. Das führt dazu, dass die Anweisung in Zeile `9` nie ausgeführt werden kann. Es handelt sich dabei um *unreachable code*. Dies wird zum Glück vom Compiler erkannt - das Programm lässt sich gar nicht compilieren. 

In vielen Methoden wird der Fakt ausgenutzt, dass die Methode bei einem `return` sofort verlassen wird. Betrachten wir z.B. eine Methode `contains(int[] ia, int element)`, welche prüft, ob `element` im Array `ia` enthalten ist oder nicht:

```java
public boolean contains(int[] ia, int element)
{
	for (int index = 0; index < ia.length; index++)
	{
		if(ia[index] == element)
		{
			return true;
		}
	}
	return false;
}
```

Sobald das `element` im Array `ia` gefunden wird (Zeile `5`), wird `return true` aufgerufen und die Methode somit sofort verlassen. Es wird also auch die `for`-Schleife nicht weiter fortgesetzt und es werden keine weiteren Elemente aus dem Array betrachtet. Das führt auch dazu, dass in Zeile `10` klar ist, dass das `element` nicht im Array vorkommt, denn bis dahin wurden alle Elemente aus dem Array betrachtet und offensichtlich war die Bedingung `ia[index] == element` niemals `true`, denn ansonsten würden wir gar nicht bis Zeile `10` kommen. Wir wissen dort also, dass das `element` nicht im Array vorkommt und können somit ein `false` zurückgeben. 

Ähnliches nutzen wir in der `equals()`-Methode aus. Hier nochmal das [Beispiel](../object/#die-objektmethode-equals) aus Viereck:

```java linenums="1"
@Override
public boolean equals(Object other)
{
    if(other==null) return false;       // Null-Akzeptanz
    if(this==other) return true;        // Reflexivität
    if(this.getClass() != other.getClass()) return false;           // ungleiche Typen

    // wenn wir hier die Methode noch nicht verlassen haben, dann
    // wissen wir, dass other vom Typ Viereck ist und auf ein 
    // Viereck-Objekt zeigt

    // jetzt kommt der eigentliche Objektvergleich auf Gleichheit
    // damit wir ueberhaupt auf die Objektvariablen a, b, c, d von other
    // zugreifen können, muessen wir es nach Viereck konvertieren
    Viereck otherV = (Viereck)other;
    return this.a==otherV.a && this.b==otherV.b && this.c==otherV.c  && this.d==otherV.d;
}
```

- Wenn die Bedingung in Zeile `4` `true` ist, wird die Methode sofort mit einem `false` verlassen und die weiteren Zeilen werden gar nicht weiter ausgeführt.
- Wenn die Bedingung in Zeile `4` `false` ist, die Bedingung in Zeile `5` aber `true`, wird die Methode sofort mit einem `true` verlassen und die weiteren Zeilen werden gar nicht weiter ausgeführt.
- Wenn die Bedingung in den Zeilen `4` und `5` jeweils `false` sind, die Bedingung in Zeile `6` aber `true`, wird die Methode sofort mit einem `false` verlassen und die weiteren Zeilen werden gar nicht weiter ausgeführt.
- ab Zeile `7` wissen wir also, 

	- dass `other` nicht gleich `null` ist, 
	- dass `this` nicht gleich `other` ist und
	- dass `this` und `other` den gleichen Laufzeittyp haben (`this` ist vom Laufzeittyp `Viereck` und `other` dann auch --> andernfalls wäre die Methode in Zeile `6` verlassen worden).


## Alle Ablaufpfade der Methode müssen mit `return` enden

> Alle Pfade durch die Methode müssen mit einem `return` enden.

Angenommen, wir haben ein Array vom Typ `String[]` und wollen in einer Methode `getStringAtIndex(String[] arr, int index)` den `String` zurückgeben, der in dem Array beim Index `index` gespeichert ist. Eine mögliche Implementierung könnte so aussehen:

```java linenums="1"
public String getStringAtIndex(String[] arr, int index)
{
	return arr[index];
}
```

Diese Methode ist prinzipiell korrekt, hat aber eine große Schwäche. Wenn `index` gar kein korrekter Index für das `arr`-Array ist, dann wirft der Aufruf dieser Methode eine `ArraysIndexOutOfBounds`-Exception. Um dies zu verhindern, könnte man die Methode nun wie folgt erweitern:

```java linenums="1"
public String getStringAtIndex(String[] arr, int index)
{
	if(index>0 && index<arr.length)
	{
		return arr[index];
	}
}
```

Jetzt prüfen wir zunächst, ob der `index` auch tatsächlich korrekt ist und vermeiden so eine eventuelle `ArraysIndexOutOfBounds`-Exception. Aber die Methode lässt sich so **nicht compilieren!** Der Compiler gibt die Fehlermeldung 

```bash
This method must return a result of type String
``` 

an. Das Problem ist, dass die Methode keinen `String` zurückgibt, wenn die Bedingung in Zeile `3` `false` ist! Es muss also jeder mögliche Pfad durch die Methode bei einem `return` enden! Das führt dazu, dass in Methoden, die ein Objekt zurückgeben müssen (der Rückgabetyp der Methode also ein Referenztyp ist), häufig für Ausnahmefälle ein `null` zurückgegeben wird:

```java linenums="1"
public String getStringAtIndex(String[] arr, int index)
{
	if(index>0 && index<arr.length)
	{
		return arr[index];
	}
	else
	{
		return null;
	}
}
```

Die obige Methode ist nun korrekt und kann compiliert werden. Wir sollten uns aber merken, dass wir in Zukunft versuchen, die Rückgabe von `null` zu vermeiden. Derzeit haben wir aber keine andere Möglichkeit und können die Methode nur so formulieren. Später werfen wir stattdessen in der Methode eine eigene Exception für den Fall, dass der `index` nicht korrekt ist oder geben ein `Optional`-Objekt zurück (siehe z.B. [hier](https://www.codebyamir.com/blog/stop-returning-null-in-java) oder [hier](https://javabeginners.de/Grundlagen/Datentypen/Optionals.php)).



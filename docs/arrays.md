# Arrays

In einer Variable können wir genau einen Wert speichern. Wenn wir 5 Werte speichern wollen, benötigen wir 5 Variablen und wenn wir 1000 Werte speichern wollen, benötigen wir 1000 Variablen. Das ist natürlich unzweckmäßig. Wenn Sie mehrere Werte gleichen Typs speichern wollen, dann verwenden Sie dazu besser *Arrays* (*Felder*). Arrays sind Objekte.

Wir schauen uns mal ein einführendes Beispiel an. Angenommen, wir wollen 5 `int`-Werte `0`, `1`, `4`, `9` und `16` speichern. Bis jetzt benötigten wir dazu 5 Variablen:

```java
int number1 = 0;
int number2 = 1;
int number3 = 4;
int number4 = 9;
int number5 = 16;
```

Jetzt wollen wir dazu ein Array verwenden. Die Erzeugung und Initialisierung sieht so aus:

```java linenums="1"
int[] numbers = new int[5];		// Array der Laenge 5
numbers[0] = 0;					// erstes Element Wert 0
numbers[1] = 1;					// zweites Element Wert 1
numbers[2] = 4;					// drittes Element Wert 4
numbers[3] = 9;					// viertes Element Wert 9
numbers[4] = 16;				// fuenftes Element Wert 16
```

1. Ein Array erkennen wir an den eckigen Klammern `[]`. 
2. Unser Array im Beispiel ist vom Typ `int`, d.h. jedes *Element* in diesem Array ist vom Typ `int`. Arrays können von einem beliebigen Typ sein, sowohl Wertetypen als auch Referenztypen. Ein Array wird immer für genau einen Typ deklariert, bei uns `int` --> deshalb `int[]`. Bestünde das Array aus lauter Strings, dann wäre der Typ `String[]`.
3. In unserem Beispiel ist `numbers` die Referenzvariable, die auf unser Array-Objekt zeigt. 
4. Mithilfe des Schlüsselwortes `new` wird unser Array erzeugt. Nach `new` kommt nochmal das Array (`Typ[]`), aber in den eckigen Klammern steht die Länge des Arrays. In unserem Beispiel `5`. Bei der Erzeugung des Arrays muss immer die Länge angegeben werden. Die Länge eines Arrays kann sich **nicht** ändern.
5. Der Zugriff auf die einzelnen Elemente erfolgt über den *Index*. Jedes Array ist automatisch "nummeriert". Die "Nummerierung" (der Index) beginnt immer mit `0` und erhöht sich für jedes Element um `1`. Der Index eines Arrays ist immer vom Typ `int`.

Wir können uns unser Array `numbers` so vorstellen:

![arrays](./files/30_arrays.png)

Wir haben 5 Elemente (Länge `5`), die jeweils durch den Index nummeriert sind. Diese Elemente können nun Werte enthalten:

![arrays](./files/31_arrays.png)

Der Zugriff auf die Werte eines Arrays erfolgt dann immer unter Verwendung der Referenzvariable, dahinter eckige Klammern und in den Klammern der entsprechende Index:

> `Referenzvariable[Index]=Wert;`

Also in unserem Beispiel `numbers[0]`.

## Erzeugung und Initialisierung eines Arrays

Die Erzeugung und Initialisierung eines Arrays erfolgt in drei Schritten:

1. Schritt: Definition einer Referenzvariablen, die auf das Array-Objekt zeigt	(siehe oben in Zeile `1`: `int[] numbers`t)
2. Schritt: Erzeugen des Arrays, d. h. eines Array-Objektes, das aus Elementen eines bestimmten Datentyps besteht (und Zuweisung an die zuvor definiere Referenzvariable - siehe oben Zeile `1`: `new int[5]`)
3. Schritt: Belegen der Array-Elemente mit Werten, d. h. Initialisierung des Arrays (siehe oben Zeilen `2-6`). 

Beispiele verschiedene Arrays erzeugen:

```java
double[] noten = new double[10];		// Array aus double-Elemente Laenge 10
String[] satz = new String[30];			// Array aus Zeichenketten Laenge 30
boolean[] filled = new boolean[100]; 	// Array aus boolean-Elementen Laenge 100
int[] statistics = new int[10000];		// Array aus int-Elementen Laenge 10000
```

Die Initialisierung erfolgt elementweise über den Zugriff auf den Index, z.B. (siehe oben):

```java
numbers[0] = 0;					// erstes Element Wert 0
numbers[1] = 1;					// zweites Element Wert 1
numbers[2] = 4;					// drittes Element Wert 4
numbers[3] = 9;					// viertes Element Wert 9
numbers[4] = 16;				// fuenftes Element Wert 16
```

Da der Index stets vom Typ `int` ist, hätten wir unser Array auch wie folgt initialisieren können:

```java linenums="1"
for(int index=0; index<5; index++)
{
	numbers[index] = (index*index);
}
```

Beachten Sie:

1. Der größte Index ist immer um eins kleiner als die Länge des Arrays (Länge ist `5`, größter Index ist `4` --> deshalb `index < 5`)
2. Der Index ist immer `int`, egal von welchem Typ das Array ist
3. In unserem Beispiel entsprechen die Werte der einzelnen Elementen Quadratzahlen. Deshalb konnten wir als Wert `(index * index)` verwenden.

### Die Eigenschaft `length`

Jedes Array besitzt die Eigenschaft `length`. Darüber können wir die Länge des Arrays auslesen. Der Wert von `length` kann nicht neu gesetzt werden (ist konstant). Wir benutzen die Eigenschaft `length` insbesondere in den Schleifen, mit denen wir auf den Index zugreifen.

> `Referenzvariable.length`

Unser obiges Initialisierungsbeispiel hätte also besser so ausgesehen:

```java linenums="1"
for(int index=0; index<numbers.length; index++)
{
	numbers[index] = (index*index);
}
```

### Ausgabe der Werte

DEn jetzt bereits bekannten Zugriff auf die einzelnen Elemente können wir auch für das Auslesen der Werte eines Arrays verwenden:

```java linenums="1"
for(int index=0; index<numbers.length; index++)
{
	System.out.println(numbers[index]);
}
```


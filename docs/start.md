# Unser erstes Programm

Bevor wir uns mit der Funktionsweise von Java auseinandersetzen, schreiben wir einfach einmal unser erstes Programm. Wir öffnen dazu [*Eclipse*](./tools/#eclipse) und erstellen uns ein Klasse `HelloFIW`. Dazu 

1. erstellen wir uns ein Java-Projekt (falls noch nicht geschehen): Menüpunkt `File --> New --> Java Project`, geben dort z.B. `WiSe20` ein und wenn wir gefragt, werden, ob wir eine `module-info.java` erstellen wollen, wählen wir `Don't create`.
2. erstellen wir uns ein Paket: Menüpunkt `File --> New --> Package` und geben `themen.eins.start` ein.
3. erstellen wir uns eine Klasse: Wir wählen das Paket `themen.eins.start` aus und wählen den Menüpunkt `File --> New --> Class`, geben in dem Fenster den Klassennamen `HelloFIW` ein und setzen bei `public static void main(Strg[] args)` ein Häkchen:

![Klasse](./files/02_klasse.png)

Im Editor-Fenster von Eclipse erscheint:

![HelloFIW](./files/03_hellofiw.png)

Schauen wir uns diesen Code zunächst an:

- in Zeile `1 sehen wir, in welchem Paket sich unsere Klasse befindet. Die Anweisung `package themen.eins.start;`definiert, dass wir uns im Paket `themen.eins.start` befinden. Mit Paketen werden wir uns in Kürze ausführlich auseinandersetzen.
- in Zeile `3` steht unsere Klassendefinition. Diese erkennen wir am Schlüsselwort `class` gefolgt von dem Namen der Klasse `HelloFIW`. Das Schlüsselwort `public` beschreibt, dass es sich um eine *öffentliche* Klasse handelt, die von allen genutzt werden kann. Dieses Schlüsselwort ist ein sogenannter *Sichtbarkeitsmodifierer* (auch *Zugriffsmodifizierer*). Mit Sichtbarkeitsmodifizierern werden wir uns ebenfalls noch ausführlich auseinandersetzen. Wichtig ist, dass die Klasse nicht nur aus dem Klassenkopf (`public class HelloFIW`) besteht, sondern aus allem, was diese Klassen enthält (dem Klassenrumpf). Der Klassenrumpf beginnt mit einer öffnenden geschweiften Klammer `{` (Zeile `4`) und endet mit einer schließenden geschweiften Klammer `}` (Zeile `12`).
- eine Klasse kann beliebig viele *Methoden* enthalten. Unsere Klasse enthält bis jetzt eine Methode, die Methode namens `main()`. Methoden erkennen wir an den runden Klammern nach dem Methodennamen. Hier ist der Name `main` gefolgt von runden Klammern, in denen *Parameter* (auch *Argumente* genannt) definiert sein können (hier ein Parameter namens àrgs` vom Typ String-Array: `Strg[] args`). Wie bei den Klassen auch, bestehen Methoden aus einem Methodenkopf und einem Methodenrumpf. Wie bei den Klassen auch, beginnt der Methodenrumpf mit einer öffnenden geschweiften Klammer (Zeile `7`) und endet mit einer schließenden geschweiften Klammer (Zeile `10`). Der Methodenkopf 
	- beginnt erneut mit einem Sichtbarkeitsmodifizierer. Dieser ist hier wieder `public` und gibt an, dass diese Methode öffentlich ist und von allen ausgeführt werden kann. 
	- Danach kommt das Schlüsselwort `static`. Dieses Schlüsselwort besagt, dass es sich bei dieser Methode um eine *Klassenmethode* handelt. Das Gegenstück zu einer Klassenmethode ist die *Objektmethode*. Wir werden uns mit der Unterscheidung zwischen Klassen- und Objektmnethoden ausführlich auseinandersetzen. Wir können uns aber schon merken (wenn überhaupt), dass wir eine Klassenmethode aufrufen können ohne ein Objekt der Klasse erstellen zu müssen. 
	- Danach kommt das Schlüsselwort `void`. Dieses Schlüsslwort gibt an, dass die Methode nichts zurückgibt. An dieser Stelle steht der Rückgabetyp eine Methode - wenn die Methode etwas zurückgibt. Unsere Methode gibt nichts zurück, deshalb hier `void`. Wir werden uns mit Methodenrückgaben ausführlich beschäftigen.
	- Jetzt kommt der Name der Methode, hier `main`. Die `main()`-Methode ist eine ganz besondere Methode. Sie existiert in einem Programm genau einmal und wird aufgerufen, wenn das Programm aufgerufen wird - die sogenannte *Programmmethode*. Wenn wir ein Programm ausführen, wird alles das ausgeführt, was in dem Rumpf der `main()`-Methode definiert ist (derzeit noch nichts). 
	- In den runden Klammern stehen *Parameter* (auch *Argumente* genannt). In unserem Fall ist ein Parameter namens *args* definiert. Der *Datentyp* dieses Parameters ist `Strg[]`, d.h. dass der Parameter einem *Array* von Zeichenketten *Strings* entspricht. Wir kümmern uns um Parameter später ausführlich. 
- In unserer Methode gibt es derzeit nur einen einzigen Eintrag (Zeile `8`). Dabei handelt es sich um einen *Kommentar*, genauer hier um einen *Zeilenkommentar*. Zeilenkommentare beginnen mit einem Doppelslash `//`. Hinter diesen Doppelslash können Sie schreiben, was Sie möchten - bis an das Zeilenende. Kommentare dienen Ihnen dazu, den Code verständlicher zu gestalten oder Ihnen Hinweise zu geben. Hier steht der Hinweis, dass die Methode automatisch durch Eclipse erstellt wurde und Sie noch das ToDo haben, die Methode zu befüllen. Das machen wir jetzt auch!

Wir löschen den Kommentar und fügen nun die Anweisung `System.out.println("HelloFIW !");` in unseren Methodenrumpf ein. Unsere Klasse sieht nun so aus (die neuhinzugekommene Zeile ist markiert):

=== "HelloFIW.java"
	``` java linenums="1" hl_lines="8"
	package themen.eins.start;

	public class HelloFIW
	{

		public static void main(String[] args)
		{
			System.out.println("Hello FIW!");

		}

	}
	```

Jetzt wählen wir entweder im Menü `Run --> Run` oder klicken auf den kleinen grünen Kreis mit dem weißen Pfeil in der Mitte in der Werkzeugleiste. Sie werden gefragt, ob Sie Ihr Programm zunächst speichern wollen. Bevor Sie das bestätigen, sollten Sie ein Häkchen setzen, um zu sagen, dass Sie das gar nicht mehr gefragt werden wollen, sondern das Programm immer gespeichert werden soll, bevor Sie es ausführen. In der Konsole erscheint:

![Konsole](./files/04_konsole.png) 

!!! success
    Herzlichen Glückwunsch! Sie haben Ihr erstes Java-Programm geschrieben und ausgeführt!

### System.out.println("Hello FIW!");

Schauen wir uns `System.out.println("Hello FIW!");` zunächst etwas genauer an. Wir verwenden hier eine Klasse, nämlcih die Klasse `System`. Diese Klasse existiert bereits und wurde von den Java-Entwicklern für uns gesschrieben. Sie gehört zum Standardpaket von Java, existiert bereits seit der ersten Version von Java und befindet sich im Paket `java.lang`. Diese Klasse hat eine interssante Klassenvariable, die wir verwenden, nämlich `out`. Diese Variable stellt in unserem (Betriebs-)System die Verbindung zu unserem Standardausgabegerät bereit, in unserem Fall die Konsole. Um nun eine Ausgabe auf diese Konsole zu generieren verwenden wir die Methode `println()`. Wir sehen hier eine typische Notation in Java, die sogenannte *Punktnotation*. Mithilfe dieser Punktnotation greifen wir auf Eigenschaften von Klassen und Objekten zu. In unserem Beispiel greifen wir mit `System.out` auf das Standardausgabegerät zu und mit `System.out.println()` auf die `println()`-Methode des Ausgabegerätes[^1].

[^1]: Wenn wir ganz genau sein wollen, dann ist `out` vom Typ `PrintStream` und wir greifen auf die Objektmethode `println()` des `PrintStream`-Objektes `out` zu. 

Die Methode `println()` erzeugt also eine Ausgabe auf unsere Konsole. Jetzt müssen wir nur noch sagen, WAS ausgegeben werden sollen. Dazu übergeben wir dieser Methode eine *Zeichenkette* (einen *String*). Eine Zeichenkette erkennt man an den doppelten Anführungsstrichen `"das ist eine Zeichekette"`. Innerhalb dieser Anführungsstriche können Sie schreiben, was Sie möchten (außer `"`). Wir haben uns für `"Hello FIW!"`entschieden und genau diese Zeichenkette (ohne die Anführungsstriche) wird ausgegeben. Die Zeichnkette, die wir ausgeben möchten, schreiben wir in die runden Klammern der `println()`-Methode, also `println("Hello FIW!")`. 

Bei `System.out.println("Hello FIW!");` handelt es sich um eine *Anweisung*. Eine Anweisung endet in Java immer mit einem Semikolon `;`. Dieses dürfen wir nicht vergessen, ansonsten haben wir einen *Syntaxfehler* und unser Programm kann nicht compiliert und nicht ausgeführt werden. 

!!! hint "Tipp"
	Wir müssen `System.out.println()` von nun an recht häufig schreiben. Deshalb gibt es in Eclipse dafür einen Shortcut. Schreiben Sie einfach `syso` und klicken dann die `Control` (`Strg`)-Taste zusammen mit der Leertaste und dann `Enter`. Aus dem `syso` macht Eclipse dann automatisch `System.out.println()`.

### println() vs. print()

In unserem ersten Programm haben wir die Methode `println()` verwendet, um etwas auf der Konsole auszugeben. Es gibt noch eine andere Möglichkeit für die Ausgabe auf die Konsole, nämlich die Methode `print()`, also ohne `ln`. Das `ln` steht für *Line* und gibt an, dass nach der Ausgabe ein Zeilenumbruch erfolgt. Wir ändern zunächst unser Programm, indem wir die Anweisung `System.out.println("Hello FIW!");` kopieren und weitere 2x einfügen.

=== "main()-Methode mit println()"
	``` java linenums="1" hl_lines="9 10"
	package themen.eins.start;

	public class HelloFIW
	{

		public static void main(String[] args)
		{
			System.out.println("Hello FIW!");
			System.out.println("Hello FIW!");
			System.out.println("Hello FIW!");
		}

	}
	```

Wir führen das Programm erneut aus (grüner Pfeil) und erhalten auf der Konsole die Ausgabe:

``` bash
Hello FIW!
Hello FIW!
Hello FIW!
```

Das heißt, dass jede der Ausgaben mithilfe der `println()`-Methode in einer neuen Zeile erfolgt. Nach jeder Ausgabe erfolgt also ein Zeilenumbruch, der Ausgabecursor wird in die nächste Zeile gesetzt. Die nächste Ausgabe beginnt am Anfang der neuen Zeile. 

Wir wollen nun unser Programm ändern und verwenden nicht mehr die `println()`- Methode, sondern `print()`:

=== "main()-Methode mit print()"
	``` java linenums="1" hl_lines="8-10"
	package themen.eins.start;

	public class HelloFIW
	{

		public static void main(String[] args)
		{
			System.out.print("Hello FIW!");
			System.out.print("Hello FIW!");
			System.out.print("Hello FIW!");
		}

	}
	```

Wir führen das Programm erneut aus (grüner Pfeil) und erhalten auf der Konsole die Ausgabe:

``` bash
Hello FIW!Hello FIW!Hello FIW!
```

Die `print()`-Methode gibt also nur die Zeichenkette aus, führt aber danach keinen Zeilenumbruch durch. Der Ausgabecursor bleibt hinter dem lketztebn ausgegebenen Zeichen stehen. Unsere drei Zeichenketten werden in der Konsole deshalb hintereinander ausgegeben.

Wir ändern nun unser Programm erneut und fügen folgende Anweisungen hinzu: `System.out.println()`. Wir rufen also die `println()`-Methode auf, ohne eine Zeichenkette zu übergeben, die ausgegeben werden soll. Diese Anweisung sorgt einfach dafür, dass ein Zeilenumbruch erfolgt. Es wird also nichts ausgegeben, aber der Ausgabecursor an den Beginn der nächsten Zeile gesetzt.

=== "main()-Methode mit print() und println()"
	``` java linenums="1" hl_lines="9 11 13"
	package themen.eins.start;

	public class HelloFIW
	{

		public static void main(String[] args)
		{
			System.out.print("Hello FIW!");
			System.out.println();
			System.out.print("Hello FIW!");
			System.out.println();
			System.out.print("Hello FIW!");
			System.out.println();
		}

	}
	```

Wir führen das Programm erneut aus (grüner Pfeil) und erhalten auf der Konsole die Ausgabe:

``` bash
Hello FIW!
Hello FIW!
Hello FIW!
```

!!! question "Übung"
	Erzeugen Sie folgende Ausgabe auf der Konsole:
	``` bash
	Hello FIW!

	Hello FIW!

	Hello FIW!

	```

??? example "Eine mögliche Lösung"
	``` java linenums="1"
	package themen.eins.start;

	public class HelloFIW
	{

		public static void main(String[] args)
		{
			System.out.println("Hello FIW!");
			System.out.println();
			System.out.println("Hello FIW!");
			System.out.println();
			System.out.println("Hello FIW!");
			System.out.println();
		}

	}
	```

### Syntaxfehler

Programmieren bedeutet auch, Fehler zu machen. Wichtig ist, dass Sie die Fehlerausschriften lesen und die Fehler analysieren. Haben Sie einen Syntaxfehler, so ist ein Bereich Ihres Programmcodes rot unterstrichen und an der Seite erscheint ein rotes Kreuz. Fahren Sie mit der Maus über das rote Kreuz, um die Fehlerausschrift zu erhalten. Bei einem Syntaxfehler lässt sich das Programm nicht compilieren. Sie können es trotzdem versuchen und erhalten die Fehlerausschrift dann auf der Konsole. Das folgende Bild zeigt einen Fehler:

![Fehler](./files/05_fehler.png)

Es erscheint die Fehlermeldung `Syntax error, insert ";" to complete BlockStatements` - ein Hinweis darauf, dass ein Semikolon fehlt - nämlcih am Ende der Anweisung. 

In vielen Fällen bietet Eclipse einen sogenannten Quickfix an. Meistens können Sie diesen Vorschlag einfach annehmen (durch Mausclick auf den Vorschlag). Die folgende Abbildung zeigt einen solchen Quickfix für den Fehler, dass die Methode `prntln()` nicht existiert (es fehlt das `i`).

![Quickfix](./files/06_quickfix.png)

!!! success
    Wir haben unser erstes Java-Programm geschrieben und ausgeführt! Wir haben gelernt, wie wir mithilfe der Methoden `println()` und `print()` Zeichenketten auf die Konsole ausgeben können und wir haben uns angeschaut, wie wir Fehlerausschriften lesen. Nun schauen wir uns einmal an, was im Hintergrund passiert, wenn wir das Programm ausführen.

## Compilieren und Ausführen

Wir haben nun unser erstes einfaches Programm geschrieben - in der Programmiersprache *Java*. Wie wir in [**Werkzeuge -> Java**](./tools/#java) bereits bei der Installation von Java erläutert haben, ist Java nicht nur eine Programmiersprache, sondern auch ein Programm, in dem wir Java-Programme ausführen können - die *Laufzeitumgebung* von Java. Wir werden zunächst erläutern, was im Hintergrund passiert, wenn wir ein selbstgeschriebenes Java-Programm ausführen. 

Zum besseren Verständnis erzeugen wir uns zunächst ein Verzeichnis `test` irgendwo auf unserem Rechner:

``` bash
mkdir test
cd test
```

Dieses Verzeichnis werden wir später wieder löschen. Nun erzeugen wir uns mithilfe von `vi`oder `vim` eine Datei `Test.java`:

``` bash
vim Test.java
```

Die Datei öffnet sich zum Schreiben und nach Eingabe von `i` können wir in diese Datei Text einfügen. Wir fügen folgendes Programm ein (Kopieren Sie das Programm und fügen es mit `Strg+V` in die Datei `Test.java` ein:

=== "Test.java"
	``` java linenums="1"
		public class Test
		{

			public static void main(String[] args)
			{
				System.out.print("Hello ");
				for(String s : args)
				{
					System.out.print(s + " ");
				}
				System.out.println("!");

			}

		}
	```

Beenden Sie den Einfügemodus von `vim` durch Drücken der Taste `Esc` und speichern die Datei und beenden `vim` unter Eingabe von `ZZ`. In unserem Ordner `test` befindet sich nun die Datei `Test.java`:

``` bash
ls -la
```

zeigt den Inhalt unseres Verzeichnisses `test` an (z.B.):

``` bash
total 8
drwxr-xr-x@  3 jornfreiheit  staff    96  3 Aug 14:17 .
drwxr-xr-x@ 39 jornfreiheit  staff  1248  1 Nov  2018 ..
-rw-r--r--   1 jornfreiheit  staff   189  3 Aug 14:17 Test.java
```

Wir haben eine Klasse `Test` in der Datei erstellt, die genauso heißt, wie die Klasse, nämlich `Test.java`. Wir werden in Zukunft immer die Klasse in der gleichnamigen Datei speichern, die die Dateiendung `.java` hat - das macht Eclipse für uns automatisch. 

### Compilieren der Klasse

Ein Computer kann keine Datei ausführen, die in einer Programmiersprache geschrieben wurde, egal um welche Programmiersprache es sich handelt. Computer verstehen nur Folgen von Nullen und Einsen, also so etwas wie `1000111110101011...`. In eine solche *Maschinensprache* muss unser Programm übersetzt werden. Das *Übersetzen* erfolgt durch einen *Compiler*[^2].

[^2]: Man unterscheidet bei Programmiersprachen, ob die Programme durch einen *Compiler* oder durch einen *Interpreter* übersetzt werden. Programmiersprachen, bei denen die Programme durch einen *Interpreter* übersetzt werden, werden auch *Skriptsprachen* genannt. In Skriptsprachen wird jede einzelne Anweisung nach und nach *interpretiert*, d.h. übersetzt, dann ausgeführt, dann die nächste Anweisung übersetzt, ausgeführt usw. Java-Programme werden compiliert, d.h. sie werden als Ganzes übersetzt und erst dann ausgeführt.

Der Java-Compiler heißt `javac`. Wir haben den Java-Compiler zusammen mit dem *Java Development Kit (JDK)* installiert (siehe [**hier**](./tools/#java)). Mithilfe des Compilers übersetzen wir nun unsere Klasse:

``` java
javac Test.java
```

Wenn wir uns nun erneut den Inhalt unseres Verzeichnisses ansehen

``` bash
ls -la
```

dann entdecken wir, dass eine Datei `Test.class` erzeugt wurde.

```bash
total 16
drwxr-xr-x@  4 jornfreiheit  staff   128  7 Aug 11:02 .
drwxr-xr-x@ 39 jornfreiheit  staff  1248  1 Nov  2018 ..
-rw-r--r--   1 jornfreiheit  staff  1001  7 Aug 11:02 Test.class
-rw-r--r--   1 jornfreiheit  staff   189  3 Aug 14:17 Test.java
```

Unser Java-Compiler hat unser Programm, das in `Test.java` enthalten ist, in sogenannten *Bytecode* übersetzt. Das ist ein Zwischenschritt, den es in Java gibt. Das Programm wird nicht direkt in Maschinencode übersetzt, sondern in Bytecode. 

### Ausführen des Programms

Dieser Bytecode kann nun von der *Java-Laufzeitumgebung (Java Runtime Environment - JRE)* ausgeführt werden. Diese Laufzeitumgebung ist selbst ein Programm, eine sogenannte *Virtuelle Maschine*[^3].

[^3]: Genauer handelt es sich dabei um einen *Interpreter*. Der Java-Bytecode wird Anweisung für Anweisung interpretiert und ausgeführt. 

Die Ausführung unseres Programms erfolgt mithilfe der Java-Laufzeitumgebung `java`:

```bash
java Test
```

Beachten Sie, dass Sie nicht die Dateiendung `.class` für Ihr Programm angeben (müssen/dürfen). Auf unserer Konsole erscheint die Ausgabe 

```bash
Hello !
```

Diese Ausgabe erfolgt durch die Anweisung `System.out.print("Hello ");` (in Zeile `6`), gefolgt von der Anweisung `System.out.println("!");` (in Zeile `11`). In den Zeilen `7`-`10` stehen Anweisungen, die wir noch nicht verstehen. Das macht nichts, wir kommen später darauf zurück. Es ist jedoch so, dass wir dadurch unserem Programm *Argumente* übergeben können. Betrac hten wir zum Beispiel die Anweisung `ls -la`. `ls` wäre z.B. ein "Programm" und `-la` ein Argument (`-l` sorgt dafür, dass ein langes Listenformat erscheint, also alle Angaben zu den Dateien und Ordnern erscheinen und `-a` sorgt dafür, dass auch die Dateien und Ordner angezeigt werden, die mit `.` beginnen). Versuchen wir also einmal, umserem Programm `Test` ein Argument zu übergeben (ohne `-`):

```bash
java Test FIW
```

Es erscheint die Ausgabe:

```bash
Hello FIW !
```

Wir können sogar mehrere Argumente übergeben:

```bash
java Test FIW HTW Berlin Welt
```

Es erscheint die Ausgabe:

```bash
Hello FIW HTW Berlin Welt !
```

Es erscheint zunächst aufwendig, das Programm zunächst in Bytecode zu übersetzen und dann den Bytecode nochmal interpretieren und ausführen zu lassen. Warum wird nicht direkt in Maschinencode übersetzt? Die Antwort ist, dass der Java-Compiler so beriebssystemunabhängig arbeiten kann. Alle, egal, ob Windows-, iOS- oder Linux-Nutzerinnen können den gleichen Compiler verwenden. Die Programme können völlig systemunabhängig geschrieben und von allen compiliert werden. Erst die Java-Laufzeitumgebung ist beriebssystemabhängig, d.h. diese wird entsprechend dem Betriebssystem installiert. Alle Java-Programme und auch ihre Compilierung sind jedoch völlig losgelöst vom verwendeten Betriebssystem und können deshalb überall ausgeführt werden.

!!! success
    Wir haben uns angeschaut, was passiert, wenn wir das Programm übersetzen und ausführen. Die Übersetzung erfolgt durch den Java-Compiler `javac`. Dieser erzeugt *Java-Bytecode*. Die Ausführung dieses Bytcodes übernimmt die Java-Laufzeitumgebung `java`. Diese interpretiert den Bytecode und führt ihn *sequentiell* (also nacheinander, Anweisung für Anweisung) aus.


## Was ist Programmieren?

Ehe wir uns weiter mit Java und Programmierkonzepten beschäftigen, wollen wir uns bewusst werden, was Programmieren überhaupt ist. Prinzipiell lösen wir beim Programmieren ein Problem mithilfe einer Programmiersprache. Dabei stellt sich die Frage, welche Probleme mithilfe eines Computers lösbar sind und welche nicht. Dazu gibt es umfangreiche theoretische Untersuchungen - viele davon werden Sie in den "Grundlegenden Konzepten der Informatik" diskutieren. Ein wesentlicher Begriff dabei ist *Algorithmus*. Ein Algorithmus ist eine eindeutige Handlungsvorschrift, die aus endlich vielen einzelnen Schritten besteht und ein Problem löst. 

Algorithmen sind also auch Kochrezepte oder Bauanleitungen, wenn sie denn "eindeutig" sind. Wir kennen alle das Problem, dass Handlungsanweisungen nicht immer eindeutig sind - man kann es manchmal so oder so machen. In der Programmierung darf eine solche Mehrdeutigkeit natürlich nicht vorkommen. Der Algorithmusbegriff wurde deshalb detailliert und folgende Eigenschaften müssen für eine Handlungsanweisung für einen Computer gelten, um ein Algrithmus zu sein:

1. **Finitheit** Das Verfahren muss in einem **endlichen** Text (Programm) eindeutig beschreibbar sein.
2. **Ausführbarkeit** Jeder einzelne Schritt des Verfahrens muss auch tatsächlich ausführbar sein.
3. **Dynamische Finitheit** Das Verfahren darf zu jedem Zeitpunkt nur endlich viel Speicherplatz benötigen.
4. **Terminierung** Das Verfahren muss irgendwann enden, d.h. darf nur endlich viele Ausführungsschritte benötigen.
5. **Determiniertheit** Das Verfahren muss bei denselben Voraussetzungen das gleiche Ergebnis liefern.
6. **Determinismus** Die nächste anzuwendende Regel im Verfahren ist zu jedem Zeitpunkt (in jedem Zustand) eindeutig definiert.

### Beispiel: Euklidischer Algorithmus

Mit dem euklidischen Algorithmus[^4] kann der *größte gemeinsame Teiler (ggT)* zweier Zahlen berechnet werden. In seinen *Elementen* hat er diesen Algorithmus ungefähr so formuliert:

[^4]: Benannt nach Euklid von Alexandria, einem Mathematiker aus dem 3. Jahrhundert, Autor der *Elemente* - einem Kompendium des Wissens der Mathematik seiner Zeit. 

!!! quote "Euklidischer Algorithmus"
	Wenn CD aber AB nicht misst, und man nimmt bei AB, CD abwechselnd immer das kleinere vom größeren weg, dann muss (schließlich) eine Zahl übrig bleiben, die die vorangehende misst.

Hm, das ist recht schwierig zu verstehen. Euklid betrachtet die beiden Zahlen, von denen der größte gemeinsame Teiler ermittelt werden soll, als Strecken (`AB` und `CD`). Er zieht wiederholt die kleinere der beiden Strecken von der größeren ab. Er wiederholt dies solange, bis die beiden Strecken gleich lang sind - genauer: er wiederholt dies solange, solange die beiden Strecken nicht gleich lang sind (*... CD aber AB nicht misst...*).

Beispiel: ggT von 24 und 40

1. AB: 40, CD: 24, AB größer als CD --> 40 - 24 = 16 
2. AB: 16, CD: 24, CD größer als AB --> 24 - 16 =  8
3. AB: 16, CD: 8,  AB größer als CD --> 16 -  8 =  8  
4. AB:  8, CD: 8,  AB gleich CD --> Ende --> ggT ist 8

Wir versuchen, den Algorithmus in einer verständlicheren und genaueren Sprache zu überführen, ohne bereits eine *Programmiersprache* zu verwenden. Wir benutzen sogenannten *Pseudocode*:

Angenommen, die beiden Zahlen, von denen wir den *ggT* berechnen wollen, sind `a` und `b`:

```bash linenums="1"
solange a ungleich b ist, wiederhole
	wenn a größer ist als b, dann:
		ziehe b von a ab und weise das Ergebnis a zu
	andernfalls:
		ziehe a von b ab und weise das Ergebnis b zu
wenn a gleich b ist, dann:
	a (oder auch b) ist der gesuchte ggT
``` 

Wichtig ist, dass das Einrücken hier eine Bedeutung hat (eine *Semantik*). In Zeile `1` formulieren wir, dass sich etwas wiederholen soll, solange eine bestimmte Bedingung gilt. Das, was sich wiederholen soll, ist in den Zeilen `2` bis `5` formuliert. Zeile `1` formuliert eine *Schleife* und in den Zeilen `2`-`5` befindet sich der *Schleifeninhalt*. Die Zeilen `2`-`5` formulieren eine eigenes Konstrukt, nämlich eine Auswahl zwischen Alternativen, abhängig von einer Bedingung. Die Bedingung ist, ob `a` größer ist als `b`. Wenn das der Fall ist, dann wird die Alternative `ziehe b von a ab und weise das Ergebnis a zu` ausgeführt. Ist jedoch `a` nicht größer als `b`, dann wird die Alternative `ziehe a von b ab und weise das Ergebnis b zu` ausgeführt. Ein solches Konstrukt wird *Selektion* (oder auch *bedingte Alternative*) genannt. Nachdem entweder Zeile `3` oder Zeile `5` ausgeführt wurde (es wird genau eins von beiden ausgeführt), wird erneut in Zeile `1` geprüft, ob `a ungleich b` ist. Wenn ja, wird die Selektion wiederholt. Wenn nicht, dann ist die Schleife beendet und Zeile `6` wird ausgeführt. Die in Zeile `6` formulierte Bedingung `wenn a gleich b ist`, ist eigentlich unnötig. 

!!! question "Frage"
	Warum ist die Bedingung `wenn a gleich b ist` in Zeile `6` unnötig?

Wir betrachten nochmals die im obigen Algorithmus betrachteten Konstrukte (wir sprechen vom *Kontrollfluss* von *Anweisungen*): 

1. *Iteration*: die Schleife, die in Zeile `1` formuliert wird und die als Schleifeninhalt die Zeilen `2`-`5` hat, beschreibt einen *iterativen* (sich wiederholenden) *Kontrollfluss*.
2. *Selektion*: die *bedingte Alternative*, die eine Bedingung prüft (Zeile `2`) und dann, je nachdem, ob die Bedingung richtig oder falsch ist, jeweils eine alternative Anweisung ausführt (entweder Zeile `3` oder Zeile `4`), wird *Selektion* genannt (siehe Zeilen `2`-`5`).
3. *Sequenz*: die Anweisungen werden hintereinander ausgeführt, erst Zeile `1`, dann Zeile `2`, dann entweder Zeile `3`oder Zeile `4` usw. Das Hintereinanderausführen von Anweisungen wird *Sequenz* genannt. 

Schauen wir uns für unseren Algorithmus nochmal die Eigenschaften eines Algorithmus an: 

1. **Finitheit** unsere Beschreibung des Algorithmus ist endlich (siehe oben).
2. **Ausführbarkeit** jeder einzelne Schritt kann ausgeführt werden.
3. **Dynamische Finitheit** über den Speicherplatz können wir noch nicht viel sagen, aber wir müssen nur einige wenige Zahlen speichern. Das sollte klappen.
4. **Terminierung** Wann endet unser Algorithmus? Was muss gelten? Wissen wir, ob der Algorithmus irgendwann stoppt?
5. **Determiniertheit** Es ist sicherlich nicht so leicht zu sehen, ob bei gleicher Eingabe (die Zahlen `a`und `b`) auch stets der gleiche größte gemneinsame Teiler berechnet wird. Dazu müssten wir uns erstmal überlegen, wie wir das prüfen können. 
6. **Determinismus** Wir werden unseren Algorithmus nochmal an einem Beispiel *durchspielen*, um ein Gefühl dafür zu bekommen, dass wir stets wissen, welche Anweisung als nächstes ausgeführt wird. 

### Beispielzahlen für den euklidischen Algorithmus

Wir nehmen die Zahlen `a=40` und `b=24` und spielen damit unseren Algorithmus durch:

Zeile `1`: `a (40) ist ungleich b (24)`, also wird der Schleifeninhalt ausgeführt
Zeile `2`: `a ist größer als b`, also wird Zeile `3` ausgeführt (und genau nicht Zeilen `4` und `5`)
Zeile `3`: das Ergebnis von `a-b` ist 16. Der neue Wert von `a` ist 16.
Zeile `1`: wegen *wiederhole* (Iteration): `a (16) ist ungleich b (24)`, also wird der Schleifeninhalt ausgeführt
Zeile `2`: `a ist nicht größer als b`, also wird Zeile `5` ausgeführt (und genau nicht Zeile `3`)
Zeile `3`: das Ergebnis von `b-a` ist 8. Der neue Wert von `b` ist 8.
Zeile `1`: wegen *wiederhole* (Iteration): `a (16) ist ungleich b (8)`, also wird der Schleifeninhalt ausgeführt
Zeile `2`: `a ist größer als b`, also wird Zeile `3` ausgeführt (und genau nicht Zeile `5`)
Zeile `3`: das Ergebnis von `a-b` ist 8. Der neue Wert von `a` ist 8.
Zeile `1`: wegen *wiederhole* (Iteration): `a (8) ist nicht ungleich b (8)`, also wird der Schleifeninhalt **nicht** ausgeführt
Zeile `6`: `a (8) ist gleich b (8)`
Zeile `7`: der gesuchte `ggT` ist `8`
Ende

Für dieses Beispiel war stets eindeutig, welche Anweisung als nächstes ausgeführt wird. Der Algrorithmus hat auch terminiert, d.h. er wurde beendet und es sollte aiuch klar sein, dass das Ergebnis für die die Eingabe `a=40` und `b=24` stets `8` ist. 

!!! question "Fragen"
	 * Was ändert sich, wenn am Anfang `a=24` und `b=40` sind?
	 * Was ändert sich, wenn am Anfang `a=-40` und `b=24` sind?
	 * Was ändert sich, wenn am Anfang `a=-40` und `b=-24` sind?
	 * Was ändert sich, wenn am Anfang `a=24` und `b=24` sind?


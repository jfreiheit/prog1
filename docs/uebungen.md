# Übungen

## Übungsblätter (wochenweise)

??? note "Übung 0"
	1. Installieren Sie sich - falls noch nicht geschehen - eine Java-Entwicklungsumgebung (siehe [**Java**](../tools/#java)).
	2. Installieren Sie sich die IDE Ihrer Wahl (siehe [**IDE**](../tools/#ide)). In den Vorlesungen und Übungen (Videos) verwende ich [**Eclipse**](../tools/#eclipse) und beschreibe die Schritte auch für Eclipse.
	3. Starten Sie Eclipse durch Doppelklick auf das Programmsymbol.
	4. Erstellen Sie einen *Workspace* (Arbeitsbereich) in einem gewünschten Ordner (z. B.
	Programmieren) im Dateisystem. Achten Sie darauf, dass Sie Schreibrechte in diesem Ordner besitzen.
	5. Anlegen eines Projektordners:
		* Auswahl im Menü `File-->New-->Java Project`.
		* Eingabe des `Project name:` Name des Projektes (z.B. *WiSe20*). Wenn Sie gefragt werden, ob Sie ein `module-info.java` erstellen wollen, wählen Sie `Don't create`.
		* Klicken auf den Button `Finish`.
	4. Erstellen eines neuen Packages (Paketes):
		* Öffnen der Projektmappe im `Package Explorer`.
		* Auswahl des Ordners `src` mit der rechten Maustaste.
		* Auswahl des Menüpunktes `New --> Package`.
		* Geben Sie folgenden Paketnamen ein (Paketnamen werden kleingeschrieben) `uebungen.uebung0` (Achten Sie auf den Punkt und dass Sie alles zusammen schreiben).
	5. Erstellen einer neuen Klasse:
		* Öffnen der Projektmappe im Package Explorer.
		* Auswahl des Paketes (`uebungen.uebung0`) mit der rechten Maustaste.
		* Auswahl des Menüpunktes `New --> Class`.
		* Eingabe des Namens, der gleichzeitig der Klassen- und Dateiname ist: `Uebung0`. Klassennamen werden immer groß geschrieben.
		* Setzen des Häkchens bei `public static void main()`. (Sollten Sie vergessen haben, das Häkchen zu setzen, dann ist die Klasse, nachdem Sie `Finish` gedrückt haben, leer. Setzen Sie dann den Cursor zwischen die beiden geschweiften Klammern `{ }`, geben dann `main` ein und drücken die <kbd class="key-ctrl">Ctrl</kbd><span>+</span><kbd class="key-space">Leer</kbd>-Tasten und anschließend <kbd class="key-enter">Enter</kbd>. Dann erscheint die `main()`-Methode)
		* Klicken auf den Button `Finish`.
	6. In die `main()`-Methode (zwischen die geschweiften Klammern `{` und `}` geben 	Sie ein: `System.out.println("Uebung 0"));`.
	7. Drücken Sie dann entweder auf den ![run](./files/16_run.png)-Button oder 		wählen Sie aus dem Menü `Run --> Run` oder drücken Sie <kbd class="key-shift">shift</kbd><span>+</span><kbd class="key-command">command</kbd>+</span><kbd class="key-f11">f11</kbd>. In der `Console` in Ihrer IDE (in Eclipse unten) erscheint `Uebung 0`. 

	=== "Uebung1.java"
		```java
		package uebungen.uebung0;

		public class Uebung0
		{
			public static void main(String[] args)
			{
				System.out.println("Uebung 0");
			}
		}
		```

	![uebung0](./files/17_uebung0.png)

	!!! success
		Fertig! Ihre Entwicklungsumgebung ist bereit! Wir können loslegen. :thumbsup:

??? note "Übung 1"
	1. Erstellen Sie ein package `uebungen.uebung1`. 
	2. Erstellen Sie in diesem package eine Klasse `Uebung1` mit `main()`-Methode.
	3. Deklarieren und initialisieren Sie in der `main()`-Methode jeweils eine Variable mit dem Datentyp `int`, `long`, `char`, `byte`, `short`, `float`, `double`, `boolean` und `String`. Geben Sie alle Werte einzeln durch Aufruf der `println()`-Methode aus. Erzeugen Sie dabei folgende Ausgabe (Werte nur Beispiele):
	```bash
	Wert vom Typ int 		: 	123
	Wert vom Typ long 		: 	456789
	Wert vom Typ char 		: 	a
	Wert vom Typ byte 		: 	127
	Wert vom Typ short 		: 	32767
	Wert vom Typ float 		: 	4.23
	Wert vom Typ double		: 	6.98
	Wert vom Typ boolean	: 	true
	Wert vom Typ String		: 	Hallo!
	```
	4. Setzen Sie den Wert Ihrer `int`-Variablen auf `2147483647`. Geben Sie den Wert auf der Konsole aus, z.B.:	
	```bash
	Wert von i 	: 	2147483647
	```
	Erhöhen Sie nun den Wert der Variablen um `1` und geben Sie den Wert erneut aus. Was passiert? Warum?
	5. Wiederholen Sie das gleiche mit einer `long-Variablen.
	6. Weisen Sie Ihrer `char`-Variablen den Wert `65` zu. Geben Sie den Wert Ihrer `char`-Variablen aus. Was passiert? Warum?
	7. Schreiben Sie eine Methode 
	```java
	public static void printIntDivision(int nr1, int nr2) 
	{
	}
	``` 
	Diese Methode soll folgende Ausgabe auf die Konsole erzeugen,
	z.B. für `printIntDivision(7, 4);` die Ausgabe 
	```bash
	7 geteilt durch 4 ergibt 1. Es bleibt ein Rest von 3
	```
	z.B. für `printIntDivision(17, 4);` die Ausgabe
	```bash 
	17 geteilt durch 4 ergibt 4. Es bleibt ein Rest von 1
	```
	Schreiben/ändern Sie die Methode so, dass bei einer ganzzahligen Division ohne Rest die Ausgabe in der Form ist (Aufruf z.B. `printIntDivision(16, 4);`): 
	```bash
	16 geteilt durch 4 ergibt 4 ohne Rest.
	```
	8. Schreiben Sie zwei Methoden 
	```java
	public static int getQuotient(int nr1, int nr2) {} // und 
	public static int getRemainder(int nr1, int nr2) {}
	``` 
	Deklarieren Sie in der main()-Methode zwei int-Variablen und weisen Sie diesen Werte zu (z.B. `17` und `4`). Wenden Sie die beiden Methoden so an, dass mit Hilfe der `println()`-Methode folgende Ausgaben erscheinen: 
	```bash 
	17/4 = 4
	17 mod 4 = 1
	```

??? question "Eine mögliche Lösung für Übung1"
	```java
	package uebungen.uebung1;

	public class Uebung1
	{
		public static void printIntDivision(int nr1, int nr2)
		{
			int quotient = nr1 / nr2;
			int rest = nr1 % nr2;
			if(rest==0)
			{
				System.out.println(nr1 + " geteilt durch " + nr2 + " ergibt " + quotient + " ohne Rest.");
			}
			else
			{
				System.out.println(nr1 + " geteilt durch " + nr2 + " ergibt " + quotient 
					+ ". Es bleibt ein Rest von " + rest);
			}
		}
		
		public static int getQuotient(int nr1, int nr2)
		{
			int quotient = nr1 / nr2;
			return quotient;
		}
		
		public static int getRemainder(int nr1, int nr2)
		{
			int remainder = nr1 % nr2;
			return remainder;
		}

		public static void main(String[] args)
		{
			int in = 123;
			long lo = 456789;
			char ch = 'a';
			byte by = 127;
			short sh = 32767;
			float fl = 4.23f;
			double d1 = 6.98;
			boolean b1 = true;
			String s1 = "Hallo!";
			
			System.out.println(" --- Aufgabe 3 -------");
			System.out.println();
			System.out.println("Wert vom Typ int     : " + in );
			System.out.println("Wert vom Typ long    : " + lo );
			System.out.println("Wert vom Typ char    : " + ch );
			System.out.println("Wert vom Typ byte    : " + by );
			System.out.println("Wert vom Typ short   : " + sh );
			System.out.println("Wert vom Typ float   : " + fl );
			System.out.println("Wert vom Typ double  : " + d1 );
			System.out.println("Wert vom Typ boolean : " + b1 );
			System.out.println("Wert vom Typ String  : " + s1 );
			
			System.out.println();
			System.out.println(" --- Aufgabe 4 -------");
			System.out.println();
			in = 2147483647;
			System.out.println("Wert vom Typ int     : " + in );
			in = in + 1;		// in++;
			System.out.println("Wert vom Typ int     : " + in );
			
			System.out.println();
			System.out.println(" --- Aufgabe 5 -------");
			System.out.println();
			lo = 2147483647L;
			System.out.println("Wert vom Typ long    : " + lo );
			lo = lo +1 ;
			System.out.println("Wert vom Typ long    : " + lo );
			
			System.out.println();
			System.out.println(" --- Aufgabe 6 -------");
			System.out.println();
			ch = 65;
			System.out.println("Wert vom Typ char    : " + ch );
			
			System.out.println();
			System.out.println(" --- Aufgabe 7 -------");
			System.out.println();
			printIntDivision(7, 4);
			printIntDivision(17, 4);
			printIntDivision(16, 4);
			
			System.out.println();
			System.out.println(" --- Aufgabe 7 -------");
			System.out.println();
			int number1 = 17;
			int number2 = 4;
			int result = getQuotient(number1, number2);
			System.out.println(number1 + "/" + number2 + " = " + result);
			
			int rest = getRemainder(number1, number2);
			System.out.println(number1 + " mod " + number2 + " = " + rest);
		}

	}
	```

??? question "Video zu Übung 1"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=b6a98a3d46c7ecd0409e52210ca4aa07&width=720&height=411&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="411" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>

??? note "Übung 2"
	
	1. Erstellen Sie ein package `uebungen.uebung2`. 
	2. Erstellen Sie in diesem package eine Klasse `Uebung2` mit `main()`-Methode.
	3. Schreiben Sie eine Methode `public static void printTimesTables(int nr1, int nr2)`. Bei Aufruf der Methode z.B. für `printTimesTables(10,10);` soll das kleine Ein-Mal-Eins in der folgenden Form ausgegeben werden:

		??? "Ausgabe für printTimesTables(10,10);"
			```bash 
			1 * 1 = 1
			1 * 2 = 2
			1 * 3 = 3
			1 * 4 = 4
			1 * 5 = 5
			1 * 6 = 6
			1 * 7 = 7
			1 * 8 = 8
			1 * 9 = 9
			1 * 10 = 10

			2 * 1 = 2
			2 * 2 = 4
			2 * 3 = 6
			2 * 4 = 8
			2 * 5 = 10
			2 * 6 = 12
			2 * 7 = 14
			2 * 8 = 16
			2 * 9 = 18
			2 * 10 = 20

			3 * 1 = 3
			3 * 2 = 6
			3 * 3 = 9
			3 * 4 = 12
			3 * 5 = 15
			3 * 6 = 18
			3 * 7 = 21
			3 * 8 = 24
			3 * 9 = 27
			3 * 10 = 30

			4 * 1 = 4
			4 * 2 = 8
			4 * 3 = 12
			4 * 4 = 16
			4 * 5 = 20
			4 * 6 = 24
			4 * 7 = 28
			4 * 8 = 32
			4 * 9 = 36
			4 * 10 = 40

			5 * 1 = 5
			5 * 2 = 10
			5 * 3 = 15
			5 * 4 = 20
			5 * 5 = 25
			5 * 6 = 30
			5 * 7 = 35
			5 * 8 = 40
			5 * 9 = 45
			5 * 10 = 50

			6 * 1 = 6
			6 * 2 = 12
			6 * 3 = 18
			6 * 4 = 24
			6 * 5 = 30
			6 * 6 = 36
			6 * 7 = 42
			6 * 8 = 48
			6 * 9 = 54
			6 * 10 = 60

			7 * 1 = 7
			7 * 2 = 14
			7 * 3 = 21
			7 * 4 = 28
			7 * 5 = 35
			7 * 6 = 42
			7 * 7 = 49
			7 * 8 = 56
			7 * 9 = 63
			7 * 10 = 70

			8 * 1 = 8
			8 * 2 = 16
			8 * 3 = 24
			8 * 4 = 32
			8 * 5 = 40
			8 * 6 = 48
			8 * 7 = 56
			8 * 8 = 64
			8 * 9 = 72
			8 * 10 = 80

			9 * 1 = 9
			9 * 2 = 18
			9 * 3 = 27
			9 * 4 = 36
			9 * 5 = 45
			9 * 6 = 54
			9 * 7 = 63
			9 * 8 = 72
			9 * 9 = 81
			9 * 10 = 90

			10 * 1 = 10
			10 * 2 = 20
			10 * 3 = 30
			10 * 4 = 40
			10 * 5 = 50
			10 * 6 = 60
			10 * 7 = 70
			10 * 8 = 80
			10 * 9 = 90
			10 * 10 = 100
			```

	4. Schreiben Sie eine Methode `public static void printTimesMatrix(int nr1, int nr2)`. Bei Aufruf der Methode z.B. für printTimesMatrix(10,10) soll das kleine Ein-Mal-Eins in der folgenden Form ausgegeben werden:

		??? "Ausgabe für printTimesMatrix(10,10);"
			```bash
			 1  2  3  4  5  6  7  8  9  10 
			 2  4  6  8  10  12  14  16  18  20 
			 3  6  9  12  15  18  21  24  27  30 
			 4  8  12  16  20  24  28  32  36  40 
			 5  10  15  20  25  30  35  40  45  50 
			 6  12  18  24  30  36  42  48  54  60 
			 7  14  21  28  35  42  49  56  63  70 
			 8  16  24  32  40  48  56  64  72  80 
			 9  18  27  36  45  54  63  72  81  90 
			 10  20  30  40  50  60  70  80  90  100 
			```

	5. Schreiben Sie eine Methode `public static void printTriangleUp(int height)`. Bei Aufruf der Methode z.B. für `printTriangleUp(7)` soll folgende Ausgabe erscheinen:
		```bash
		*******
		******
		*****
		****
		***
		**
		*
		```

	6. Geben Sie alle möglichen Kombinationen für 3 ganze Zahlen `x`, `y` und `z` aus, für die gilt:
		```java
		x <= y <= z und
		x * y * z = 36
		```
	7. Schreiben Sie eine Umrechnung für eine gegebene Anzahl von Sekunden (`printSeconds(int seconds)`), z.B. `printSeconds(3456789)`:
		```bash
		3456789 Sekunden sind 40 Tage, 13 Minuten, 9 Sekunden.
		```
		Aber z.B. `printSeconds(2345678)`:
		```bash
		2345678 Sekunden sind 27 Tage, 3 Stunden, 34 Minuten, 38 Sekunden.
		```
		Aber z.B. `printSeconds(123456)`:
		```bash
		123456 Sekunden sind 1 Tag, 10 Stunden, 17 Minuten, 36 Sekunden.
		```
		Aber z.B. `printSeconds(12345)`:
		```bash
		12345 Sekunden sind 3 Stunden, 25 Minuten, 45 Sekunden.
		```
	8. Schreiben Sie eine Methode, die für eine natürliche Zahl deren Quersumme ausgibt, z.B.: `crossSum(12345678)`
		```bash
		Die Quersumme von 12345678 ist 36.
		```

??? question "Eine mögliche Lösung für Übung 2"
	```java 
	package uebungen.uebung2;

	public class Uebung2
	{

		public static void printTimesTables(int nr1, int nr2)
		{
			for(int faktor1 = 1; faktor1<=nr1; faktor1++)
			{
				for(int faktor2 = 1; faktor2<=nr2; faktor2++)
				{
					int produkt = faktor1 * faktor2;
					System.out.println(faktor1 + " * " + faktor2 + " = " + produkt);
				}
				System.out.println();
			}
		}
		
		public static void printTimesMatrix(int nr1, int nr2)
		{
			for(int faktor1 = 1; faktor1 <= nr1; faktor1++)
			{
				for(int faktor2 = 1; faktor2 <= nr2; faktor2++)
				{
					int produkt = faktor1 * faktor2;
					System.out.print(produkt + " ");
				}
				System.out.println();
			}
		}
		
		public static void printTriangleUp(int height)
		{
			for(int row=0; row<height; row++)
			{
				//System.out.println("Zeile : " + row + " Sterne : " + (height-row));
				for(int stars=row; stars < height; stars++)
				{
					System.out.print("*");
				}
				/*
				System.out.print(" ");
				for(int stars=0; stars<=row; stars++)
				{
					System.out.print("*");
				}
				System.out.print(" ");
				for(int stars=0; stars<=row; stars++)
				{
					System.out.print("*");
				}
				*/
				System.out.println();
			}
		}
		
		public static void printXYZ()
		{
			int product = 36;
			for(int z = -product; z <= product; z++)
			{
				for(int y = -product; y <= z; y++)
				{
					for(int x = -product; x <= y; x++)
					{
						//if(x * y * z == product && (x <= y) && y <= z)
						if(x * y * z == product)
						{
							System.out.println("z=" + z + " y=" + y + " x=" + x);
						}
					}
				}
			}
		}
		
		public static void printSeconds(int seconds)
		{
			int minute = 60;
			int hour = 60 * minute;		// 3600
			int day = 24 * hour;		// 86400
			
			int days = seconds / day;
			int restSeconds = seconds - (days * day);
			int hours = restSeconds / hour;
			restSeconds = restSeconds - (hours * hour);
			int minutes = restSeconds / minute;
			restSeconds = restSeconds - (minutes * minute);
			
			/*
			System.out.println(seconds + " Sekunden sind " + days + " Tage, " 
			+ hours + " Stunden, " + minutes + " Minuten, " + restSeconds + " Sekunden.");
			 */
			
			String output = seconds + " Sekunden sind ";
			if(days==1)
			{
				output = output + " 1 Tag, ";
			}
			else
			{
				if(days > 1)
				{
					output = output + days + " Tage, ";
				}
			}
			if(hours==1)
			{
				output = output + " 1 Stunde, ";
			}
			else
			{
				if(hours > 1)
				{
					output = output + hours + " Stunden, ";
				}
			}
			if(minutes==1)
			{
				output = output + " 1 Minute, ";
			}
			else
			{
				if(minutes > 1)
				{
					output = output + minutes + " Minuten, ";
				}
			}
			if(restSeconds==1)
			{
				output = output + " 1 Sekunde.";
			}
			else
			{
				if(restSeconds > 1)
				{
					output = output + restSeconds + " Sekunden.";
				}
			}
			System.out.println(output);
		}
		
		public static int crossSum(int number)
		{
			int sum = 0;
			
			int rest = number % 10;		// letzte Ziffer
			sum = sum + rest;
			int result = number / 10;	// Zahl ohne letzte Ziffer
			while(result > 0)
			{
				rest = result % 10;
				sum = sum + rest;
				result = result / 10;
			}
			
			return sum;
		}
		
		public static void main(String[] args)
		{
			System.out.println("----- Aufgabe 1 ------");
			System.out.println();
			printTimesTables(10, 10);
			
			System.out.println();
			System.out.println("----- Aufgabe 2 ------");
			System.out.println();
			printTimesMatrix(10, 10);
			
			System.out.println();
			System.out.println("----- Aufgabe 3 ------");
			System.out.println();
			printTriangleUp(7);
				
			System.out.println();
			System.out.println("----- Aufgabe 4 ------");
			System.out.println();
			printXYZ();
			
			System.out.println();
			System.out.println("----- Aufgabe 5 ------");
			System.out.println();
			printSeconds(3456789);
			printSeconds(2345678);
			printSeconds(123456);
			printSeconds(12345);
					
			System.out.println();
			System.out.println("----- Aufgabe 6 ------");
			System.out.println();
			int number = 123456789;
			int crossSum = crossSum(number);
			System.out.println("Die Quersumme von " + number + " ist " + crossSum + ".");
		}

	}
	```

??? question "Video zu Übung 2"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=7525446f2c5f5712638e68e0805aa81a&width=720&height=383&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="383" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>
	
??? note "Übung 3"
	
	1. Erstellen Sie ein package `uebungen.uebung3`. 
	2. Erstellen Sie in diesem package eine Klasse `Uebung3` mit `main()`-Methode.
	3. Implementieren Sie folgende Methoden: 
		- `public static int inputInt()` – in dieser Methode wird über die Konsole eine `int`-Zahl eingelesen. Diese Zahl wird von der Methode zurückgegeben.
		- `public static boolean isPrime(int number)` – diese Methode prüft, ob die als Parameter übergebene `number` eine Primzahl ist. Die Methode gibt ein `true` zurück, wenn `number` eine Primzahl ist und `false` sonst.
		- `public static void printPrimeNumbers(int maximum)` – diese Methode gibt alle Primzahlen von 1 bis einschließlich `maximum` wie folgt auf der Konsole aus (Bsp. für `maximum=61`):
			```bash
			Zahl : 61
			.2 3 .5 .7 ...11 .13 ...17 .19 ...23 .....29 .31 .....37 ...41 .43 ...47 .....53 .....59 .61
			```
			d.h. es werden die Zahlen, die Primzahlen sind, ausgegeben und für die anderen Zahlen erscheint nur ein Punkt. Verwenden Sie in der Methode `printPrimenumbers(int)` die Methode `isPrime(int)`.
		- `public static int getSmallestDivider(int number)` – diese Methode gibt den kleinsten Teiler zurück, der `number` ganzzahlig teilt. Ist `number` eine Primzahl, wird `number` zurückgegeben. Für den Fall, dass `number` kleiner als `2` ist, geben Sie ebenfalls `number` zurück.
		- `public static String createStringOfPrimeFactorization(int number)` – diese Methode gibt einen String in folgender Form zurück (Bsp. für `number=632060`):
			```bash
			" 2 * 2 * 5 * 11 * 13 * 13 * 17 = 632060 "
			```
			d.h. alle kleinsten Teiler werden mit dem Multiplikationszeichen verbunden und am Ende erscheint `= Wert von number`. 
		- Testen Sie alle Methoden. Rufen Sie insbesondere `inputInt()`, `printPrimenumbers(int)` und `createStringOfPrimeFactorization(int)` in der `main()`-Methode auf.
	4. Tipp: Bei der Überprüfung, ob `number` eine Primzahl ist, genügt es, Teiler bis zur Wurzel von `number` zu suchen. Werden bis dahin keine Teiler gefunden, ist `number` eine Primzahl. Sie können sich dazu z.B. eine Variable der Form 
	`int bound = (int) Math.sqrt(number);` erstellen und müssen dann den Teiler nur bis `bound` suchen (der Typkonvertierungsoperator `(int)` macht aus der `double`-Zahl einen `int` - schneidet die Nachkommastellen ab).


??? question "Eine mögliche Lösung für Übung 3"
	```java 
	package uebungen.uebung3;

	import java.util.Scanner;

	public class Uebung3
	{
		public static int inputInt()
		{
			Scanner sc = new Scanner(System.in);
			System.out.print("Geben Sie eine Zahl ein : ");
			int number = sc.nextInt();
			sc.close();
			return number;
		}
		
		public static boolean isPrime(int number)
		{
			boolean isPrime = true;		// true ist wichtig!
			
			if(number<2)
			{
				isPrime = false;
			}
			else 
			{
				if(number==2)
				{
					isPrime=true;
				}
				else
				{
					for(int divider=2; divider<=Math.sqrt(number) && isPrime; divider++)
					{
						if(number % divider == 0)
						{
							isPrime = false;
						}
					}
				}
			}
			
			return isPrime;
		}
		
		public static void printPrimeNumbers(int maximum)
		{
			for(int number=1; number<=maximum; number++)
			{
				if(isPrime(number))
				{
					System.out.print(number+" ");
				}
				else
				{
					System.out.print(". ");
				}
				if(number%30 == 0)
				{
					System.out.println();
				}
			}
		}
		
		public static int getSmallestDivider(int number)
		{
			int smallestDivider = 0;
			boolean found = false;
			
			if(number<2)
			{
				smallestDivider = number;
			}
			else
			{
				if(isPrime(number))
				{
					smallestDivider = number;
				}
				else
				{
					for(int divider=2; divider<number && !found; divider++)
					{
						if(number % divider == 0)
						{
							smallestDivider = divider;
							found = true;
						}
					}
				}
			}
			return smallestDivider;
		}
		
		public static String createStringOfPrimeFactorization(int number) 
		{
			String s = "";
			/*
			 * 	2 * 2 * 5 * 11 * 13 * 13 * 17 = 632060
			 *  632060 --> 2 
			 *  316030 --> 2
			 *  158015 --> 5
			 *   ...   --> divider
			 *  result/divider == 1
			 */
			int smallestDivider = getSmallestDivider(number);
			s = s + smallestDivider;
			int result = number/smallestDivider;
			
			while(result > 1)
			{
				smallestDivider = getSmallestDivider(result);
				s = s + " * " + smallestDivider;
				result = result/smallestDivider;
			}
			s = s + " = " + number;
			
			return s;
		}

		public static void main(String[] args)
		{
			System.out.printf("%n%n----------- Aufgabe 1 ------------ %n %n");
			int number = inputInt();
			System.out.println("Sie haben " + number + " eingegeben.");
			
			System.out.printf("%n%n----------- Aufgabe 2 ------------ %n %n");
			System.out.println(isPrime(number));
			
			System.out.printf("%n%n----------- Aufgabe 3 ------------ %n %n");
			printPrimeNumbers(number);
			
			System.out.printf("%n%n----------- Aufgabe 4 ------------ %n %n");
			System.out.println(getSmallestDivider(number));
			
			System.out.printf("%n%n----------- Aufgabe 5 ------------ %n %n");
			String output = createStringOfPrimeFactorization(632060);
			System.out.println(output);
			
		
		}

	}
	```

??? question "Video zu Übung 3"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=87e2a2a2de3ff7660bad99deddb56109&width=720&height=383&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="383" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>

	
??? note "Übung 4"
	
	1. Erstellen Sie ein package `uebungen.uebung4`. 
	2. Erstellen Sie in diesem package eine Klasse `Uebung4` mit `main()`-Methode.
	3. Implementieren Sie folgende Methoden: 
		- Implementieren Sie eine `public static void print(char[] ca)`-Methode, so dass das `char[] ca` auf die Konsole ausgegeben wird. Achten Sie darauf, dass hinter dem letzten Element kein Komma steht. Testen Sie Ihre Methode auch für ein leeres Array.<br/>
		Bsp:  `print(['a', 'b', 'c', 'a', 'c', 'a', 'b', 'c'])` <br/>
		Ausgabe auf Konsole: `[a, b, c, a, c, a, b, c]`

		- Kopieren Sie die `print`-Methode vollständig und ändern Sie den Typ des Parameters von `char[]` in `int[]`. (Die Methode ist jetzt *überladen* und `print()` kann jetzt entweder ein `char[]` oder ein `int[]` übergeben werden, welches auf die Konsole ausgegeben wird.)

		- Implementieren Sie eine Methode `public static char[] stringToCharArray(String s)`. Diese Methode wandelt einen `String` in ein `char[]` um, so dass jedes Zeichen des Strings im `char[]` enthalten ist. Das `char[]` wird zurückgegeben. 
		Tipps: die Länge eines Strings wird mit der Objektmethode `length()` ermittelt. Die einzelnen Zeichen eines Strings können mithilfe der `charAt(index)`-Objektmethode von Strings ermittelt werden. Siehe [String](../hilfsklassen/#die-klasse-string) <br/>
		Bsp.: `stringToCharArray("hallo!")` --> `['h','a','l','l','o','!']` 

		- Implementieren Sie eine Methode `public static char[] filter(char[] carr, char filter)`, der als Parameter ein `char`-Array und ein `char` übergeben wird. Die Methode soll ein `char`-Array zurückgeben, das dem als Parameter übergeben Array entspricht, außer dass jedes Vorkommen des als Parameter übergeben `carr` entfernt wurde <br/>
		Bsp: `filter(['a', 'b', 'c', 'a', 'c', 'a', 'b', 'c'], 'c')` --> `['a', 'b', 'a', 'a', 'b']`

		- Implementieren Sie eine Methode `public static int[] minAndMax(int[] iarr)`, der ein `int`-Array als Parameter übergeben wird und die ein zweielementiges Array zurückgibt. Das erste Element des zurückgegeben Arrays ist das Minimum des als Parameter übergebenen Arrays und das zweite Element ist das Maximum. <br/>
		Bsp.: 	`minAndMax([4,2,8,1,6,2,4,1,8])` --> `[1,8]` <br/>
              	`minAndMax([4])` --> `[4,4]`

		- Implementieren Sie eine Methode `public static int[] reverse(int[] iarr)`, der ein `int`-Array übergeben wird und die die Reihenfolge der Elemente des Arrays umdreht (das letzte zuerst usw.) Das neuerstellte Array wird zurückgegeben. <br/>
		Bsp.: `reverse([4,2,8,1,6,2,4,1,8])` --> `[8,1,4,2,6,1,8,2,4]`  <br/>
              `reverse([4])` --> `[4]`

        - **Zusatz:** Implementieren Sie eine Methode `public static boolean containsDoublets(char[] ca)` die ein `true` zurückgibt, wenn *mindestens* ein Wert in `ca` *mindestens* zwei Mal vorkommt (wenn Sie schon dabei sind, können Sie sich auch überlegen, wenn *genau* ein Wert *genau* zwei Mal vorkommt - oder *mindestens* ein Wert *genau* zwei Mal - oder *genau* ein Wert *mindestens* zwei Mal) und `false` sonst.


??? question "Eine mögliche Lösung für Übung 4"
	```java 
	package uebungen.uebung4;

	public class Uebung4
	{
		public static void print(char[] ca)
		{
			System.out.print("[ ");
			/*
			for (int index = 0; index < ca.length-1; index++)
			{
				System.out.print(ca[index] + ", ");
			}
			if(ca.length>0)
			{
				System.out.print(ca[ca.length-1]);
			}
			*/
			for (int index = 0; index < ca.length; index++)
			{
				if(index < ca.length-1)
				{
					System.out.print(ca[index] + ", ");
				}
				else // letztes Element
				{
					System.out.print(ca[index]);
				}
			}
			System.out.println(" ]");
		}
		
		public static void print(int[] ca)
		{
			System.out.print("[ ");
			for (int index = 0; index < ca.length; index++)
			{
				if(index < ca.length-1)
				{
					System.out.print(ca[index] + ", ");
				}
				else // letztes Element
				{
					System.out.print(ca[index]);
				}
			}
			System.out.println(" ]");
		}
		
		public static char[] filter(char[] carr, char filter)
		{
			// filter(['a', 'b', 'c', 'a', 'c', 'a', 'b', 'c'], 'c') → ['a', 'b', 'a', 'a', 'b']
			
			// Laenge des neuen Arrays ermitteln
			// Anzahl des Vorkommens von filter in carr
			// Laenge von carr - Anzahl des Vorkommens
			int nrOfOccurrences = 0;
			for (int index = 0; index < carr.length; index++)
			{
				if(carr[index]==filter)
				{
					nrOfOccurrences++;
				}
			}
			int newLength = carr.length - nrOfOccurrences;
			
			// Erzeugen des neuen Arrays
			char[] caNew = new char[newLength];
			
			// Befuellen des neuen Arrays
			int indexNewArr = 0;
			for (int index = 0; index < carr.length; index++)
			{
				if(carr[index]!=filter)
				{
					caNew[indexNewArr] = carr[index];
					indexNewArr++;
				}
			}
			
			return caNew;
			
		}
		
		public static char[] stringToCharArray(String s)
		{
			char[] ca = new char[s.length()];
			
			for (int index = 0; index < ca.length; index++)
			{
				ca[index] = s.charAt(index);		
			}
			return ca;
		}
		
		public static int[] minAndMax(int[] iarr)
		{
			int curMin = iarr[0];
			int curMax = iarr[0];
			for (int index = 0; index < iarr.length; index++)
			{
				if(iarr[index] < curMin)
				{
					curMin = iarr[index];
				}
				if(iarr[index] > curMax)
				{
					curMax = iarr[index];
				}
			}
			
			// int[] ra = { curMin, curMax };
			int[] ra = new int[2];
			ra[0] = curMin;
			ra[1] = curMax;
			return ra;		
		}
		
		public static int[] reverse(int[] iarr)
		{
			int[] iaNew = new int[iarr.length];
			
			for (int index = 0; index < iaNew.length; index++)
			{
				iaNew[index] = iarr[iarr.length-1 - index];
			}
			
			return iaNew;
		}
		
		/*
		 * ----------- ab hier Zusatzaufgabe -------------------
		 * 
		 * fuer die Zusatzaufgabe containsDoublets(char[])
		 * schreiben wir uns erstmal eine Hilfsmethode
		 * nrOfOccurrences(char[] ca. char element), die ermittelt,
		 * wie oft ein element in ca vorkommt
		 */
		
		public static int norOfOccurrences(char[] ca, char element)
		{
			int nrOfOccurrences = 0;
			
			for (int index = 0; index < ca.length; index++)
			{
				if(ca[index] == element)
				{
					nrOfOccurrences++;
				}
			}
			return nrOfOccurrences;
		}
		
		public static boolean containsDoublets(char[] ca)
		{
			boolean doublet = false;
			for (int index = 0; index < ca.length && !doublet; index++)
			{
				if (norOfOccurrences(ca, ca[index]) >= 2)
				{
					doublet = true;
				}
			}
			return doublet;
		}

		public static void main(String[] args)
		{
			
			System.out.printf("%n%n ---------------- Aufgabe 1 ----------%n%n");
			char[] carr1 = new char[10];
			char c1 = 'w';
			carr1[0] = 'w';
			carr1[1] = 'i';
			carr1[2] = 'o';
			carr1[3] = 'u';
			carr1[4] = 'w';
			carr1[5] = 'r';
			carr1[6] = 'e';
			carr1[7] = '2';
			carr1[8] = '!';
			carr1[9] = 'q';
			// carr1[10] = 'w';		// ArrayIndexOutOfBoundsException
			
			char[] carr2 = {'a', 'b', 'c', 'a', 'c', 'a', 'b', 'c'};
			
			print(carr1);
			print(carr2);
			
			char[] carr3 = new char[0];
			print(carr3);
			
			
			System.out.printf("%n%n ---------------- Aufgabe 2 ----------%n%n");
			int[] iarr1 = { 4,2,8,1,6,2,4,1,8 };
			print(iarr1);

			
			System.out.printf("%n%n ---------------- Aufgabe 3 ----------%n%n");
			String s1 = "Hallo FIW!"; 
			// System.out.println(s1.charAt(9));
			char[] carr4 = stringToCharArray(s1);
			print(carr4);
			
			System.out.printf("%n%n ---------------- Aufgabe 4 ----------%n%n");
			print(carr2);
			char[] carr5 = filter(carr2, 'c');
			print(carr5);
			carr5 = filter(carr2, 'a');
			print(carr5);
			carr5 = filter(carr2, 'b');
			print(carr5);
			carr5 = filter(carr2, 'd');
			print(carr5);
			
			System.out.printf("%n%n ---------------- Aufgabe 5 ----------%n%n");
			int[] iarr2 = minAndMax(iarr1);
			print(iarr2);
			System.out.println("Minimum : " + iarr2[0] + " Maximum : " + iarr2[1]);
			int[] iarr3 = { 4 };
			iarr2 = minAndMax(iarr3);
			print(iarr2);
			System.out.println("Minimum : " + iarr2[0] + " Maximum : " + iarr2[1]);
			
			System.out.printf("%n%n ---------------- Aufgabe 6 ----------%n%n");
			int[] iarr4 = reverse(iarr1);
			print(iarr1);
			print(iarr4);
			
			System.out.printf("%n%n ---------------- Zusatzaufgabe ----------%n%n");
			System.out.println(containsDoublets(carr2));
			char[] carr6 = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'};
			char[] carr7 = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'a'};
			char[] carr8 = { };
			char[] carr9 = { 'a', 'a'};
			System.out.println(containsDoublets(carr6));
			System.out.println(containsDoublets(carr7));
			System.out.println(containsDoublets(carr8));
			System.out.println(containsDoublets(carr9));
		}

	}
	```

??? question "Video zu Übung 4"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=7e3aab6600df9757ab69fa8bb9804338&width=720&height=383&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="383" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>

	
??? note "Übung 5"
	
	1. Erstellen Sie ein package `uebungen.uebung5`. 
	2. Erstellen Sie in diesem package eine Klasse `Uebung5` mit `main()`-Methode.
	3. **Vorabinformation**: 
		- Wir implementieren Würfe eines Würfels. Alle Würfe werden in einem Array `statistics` gespeichert. Das Array hat die Länge 6 und beschreibt, wie oft eine 1, wie oft eine 2, ..., wie oft eine 6 gewürfelt wurde.	

			![statistics](./files/50_statistics.png)

	4. Erstellen Sie sich in der `main()`-Methode zunächst das `statistics`-Array. Alle Elemente des Arrays sind vom Typ `int` und es hat die Länge `6`. 

	5. Implementieren Sie folgende Methoden: 

		- Implementieren Sie eine `public static int throwDice()`-Methode, die eine Zufallszahl aus dem Wertebereich `[1, ... , 6]` erzeugt und zurückgibt.
		
		- Implementieren Sie eine Methode `public static void printThrow(int cast)`, die den Wert des übergebenen Wurfes (`cast`) wie folgt ausgibt (Beispiel `cast==5`):
			```bash
			Es wurde eine 5 gewuerfelt
			```
		
		- Testen Sie beide Methoden, indem Sie in der `main()`-Methode eingeben:
			```java
			System.out.printf("%n%n------------------- Test throwDice and printThrow -------------------%n%n");
			for(int index=0; index<10; index++)
			{
				int cast = throwDice();
				printThrow(cast);
			}
			```

			Sie sollten eine Ausgabe in folgender Form bekommen (Zufallszahlen):
			```bash		
			------------------- Test throwDice and printThrow -------------------

			Es wurde eine 5 gewuerfelt
			Es wurde eine 4 gewuerfelt
			Es wurde eine 6 gewuerfelt
			Es wurde eine 5 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 4 gewuerfelt
			Es wurde eine 1 gewuerfelt
			Es wurde eine 5 gewuerfelt
			Es wurde eine 6 gewuerfelt
			Es wurde eine 6 gewuerfelt
			```

		- Implementieren Sie eine Methode `public static int[] insertIntoStatistics(int[] statistics, int cast)`. Das `statistics`-Array wird als Parameter übergeben und das `statistics`-Array selbst wird auch wieder zurückgegeben! Im `statistics`-Array wird der Wert an der Stelle um `1` erhöht, der dem Wurf `cast` entspricht. D.h. wurde eine `1` gewürfelt, wird der Wert im Index `0` um `1` erhöht, wurde eine `2` gewürfelt, der Wert im Index `1` usw. (siehe auch oben die Abbildung zu `statistics`)

		- Implementieren Sie eine Methode `public static void printStatistics(int[] statistics)`, die das `statistics`-Array wie folgt auf die Konsole ausgibt. <br/>

			Angenommen, das `statistics`-Array ist so befüllt: `[ 3,8,4,5,8,2 ]`, dann ist die Ausgabe auf der Konsole:

			```bash
			[ (3 x 1), (8 x 2), (4 x 3), (5 x 4), (8 x 5), (2 x 6) ]
			```

		- Testen Sie beide Methoden, indem Sie in der `main()`-Methode eingeben:
			```java			
			System.out.printf("%n%n------------------ Test insert- and printStatistics -----------------%n%n");
			for(int index=0; index<100; index++)
			{
				int cast = throwDice();
				statistics = insertIntoStatistics(statistics, cast);
			}
			printStatistics(statistics);	
			```

			Es wird angenommen, dass Sie das `statistics`-Array bereits gleich am Anfang in der `main()` erzeugt haben - wenn nicht, können Sie das auch hier machen. Beachten Sie den Aufruf von `statistics = insertIntoStatistics(statistics, cast);`. Die `insertIntoStatistics()`-Methode bekommt das `statistics`-Array als Parameter übergeben, gibt es selbst wieder zurück und in der `main()`-Methode speichern wir die Rückgabe wieder in der `statistics`-Referenz. Das ist zwar so gar nicht nötig, aber das lernen wir erst, wenn es um Objekte geht. Jetzt ist es völlig in Ordnung, das so zu machen. 

			Sie sollten eine Ausgabe in folgender Form bekommen (Zufallszahlen):
			```bash		
			------------------ Test insert- and printStatistics -----------------

			[  (20 x 1), (13 x 2), (16 x 3), (15 x 4), (19 x 5), (17 x 6) ]
			```

		- Implementieren Sie eine Methode `public static int sumOfStatistics(int[] statistics)`, die eine Summe über alle Werte im `statistics`-Array wie folgt berechnet: <br/>

			**Beispiel**: Angenommen, das Array ist so befüllt: `[ 3,8,4,5,8,2 ]`, dann ist die Summe: `3x1 + 8x2 + 4x3 + 5x4 + 8x5 + 2x6 = 3 + 16 + 12 + 20 + 40 + 12 = 103`. Die Summe `103` wird zurückgegeben.  

		- Testen Sie die Methode, indem Sie in der `main()`-Methode eingeben:
			```java			
			System.out.printf("%n%n--------------------- Test sumOfStatistics --------------------------%n%n");
			printStatistics(statistics);
			int sumTest = sumOfStatistics(statistics);
			System.out.println("Summe = " + sumTest);
			```

			Das `statistics`-Array ist ja bereits oben befüllt worden, das müssen wir hier also nicht mehr machen. Sie sollten eine Ausgabe in folgender Form bekommen (Zufallszahlen):
			```bash		
			--------------------- Test sumOfStatistics --------------------------

			[  (14 x 1), (15 x 2), (11 x 3), (16 x 4), (27 x 5), (17 x 6) ]
			Summe = 378
			```

		- **Zusatz:** Implementieren Sie eine Methode `public static int throwDiceUntilTarget(int target, int[] statistics)`, die so lange einen Würfel würfelt, bis als Summe der Augen das `target` erreicht ist. Die Anzahl der Würfe wird zurückgegeben. In dieser Methode erfolgen folgende Aufrufe:
			- nach jedem Wurf (`throwDice()`) wird der Wurf ausgegeben (`printThrow()`) 
			- jeder Wurf wird in das `statistics`-Array eingetragen (`insertIntoStatistics()`)
			- nach jedem Wurf wird die Summme aller Augen aller bisherigen Würfe ermittelt (`sumOfStatistics()`). 
			- so lange die Summe kleiner ist als das `target`, wird weiter gewürfelt

		- Testen Sie die Methode, indem Sie in der `main()`-Methode eingeben:
			```java				
			System.out.printf("%n%n------------------- Test throwDiceUntilTarget -----------------------%n%n");
			statistics = new int[6];	// altes Array war schon befuellt 
			final int TARGET = 100;
			int tries = throwDiceUntilTarget(TARGET, statistics);
			printStatistics(statistics);
			int sum = sumOfStatistics(statistics);
			System.out.println("Es wurden " + tries + " Versuche benötigt, um " + sum + " Punkte zu erzielen.");
			```

			Da das `statistics`-Array zuvor bereits befüllt war, erstellen wir es für das Testen dieser Methode nochmal neu. Sie sollten eine Ausgabe in folgender Form bekommen (Zufallszahlen):
			```bash		
			------------------- Test throwDiceUntilTarget -----------------------

			Es wurde eine 5 gewuerfelt
			Es wurde eine 1 gewuerfelt
			Es wurde eine 5 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 5 gewuerfelt
			Es wurde eine 2 gewuerfelt
			Es wurde eine 5 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 4 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 1 gewuerfelt
			Es wurde eine 1 gewuerfelt
			Es wurde eine 2 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 6 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 2 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 2 gewuerfelt
			Es wurde eine 6 gewuerfelt
			Es wurde eine 4 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 1 gewuerfelt
			Es wurde eine 4 gewuerfelt
			Es wurde eine 3 gewuerfelt
			Es wurde eine 4 gewuerfelt
			Es wurde eine 1 gewuerfelt
			Es wurde eine 6 gewuerfelt
			[  (5 x 1), (4 x 2), (11 x 3), (4 x 4), (4 x 5), (3 x 6) ]
			Es wurden 31 Versuche benötigt, um 100 Punkte zu erzielen.
			```

			Es muss das `target` nicht exakt getroffen werden, das ist Zufall. Es stoppt, sobald `100` oder mehr Punkte erreicht wurden. 



??? question "Eine mögliche Lösung für Übung 5"
	```java 
	package uebungen.uebung5;

	import java.util.Random;

	public class Uebung5
	{
		public static int throwDice()
		{
			Random r = new Random();
			int wurf = r.nextInt(6) + 1;		
			return wurf;
		}
		
		public static void printThrow(int cast)
		{
			System.out.println("Es wurde eine " + cast + " gewuerfelt");
		}
		
		public static int[] insertIntoStatistics(int[] statistics, int cast)
		{
			if(cast>=1 && cast<=6)
			{
				statistics[cast-1]++;
			}
			return statistics;
		}
		
		public static void printStatistics(int[] statistics)
		{
			System.out.print("[ ");
			for (int index = 0; index < statistics.length; index++)		// index = index + 1
			{
				if(index < statistics.length-1)
				{
					System.out.print("(" + statistics[index] + " x " + (index+1) + "), ");
				}
				else 	// index == statistics.length-1
				{
					System.out.print("(" + statistics[index] + " x " + (index+1) + ")");
				}
			}
			System.out.println(" ]");
		}
		
		public static int sumOfStatistics(int[] statistics)
		{
			int sum = 0;
			
			for (int index = 0; index < statistics.length; index++)
			{
				sum = sum + (statistics[index] * (index+1));
			}
			
			return sum;
		}
		
		public static int throwDiceUntilTarget(int target, int[] statistics)
		{
			int tries = 0;
			int cast = throwDice();
			printThrow(cast);			// Nebeneffekt - nicht so gut!
			tries++;
			insertIntoStatistics(statistics, cast);
			int sum = sumOfStatistics(statistics);
			while(sum < target)
			{
				cast = throwDice();
				printThrow(cast);		// Nebeneffekt - nicht so gut!
				tries++;
				insertIntoStatistics(statistics, cast);
				sum = sumOfStatistics(statistics);
			}
			return tries;
		}

		public static void main(String[] args)
		{
			int[] statistics = new int[6];
			
			System.out.printf("%n%n------------------- Test throwDice and printThrow -------------------%n%n");
			for(int index=0; index<10; index++)
			{
			    int cast = throwDice();
			    printThrow(cast);
			}
			
			System.out.printf("%n%n------------------ Test insert- and printStatistics -----------------%n%n");
			for(int index=0; index<100; index++)
			{
			    int cast = throwDice();
			    statistics = insertIntoStatistics(statistics, cast);
			}
			printStatistics(statistics);    
			
			System.out.printf("%n%n--------------------- Test sumOfStatistics --------------------------%n%n");
			printStatistics(statistics);
			int sumTest = sumOfStatistics(statistics);
			System.out.println("Summe = " + sumTest);
			
			System.out.printf("%n%n------------------- Test throwDiceUntilTarget -----------------------%n%n");
			statistics = new int[6];    // altes Array war schon befuellt 
			final int TARGET = 100;
			int tries = throwDiceUntilTarget(TARGET, statistics);
			printStatistics(statistics);
			int sum = sumOfStatistics(statistics);
			System.out.println("Es wurden " + tries + " Versuche benötigt, um " + sum + " Punkte zu erzielen.");
		}

	}
	```

??? question "Video zu Übung 5"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=399b328c0d82e698936e2df57c6d87d0&width=720&height=383&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="383" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>

	
??? note "Übung 6"
	
	1. Erstellen Sie ein package `uebungen.uebung6`. 
	2. Erstellen Sie in diesem package eine Klasse `Konto` (ohne `main()`-Methode!)
	3. Erstellen Sie in diesem package eine Klasse `Testklasse` mit `main()`-Methode	
	4. Erstellen Sie in der Klasse `Konto` zwei Objektvariablen
		- `guthaben` vom Typ `double` --> nur in der Klasse sichtbar!
		- `pin` vom Typ `int`	--> ebenfalls nur in der Klasse sichtbar!
	5. Erstellen Sie in der Klasse `Konto` einen Konstruktor für `Konto`
		- diesem Konstruktor wird als Parameter `int pPin` übergeben
		- mit dem Wert des Parameters wird innerhalb des Konstruktors der Wert von `pin` initialisiert
		- Initialisieren Sie im Konstruktor auch die Objektvariable `guthaben`. Sie bekommt den Wert `0.0` (hierfür haben wir also keinen Parameter, wir setzen den initialen Wert einfach generell auf `0.0`)
	6. Erstellen Sie in der Klasse `Konto` eine Objektmethode `einzahlen(double betrag)`
		- diese Objektmethode ist `public` und gibt nichts zurück
		- in dieser Methode wird der Wert der Objektvariablen `guthaben` um den Wert von `betrag` erhöht
		- erzeugen Sie in dieser Methode außerdem eine Ausgabe in der Form:
			```bash
			Es wurden 100,00 Euro eingezahlt.
			```
			falls der `betrag` den Wert `100.0` hatte. Verwenden Sie am besten die `printf()`-Methode, um stets genau 2 Stellen nach dem Komma des Betrages auszugeben (siehe [hier](../hilfsklassen/#formatierung-von-gleikommazahlen)). 
	7. Geben Sie in der `main()`-Methode der `Testklasse` ein:
		```java
		Konto k1 = new Konto(1234);
		
		k1.einzahlen(100.0);
		k1.einzahlen(50.0);
		k1.einzahlen(150.0);
		```
		und führen Sie die `Testklasse` aus. Es sollten folgende Ausgaben erzeugt werden:
		```bash
		Es wurden 100,00 Euro eingezahlt.
		Es wurden 50,00 Euro eingezahlt.
		Es wurden 150,00 Euro eingezahlt.
		```
	8. Erstellen Sie in der Klasse `Konto` eine Objektmethode `kontoauszug(int pPin)`
		- diese Objektmethode ist `public` und gibt nichts zurück
		- einen `kontoauszug(int pPin)` können Sie nur "ziehen", wenn der Parameterwert von `pPin` mit dem Wert der Objektvariablen `pin` übereinstimmt
		- wird der richtige Wert für die `pin` übergeben, geben Sie das `guthaben` in der folgenden Form aus:
			```bash
			Ihr aktuelles Guthaben betraegt 300,00 Euro.
			```
			falls `guthaben` den Wert von `300.0` hat. 
		- wird ein falscher Wert für die `pin` übergeben, geben Sie folgende Ausgabe aus:
			```bash
			Falsche PIN!
			```
	9. Erweitern Sie die `main()`-Methode der Testklasse um folgende Anweisungen:
		```java
		k1.kontoauszug(1235); 		// Falsche PIN!
		k1.kontoauszug(1234); 	
		``` 
		und führen Sie die `Testklasse` aus. Es sollten folgende (weitere) Ausgaben erzeugt werden:
		```bash
		Falsche PIN!
		Ihr aktuelles Guthaben betraegt 300,00 Euro.
		```
	10. Erstellen Sie in der Klasse `Konto` eine Objektmethode `auszahlen(int pPin, double betrag)`
		- diese Objektmethode ist `public` und gibt nichts zurück
		- es kann nur etwas ausgezahlt werden, wenn der Parameterwert von `pPin` mit dem Wert der Objektvariablen `pin` übereinstimmt
		- stimmen die Werte nicht überein, geben Sie erneut 
			```bash
			Falsche PIN!
			```
			aus. 
		- stimmt der `pin`-Wert, dann müssen Sie prüfen, ob das `guthaben` reicht, um `betrag` auszuzahlen. Ist nicht genug `guthaben` vorhanden, dann geben Sie aus
			```bash
			Ihr Guthaben reicht nicht, um 400,00 Euro auszuzahlen.
			``` 
			falls `betrag` den Wert `400.0` hatte. 
		- wenn der `pin`-Wert stimmt und genug `guthaben` vorhanden ist, um den `betrag` auszuzahlen, dann reduzieren Sie `guthaben` um den entsprechenden `betrag` und geben aus
			```bash
			Es wurden 100,00 Euro ausgezahlt.
			```
			falls der `betrag` den Wert `100.0` hatte.
	11. Erweitern Sie die `main()`-Methode der Testklasse um folgende Anweisungen:
		```java
		k1.auszahlen(1235, 100.0); 	// Falsche PIN!
		k1.auszahlen(1234, 100.0); 	
		k1.kontoauszug(1234); 		
		k1.auszahlen(1234, 300.0);	// Guthaben reicht nicht
		k1.auszahlen(1234, 200.0); 	
		k1.kontoauszug(1234); 	
		``` 
		und führen Sie die `Testklasse` aus. Es sollten folgende (weitere) Ausgaben erzeugt werden:
		```bash
		Falsche PIN!
		Es wurden 100,00 Euro ausgezahlt.
		Ihr aktuelles Guthaben betraegt 200,00 Euro.
		Ihr Guthaben reicht nicht, um 300,00 Euro auszuzahlen.
		Es wurden 200,00 Euro ausgezahlt.
		Ihr aktuelles Guthaben betraegt 0,00 Euro.
		```
	12. **Zusatz:** 
		- Erweitern Sie die Klasse um eine weitere Objektvariable `private double dispogrenze`
		- Initialisieren Sie diese Variable innerhalb des Konstruktors (ohne weiteren Parmeter) auf den Wert `-1000.0`. Sie dürfen somit Ihr Konto um `1000.00 Euro` überziehen.
		- Passen Sie die `auszahlen()`-Methode entsprechend an, so dass es auch möglich ist, einen `betrag` auszuzahlen, so lange man nicht unter die `dispogrenze` fällt.
		- Erstellen Sie eine Methode `public void zinsenZahlen()`.
			- Erstellen Sie in dieser Methode zwei [Konstanten](../variablen/#konstanten)
				- `DISPOZINSEN` vom Typ `double` bekommt den Wert `12.0` (soll `12%` entsprechen) und
				- `GUTHABENZINSEN` vom Typ `double` bekommt den Wert `0.5` (soll `0.5%` entsprechen) 
			- Berechnen Sie innerhalb der Methode die Zinsen für das Konto
				- `DISPOZINSEN` werden fällig (werden von `guthaben` abgezogen), falls `guthaben` negativ ist
				- `GUTHABENZINSEN` werden gewährt (werden zu `guthaben` addiert), falls `guthaben` positiv ist
				- passen Sie den Wert von `guthaben` entsprechend an
				- erzeugen Sie entsprechende Ausgaben, z.B. 
					```bash
					Ihnen wurden 18,00 Euro Zinsen abgebucht.
					```
					bzw.
					```bash
					Ihnen wurden 4,16 Euro Zinsen gutgeschrieben.
					```
		- Angenommen, die gesamte `main()`-Methode sieht jetzt so aus:
			```java
			public static void main(String[] args)
			{
				Konto k1 = new Konto(1234);
				
				k1.einzahlen(100.0);
				k1.einzahlen(50.0);
				k1.einzahlen(150.0);
				
				k1.kontoauszug(1235); 		// Falsche PIN!
				k1.kontoauszug(1234); 		
				
				k1.auszahlen(1235, 100.0); 	// Falsche PIN!
				k1.auszahlen(1234, 100.0); 	
				k1.kontoauszug(1234); 		
				k1.auszahlen(1234, 300.0);	
				k1.auszahlen(1234, 200.0); 	
				k1.kontoauszug(1234); 
				
				k1.einzahlen(150.0);
				k1.kontoauszug(1234); 		
				k1.zinsenZahlen();
				k1.kontoauszug(1234); 		
				k1.einzahlen(1000.0);
				k1.kontoauszug(1234); 		
				k1.zinsenZahlen();
				k1.kontoauszug(1234); 
			}
			```
			dann sollten Sie folgende Ausgabe erzeugen (gilt nur für **Zusatz**!):
			```bash
			Es wurden 100,00 Euro eingezahlt.
			Es wurden 50,00 Euro eingezahlt.
			Es wurden 150,00 Euro eingezahlt.
			Falsche PIN!
			Ihr aktuelles Guthaben betraegt 300,00 Euro.
			Falsche PIN!
			Es wurden 100,00 Euro ausgezahlt.
			Ihr aktuelles Guthaben betraegt 200,00 Euro.
			Es wurden 300,00 Euro ausgezahlt.
			Es wurden 200,00 Euro ausgezahlt.
			Ihr aktuelles Guthaben betraegt -300,00 Euro.
			Es wurden 150,00 Euro eingezahlt.
			Ihr aktuelles Guthaben betraegt -150,00 Euro.
			Ihnen wurden 18,00 Euro Zinsen abgebucht.
			Ihr aktuelles Guthaben betraegt -168,00 Euro.
			Es wurden 1000,00 Euro eingezahlt.
			Ihr aktuelles Guthaben betraegt 832,00 Euro.
			Ihnen wurden 4,16 Euro Zinsen gutgeschrieben.
			Ihr aktuelles Guthaben betraegt 836,16 Euro.
			```

??? question "Eine mögliche Lösung für Übung 6"
	=== "Konto.java"
		```java 
		package uebungen.uebung6;

		public class Konto
		{
			private double guthaben;
			private int pin;
			private double dispogrenze;
			
			public Konto(int pPin)
			{
				guthaben = 0;
				pin = pPin;
				dispogrenze = -1000.0;
			}
			
			public void einzahlen(double betrag)
			{
				guthaben = guthaben + betrag;
				System.out.printf("Es wurden %.2f Euro eingezahlt.%n", betrag);
			}
			
			public void auszahlen(int pPin, double betrag)
			{
				if(pin==pPin)
				{
					if(guthaben - dispogrenze >= betrag)
					{
						guthaben = guthaben - betrag;
						System.out.printf("Es wurden %.2f Euro ausgezahlt.%n", betrag);
					}
					else
					{
						System.out.printf("Ihr Guthaben reicht nicht, um %.2f Euro auszuzahlen.%n", betrag);
					}
				}
				else
				{
					System.out.println("Falsche PIN!");
				}
			}
			
			public void kontoauszug(int pPin)
			{
				if(pin==pPin)
				{
					System.out.printf("Ihr aktuelles Guthaben betraegt %.2f Euro.%n", guthaben);
				}
				else
				{
					System.out.println("Falsche PIN!");
				}
			}
			
			public void zinsenZahlen()
			{
				final double DISPOZINSEN = 12.0;
				final double GUTHABENZINSEN = 0.5;
				if(guthaben >0)
				{
					double zinsen = guthaben * GUTHABENZINSEN / 100.0;
					guthaben = guthaben + zinsen;
					System.out.printf("Ihnen wurden %.2f Euro Zinsen gutgeschrieben.%n", zinsen);
				}
				else
				{
					double zinsen = guthaben * DISPOZINSEN / 100.0;		// ist negativ!
					guthaben = guthaben + zinsen;
					System.out.printf("Ihnen wurden %.2f Euro Zinsen abgebucht.%n", -zinsen);
				}
			}
		}
		```
	=== "Testklasse.java"
		```java 
		package uebungen.uebung6;

		public class Testklasse
		{

			public static void main(String[] args)
			{
				Konto k1 = new Konto(1234);
				
				k1.einzahlen(100.0);
				k1.einzahlen(50.0);
				k1.einzahlen(150.0);
				
				k1.kontoauszug(1235); 		// Falsche PIN!
				k1.kontoauszug(1234); 		
				
				k1.auszahlen(1235, 100.0); 	// Falsche PIN!
				k1.auszahlen(1234, 100.0); 	
				k1.kontoauszug(1234); 		
				k1.auszahlen(1234, 300.0);	
				k1.auszahlen(1234, 200.0); 	
				k1.kontoauszug(1234); 
				
				k1.einzahlen(150.0);
				k1.kontoauszug(1234); 		
				k1.zinsenZahlen();
				k1.kontoauszug(1234); 		
				k1.einzahlen(1000.0);
				k1.kontoauszug(1234); 		
				k1.zinsenZahlen();
				k1.kontoauszug(1234); 
			}
		}
		```



??? note "Übung 7"
	
	1. Erstellen Sie ein package `uebungen.uebung7`. 
	2. Erstellen Sie in diesem package eine Klasse `Rectangle` (ohne `main()`-Methode!)
	3. Erstellen Sie in diesem package eine Klasse `Testklasse` mit `main()`-Methode	
	4. Erstellen Sie in der Klasse `Rectangle` zwei Objektvariablen
		- `a` vom Typ `int` --> nur in der Klasse sichtbar!
		- `b` vom Typ `int`	--> ebenfalls nur in der Klasse sichtbar!
		`a` und `b` sollen die Seiten des Rechtecks sein. 
	5. Implementieren Sie einen parameterlosen Konstruktor `Rectangle()`, der für die Seite `a` den Wert `10` und für die Seite `b` den Wert `20` setzt. 
	6. Implementieren Sie einen parametrisierten Konstruktor `Rectangle(int a, int b)`, der die Parameterwerte zum Initialisieren der Seiten verwendet. 
	7. Implementieren Sie eine Objektmethode `public int area()`, die den Flächeninhalt des Rechtecks zurückgibt. 
	8. Implementieren Sie eine Objektmethode `public int perimeter()`, die den Umfang des Rechtecks zurückgibt. 
	9. Implementieren Sie eine Objektmethode `public String toString()`, die einen `String` mit allen Informationen des Rechtecks in der folgenden Form
		```bash
		Rectangle : ( a=10, b=20, area=200, perimeter=60 )
		```
		zurückgibt. 
	10. Implementieren Sie eine Objektmethode `public void print()`, die den durch `toString()` erzeugten `String` auf die Konsole ausgibt.
	11. Geben Sie in der `main()`-Methode der `Testklasse` ein:
		```java
		// Objekte erzeugen
		Rectangle r1 = new Rectangle();
		Rectangle r2 = new Rectangle(12, 18);
		Rectangle r3 = new Rectangle(40, 5);
		Rectangle r4 = new Rectangle(20, 10);
		Rectangle r5 = new Rectangle(11, 21);
		
		System.out.printf("%n%n--------------- print()-Methode -----------------%n%n");
		r1.print();
		r2.print();
		r3.print();
		r4.print();
		r5.print();
		```
		und führen Sie die `Testklasse` aus. Es sollten folgende Ausgaben erzeugt werden:
		```bash
		--------------- print()-Methode -----------------

		Rectangle : ( a=10, b=20, area=200, perimeter=60 )
		Rectangle : ( a=12, b=18, area=216, perimeter=60 )
		Rectangle : ( a=40, b= 5, area=200, perimeter=90 )
		Rectangle : ( a=20, b=10, area=200, perimeter=60 )
		Rectangle : ( a=11, b=21, area=231, perimeter=64 )
		```
	12. Implementieren Sie eine Objektmethode `public boolean sidesAreEqual(Rectangle r)`, die ein `true` zurückgibt, wenn die Seiten des aufrufenden Objektes gleich den Seiten des Rectangle `r` sind. Beachten Sie, dass das Rechteck auch gedreht noch gleiche Seiten haben soll, also `a=10, b=20` ist nicht nur mit `a=10, b=20` gleich, sondern auch mit `a=20, b=10`. Wenn die Seiten ungleich sind, gibt die Methode ein `false` zurück.
	13. Implementieren Sie eine Objektmethode `public boolean areasAreEqual(Rectangle r)`, die ein `true` zurückgibt, wenn die Flächeninhalte des aufrufenden Objektes und des Rectangle `r` gleich sind. Ansonsten `false`.
	14. Implementieren Sie eine Objektmethode `public boolean perimetersAreEqual(Rectangle r)`, die ein `true` zurückgibt, wenn die Umfänge des aufrufenden Objektes und des Rectangle `r` gleich sind. Ansonsten `false`.
	15. Implementieren Sie eine Objektmethode `public void printComparison(Rectangle r)`, die die Vergleiche mit `r` in der unten dargestellten Form ausgibt. Rufen Sie in der Methode die Methoden `print()` (oder `toString()`), `sidesAreEqual()`, `areasAreEqual()` und `perimetersAreEqual()` auf. 
	16. Fügen Sie in der `main()`-Methode der `Testklasse` folgende Anweisungen hinzu:
		```java	
		System.out.printf("%n%n---------- printComparison()-Methode ------------%n%n");
		r1.printComparison(r2);
		r1.printComparison(r3);
		r1.printComparison(r4);
		r1.printComparison(r5);
		```
		und führen Sie die `Testklasse` aus. Es sollten folgende zusätzliche Ausgaben erzeugt werden:
		```bash
		---------- printComparison()-Methode ------------

		this      Rectangle : ( a=10, b=20, area=200, perimeter=60 ) 
		the other Rectangle : ( a=12, b=18, area=216, perimeter=60 ) 
		sides are not equal 
		areas are not equal 
		perimeters are equal 

		this      Rectangle : ( a=10, b=20, area=200, perimeter=60 ) 
		the other Rectangle : ( a=40, b= 5, area=200, perimeter=90 ) 
		sides are not equal 
		areas are equal 
		perimeters are not equal 

		this      Rectangle : ( a=10, b=20, area=200, perimeter=60 ) 
		the other Rectangle : ( a=20, b=10, area=200, perimeter=60 ) 
		sides are equal 
		areas are equal 
		perimeters are equal 

		this      Rectangle : ( a=10, b=20, area=200, perimeter=60 ) 
		the other Rectangle : ( a=11, b=21, area=231, perimeter=64 ) 
		sides are not equal 
		areas are not equal 
		perimeters are not equal 
		```
	17. **Zusatz:** 
		- Implementieren Sie eine Objektmethode `public double diagonal()`, die die Länge einer Diagonalen des Rechtecks zurückgibt. 
		- Erweitern Sie die `toString()`-Methode um die Ausgabe dieser Länge wie folgt:
			```bash
			Rectangle : ( a=10, b=20, area=200, perimeter=60, diagonal=22,361 )
			Rectangle : ( a=12, b=18, area=216, perimeter=60, diagonal=21,633 )
			Rectangle : ( a=40, b= 5, area=200, perimeter=90, diagonal=40,311 )
			Rectangle : ( a=20, b=10, area=200, perimeter=60, diagonal=22,361 )
			Rectangle : ( a=11, b=21, area=231, perimeter=64, diagonal=23,707 )
			``` 
			Es sollen drei Nachkommastellen der Länge der Diagonalen ausgegeben werden.
		- Implementieren Sie eine Objektmethode `public void scale(int factor)`. Diese Methode "skaliert" das Rechteck um den Faktor `factor`, genauer gesagt, wird der **Flächeninhalt** um diesen Faktor skaliert. Die neuen Seiten sollen das gleiche Verhältnis zueinander haben, wie die alten Seiten. Geben Sie die neuen Seitenlängen in der folgenden Form auf die Konsole aus (siehe nächsten Punkt `main()`).
		- Fügen Sie in der `main()`-Methode der `Testklasse` folgende Anweisungen hinzu:
		```java	
		System.out.printf("%n%n--------------- sclae()-Methode -----------------%n%n");
		r1.scale(2);
		r2.scale(2);
		r3.scale(2);
		r4.scale(2);
		r5.scale(2);
		r1.scale(10);
		r2.scale(10);
		r3.scale(10);
		r4.scale(10);
		r5.scale(10);
		```
		und führen Sie die `Testklasse` aus. Es sollten folgende zusätzliche Ausgaben erzeugt werden:
		```bash
		--------------- sclae()-Methode -----------------

		newArea=  400,00 newA= 14,14 newB= 28,28 check (newA*newB)= 400,00
		newArea=  432,00 newA= 16,97 newB= 25,46 check (newA*newB)= 432,00
		newArea=  400,00 newA= 56,57 newB=  7,07 check (newA*newB)= 400,00
		newArea=  400,00 newA= 28,28 newB= 14,14 check (newA*newB)= 400,00
		newArea=  462,00 newA= 15,56 newB= 29,70 check (newA*newB)= 462,00
		newArea= 2000,00 newA= 31,62 newB= 63,25 check (newA*newB)=2000,00
		newArea= 2160,00 newA= 37,95 newB= 56,92 check (newA*newB)=2160,00
		newArea= 2000,00 newA=126,49 newB= 15,81 check (newA*newB)=2000,00
		newArea= 2000,00 newA= 63,25 newB= 31,62 check (newA*newB)=2000,00
		newArea= 2310,00 newA= 34,79 newB= 66,41 check (newA*newB)=2310,00
		```

## Weitere Übungsaufgaben (selbständiges Üben)

Hier werden lose und unregelmäßig Übungsaufgaben gesammelt. Am Ende des Semesters soll dann hier eine große Sammlung von Übungsaufgaben entstanden sein, die der eigenen Kontrolle dienen sollen. Die Übungen sind thematisch sortiert, allerdings überschneiden sich manche Themen in einigen Übungen. 

### Ausdrücke

??? note "gleich 12"
	Welche der folgenden Ausdrücke haben den Wert 12?
	``` bash
	a) 12 % 13
	b) 24 % 2
	c) 24/2
	d) 25/2
	```
	Versuchen Sie zunächst, die richtige Antwort im Kopf zu ermitteln und erstellen dann ein geeignetes Programm, das Ihnen den jeweiligen Wert des Ausdrucks ausgibt.


??? note "Pre- und Postoperator"
	Welchen Wert hat die Variable `c` nach Ausführen der Anweisungen?
	``` bash
	int a = 300;
	int b = a++;
	int c = --b;
	```
	Begründen Sie die richtige Antwort! Was passiert durch die Anweisungen?


### Schleifen

??? note "Laufvariablen"
	Welche der Schleifen gibt alle Elemente des Arrays `nums` aus? Das Array enthält genau 4 Zahlen.
	``` bash
	a) for (int i = 0; i < nums.length; i++) { System.out.println(nums[i]); }
	b) for (int i = 0; i <= 3; i++) { System.out.println(nums[i]); }
	c) for (int i = 1; i <= 3; i++) { System.out.println(nums[i]); }
	d) for (int i = 0; i <= 3; i++) { System.out.println(nums[0]); }
	e) for (int i = nums.length - 1; i >= 0; i--) { System.out.println(nums[i]); }
	```

??? note "Quadratzahl"
	Schreiben Sie eine Methode `istQuadratzahl(int zahl)`, die ein `true` zurückgibt, wenn `zahl` eine Quadratzahl ist und ein `false` sonst. Die `Math`-Klasse soll nicht verwendet werden.

??? note "Primzahl"
	Schreiben Sie eine Methode `printPrimzahlenBisN(int n)`, die alle Primzahlen bis `n` auf die Konsole ausgibt. Schreiben Sie sich dazu eine Hilfsmethode `istPrimzahl(int zahl)`, die ein `true` zurückgibt, wenn `zahl` eine Primzahl ist und ein `false`, wenn nicht.  

??? note "int-Zahl umdrehen"
	Schreiben Sie eine Methode `int reverseInt(int number)`, die die übergebene `number` umdreht und die umgedrehte `int`-Zahl zurückgibt, also z.B. aus `1234` wird `4321`. Weitere Beispiele: aus `-123` wird `-321` und aus `1200` wird `21`. 

??? note "Zahlen raten"
	Schreiben Sie folgendes Programm. Mithilfe von `Random` "denkt" sich das Programm eine Zahl zwischen `0` und `100` aus. Sie können über die Konsole dann eine Zahl eingeben. Das Programm sagt Ihnen, ob die "gedachte" Zahl größer oder kleiner als die von Ihnen eingegebene Zahl ist. Sie geben solange eine Zahl ein, bis Sie die "gedachte" Zahl erraten haben. 

??? note "Binärzahl"
	Schreiben Sie eine Methode, die eine `short`-Zahl in eine Binärzahl umwandelt. Diese Binärzahl speichern Sie als `long`. Z.B. ist `32` binär `100000`, `63` ist `111111`, `48` ist `110000` usw.

### Arrays

??? note "Implementieren Sie eine Methode, die zwei als Parameter übergebene sortierte `int`-Arrays zu einem sortierten `int`-Array zusammenfügt. Geben Sie das neue sortierte Array zurück"

??? note "Implementieren Sie eine Methode, die zwei als Parameter übergebene unsortierte `int`-Arrays zu einem sortierten `int`-Array zusammenfügt. Geben Sie das neue sortierte Array zurück"

??? note "Implementieren Sie eine Methode `int[] explode(int number)`. Diese Methode erstellt ein `int[]`-Array, das wie folgt befüllt ist: Bsp. `number=5` --> `{1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5}`. Für jede Zahl `x` gibt es also `x` Einträge im Array bis einschließlich `number`"

### Wrapper-Klassen

??? note "Initialisierung einer Long-Variablen"
	Welche Anweisungen initialisieren eine Long-Variable korrekt?
	``` bash
	a) Long val = new Long(4321);
	b) Long val = 4321L;
	c) Long val = new Long("4321");
	d) Long val = Long.parseLong("4321");
	```

### Vererbung

??? note "Sichtbarkeitsmodifizierer"
	Gegeben sind die beiden Klassen - beide sind in verschiedenen Paketen:
	```java linenums="1"
	public class BaseClass {
    	??? int a;
	}
	```
	und
	```java linenums="1"
	public class DerivedClass extends BaseClass {
    	private int b;

    	public int sum() {
        	return a + b;
    	}
	}
	```
	Welche der folgenden Sichtbarkeitsmodifizierer können anstelle von `???` eingesetzt werden, damit das Programm compiliert werden kann?
	```bash
	a) protected
	b) keiner (default)
	c) public
	d) private
	``` 
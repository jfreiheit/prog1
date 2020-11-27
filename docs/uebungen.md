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
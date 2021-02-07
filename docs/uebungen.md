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
		System.out.printf("%n%n--------------- scale()-Methode -----------------%n%n");
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
		--------------- scale()-Methode -----------------

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

??? question "Eine mögliche Lösung für Übung 7"
	=== "Rectangle.java"
		```java 
		package uebungen.uebung7;

		public class Rectangle
		{
			private int a;
			private int b;
			
			public Rectangle()
			{
				this.a = 10;
				this.b = 20;
			}
			
			public Rectangle(int a, int b)
			{
				this.a = a;
				this.b = b;
			}
			
			public int area() 
			{
				return this.a * this.b;
			}
			
			public int perimeter()
			{
				return 2 * (this.a + this.b);
			}
			
			public String toString()
			{
				String s = String.format("Rectangle : ( a=%2d, b=%2d, area=%3d, perimeter=%2d, diagonal=%6.3f )", 
						this.a, this.b, this.area(), this.perimeter(), this.diagonal());
				return s;	
			}
			
			public void scale(int factor)
			{
				double newArea = factor * this.area();
				double aNew = Math.sqrt(factor * this.a * this.a);
				double bNew = Math.sqrt(factor * this.b * this.b);
				System.out.printf("newArea=%8.2f newA=%6.2f newB=%6.2f check (newA*newB)=%7.2f%n", newArea, aNew, bNew, (aNew*bNew));	
			}
			
			public boolean sidesAreEqual(Rectangle r)
			{
				return (this.a==r.a && this.b==r.b) ||
						(this.a==r.b && this.b==r.a);
			}
			
			public boolean areasAreEqual(Rectangle r)
			{
				return (this.area()==r.area());
			}
			
			public boolean perimetersAreEqual(Rectangle r)
			{
				return (this.perimeter()==r.perimeter());
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
			
			public void printComparison(Rectangle r)
			{
				String s = 	String.format("this      %50s %n", this.toString());
				s += 		String.format("the other %50s %n", r.toString());
				if(this.sidesAreEqual(r))
				{
					s += String.format("sides are equal %n");
				}
				else
				{
					s += String.format("sides are not equal %n");
				}
				if(this.areasAreEqual(r))
				{
					s += String.format("areas are equal %n");
				}
				else
				{
					s += String.format("areas are not equal %n");
				}
				if(this.perimetersAreEqual(r))
				{
					s += String.format("perimeters are equal %n");
				}
				else
				{
					s += String.format("perimeters are not equal %n");
				}
				System.out.println(s);
			}
			
			public double diagonal()
			{
				return Math.sqrt(this.a * this.a + this.b * this.b);
			}

			/*
			 * Zusatz aus Uebungsvideo
			 */
			public Rectangle doubleSides()
			{
				int newA = this.a * 2;
				int newB = this.b * 2;
				Rectangle newRec = new Rectangle(newA, newB);
				return newRec;
			}
			
		}
		```

	=== "Testklasse.java"
		```java 
		package uebungen.uebung7;

		public class Testklasse
		{

			public static void main(String[] args)
			{
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
				
				System.out.printf("%n%n---------- printComparison()-Methode ------------%n%n");
				r1.printComparison(r2);
				r1.printComparison(r3);
				r1.printComparison(r4);
				r1.printComparison(r5);
				
				System.out.printf("%n%n--------------- scale()-Methode -----------------%n%n");
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

				/*
				 * Zusatz aus Uebungsvideo
				 */
				System.out.printf("%n%n---------- doubleSides()-Methode ------------%n%n");
				Rectangle r6 = r1.doubleSides();	// Referenz auf neues Objekt wird gespeichert
				r1.print();
				r6.print();
				
				r2.print();
				r2.doubleSides().print();			// Referenz auf neues Objekt wird NICHT gespeichert
				
				r6.print();
			}

		}
		```

??? question "Video zu Übung 7"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=cf305eacfeab0b166b710bd1cdc9d7d1&width=720&height=450&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="450" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>

??? note "Übung 8"
	
	1. Erstellen Sie ein package `uebungen.uebung8`. 
	2. Erstellen Sie in diesem package eine Klasse `Wohnung` mit

		- den privaten Objektvariablen 
			- `qm` vom Typ `int`, (entspricht der Größe der Wohnung in m^2)
			- `anzZimmer` vom Typ `int`,
			- `etage` vom Typ `int` und 
			- `qmMiete` vom Typ `double` (entspricht dem Mietpreis pro m^2). 
		- einem parametrisierten Konstruktor Wohnung(int qm, int anzZimmer, int etage, double qmMiete). Die Werte der Parameter werden verwendet, um den Objektvariablen Werte zuzuweisen.
		- Gettern für alle Objektvariablen (`getQm()`, `getAnzZimmer()`, `getEtage()`, `getQmMiete()`)
		- einer Objektmethode `gesamtMiete()`, die die Gesamtmiete der Wohnung berechnet (`qm` * `qmMiete`) und diesen `double`-Wert zurückgibt. 
		- einer Objektmethode `billiger(Wohnung w)`, die ein `true` zurückgibt, wenn die Gesamtmiete des aufrufenden Objektes kleiner ist als die Gesamtmiete von `w`; `false` sonst.
		- einer Objektmethode `teurer(Wohnung w)`, die ein `true` zurückgibt, wenn die Gesamtmiete des aufrufenden Objektes größer ist als die Gesamtmiete von `w`; `false` sonst.
		- einer Objektmethode `toString()` die Details der Wohnung in folgender Form (ab inkl. 1. Etage aufwärts) als `String` zurückgibt (Beispielwerte):
			```bash
			2-Zimmer Wohnung mit 40 qm in der 4. Etage. Monatliche Miete: 360.00 Euro
			```
			Achtung! Sollte sich die Wohnung in der 0.Etage befinden, geben Sie die Details bitte wie folgt zurück (Beispielwerte):
			```bash
			1-Zimmer Wohnung mit 60 qm im Erdgeschoss. Monatliche Miete: 750.00 Euro`
			```

		- und einer Objektmethode `print()`, die den von `toString()`zurückgegebenen `String` auf der Konsole ausgibt

	2. Erstellen Sie im gleichen package eine Klasse `Testklasse` mit `main()`-Methode. Geben Sie in der `main()`-Methode Folgendes ein:
		```java
		System.out.printf("%n%n--------------------- Test Wohnung -------------------------%n%n");
		Wohnung w1 = new Wohnung(70, 3, 4, 12.50);
		Wohnung w2 = new Wohnung(40, 1, 0, 9.50);
		Wohnung w3 = new Wohnung(90, 4, 2, 11.10);
		Wohnung w4 = new Wohnung(60, 2, 0, 9.00);
		
		w1.print();
		w2.print();
		w3.print();
		w4.print();
		```	
		und führen Sie die `Testklasse` aus. Es sollten folgende zusätzliche Ausgaben erzeugt werden:
		```bash
		--------------------- Test Wohnung -------------------------

		3-Zimmer Wohnung mit 70qm in der 4. Etage. Monatliche Miete: 875,00 Euro
		1-Zimmer Wohnung mit 40qm im Erdgeschoss. Monatliche Miete: 380,00 Euro
		4-Zimmer Wohnung mit 90qm in der 2. Etage. Monatliche Miete: 999,00 Euro
		2-Zimmer Wohnung mit 60qm im Erdgeschoss. Monatliche Miete: 540,00 Euro
		```

	2. Erstellen Sie im gleichen package eine Klasse `Dachgeschosswohnung`. Diese erbt von `Wohnung`. 

		- Implementieren Sie einen parametrisierten Konstruktor `Dachgeschosswohnung(int qm, int anzZimmer, double qmMiete)`. Bei Aufruf des Konstruktors werden die entsprechenden Objektvariablen mit den Parameterwerten initialisiert. Die Objektvariable `etage` bekommt stets den Wert `5`. 
		- Überschreiben Sie die Methode `toString()`, so dass eine Zeichenkette der Form (Beispielwerte)
			```bash
			4-Zimmer DG-Wohnung mit 100 qm in der 5. Etage. Monatliche Miete: 1250.00 Euro
			```
			zurückgegeben wird.  

	3. Fügen Sie in der `main()`-Methode der `Testklasse` folgende Anweisungen hinzu:
		```java	
		System.out.printf("%n%n--------------- Test Dachgeschosswohnung -------------------%n%n");
		Dachgeschosswohnung dg1 = new Dachgeschosswohnung(70, 3, 15.50);
		Dachgeschosswohnung dg2 = new Dachgeschosswohnung(100, 4, 17.25);
		
		dg1.print();
		dg2.print();
		```
		und führen Sie die `Testklasse` aus. Es sollten folgende zusätzliche Ausgaben erzeugt werden:
		```bash
		--------------- Test Dachgeschosswohnung -------------------

		3-Zimmer DG-Wohnung mit 70qm in der 5. Etage. Monatliche Miete: 1085,00 Euro
		4-Zimmer DG-Wohnung mit 100qm in der 5. Etage. Monatliche Miete: 1725,00 Euro
		```

	4. Erstellen Sie im gleichen package eine Klasse `Haus`.  

		- Objektvariable ist `wohnungen` vom Typ `Wohnung[]` und nur in der Klasse sichtbar. 
		- Implementieren Sie eine Objektmethode `neueWohnung()`. Diese Methode gibt ein Objekt vom Typ `Wohnung` zurück. In dieser Methode wird zunächst ein `Random`-Objekt erzeugt. Mithilfe dieses `Random`-Objektes und der Objektmethode `nextInt(int bound)` der Klasse `Random` sollen zunächst nacheinander folgende Werte zufällig erzeugt werden:
			- Ein Wert für eine Quadratmeteranzahl `qm` aus dem Wertebereich `[20, 40, 60, 80, 100]` ( --> also zufällig eine dieser 5 Zahlen),
			- Ein Wert für die Anzahl der Zimmer `anzZimmer` aus dem Wertebereich `[1, 2, 3, 4, 5]` ( --> also zufällig eine dieser 5 Zahlen),
			- Ein Wert für die Etage `etage` aus dem Wertebereich `[0, 1, 2, 3, 4, 5]` ( --> also zufällig eine dieser 6 Zahlen),
			- Ein Wert für den Mietpreis pro Quadratmeter `qmMiete` aus dem Wertebereich `[8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5]` ( --> also zufällig eine dieser 10 Zahlen – Achtung hier `double`, Sie können aber trotzdem `nextInt(int bound)` verwenden, müssen dann aber geeignet multiplizieren und addieren).
		Erzeugen Sie mit diesen Werten ein neues `Wohnung`-Objekt und geben Sie dieses Objekt zurück.

		- Implementieren Sie einen parametrisierten Konstruktor `Haus(int anzWohnungen)`. Darin wird das `wohnungen`-Array erzeugt. Die Länge von `wohnungen` entspricht dem Wert von `anzWohnungen`.
		Befüllen Sie das `wohnungen`-Array vollständig mit Objekten vom Typ `Wohnungen`. Rufen Sie dazu für jedes Element des `wohnungen`-Arrays die Objektmethode `neueWohnung()` auf.<br/>
		**Tipp :** Jedes Element des `wohnungen`-Arrays ist nach dem Befüllen mit Objekten vom Typ `Wohnung` eine Referenzvariable auf ein `Wohnung`-Objekt, d.h. z.B. ist `this.wohnungen[0]` vom Typ `Wohnung` und zeigt auf ein `Wohnung`-Objekt. Die folgende Abbildung verdeutlicht das für den Fall, dass das `wohnungen`-Array die Länge `10` hat:
			![wohnungen](./files/85_wohnungen.png)	

		- Implementieren Sie eine Objektmethode `print()`. Bei Aufruf der Methode soll das `wohnungen`-Array wie folgt ausgegeben werden (Beispielwerte für Array-Länge `5`:)
			```bash 
			Das Haus besteht aus : 
			  5-Zimmer Wohnung mit 80qm im Erdgeschoss. Monatliche Miete: 1000,00 Euro
			  4-Zimmer Wohnung mit 60qm in der 5. Etage. Monatliche Miete: 480,00 Euro
			  2-Zimmer Wohnung mit 80qm in der 5. Etage. Monatliche Miete: 880,00 Euro
			  5-Zimmer Wohnung mit 100qm in der 2. Etage. Monatliche Miete: 1100,00 Euro
			  3-Zimmer Wohnung mit 80qm im Erdgeschoss. Monatliche Miete: 920,00 Euro
			```


	5. Fügen Sie in der `main()`-Methode der `Testklasse` folgende Anweisungen hinzu:
		```java	
		System.out.printf("%n%n---------------------- Test Haus ---------------------------%n%n");
		Haus h1 = new Haus(10);
		h1.print();
		```
		und führen Sie die `Testklasse` aus. Es sollten folgende zusätzliche Ausgaben erzeugt werden (Zufallswerte!):
		```bash
		---------------------- Test Haus ---------------------------

		Das Haus besteht aus : 
		  1-Zimmer Wohnung mit 80qm in der 4. Etage. Monatliche Miete: 840,00 Euro
		  3-Zimmer Wohnung mit 60qm in der 3. Etage. Monatliche Miete: 540,00 Euro
		  4-Zimmer Wohnung mit 80qm in der 3. Etage. Monatliche Miete: 1000,00 Euro
		  5-Zimmer Wohnung mit 60qm in der 3. Etage. Monatliche Miete: 540,00 Euro
		  2-Zimmer Wohnung mit 60qm im Erdgeschoss. Monatliche Miete: 510,00 Euro
		  3-Zimmer Wohnung mit 60qm in der 4. Etage. Monatliche Miete: 600,00 Euro
		  4-Zimmer Wohnung mit 20qm in der 3. Etage. Monatliche Miete: 250,00 Euro
		  4-Zimmer Wohnung mit 100qm in der 5. Etage. Monatliche Miete: 850,00 Euro
		  5-Zimmer Wohnung mit 20qm in der 2. Etage. Monatliche Miete: 160,00 Euro
		  2-Zimmer Wohnung mit 40qm in der 2. Etage. Monatliche Miete: 400,00 Euro
		```

	6. **Zusatz:** Erweitern Sie die Klasse `Haus` um folgende Objektmethoden:

		- eine Objektmethode `wohnungenInEtage(int etage)`. Diese Methode gibt ein `Wohnung[]`-Array zurück. Das zurückgegebene `Wohnung[]`-Array soll alle Wohnungen aus dem `wohnungen`-Array enthalten, die in der Etage liegen, die der Methode als Parameter übergeben wird (`etage`). Befindet sich keine Wohnung in der als Parameter übergeben Etage, so wird ein `Wohnung[]`-Array der Länge `0` zurückgegeben.
		- eine Objektmethode `print(Wohnung[] warr)`. Diese Methode gibt das als Parameter übergebene `warr`-Array auf der Konsole aus, in der Form (Bsp.:):
			```bash
			2-Zimmer Wohnung mit 100 qm in der 2. Etage. Monatliche Miete: 1250.00 Euro
			5-Zimmer Wohnung mit 100 qm in der 2. Etage. Monatliche Miete: 1000.00 Euro
			```
		- Testen der beiden Methoden in `main()`:
			```java
			System.out.printf("%n%n----- Test wohnungenInEtage() und print(Wohnung[]) ---------%n%n");
			for(int etage=0; etage<6; etage++)
			{
				System.out.println("Etage " + etage + " ---------------------------------------");
				h1.print(h1.wohnungenInEtage(etage));
				System.out.println();
			}
			```
			sollte folgende Ausgbabe erzeugen (Zufallswerte):
			```bash
			----- Test wohnungenInEtage() und print(Wohnung[]) ---------

			Etage 0 ---------------------------------------
			2-Zimmer Wohnung mit 60qm im Erdgeschoss. Monatliche Miete: 510,00 Euro

			Etage 1 ---------------------------------------

			Etage 2 ---------------------------------------
			5-Zimmer Wohnung mit 20qm in der 2. Etage. Monatliche Miete: 160,00 Euro
			2-Zimmer Wohnung mit 40qm in der 2. Etage. Monatliche Miete: 400,00 Euro

			Etage 3 ---------------------------------------
			3-Zimmer Wohnung mit 60qm in der 3. Etage. Monatliche Miete: 540,00 Euro
			4-Zimmer Wohnung mit 80qm in der 3. Etage. Monatliche Miete: 1000,00 Euro
			5-Zimmer Wohnung mit 60qm in der 3. Etage. Monatliche Miete: 540,00 Euro
			4-Zimmer Wohnung mit 20qm in der 3. Etage. Monatliche Miete: 250,00 Euro

			Etage 4 ---------------------------------------
			1-Zimmer Wohnung mit 80qm in der 4. Etage. Monatliche Miete: 840,00 Euro
			3-Zimmer Wohnung mit 60qm in der 4. Etage. Monatliche Miete: 600,00 Euro

			Etage 5 ---------------------------------------
			4-Zimmer Wohnung mit 100qm in der 5. Etage. Monatliche Miete: 850,00 Euro
			```

		- eine Objektmethode `teuersteWohnung()`. Diese Methode gibt die Wohnung aus dem `wohnungen`-Array zurück, die die höchste Gesamtmiete von allen Wohnungen aus dem `wohnungen`-Array hat.
		- Testen der Methode in `main()`:
			```java
			System.out.printf("%n%n--------------- Test teuersteWohnung() ---------------------%n%n");
			Wohnung teuerste = h1.teuersteWohnung();
			teuerste.print();
			```
			sollte folgende Ausgbabe erzeugen (Zufallswerte):
			```bash
			--------------- Test teuersteWohnung() ---------------------

			4-Zimmer Wohnung mit 80qm in der 3. Etage. Monatliche Miete: 1000,00 Euro
			```

		- eine Objektmethode `gesamtMieteHaus()`. Diese Methode gibt die Summe der Mieten aller Wohnungen im `wohnungen`-Array als `double` zurück. 
		- Testen der Methode in `main()`:
			```java
			System.out.printf("%n%n---------------- Test gesamtMieteHaus() --------------------%n%n");
			System.out.printf("Die Gesamtmiete fuer das Haus betraegt %.2f Euro.%n", h1.gesamtMieteHaus());
			```
			sollte folgende Ausgbabe erzeugen (Zufallswerte):
			```bash
			---------------- Test gesamtMieteHaus() --------------------

			Die Gesamtmiete fuer das Haus betraegt 5690,00 Euro.
			```

		- eine Objektmethode `sortieren()`. Diese Methode sortiert das `wohnungen`-Array nach Gesamtmieten aufsteigend (beginnend mit der billigsten Wohnung und endend mit der teuersten).
		- Testen der Methode in `main()`:
			```java
			System.out.printf("%n%n------------------- Test sortieren() -----------------------%n%n");
			h1.sortieren();
			h1.print();
			```
			sollte folgende Ausgbabe erzeugen (Zufallswerte):
			```bash
			------------------- Test sortieren() -----------------------

			Das Haus besteht aus : 
			  5-Zimmer Wohnung mit 20qm in der 2. Etage. Monatliche Miete: 160,00 Euro
			  4-Zimmer Wohnung mit 20qm in der 3. Etage. Monatliche Miete: 250,00 Euro
			  2-Zimmer Wohnung mit 40qm in der 2. Etage. Monatliche Miete: 400,00 Euro
			  2-Zimmer Wohnung mit 60qm im Erdgeschoss. Monatliche Miete: 510,00 Euro
			  3-Zimmer Wohnung mit 60qm in der 3. Etage. Monatliche Miete: 540,00 Euro
			  5-Zimmer Wohnung mit 60qm in der 3. Etage. Monatliche Miete: 540,00 Euro
			  3-Zimmer Wohnung mit 60qm in der 4. Etage. Monatliche Miete: 600,00 Euro
			  1-Zimmer Wohnung mit 80qm in der 4. Etage. Monatliche Miete: 840,00 Euro
			  4-Zimmer Wohnung mit 100qm in der 5. Etage. Monatliche Miete: 850,00 Euro
			  4-Zimmer Wohnung mit 80qm in der 3. Etage. Monatliche Miete: 1000,00 Euro
			```

??? question "Eine mögliche Lösung für Übung 8"
	=== "Wohnung.java"
		```java 
		package uebungen.uebung8;

		public class Wohnung
		{
			private int qm;
			private int anzZimmer;
			private int etage;
			private double qmMiete;
			
			public Wohnung(int qm, int anzZimmer, int etage, double qmMiete)
			{
				this.qm = qm;
				this.anzZimmer = anzZimmer;
				this.etage = etage;
				this.qmMiete = qmMiete;
			}
			
			public int getQm()
			{
				return this.qm;
			}

			public int getAnzZimmer()
			{
				return this.anzZimmer;
			}

			public int getEtage()
			{
				return this.etage;
			}

			public double getQmMiete()
			{
				return this.qmMiete;
			}

			public double gesamtMiete()
			{
				return this.qm * this.qmMiete;
			}
			
			public boolean billiger(Wohnung w)
			{
				return this.gesamtMiete() < w.gesamtMiete();
			}
			
			public boolean teurer(Wohnung w)
			{
				return this.gesamtMiete() > w.gesamtMiete();
			}
			
			public String toString()
			{
				String s = "";
				if(this.etage == 0)
				{
					s = String.format("%d-Zimmer Wohnung mit %d qm im Erdgeschoss. Monatliche Miete: %.2f Euro", 
							this.anzZimmer, this.qm, this.gesamtMiete() );
				}
				else
				{
					s = String.format("%d-Zimmer Wohnung mit %d qm in der %d. Etage. Monatliche Miete: %.2f Euro", 
							this.anzZimmer, this.qm, this.etage, this.gesamtMiete() );
				}
				return s;
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
			
		}
		```

	=== "Dachgeschoss.java"
		```java 
		package uebungen.uebung8;

		public class Dachgeschosswohnung extends Wohnung
		{
			// alle Objektvariablen von Wohnung geerbt
			// qm, anzZimmer, etage, qmMiete
			// alle Objektmethoden von Wohnung geerbt
			
			public Dachgeschosswohnung(int qm, int anzZimmer, double qmMiete)
			{
				super(qm, anzZimmer, 5, qmMiete);	// Konstruktor Wohnung
			}
			
			@Override
			public String toString()
			{
				String s= "";
				s = String.format("%d-Zimmer Wohnung mit %d qm in der %d. Etage. Monatliche Miete: %.2f Euro", 
						this.getAnzZimmer(), this.getQm(), this.getEtage(), this.gesamtMiete() );
				return s;
			}
		}
		```

	=== "Haus.java"
		```java 
		package uebungen.uebung8;

		import java.util.Random;

		public class Haus
		{
			private Wohnung[] wohnungen;
			
			public Wohnung neueWohnung()
			{
				Random r = new Random();
				int qm = r.nextInt(5) * 20 + 20;
				int anzZimmer = r.nextInt(5) + 1;
				int etage = r.nextInt(6);
				double qmMiete = r.nextInt(10) * 0.5 + 8.0;
				
				return new Wohnung(qm, anzZimmer, etage, qmMiete);
			}
			
			public Haus(int anzWohnungen)
			{
				this.wohnungen = new Wohnung[anzWohnungen];
				for (int index = 0; index < this.wohnungen.length; index++)
				{
					this.wohnungen[index] = this.neueWohnung();
				}
			}
			
			public void print()
			{
				System.out.println("Das Haus besteht aus :");
				for (int index = 0; index < this.wohnungen.length; index++)
				{
					this.wohnungen[index].print(); 	// print()-Methode von Wohnung
				}
			}
			
			public Wohnung[] wohnungenInEtage(int etage)
			{
				int anzWohnungenInEtage = 0;
				for (int index = 0; index < this.wohnungen.length; index++)
				{
					if(this.wohnungen[index].getEtage()==etage)
					{
						anzWohnungenInEtage++;
					}
				}
				
				Wohnung[] wohnungenInEtage = new Wohnung[anzWohnungenInEtage];
				int indexWIE = 0;
				for (int index = 0; index < this.wohnungen.length; index++)
				{
					if(this.wohnungen[index].getEtage()==etage)
					{
						wohnungenInEtage[indexWIE] = this.wohnungen[index];
						indexWIE++;
					}
				}
				return wohnungenInEtage;
			}
			
			public void print(Wohnung[] warr)
			{
				for (int index = 0; index < warr.length; index++)
				{
					warr[index].print(); 	// print()-Methode von Wohnung
				}
			}
			
			public Wohnung teuersteWohnung()
			{
				int indexMax = 0;
				
				for (int index = 0; index < this.wohnungen.length; index++)
				{
					if(this.wohnungen[index].teurer(this.wohnungen[indexMax]))
					{
						indexMax = index;
					}
				}
				
				return this.wohnungen[indexMax];
			}
			
			public double gesamtMieteHaus()
			{
				double gesamtMieteHaus = 0.0;
				for (int index = 0; index < this.wohnungen.length; index++)
				{
					gesamtMieteHaus = gesamtMieteHaus + this.wohnungen[index].gesamtMiete();
				}
				return gesamtMieteHaus;
			}
			
			public void sortieren()
			{
				for(int bubble = 1; bubble < this.wohnungen.length; bubble++)
				{
					for(int index = 0; index < this.wohnungen.length - bubble; index++)
					{
						if(this.wohnungen[index].teurer(this.wohnungen[index + 1]))
						{
							Wohnung tmp = this.wohnungen[index];
							this.wohnungen[index] = this.wohnungen[index + 1];
							this.wohnungen[index + 1] = tmp;
						}
					}
				}
			}
		}
		```

	=== "Testklasse.java"
		```java 
		package uebungen.uebung8;

		public class Testklasse
		{

			public static void main(String[] args)
			{
				System.out.printf("%n%n--------------------- Test Wohnung -------------------------%n%n");
				Wohnung w1 = new Wohnung(70, 3, 4, 12.50);
				Wohnung w2 = new Wohnung(40, 1, 0, 9.50);
				Wohnung w3 = new Wohnung(90, 4, 2, 11.10);
				Wohnung w4 = new Wohnung(60, 2, 0, 9.00);

				w1.print();
				w2.print();
				w3.print();
				w4.print();
				
				System.out.printf("%n%n--------------- Test Dachgeschosswohnung -------------------%n%n");
				Dachgeschosswohnung dg1 = new Dachgeschosswohnung(70, 3, 15.50);
				Dachgeschosswohnung dg2 = new Dachgeschosswohnung(100, 4, 17.25);

				dg1.print();
				dg2.print();
				
				System.out.printf("%n%n---------------------- Test Haus ---------------------------%n%n");
				Haus h1 = new Haus(10);
				h1.print();

				System.out.printf("%n%n----- Test wohnungenInEtage() und print(Wohnung[]) ---------%n%n");
				for(int etage=0; etage<6; etage++)
				{
				    System.out.println("Etage " + etage + " ---------------------------------------");
				    h1.print(h1.wohnungenInEtage(etage));
				    System.out.println();
				}
				
				System.out.printf("%n%n--------------- Test teuersteWohnung() ---------------------%n%n");
				Wohnung teuerste = h1.teuersteWohnung();
				teuerste.print();
				
				System.out.printf("%n%n---------------- Test gesamtMieteHaus() --------------------%n%n");
				System.out.printf("Die Gesamtmiete fuer das Haus betraegt %.2f Euro.%n", h1.gesamtMieteHaus());
			
				System.out.printf("%n%n------------------- Test sortieren() -----------------------%n%n");
				h1.sortieren();
				h1.print();
			}

		}
		```

??? question "Video zu Übung 8"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=6576514d74c8203d934640551f153b64&width=720&height=385&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="385" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>


??? note "Übung 9"
	
	1. Erstellen Sie ein package `uebungen.uebung9`. 
	2. Erstellen Sie in diesem package eine Klasse `Pizza` mit

		- den privaten Objektvariablen 
			- `name` vom Typ `String` und
			- `preis` vom Typ `float`. 
		- einem parametrisierten Konstruktor `Pizza(String name, float preis)`. Die Werte der Parameter werden verwendet, um den Objektvariablen Werte zuzuweisen.
		- Gettern für die Objektvariablen (`getName()`, `getPreis()`)
		- Überschreiben Sie die Objektmethode `toString()`, die Details der Pizza in folgender Form als `String` zurückgibt (Beispielwerte):
			```bash
			Die Pizza Salami kostet 6.90 Euro.
			```
		- und einer Objektmethode `print()`, die den von `toString()`zurückgegebenen `String` auf der Konsole ausgibt.
		- Überschreiben Sie die Objektmethode `equals(Object o)`. Diese Methode gibt `true` zurück, wenn der Name `name` des aufrufenden Objektes gleich dem Namen `name` des als Parameter übergebenen Objektes ist; `false` sonst. **Tipp :** Die Gleichheit von zwei Strings `s1` und `s2` können Sie mithilfe von `s1.equals(s2)` ermitteln. (`hashCode()` muss nicht überschrieben werden).

	3. Erstellen Sie im gleichen package eine Klasse `Testklasse` mit `main()`-Methode. Geben Sie in der `main()`-Methode Folgendes ein:
		```java
		System.out.printf("%n%n------------------------- Test Pizza ---------------------------%n%n");
		Pizza p1 = new Pizza("Salami", 6.9f);
		Pizza p2 = new Pizza("Margheritha", 5.9f);
		Pizza p3 = new Pizza("Tonno", 6.9f);
		Pizza p4 = new Pizza("Hawaii", 6.9f);
		Pizza p5 = new Pizza("Calzone", 7.9f);
		Pizza p6 = new Pizza("Salami", 6.9f);
		
		p1.print();
		p2.print();
		p3.print();
		p4.print();
		p5.print();
		
		System.out.println("p1 gleich p2 ? : " + p1.equals(p2));
		System.out.println("p1 gleich p1 ? : " + p1.equals(p1));
		System.out.println("p1 gleich p6 ? : " + p1.equals(p6));
		```	
		und führen Sie die `Testklasse` aus. Es sollten folgende zusätzliche Ausgaben erzeugt werden:
		```bash
		------------------------- Test Pizza ---------------------------

		Die Pizza Salami kostet 6,90 Euro.
		Die Pizza Margheritha kostet 5,90 Euro.
		Die Pizza Tonno kostet 6,90 Euro.
		Die Pizza Hawaii kostet 6,90 Euro.
		Die Pizza Calzone kostet 7,90 Euro.

		p1 gleich p2 ? : false
		p1 gleich p1 ? : true
		p1 gleich p6 ? : true
		```
	4. Erstellen Sie im gleichen package eine Klasse `Pizzaverkauf` mit

		- den privaten Objektvariablen 
			- `pizza` vom Typ `Pizza` und
			- `anzVerkaeufe` vom Typ `int`. 
		- einem parametrisierten Konstruktor `Pizzaverkauf(Pizza pizza)`. Mit dem Parameterwert `pizza` wird die Objektvariable `pizza` initialisiert. Der Wert der Objektvariablen `anzVerkaeufe` wird auf `0` gesetzt. 
		- einer Objektmethode `verkaufen()`. Darin wird der Wert der Objektvariablen `anzVerkaeufe` um `1` erhöht.
		- Gettern für die Objektvariablen, also `getAnzVerkaeufe()` und `getPizza()`.
		- einer Objektmethode `umsatz()`. Diese Methode gibt ein `double` zurück. Der Wert berechnet sich aus der Anzahl der Verkäufe der Pizza (`anzVerkaeufe`) mal dem Preis der Pizza. 
		- einer Objektmethode `toString()` die Details der Pizzaverkaeufe in folgender Form als `String` zurückgibt (Beispielwerte):
			```bash
			Pizza Salami wurde 0 mal zum Preis von 6.90 Euro verkauft.
			```

		- und einer Objektmethode `print()`, die den von `toString()`zurückgegebenen `String` auf der Konsole ausgibt

	5. Fügen Sie in der `main()`-Methode der `Testklasse` folgende Anweisungen hinzu:
		```java	
		System.out.printf("%n%n--------------------- Test Pizzaverkauf ------------------------%n%n");
		Pizzaverkauf pv1 = new Pizzaverkauf(p1);
		pv1.print();
		pv1.verkaufen();
		pv1.print();
		```
		und führen Sie die `Testklasse` aus. Es sollten folgende zusätzliche Ausgaben erzeugt werden:
		```bash
		--------------------- Test Pizzaverkauf ------------------------

		Pizza Salami wurde 0 mal zum Preis von 6,90 Euro verkauft.
		Pizza Salami wurde 1 mal zum Preis von 6,90 Euro verkauft.
		```

	6. Erstellen Sie im gleichen package eine Klasse `Speisekarte` mit

		- der privaten Objektvariablen 
			- `angebot` vom Typ `Pizza[]`. 
		- einem parameterlosen Konstruktor `Speisekarte()`. In diesem Konstruktor wird für `angebot` ein `Pizza`-Array der Länge `0` erzeugt. 
		- einer Objektmethode `pizzaHinzufuegen(Pizza pizza)`. Diese Methode fügt die als Parameter übergebene `pizza` dem angebot-Array hinzu. <br/>
		**Beachten Sie:**

			- Um dem `angebot`-Array eine neue Pizza hinzuzufügen, muss die Länge des Arrays um 1 erhöht werden.
			- Kopieren Sie sich dazu das alte `angebot`-Array.
			- Erzeugen Sie dann ein neues `angebot`-Array, das um 1 länger ist als das alte.
			- Kopieren Sie das bisherige Angebot zurück in das neue `angebot`-Array.
			- Fügen Sie die neue Pizza (Parameter `pizza`) als letztes Element im neuen `angebot`-Array hinzu.

		- einer Objektmethode `getLength()`. Diese Methode gibt die Länge des `angebot`-Arrays zurück. 
		- einer Objektmethode `pizzaIstImAngebot(Pizza pizza)`. Diese Methode gibt ein `true` zurück, wenn die als Parameter übergebene `pizza` im `angebot`-Array enthalten ist. Prüfen Sie die Gleichheit mithilfe der `equals()`-Methode von `Pizza`. 
		- einer Objektmethode `pizzaLoeschen(Pizza pizza)`. Diese Methode löscht die als Parameter übergebene `pizza` aus dem `angebot`-Array (wenn Sie darin enthalten ist). <br/>
		**Beachten Sie:**
 
			- Nach dem Löschen der Pizza aus dem `angebot`-Array soll das `angebot`-Array wieder um 1 kleiner sein als vorher (falls die zu löschende Pizza überhaupt im `angebot`-Array enthalten war).
			- Kopieren Sie also das alte `angebot`-Array außer die zu löschende Pizza. 
			- Ihre Kopie ist dann das neue `angebot`-Array. 
 
 		- einer Objektmethode `getPizzaAtIndex(int index)`. Diese Methode gibt die Pizza zurück, die im `angebot`-Array beim Index `index` eingetragen ist. Prüfen Sie, ob der übergebene Parameter ein gültiger Index aus dem `angebot`-Array ist. Wenn nicht, geben Sie `null` zurück.

		- Überschreiben Sie die Objektmethode `toString()`, die die Details der Speisekarte in folgender Form als `String` zurückgibt (Beispielwerte):
			```bash
			====== Speisekarte ======
			Salami          6,90 Euro 
			Margheritha     5,90 Euro 
			Tonno           6,90 Euro 
			Hawaii          6,90 Euro 
			Calzone         7,90 Euro
			```

		- und einer Objektmethode `print()`, die den von `toString()`zurückgegebenen `String` auf der Konsole ausgibt

	7. Fügen Sie in der `main()`-Methode der `Testklasse` folgende Anweisungen hinzu:
		```java	
		System.out.printf("%n%n--------------------- Test Speisekarte -------------------------%n%n");
		Speisekarte s1 = new Speisekarte();
		s1.pizzaHinzufuegen(p1);
		s1.pizzaHinzufuegen(p2);
		s1.pizzaHinzufuegen(p3);
		s1.pizzaHinzufuegen(p4);
		s1.pizzaHinzufuegen(p5);
		s1.print();
		
		s1.pizzaLoeschen(p3);
		s1.print();
		```
		und führen Sie die `Testklasse` aus. Es sollten folgende zusätzliche Ausgaben erzeugt werden:
		```bash
		--------------------- Test Speisekarte -------------------------

		====== Speisekarte ======
		Salami          6,90 Euro 
		Margheritha     5,90 Euro 
		Tonno           6,90 Euro 
		Hawaii          6,90 Euro 
		Calzone         7,90 Euro 

		====== Speisekarte ======
		Salami          6,90 Euro 
		Margheritha     5,90 Euro 
		Hawaii          6,90 Euro 
		Calzone         7,90 Euro 
		```

	8. **Zusatz** Erstellen Sie im gleichen package eine Klasse `Pizzaria` mit

		- der privaten Objektvariablen 
			- `verkaeufe` vom Typ `Pizzaverkauf[]`. 
		- einem parametrisierten Konstruktor `Pizzeria(Speisekarte karte)`. In diesem Konstruktor wird 

			- das `verkaeufe`-Array erzeugt und hat die gleiche Länge wie das `angebot`-Array der Speisekarte `karte` (siehe `getLength()`-Methode aus `Speisekarte`).
			- jedes Element des `verkaeufe`-Arrays zeigt auf ein `Pizzaverkauf`-Objekt. Erzeugen Sie alle `Pizzaverkauf`-Objekte. Übergeben Sie dem `Pizzaverkauf`-Konstruktor dazu die jeweiligen `Pizza`-Objekte aus der Speisekarte `karte`.

		- einer Objektmethode `bestellen()`. Diese Methode gibt ein `int` zurück. In dieser Methode soll zufällig ein Index aus dem `verkaeufe`-Array erzeugt werden. Nutzen Sie dazu die Klasse `Random` aus dem `java.util`-Paket. Verwenden Sie die Objektmethode `nextInt(int bound)` der Klasse `Random`. Wenden Sie `nextInt()` so an, dass auch tatsächlich ein gültiger Index des `verkaeufe`-Arrays erzeugt wird. Geben Sie diesen zufällig erzeugten Index zurück (das Bestellen entspricht also dem Nennen einer Nummer aus der Speisekarte). 
		- einer Objektmethode `verkaufen(int index)`. Durch den Aufruf der Methode wird die Pizza verkauft, die im `verkaeufe`-Array am Index `index` steht. Nutzen Sie für den Verkauf die `verkaufen()`-Methode der Klasse Pizzaverkauf. Überprüfen Sie, ob der als Parameter übergebene Wert für `index` tatsächlich einem Index im `verkaeufe`-Array entspricht. 
		- einer Objektmethode `tagesVerkauf(int anzVerkaeufe)`. In dieser Methode wird `anzVerkaeufe` oft eine Pizza verkauft (`verkaufen(int index)`). Welche Pizza verkauft wird (also welcher `index`), wird durch die Methode `bestellen()` jeweils zufällig ermittelt. 
		- einer Objektmethode `print()`. Diese Methode erzeugt folgende Ausgabe (Beispielwerte):
			```bash
			Salami          : ***********************************
			Margheritha     : ************************************
			Hawaii          : *****************************************
			Calzone         : ************************************** 
			```
			Das heißt, es wird am Anfang der Zeile der Name der Pizza aus dem `verkaeufe`-Array ausgegeben und danach für die Anzahl der Verkäufe jeweils ein `*`.
		- einer Objektmethode `meistverkauftePizza()`. Diese Methode gibt die Pizza aus dem `verkaeufe`-Array zurück, die am meisten verkauft wurde.
		- einer Objektmethode `gesamtEinnahmen()`. Diese Methode gibt die Summe aller Einnahmen als `double` zurück. Die Einnahmen ergeben sich aus der Summe der Umsätze aller Pizzen (Methode `umsatz()` von `Pizzaverkauf`) aus dem `verkaeufe`-Array.

	9. Fügen Sie in der `main()`-Methode der `Testklasse` folgende Anweisungen hinzu:
		```java	
		System.out.printf("%n%n------------------------ Test Pizzaria -------------------------%n%n");
		Pizzeria pz1 = new Pizzeria(s1);
		pz1.tagesVerkauf(150);
		pz1.print();
		System.out.println();
		System.out.print("Meistverkaufte Pizza : ");
		pz1.meistverkauftePizza().print();
		System.out.printf("Die Gesamteinnahmen betragen %.2f Euro", pz1.gesamtEinnahmen());
		```
		und führen Sie die `Testklasse` aus. Es sollten folgende zusätzliche Ausgaben erzeugt werden (Zufallswerte):
		```bash
		------------------------ Test Pizzaria -------------------------

		Salami          : ******************************
		Margheritha     : *******************************************
		Hawaii          : *******************************************
		Calzone         : **********************************

		Meistverkaufte Pizza : Die Pizza Margheritha kostet 5,90 Euro.
		Die Gesamteinnahmen betragen 1026,00 Euro
		```


??? question "Testklasse aus der Dienstag-Übung - Diskussion über insert() und delete()"
	=== "Testklasse.java"
		```java
		public class Testklasse
		{
			
			public static int[] insert(int[] original, int element)
			{
				if(!contains(original, element))
				{
					int[] copy = new int[original.length + 1];
					int indexOriginal = 0;
					int indexCopy = 0;
					
					// 1. alle Werte kopieren, die kleiner sind als element
					while(indexOriginal < original.length && original[indexOriginal] < element)
					{
						copy[indexCopy] = original[indexOriginal];
						indexCopy++;
						indexOriginal++;
					}
					
					// 2. element hinzufuegen
					copy[indexCopy] = element;
					indexCopy++;
					
					// 3. Rest kopieren
					while(indexOriginal < original.length)
					{
						copy[indexCopy] = original[indexOriginal];
						indexCopy++;
						indexOriginal++;
					}
					return copy;
				}
				else
				{
					return original;
				}
			}
			
			public static int[] delete(int[] original, int element)
			{
				if(contains(original, element))
				{
					int[] copy = new int[original.length - 1];
					int indexOriginal = 0;
					int indexCopy = 0;
					
					// 1. alle Werte kopieren, die kleiner sind als element
					while(original[indexOriginal] < element)
					{
						copy[indexCopy] = original[indexOriginal];
						indexCopy++;
						indexOriginal++;
					}
					
					// 2. element wird nicht kopiert 
					indexOriginal++;	
					// ab jetzt: indexCopy ist um 1 kleiner als indexOriginal
					
					// 3. rest kopieren (alles groesser als element)
					while(indexCopy < copy.length)
					{
						copy[indexCopy] = original[indexOriginal];
						indexCopy++;
						indexOriginal++;
					}
					return copy;	
				}
				else
				{
					return original;
				}
					
			}
			
			public static boolean contains(int[] ia, int element)
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
			
			public static void print(int[] ia)
			{
				for (int i = 0; i < ia.length; i++)
				{
					System.out.print(ia[i] + " ");
				}
				System.out.println();
			}

			public static void main(String[] args)
			{
				int[] ia = {3, 6, 9};
				int[] ia1 = insert(ia, 7);
				print(ia1);
				ia1 = insert(ia1, 4);
				print(ia1);
				ia1 = insert(ia1, 10);
				print(ia1);
				ia1 = insert(ia1, 1);
				print(ia1);
				ia1 = insert(ia1, 1);
				print(ia1);
				
				ia1 = delete(ia1, 7);
				print(ia1);
				ia1 = delete(ia1, 1);
				print(ia1);
				ia1 = delete(ia1, 10);
				print(ia1);
				ia1 = delete(ia1, 10);
				print(ia1);
				
				String s1 = "Hallo";
				String s2 = "Ballo";
				String s3 = "Hallo";
				String s4 = "hallo";
				System.out.println(s1.equals(s2));
				System.out.println(s1.equals(s3));
				System.out.println(s1.compareTo(s2));
				System.out.println(s1.compareTo(s3));
				System.out.println(s2.compareTo(s1));
				System.out.println(s4.compareTo(s3));
				char c1 = s3.charAt(0);
				System.out.println(c1);
				char c2 = s4.charAt(0);
				System.out.println(c2);
				int diff = c2 - c1;
				System.out.println(diff);
				
			}

		}
		```


??? question "Eine mögliche Lösung für Übung 9"
	=== "Pizza.java"
		```java 
		package uebungen.uebung9;

		public class Pizza
		{
			private String name;
			private float preis;
			
			public Pizza(String name, float preis)
			{
				this.name = name;
				this.preis = preis;
			}

			public String getName()
			{
				return this.name;
			}

			public float getPreis()
			{
				return this.preis;
			}
			
			@Override
			public String toString()
			{
				return String.format("Die Pizza %s kostet %.2f Euro.", this.name, this.preis);
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
			
			@Override
			public boolean equals(Object o)
			{
				if(o == null) return false;
				if(this == o) return true;
				if(this.getClass() != o.getClass()) return false;
				
				Pizza po = (Pizza)o;
				return (this.name.equals(po.name));
			}
		}
		```

	=== "Pizzaverkauf.java"
		```java 
		package uebungen.uebung9;

		public class Pizzaverkauf
		{
			private Pizza pizza;
			private int anzVerkaeufe;
			
			public Pizzaverkauf(Pizza pizza)
			{
				this.pizza = pizza;
				this.anzVerkaeufe = 0;
			}
			
			public void verkaufen()
			{
				this.anzVerkaeufe++;
			}

			public Pizza getPizza()
			{
				return this.pizza;
			}

			public int getAnzVerkaeufe()
			{
				return this.anzVerkaeufe;
			}
			
			public double umsatz()
			{
				return this.anzVerkaeufe * this.pizza.getPreis();
			}
			
			@Override
			public String toString()
			{
				return String.format("Pizza %s wurde %d mal zum Preis von %.2f Euro verkauft.", 
						this.pizza.getName(), this.anzVerkaeufe, this.pizza.getPreis());
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
		}
		```

	=== "Speisekarte.java"
		```java 
		package uebungen.uebung9;

		public class Speisekarte
		{
			private Pizza[] angebot;
			
			public Speisekarte()
			{
				this.angebot = new Pizza[0];
			}
			
			public int getLength()
			{
				return this.angebot.length;
			}
			
			public void pizzaHinzufuegen(Pizza pizza)
			{
				Pizza[] kopie = new Pizza[this.angebot.length + 1];
				for (int index = 0; index < this.angebot.length; index++)
				{
					kopie[index] = this.angebot[index];
				}
				kopie[kopie.length - 1] = pizza;
				this.angebot = kopie;
			}
			
			public boolean pizzaIstImAngebot(Pizza pizza)
			{
				for (int index = 0; index < this.angebot.length; index++)
				{
					if(this.angebot[index].equals(pizza))
					{
						return true;
					}
				}
				return false;
				// System.out.println("dead code");
			}
			
			public void pizzaLoeschen(Pizza pizza)
			{
				if(this.pizzaIstImAngebot(pizza))
				{
					Pizza[] kopie = new Pizza[this.angebot.length - 1];
					int indexKopie = 0;
					for (int indexAngebot = 0; indexAngebot < this.angebot.length; indexAngebot++)
					{
						if(!this.angebot[indexAngebot].equals(pizza))
						{
							kopie[indexKopie] = this.angebot[indexAngebot];
							indexKopie++;
						}
					}
					this.angebot = kopie;
				}
			}
			
			public Pizza getPizzaAtIndex(int index)
			{
				if(index>=0 && index<this.angebot.length)
				{
					return this.angebot[index];
				}
				else
				{
					return null;
				}
			}
			
			@Override
			public String toString()
			{
				String s = String.format("====== Speisekarte ======%n");
				for (int index = 0; index < this.angebot.length; index++)
				{
					s = s + String.format("%-15s %.2f Euro %n", 
							this.angebot[index].getName(), this.angebot[index].getPreis());
				}
				return s;
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
		}
		```

	=== "Pizzeria.java"
		```java 
		package uebungen.uebung9;

		import java.util.Random;

		public class Pizzeria
		{
			private Pizzaverkauf[] verkaeufe;
			
			public Pizzeria(Speisekarte karte)
			{
				this.verkaeufe = new Pizzaverkauf[karte.getLength()];
				for (int index = 0; index < this.verkaeufe.length; index++)
				{
					this.verkaeufe[index] = new Pizzaverkauf(karte.getPizzaAtIndex(index));
				}
			}
			
			public int bestellen()
			{
				Random r = new Random();
				int index = r.nextInt(this.verkaeufe.length);
				return index;	
			}
			
			public void verkaufen(int index)
			{
				if(index>=0 && index<this.verkaeufe.length)
				{
					this.verkaeufe[index].verkaufen();
				}
			}
			
			public void tagesVerkauf(int anzVerkaeufe)
			{
				for(int i=0; i<anzVerkaeufe; i++)
				{
					int index = this.bestellen();
					this.verkaufen(index);
				}
			}
			
			public void print()
			{
				for (int index = 0; index < this.verkaeufe.length; index++)
				{
					Pizza p = this.verkaeufe[index].getPizza();
					int anzVerkaeufe = this.verkaeufe[index].getAnzVerkaeufe();
					String s = String.format("%-13s : ", p.getName());
					for(int stars = 0; stars < anzVerkaeufe; stars++)
					{
						s = s + "*";
					}
					System.out.println(s);
				}
			}
			
			public Pizza meistverkauftePizza()
			{
				int maxIndex = 0;
				for (int index = 0; index < this.verkaeufe.length; index++)
				{
					if(this.verkaeufe[index].getAnzVerkaeufe() > this.verkaeufe[maxIndex].getAnzVerkaeufe())
					{
						maxIndex = index;
					}
				}
				return this.verkaeufe[maxIndex].getPizza();
			}
			
			
			public double gesamtEinnahmen()
			{
				double gesamtEinnahmen = 0.0;
				for (int index = 0; index < this.verkaeufe.length; index++)
				{
					gesamtEinnahmen += this.verkaeufe[index].umsatz();
				}
				return gesamtEinnahmen;
			}
		}
		```	

	=== "Testklasse.java"
		```java 
		package uebungen.uebung9;

		public class Testklasse
		{

			public static void main(String[] args)
			{
				System.out.printf("%n%n------------------------- Test Pizza ---------------------------%n%n");
				Pizza p1 = new Pizza("Salami", 6.9f);
				Pizza p2 = new Pizza("Margheritha", 5.9f);
				Pizza p3 = new Pizza("Tonno", 6.9f);
				Pizza p4 = new Pizza("Hawaii", 6.9f);
				Pizza p5 = new Pizza("Calzone", 7.9f);
				Pizza p6 = new Pizza("Salami", 6.9f);

				p1.print();
				p2.print();
				p3.print();
				p4.print();
				p5.print();

				System.out.println("p1 gleich p2 ? : " + p1.equals(p2));
				System.out.println("p1 gleich p1 ? : " + p1.equals(p1));
				System.out.println("p1 gleich p6 ? : " + p1.equals(p6));

				System.out.printf("%n%n--------------------- Test Pizzaverkauf ------------------------%n%n");
				Pizzaverkauf pv1 = new Pizzaverkauf(p1);
				pv1.print();
				pv1.verkaufen();
				pv1.print();
				
				System.out.printf("%n%n--------------------- Test Speisekarte -------------------------%n%n");
				Speisekarte s1 = new Speisekarte();
				s1.pizzaHinzufuegen(p1);
				s1.pizzaHinzufuegen(p2);
				s1.pizzaHinzufuegen(p3);
				s1.pizzaHinzufuegen(p4);
				s1.pizzaHinzufuegen(p5);
				s1.print();

				s1.pizzaLoeschen(p3);
				s1.print();
				
				System.out.printf("%n%n------------------------ Test Pizzaria -------------------------%n%n");
				Pizzeria pz1 = new Pizzeria(s1);
				pz1.tagesVerkauf(150);
				pz1.print();
				System.out.println();

				System.out.print("Meistverkaufte Pizza : ");
				pz1.meistverkauftePizza().print();
				System.out.printf("Die Gesamteinnahmen betragen %.2f Euro", pz1.gesamtEinnahmen());

			}

		}
		```	

??? question "Video zu Übung 9"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=d010f9295001a2710d3c409aa244324a&width=720&height=359&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="359" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>

??? note "Übung 10"
	
	1. Erstellen Sie ein package `uebungen.uebung10`. 
	2. Erstellen Sie in diesem package eine Klasse `Lottery` mit 

		- der privaten Objektvariablen `drawingResults` vom Typ `int[]`. 
		- **Information**: *Lottery steht für eine Lotterie, bei der aus 9 Zahlen (1..9) 5 Zahlen zufällig gelost werden (5 aus 9). Das Array `drawingResults` dient zum Speichern der gezogenen 5 Zahlen.*
			
		- Schreiben Sie für die Klasse `Lottery` einen parameterlosen Konstruktor. In diesem Konstruktor wird das Array `drawingResults` mit der Länge 5 erzeugt. 
		- Schreiben Sie eine Objektmethode `contains(int number)`. Diese Methode gibt ein `true` zurück, wenn `number` in `drawingResults` enthalten ist und `false` sonst. 
		- Schreiben Sie eine Objektmethode `drawing()`. In dieser Methode werden die 5 Zufallszahlen gezogen (5 aus 9). Sie benötigen dafür ein Objekt der Klasse `Random` (`Random` muss aus `java.util` importiert werden). „Ziehen“ Sie nun zufällig 5 Zufallszahlen aus dem Bereich `1..9` (1 und 9 inklusive) und speichern Sie diese im Array `drawingResults`. <br/>
		**Achtung**: *Die gleiche Zahl darf nicht doppelt gezogen (gespeichert) werden! D.h. die 5 im Array gespeicherten Zufallszahlen müssen sich voneinander unterscheiden!*
		- Schreiben Sie eine Objektmethode `sort()`. Diese Methode sortiert das Array `drawingResults` aufsteigend (von klein nach groß).

		- Überschreiben Sie die Objektmethode `toString()`, die das `drawingResult`-Array als `String` in folgender Form zurückgibt (Beispielwerte für den Fall, dass `1, 3, 5, 6, 7` gezogen wurden):
			```bash
			( 1 - 3 - 5 6 7 - - )
			```

			1. das `dawingResult`-Array wird zunächst sortiert
			2. ist die Zahl im Array enthalten, wird sie als Wert angezeigt
			3. ist die Zahl nicht enthalten, wird ein `-` angezeigt
			4. d.h. es werden immer die 5 gezogenen Zahlen ausgegeben und 4 Striche.

		- Schreiben Sie eine Objektmethode `print()`, die den von `toString()`zurückgegebenen `String` auf der Konsole ausgibt.
		- Überschreiben Sie die Objektmethode `equals(Object o)`. Diese Methode gibt `true` zurück, wenn wenn bei dem aufrufenden Objekt die gleichen Zahlen gezogen wurden, wie bei `o`. Sonst `false` (`hashCode()` muss nicht überschrieben werden). <br/>
		**Tipp**: *Implementieren Sie die Methode am einfachsten so, dass Sie die beiden `drawingResult`-Arrays erst sortieren und dann die sortierten Arrays elementweise miteinander vergleichen.*     

	3. Erstellen Sie im gleichen package eine Klasse `Testklasse` mit `main()`-Methode. 

		- Erzeugen Sie in der `main()`-Methode in einer Schleife `10` Objekte der Klasse `Lottery` und rufen (auch in der Schleife) jeweils die `drawing()` und die `print()`-Methode auf. Es entsteht folgende Ausgabe (Beispielwerte sind zufällig und unterscheiden sich!):
			```bash
			( 1 - 3 - 5 6 7 - - )
			( 1 2 3 - 5 - 7 - - )
			( 1 - 3 - - 6 7 8 - )
			( - - 3 4 5 6 - - 9 )
			( 1 2 3 4 - - - - 9 )
			( 1 2 - 4 - 6 - 8 - )
			( - 2 3 - - - 7 8 9 )
			( 1 2 3 - - 6 - - 9 )
			( 1 - - 4 5 - 7 8 - )
			( - 2 3 - 5 - - 8 9 )
			```
		- Erzeugen Sie ein Objekt von `Lottery` und rufen für dieses Objekt die `drawing()`-Methode auf. Erzeugen Sie in einer Schleife so lange ein weiteres Objekt von `Lottery` und rufen dafür die `drawing()`-Methode auf, bis die beiden Objekte die gleichen gezogenen Zahlen enthalten, d.h. laut `equals()`-Methode gleich sind. Geben Sie dann beide Objekte mithilfe der `print()`-Methode aus. Es entsteht folgende Ausgabe (zufällige Beispielwerte):
			```bash
			( 1 - 3 - - 6 - 8 9 )
			( 1 - 3 - - 6 - 8 9 )
			```

	4. Erstellen Sie im gleichen package eine Klasse `LotteryYear` mit

		- der privaten Objektvariablen `lotteryYear` vom Typ `Lottery[]`. (*Das Array speichert alle 52 Lotto-Ziehungen eines Jahres.*) 
		- Schreiben Sie einen parameterlosen Konstruktor `LotteryYear()`. Innerhalb des Konstruktors werden:

			- das Array erzeugt, auf das die Objektvariable `lotteryYear` referenziert. Das Array hat die Länge `52` sowie
			- `52` `Lottery`-Objekte, für die jeweils `drawing()` und `sort()` aufgerufen werden. Mit diesen Objekten wird das Array befüllt.

		- Schreiben Sie eine Objektmethode `nrOfNumber(int number)`. Diese Methode gibt ein `int` zurück. Diese Methode ermittelt, wie oft die Zahl `number` im Jahr gezogen wurde, d.h. wie oft `number` im `lotteryYear`-Array vorkommt. Kommt `number` gar nicht vor (nicht aus dem Bereich `1..9`), dann wird `0` zurückgegeben.

		- Schreiben Sie eine Objektmethode `frequency()`. Diese Methode gibt ein `int`-Array der Länge `9` zurück. In diesem Array wird für jede der Zahlen `1` bis `9` gespeichert, wie oft sie im `lotteryArray` vorkommt, d.h. wie oft sie im Jahr gezogen wurde. Verwenden Sie für jede der Zahlen `1` bis `9` die `nrOfNumber()`-Methode. (*Frequency steht für die Häufigkeit des Vorkommens jeder einzelnen Zahl 1 bis 9 im Jahr.*) <br/> 
		Beispiel-Belegung des zu erzeugenden Arrays (Werte sind zufällig erzeugt):
			![frequency](./files/87_frequency.png)

		- Schreiben Sie eine Objektmethode `printFrequencyString()`. Erzeugen Sie innerhalb dieser Methode mithilfe der `frequency()`-Methode das entsprechende Array und geben es in der folgenden Form auf die Konsole aus (Beispielwerte zufällig erzeugt):
			```bash
			[ 28, 34, 27, 26, 35, 24, 31, 27, 28 ]  --> 260
			```
			*Es werden also alle Einträge des Arrays durch Komma getrennt ausgegeben und am Ende (nach „-->“ ) noch die Summe aller Einträge (`260`).* 

		- Schreiben Sie eine Objektmethode `printFrequencyDiagram()`. Erzeugen Sie innerhalb dieser Methode mithilfe der `frequency()`-Methode das entsprechende Array und geben es in der folgenden Form aus (Beispielwerte zufällig erzeugt):
			```bash
			1 : ****************************
			2 : **********************************
			3 : ***************************
			4 : **************************
			5 : ***********************************
			6 : ************************
			7 : *******************************
			8 : ***************************
			9 : ****************************
			```
			*Es werden also für jede Zahl so viele Sterne ausgegeben, wie ihr entsprechender Eintrag im Array.* 

		- Schreiben Sie eine Objektmethode `containsEquals()`. Diese Methode gibt ein `true` zurück, wenn im `lotteryArray` zwei `Lottery`-Objekte die gleichen Zahlen gezogen haben, d.h. laut `equals()`-Methode gleich sind; `false` sonst. 

		- Überschreiben Sie die `toString()`-Methode, so dass alle Ziehungen des Jahres (das `lotterYear`-Array) in folgender Form ausgegeben werden (Beispielwerte zufällig erzeugt):
			```bash
			 1 : ( 1 - - 4 - - 7 8 9 )
			 2 : ( 1 - - 4 - 6 7 8 - )
			 3 : ( 1 - 3 4 5 6 - - - )
			 4 : ( - 2 3 4 5 - - 8 - )
			 5 : ( 1 2 - - 5 - - 8 9 )
			 6 : ( 1 - 3 4 - 6 7 - - )
			 7 : ( - - 3 4 5 6 7 - - )
			 8 : ( 1 - - - - 6 7 8 9 )
			 9 : ( - 2 3 - 5 - - 8 9 )
			10 : ( 1 2 - - - 6 7 - 9 )
			11 : ( - - - 4 5 - 7 8 9 )
			12 : ( 1 2 3 - - - 7 8 - )
			13 : ( - - 3 4 - 6 - 8 9 )
			14 : ( - 2 3 4 5 - - 8 - )
			15 : ( - - 3 4 5 - 7 8 - )
			16 : ( - 2 3 - - - 7 8 9 )
			17 : ( - 2 - 4 5 - 7 - 9 )
			18 : ( - - - - 5 6 7 8 9 )
			19 : ( 1 - - 4 5 - 7 8 - )
			20 : ( - 2 3 - 5 - 7 - 9 )
			21 : ( 1 2 - - - 6 7 8 - )
			22 : ( 1 - 3 4 - 6 - 8 - )
			23 : ( - - 3 4 5 - 7 8 - )
			24 : ( - 2 - 4 5 6 - 8 - )
			25 : ( 1 - 3 4 - 6 - 8 - )
			26 : ( 1 - 3 - 5 6 - 8 - )
			27 : ( 1 2 - 4 - 6 - 8 - )
			28 : ( 1 - - 4 - 6 - 8 9 )
			29 : ( 1 - - 4 - - 7 8 9 )
			30 : ( 1 - - - 5 - 7 8 9 )
			31 : ( - 2 3 - 5 6 7 - - )
			32 : ( - 2 3 4 - - 7 8 - )
			33 : ( - - 3 4 5 - 7 8 - )
			34 : ( 1 2 - - 5 - 7 8 - )
			35 : ( - - 3 4 - 6 - 8 9 )
			36 : ( 1 - - 4 - 6 - 8 9 )
			37 : ( - - - 4 5 6 7 - 9 )
			38 : ( 1 - 3 4 - - 7 - 9 )
			39 : ( - 2 3 - - 6 - 8 9 )
			40 : ( 1 2 - 4 - 6 - 8 - )
			41 : ( - 2 - 4 - 6 - 8 9 )
			42 : ( 1 - 3 - - 6 7 - 9 )
			43 : ( - 2 3 - 5 - 7 8 - )
			44 : ( - 2 - - 5 6 7 - 9 )
			45 : ( 1 - - 4 5 6 7 - - )
			46 : ( 1 2 3 - - - 7 - 9 )
			47 : ( 1 2 - 4 - 6 - - 9 )
			48 : ( - 2 - - 5 6 7 8 - )
			49 : ( 1 - 3 4 - 6 7 - - )
			50 : ( 1 - 3 - - 6 7 8 - )
			51 : ( - 2 3 - 5 6 - 8 - )
			52 : ( - 2 3 4 - 6 - - 9 )
			```
			*Es kommt also zunächst die Woche (fortlaufend von `1` bis `52`, dann ` : ` und dann das jeweilige `Lottery`-Objekt aus dem `lotteryYear`-Array.*

		- Schreiben Sie eine `print()`-Methode, die den von `toString()`zurückgegebenen `String` auf der Konsole ausgibt.

		- Schreiben Sie eine Objektmethode `getArrayOfDoublets()`. Diese Methode gibt ein `Lottery`-Array der Länge 2 zurück. Dieses Array enthält 2 `Lottery`-Objekte aus dem `lotteryArray`, die die gleichen gezogenen Zahlen beinhalten, also laut `equals()`-Methode gleich sind. Sollten solche `Lottery`-Objekte nicht im `lotteryArray` existieren, soll das zurückgegebene Array die Länge `0` haben.

	5. Erzeugen Sie in der `main()`-Methode ein Objekt der Klasse `LotteryYear`. 

		- Rufen Sie dafür die `printFrequencyString()`- und `printFrequencyDiagram()`-Methoden auf. Es entsteht folgende Ausgabe (zufällige Beispielwerte):
			```bash
			[ 27, 27, 30, 33, 34, 29, 25, 24, 31 ]  --> 260

			1 : ***************************
			2 : ***************************
			3 : ******************************
			4 : *********************************
			5 : **********************************
			6 : *****************************
			7 : *************************
			8 : ************************
			9 : *******************************
			```

		- Prüfen Sie außerdem, ob das erzeugte Objekt `Lottery`-Dopplungen enthält (`containsEquals()`). Wenn ja, dann sollen diese ermittelt (`getArrayOfDoublets()`) und ausgegeben (`print()`) werden. Es entsteht folgende Ausgabe (zufällige Beispielwerte):
			```bash
			( 1 - - 4 5 - 7 - 9 )
			( 1 - - 4 5 - 7 - 9 )
			```

??? question "Eine mögliche Lösung für Übung 10"
	=== "Lottery.java"
		```java 
		package uebungen.uebung10;

		import java.util.Random;

		public class Lottery
		{
			private int[] drawingResults;
			
			public Lottery()
			{
				this.drawingResults = new int[5];
			}
			
			public boolean contains(int number)
			{
				for (int index = 0; index < this.drawingResults.length; index++)
				{
					if(this.drawingResults[index] == number)
					{
						return true;
					}
				}
				return false;
			}
			
			public void drawing()
			{
				Random r = new Random();
				for (int index = 0; index < this.drawingResults.length; index++)
				{
					int zufZahl = r.nextInt(9) + 1;
					while(this.contains(zufZahl))
					{
						zufZahl = r.nextInt(9) + 1;
					}
					this.drawingResults[index] = zufZahl;
				}
			}
			
			public void sort()
			{
				for(int bubble=1; bubble<this.drawingResults.length; bubble++)
				{
					for(int index=0; index<this.drawingResults.length-bubble; index++)
					{
						if(this.drawingResults[index] > this.drawingResults[index+1])
						{
							int tmp = this.drawingResults[index];
							this.drawingResults[index] = this.drawingResults[index+1];
							this.drawingResults[index+1] = tmp;
						}
					}
				}
			}
			
			@Override
			public String toString()
			{
				this.sort();
				String s = "( ";
				int index = 0;
				for(int number = 1; number <10; number++)
				{
					if(index<5 && this.drawingResults[index] == number)
					{
						s += this.drawingResults[index] + " ";
						index++;
					}
					else
					{
						s += "- ";
					}
				}
				s += ")";
				return s;
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
			
			@Override
			public boolean equals(Object o)
			{
				if(o == null) 
				{
					return false;
				}
				if(this == o)
				{
					return true;
				}
				if(this.getClass() != o.getClass())
				{
					return false;
				}
				
				Lottery lo = (Lottery)o;
				lo.sort();
				this.sort();
				for (int index = 0; index < this.drawingResults.length; index++)
				{
					if(this.drawingResults[index] != lo.drawingResults[index])
					{
						return false;
					}
				}
				return true;
			}
		}
		```

	=== "LotteryYear.java"
		```java 
		package uebungen.uebung10;

		public class LotteryYear
		{
			private Lottery[] lotteryYear;
			
			public LotteryYear()
			{
				final int WEEKS = 52;
				this.lotteryYear = new Lottery[WEEKS];
				for (int index = 0; index < this.lotteryYear.length; index++)
				{
					this.lotteryYear[index] = new Lottery();
					this.lotteryYear[index].drawing();
					this.lotteryYear[index].sort();
				}
			}
			
			public int nrOfNumber(int number)
			{
				int nrOfNumber = 0;
				for (int index = 0; index < this.lotteryYear.length; index++)
				{
					if(this.lotteryYear[index].contains(number))
					{
						nrOfNumber++;
					}
				}
				return nrOfNumber;
			}
			
			public int[] frequency()
			{
				int[] frequency = new int[9];
				for(int index=0; index<9; index++)
				{
					int number = index +1;
					frequency[index] = this.nrOfNumber(number);
				}
				return frequency;
			}
			
			public void printFrequencyString()
			{
				int[] frequency = this.frequency();
				int summe = 0;
				System.out.print("[ ");
				for (int index = 0; index < frequency.length; index++)
				{
					summe += frequency[index];
					if(index<frequency.length-1)
					{
						System.out.print(frequency[index] +", ");
					}
					else
					{
						System.out.print(frequency[index]);
					}
				}
				System.out.println(" ]  --> " + summe);
			}
			
			
			public void printFrequencyDiagram()
			{
				int[] frequency = this.frequency();
				for (int index = 0; index < frequency.length; index++)
				{
					System.out.print((index +1) + " : ");
					for(int stars = 0; stars < frequency[index]; stars++)
					{
						System.out.print("*");
					}
					System.out.println();
				}
			}
			
			public boolean containsEquals()
			{
				for (int index1 = 0; index1 < this.lotteryYear.length; index1++)
				{
					for (int index2 = index1+1; index2 < this.lotteryYear.length; index2++)
					{
						if(this.lotteryYear[index1].equals(this.lotteryYear[index2]))
						{
							return true;
						}			
					}
				}
				return false;
			}
			
			@Override
			public String toString()
			{
				String s = "";
				for (int index = 0; index < lotteryYear.length; index++)
				{
					s += String.format("%2d : %s %n", (index+1), this.lotteryYear[index].toString());
				}
				return s;
			}

			public void print()
			{
				System.out.println(this.toString());
			}
			
			
			public Lottery[] getArrayOfDoublets()
			{
				Lottery[] loa = new Lottery[2];
				for (int index1 = 0; index1 < this.lotteryYear.length; index1++)
				{
					for (int index2 = index1+1; index2 < this.lotteryYear.length; index2++)
					{
						if(this.lotteryYear[index1].equals(this.lotteryYear[index2]))
						{
							loa[0] = this.lotteryYear[index1];
							loa[1] = this.lotteryYear[index2];
							return loa;
						}			
					}
				}
				return loa;
			}
		}
		```

	=== "Testklasse.java"
		```java 
		package uebungen.uebung10;

		public class Testklasse
		{

			public static void main(String[] args)
			{
				System.out.printf("%n%n------------------- Lottery in Schleife --------------%n%n");
				for (int index = 0; index < 10; index++)
				{
					Lottery lo = new Lottery();
					lo.drawing();
					lo.print();
				}
				
				System.out.printf("%n%n------------------- Lottery equals --------------%n%n");		
				Lottery lo1 = new Lottery();
				lo1.drawing();
				Lottery lo2 = new Lottery();
				lo2.drawing();
				while(!lo1.equals(lo2))
				{
					lo2.drawing();
				}
				lo1.print();
				lo2.print();
				
				System.out.printf("%n%n------------------- LotteryYear --------------%n%n");		
				LotteryYear ly = new LotteryYear();
				ly.printFrequencyString();
				ly.printFrequencyDiagram();
				
				ly.print();
				
				if(ly.containsEquals())
				{
					Lottery[] loa = ly.getArrayOfDoublets();
					loa[0].print();
					loa[1].print();
				}
				else
				{
					System.out.println("keine gleichen Ziehungen im Jahr");
				}
			}

		}
		```	

??? question "Video zu Übung 10"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=e8040da20f0b6e00bbf9756735195b6c&width=720&height=405&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="405" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>


??? note "Übung 11"
	
	1. Erstellen Sie ein package `uebungen.uebung11`. 
	2. Erstellen Sie in diesem package eine Klasse `Punkt3D` mit 

		- drei privaten Objektvariablen `x`, `y` und `z`, jeweils vom Typ `int`,
		- einem parametrisierten Konstruktor `Punkt3D(int x, int y, int z)`. Mit den Parameterwerten werden die Objektvariablen initialisiert. 
		- Getter für die drei Objektvariablen (`getX()`, `getY()` und `getZ()`). 
		- Überschreiben Sie die Methode `toString()`, so dass folgende textuelle Reräsentation als `String` erzeugt wird (Beispielwerte):
			```bash
			(5,2,3)
			```
			also in runden Klammern die Werte von `x`, `y` und `z` durch Komma getrennt.
		- Schreiben Sie eine Objektmethode `print()`, die den durch `toString()` erzeugten `String` auf die Konsole ausgibt.
		- Überschreiben Sie die Methode `equals(Object o)` so, dass zwei `Punkt3D`-Objekte gleich sind, wenn ihre Objektvariablen `x`, `y` und `z` jeweils paarweise den gleichen Wert besitzen. 
		- Schreiben Sie eine Objektmethode `xIsSmaller(Punkt3D p)`, die ein `true` zurückgibt, wenn das aufrufende Objekt einen kleineren `x`-Wert hat als `p`; `false` sonst.
		- Schreiben Sie eine Objektmethode `yIsSmaller(Punkt3D p)`, die ein `true` zurückgibt, wenn das aufrufende Objekt einen kleineren `y`-Wert hat als `p`; `false` sonst.
		- Schreiben Sie eine Objektmethode `zIsSmaller(Punkt3D p)`, die ein `true` zurückgibt, wenn das aufrufende Objekt einen kleineren `z`-Wert hat als `p`; `false` sonst.

	3. Erstellen Sie im gleichen package eine Klasse `Punkt2D`. Diese Klasse erbt von `Punkt3D`. Bei einem Objekt vom Typ `Punkt2D` ist der Wert von `z` stets `0`! 

		- Schreiben Sie einen parametrisierten Konstruktor `Punkt2D(int x, int y)`. Verwenden Sie die Parameterwerte, um den entsprechenden Objektvariablen Werte zuzuweisen und setzen Sie den Wert von `z` auf `0`.
		- Überschreiben Sie die Methode `toString()`, so dass folgende textuelle Reräsentation als `String` erzeugt wird (Beispielwerte):
			```bash
			(5,2)
			```
			also in runden Klammern die Werte von `x` und `y` durch Komma getrennt. ( der Wert von `z` wird nicht mehr ausgewertet, er ist ja immer `0`). 

	4. Testen Sie die Klassen `Punkt3D` und `Punkt2D` in einer `Testklasse` mit `main()`-Methode wie folgt:

		- Erstellen Sie ein Array vom Typ `Punkt2D`. Es hat die Länge `3`. 
		- Erzeugen Sie ein `Random`-Objekt. Sie müssen dazu die Klasse `Random` aus dem `java.util`-Paket importieren. 
		- innerhalb einer Schleife soll nun Folgendes passieren:

			- Sie erzeugen sich für `x`, `y` und `z` jeweils Zufallszahlen aus dem Bereich `[0, ... ,9]` (`0` und `9` inklusive, also `10` mögliche Zufallszahlen). 
			- wenn `z` den Wert `0` hat, dann erzeugen Sie mit den zufällig erzeugten Werten von `x` und `y` ein Objekt vom Typ `Punkt2D` und speichern dieses im Array. Rufen Sie dafür die `print()`-Methode auf. 
			- wenn `z` einen Wert ungleich `0` hat, dann erzeugen Sie mit den zufällig erzeugten Werten von `x`, `y` und `z` ein Objekt vom Typ `Punkt3D` und rufen dafür die `print()`-Methode auf. Ein solches Objekt wird nicht weiter gespeichert. 
			- diesen Prozess wiederholen Sie so lange, bis das `Punkt2D[]`-Array befüllt ist, bis Sie also *drei*  `Punkt2D`-Objekte erzeugt und im Array gespeichert haben.  

		- Eine mögliche Ausgabe könnte so sein (Zufallswerte):
			```bash
			---------------- Punkt2D und Punkt3D ---------------

			(3,8,9)
			(3,3,4)
			(1,2,3)
			(7,6,7)
			(0,4,7)
			(9,0,8)
			(0,3,8)
			(3,3,9)
			(7,2,1)
			(2,4)
			(1,8)
			(6,4,7)
			(2,1,2)
			(7,4,1)
			(7,1,1)
			(0,2,2)
			(6,4,9)
			(1,2,7)
			(3,9,8)
			(2,3)
			```
			das letzte Objekt ist immer ein `Punkt2D`-Objekt, denn nach dem dritten `Punkt2D`-Objekt hören Sie ja auf, Objekte zu erzeugen (Schleifenende).

	5. Erstellen Sie im gleichen package eine Klasse `Strecke` mit 

		- den privaten Objektvariablen `start` und `ende`, jeweils vom Typ `Punkt2D`,
		- einem parametrisierten Konstruktor `Strecke(Punkt2D start, Punkt2D ende)`. Mit den Parameterwerten werden die Objektvariablen initialisiert. 
		- einem weiteren parametrisierten Konstruktor `Strecke(int x1, int y1, int x2, int y2)`. Mit den Parameterwerten `x1` und `y1` erzeugen Sie sich ein `Punkt2D`-Objekt, das den `start`-Punkt bildet und mit den Parameterwerten `x2` und `y2` erzeugen Sie sich ein `Punkt2D`-Objekt, das den `ende`-Punkt bildet. 
		- Schreiben Sie eine Objektmethode `laenge()`, die die Länge der `Strecke` als `double` zurückgibt. Sie können dazu die Methoden `Math.abs(number)` für den absoluten Betrag von `number` und `Math.sqrt(number)` für die Quadratwurzel von `number` (als `double`) verwenden. **Tipp:**
			![strecke](./files/88_strecke.png)

		- Überschreiben Sie die Methode `toString()`, so dass folgende textuelle Reräsentation der `Strecke` als `String` erzeugt wird (Beispielwerte):
			```bash
			Strecke [start=(2,4), ende=(1,8), Laenge= 4,1231cm]
			```
			also die Start- und Endpunkte ausgegeben werden und die Länge der Strecke in eckigen Klammern nach dem Wort `Strecke`.  
		- Schreiben Sie eine Objektmethode `print()`, die den durch `toString()` erzeugten `String` auf die Konsole ausgibt.

	6. Testen Sie die Klasse `Strecke` in der `Testklasse` mit `main()`-Methode wie folgt:

		- Erzeugen Sie `3` Objekte der Klasse `Strecke`. Wählen Sie 

			- als `start`-Punkt der *ersten* Strecke, den *ersten* Punkt aus dem `Punkt2D`-Array aus dem ersten Teil der Aufgabe, als `ende`-Punkt den *zweiten* Punkt aus dem `Punkt2D`-Array aus dem ersten Teil, 
			- als `start`-Punkt der *zweiten* Strecke, den *zweiten* Punkt aus dem `Punkt2D`-Array aus dem ersten Teil der Aufgabe, als `ende`-Punkt den *dritten* Punkt aus dem `Punkt2D`-Array aus dem ersten Teil, 
			- als `start`-Punkt der *dritten* Strecke, den *dritten* Punkt aus dem `Punkt2D`-Array aus dem ersten Teil der Aufgabe, als `ende`-Punkt den *ersten* Punkt aus dem `Punkt2D`-Array aus dem ersten Teil.
		- Wenden Sie für alle drei `Strecke`-Objekte die `print()`-Methode an. Es sollte folgende Ausgabe erzeugt werden (Beispielwerte):
			```bash
			-------------------- Strecke -----------------------

			Strecke [start=(7,1), ende=(6,4), Laenge= 3,1623cm]
			Strecke [start=(6,4), ende=(4,6), Laenge= 2,8284cm]
			Strecke [start=(4,6), ende=(7,1), Laenge= 5,8310cm]
			```

	7. Erstellen Sie im gleichen package eine Klasse `PunkteArray` mit 

		- der privaten Objektvariablen `punkte` vom Typ `Punkt2D[]`,
		- dem parametrisierten Konstruktor `PunkteArray(int anzahl)`, dem die Anzahl der Punkte, also die Länge des `punkte`-Arrays übergeben wird. Erzeugen Sie unter Verwendung dieser `anzahl` das `punkte`-Array.
		- Schreiben Sie eine Objektmethode `contains(Punkt2D p)`. Diese Methode gibt ein `true` zurück, wenn `p` im `punkte`-Array enthalten ist und `false` sonst. **Tipp:** Beachten Sie, dass es sein kann, dass nicht alle Elemente im `punkte`-Array tatsächlich ein Objekt enthalten. Es kann also sein, dass manche Referenzvariablen `this.punkte[index]` den Wert `null` haben. Mithilfe von `this.punkte[index] != null` können Sie prüfen, ob `this.punkte[index]` **nicht** auf `null` zeigt. 
		- Schreiben Sie eine Objektmethode `fillArray()`. Diese Methode befüllt das `punkte`-Array vollständig mit `Punkte2D`-Objekten. Beachten Sie:

			- die Werte für `x` und `y` aller Objekte sollen jeweils zufällig mithilfe von `Random` erzeugt werden. Der Wertebereich ist dabei jeweils `[0, ... ,9]` (also `0` und `9` inklusive, insgesamt `10` verschiedene Zufallszahlen),
			- `Punkt2D`-Objekte dürfen nicht doppelt im `punkte`-Array vorkommen, d.h. es gibt keine zwei Punkte `p1` und `p2` im `punkte`-Array für die `p1.equals(p2)` den Wert `true` hat. 

		- Überschreiben Sie die Methode `toString()`, so dass folgende textuelle Reräsentation des `PunkteArray` als `String` erzeugt wird (Beispielwerte):
			```bash
			[ (6,7), (3,2), (1,4), (5,0), (4,6), (9,5), (1,5), (0,3), (4,9), (6,9), (5,2), (1,9), (7,6), (2,3), (4,4) ]
			```
			also alle Punkte in eckigen Klammern durch Komma getrennt.  
		- Schreiben Sie eine Objektmethode `print()`, die den durch `toString()` erzeugten `String` auf die Konsole ausgibt.

		- **Hinweis:** (für die folgenden Methoden) Ein *Polygon* ist ein geschlossener Linienezug aus Strecken. Die folgende Abbildung zeigt ein Polygon, das aus den Strecken `(p1, p2)`, `(p2, p3)`, `(p3, p4)`, `(p4, p5)` und `(p5, p1)` besteht. Es gibt darin also `5` Punkte und `5`Strecken:
			![strecke](./files/91_polygon.png)

		- Schreiben Sie eine Objektmethode `createPolygon()`, die ein `Strecke[]` zurückgibt. Das `Strecke[]` ist genau so lang wie das `punkte`-Array. Das `Strecke[]` wird mit Objekten vom Typ `Strecke` vollständig befüllt. Dabei sind die `start`- und `ende`-Punkte immer die Nachbarpunkte aus dem `punkte`-Array. Jeder Punkt aus dem `punkte`-Array wird also zwei Mal verwendet, einmal als `ende`-Punkt einer Strecke und einmal als `start`-Punkt der nächsten Strecke im `Strecke[]`. Beachten Sie, dass der `start`-Punkt der letzten Strecke im `Strecke[]` der letzte Punkte im `punkte`-Array und der `ende`-Punkt dieser Strecke der erste Punkt im `punkte`-Array ist - siehe Skizze:
			![strecke](./files/90_punktearray.png)

		- Schreiben Sie eine Objektmethode `gesamtLaenge()`, die die Gesamtlänge aller Strecken im Polygon ermittelt und diese als `double` zurückgibt. **Tipp:** Sie müssen sich in der Methode erst mithilfe der `createPolygon()`-Methode das Polygon erzeugen. 
		- Schreiben Sie eine Objektmethode `amWeitestenLinks()`, die den `Punkt2D` aus dem `punkte`-Array zurückgibt, der am weitesten links von allen ist (den kleinsten `x`-Wert von allen hat). Geben Sie diesen Punkt zurück.  
		- Schreiben Sie eine Objektmethode `amWeitestenOben()`, die den `Punkt2D` aus dem `punkte`-Array zurückgibt, der am weitesten oben von allen ist (den kleinsten `y`-Wert von allen hat). Geben Sie diesen Punkt zurück. 
		- Schreiben Sie eine Objektmethode `laengsteStrecke()`, die die längste `Strecke` aller Strecken im Polygon ermittelt und diese zurückgibt. **Tipp:** Sie müssen sich in der Methode erst mithilfe der `createPolygon()`-Methode das Polygon erzeugen.  
		- Schreiben Sie eine Objektmethode `printStrecken()`. Diese Methode gibt alle Strecken aus dem Polygon auf die Konsole aus. Außerdem wird die Gesamtlänge aller Strecken aus dem Polygon, der am weitesten links stehende Punkt aus dem `punkte`-Array und der am weitesten oben stehende Punkt aus dem `punkte`-Array ausgegeben. **Tipp:** Sie müssen sich in der Methode erst mithilfe der `createPolygon()`-Methode das Polygon erzeugen. Es sollte folgende Ausgabe erfolgen (Beispielwerte):
			```bash
			Strecke [start=(0,1), ende=(2,1), Laenge= 2,0000cm]
			Strecke [start=(2,1), ende=(5,7), Laenge= 6,7082cm]
			Strecke [start=(5,7), ende=(8,7), Laenge= 3,0000cm]
			Strecke [start=(8,7), ende=(7,4), Laenge= 3,1623cm]
			Strecke [start=(7,4), ende=(8,1), Laenge= 3,1623cm]
			Strecke [start=(8,1), ende=(1,1), Laenge= 7,0000cm]
			Strecke [start=(1,1), ende=(4,6), Laenge= 5,8310cm]
			Strecke [start=(4,6), ende=(2,9), Laenge= 3,6056cm]
			Strecke [start=(2,9), ende=(9,4), Laenge= 8,6023cm]
			Strecke [start=(9,4), ende=(6,8), Laenge= 5,0000cm]
			Strecke [start=(6,8), ende=(9,8), Laenge= 3,0000cm]
			Strecke [start=(9,8), ende=(5,6), Laenge= 4,4721cm]
			Strecke [start=(5,6), ende=(8,4), Laenge= 3,6056cm]
			Strecke [start=(8,4), ende=(6,5), Laenge= 2,2361cm]
			Strecke [start=(6,5), ende=(0,1), Laenge= 7,2111cm]
			Gesamtlaenge der Strecken : 68,5964cm 
			am weitesten links        : (0,1) 
			am weitesten oben         : (0,1) 
			laengste                  : Strecke [start=(2,9), ende=(9,4), Laenge= 8,6023cm] 
			```

	8. Testen Sie die Klasse `PunkteArray` in der `Testklasse` mit `main()`-Methode wie folgt:

		- Erzeugen Sie ein Objekt der Klasse `PunkteArray` und übergeben Sie als Anzahl der `punkte` den Wert `15`.
		- Rufen Sie für diese Objekt die Methoden `fillArray()`, `print()` und `printStrecken()` auf. 
		- Es sollten folgende Ausgaben erzeugt werden (Beispielwerte):
			```bash
			------------------ PunkteArray ---------------------

			[ (0,1), (2,1), (5,7), (8,7), (7,4), (8,1), (1,1), (4,6), (2,9), (9,4), (6,8), (9,8), (5,6), (8,4), (6,5) ]
			Strecke [start=(0,1), ende=(2,1), Laenge= 2,0000cm]
			Strecke [start=(2,1), ende=(5,7), Laenge= 6,7082cm]
			Strecke [start=(5,7), ende=(8,7), Laenge= 3,0000cm]
			Strecke [start=(8,7), ende=(7,4), Laenge= 3,1623cm]
			Strecke [start=(7,4), ende=(8,1), Laenge= 3,1623cm]
			Strecke [start=(8,1), ende=(1,1), Laenge= 7,0000cm]
			Strecke [start=(1,1), ende=(4,6), Laenge= 5,8310cm]
			Strecke [start=(4,6), ende=(2,9), Laenge= 3,6056cm]
			Strecke [start=(2,9), ende=(9,4), Laenge= 8,6023cm]
			Strecke [start=(9,4), ende=(6,8), Laenge= 5,0000cm]
			Strecke [start=(6,8), ende=(9,8), Laenge= 3,0000cm]
			Strecke [start=(9,8), ende=(5,6), Laenge= 4,4721cm]
			Strecke [start=(5,6), ende=(8,4), Laenge= 3,6056cm]
			Strecke [start=(8,4), ende=(6,5), Laenge= 2,2361cm]
			Strecke [start=(6,5), ende=(0,1), Laenge= 7,2111cm]
			Gesamtlaenge der Strecken : 68,5964cm 
			am weitesten links        : (0,1) 
			am weitesten oben         : (0,1) 
			laengste                  : Strecke [start=(2,9), ende=(9,4), Laenge= 8,6023cm] 
			```

??? question "Eine mögliche Lösung für Übung 11"
	=== "Punkt3D.java"
		```java 
		package uebungen.uebung11;

		public class Punkt3D
		{
			private int x;
			private int y;
			private int z;
			
			public Punkt3D(int x, int y, int z)
			{
				this.x = x;
				this.y = y;
				this.z = z;
			}

			public int getX()
			{
				return this.x;
			}

			public int getY()
			{
				return this.y;
			}
			
			public int getZ()
			{
				return this.z;
			}
			
			@Override
			public String toString()
			{
				return String.format("(%d,%d,%d)", this.x, this.y, this.z);
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
			
			@Override
			public boolean equals(Object o)
			{
				if(o == null) return false;
				if(this == o) return true;
				if(this.getClass() != o.getClass()) return false;
				
				Punkt3D p = (Punkt3D)o;
				return this.x == p.x && this.y == p.y && this.z == p.z;
			}
			
			public boolean xIsSmaller(Punkt3D p)
			{
				return this.x < p.x;
			}	
			
			public boolean yIsSmaller(Punkt3D p)
			{
				return this.y < p.y;
			}
			
			public boolean zIsSmaller(Punkt3D p)
			{
				return this.z < p.z;
			}
		}
		```

	=== "Punkt2D.java"
		```java linenums="1"
		package uebungen.uebung11;

		public class Punkt2D extends Punkt3D
		{
			public Punkt2D(int x, int y)
			{
				super(x,y,0);
			}
			
			@Override
			public String toString()
			{
				return String.format("(%d,%d)", this.getX(), this.getY());
			}
		}
		```

	=== "Strecke.java"
		```java linenums="1" 
		package uebungen.uebung11;

		public class Strecke
		{
			private Punkt2D start;
			private Punkt2D ende;
			
			public Strecke(Punkt2D start, Punkt2D ende)
			{
				this.start = start;
				this.ende = ende;
			}
			
			public Strecke(int x1, int y1, int x2, int y2)
			{
				this.start = new Punkt2D(x1, y1);
				this.ende = new Punkt2D(x2, y2);
			}
			
			public double laenge()
			{
				int diffX = Math.abs(start.getX() - ende.getX());
				int diffY = Math.abs(start.getY() - ende.getY());
				int diffX2 = diffX * diffX;
				int diffY2 = diffY * diffY;
				double laenge = Math.sqrt(diffX2 + diffY2);
				return laenge;
			}
			
			@Override
			public String toString()
			{
				String s = String.format("Strecke [start=%s, ende=%s, Laenge=%7.4fcm]", start.toString(), ende.toString(), this.laenge());
				return s;
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
		}
		```	

	=== "PunkteArray.java"
		```java linenums="1" 
		package uebungen.uebung11;

		import java.util.Random;

		public class PunkteArray
		{
			private Punkt2D[] punkte;
			
			public PunkteArray(int anzahl)
			{
				this.punkte = new Punkt2D[anzahl];
			}
			
			public boolean contains(Punkt2D p)
			{
				for (int index = 0; index < this.punkte.length; index++)
				{
					if(this.punkte[index] != null && this.punkte[index].equals(p)) 
					{
						return true;
					}
				}
				return false;
			}
			
			public void fillArray()
			{
				Random r = new Random();
				for(int index=0; index < this.punkte.length; index++)
				{
					int x = r.nextInt(10);
					int y = r.nextInt(10);
					Punkt2D p = new Punkt2D(x,y);
					while(this.contains(p))
					{
						x = r.nextInt(10);
						y = r.nextInt(10);
						p = new Punkt2D(x,y);
					}
					this.punkte[index] = p;
				}
			}
			
			@Override
			public String toString()
			{
				String s = "[ ";
				for(int index=0; index < this.punkte.length; index++)
				{
					if(index<this.punkte.length-1)
					{
						s += this.punkte[index].toString() + ", ";
					}
					else
					{
						s += this.punkte[index].toString();
					}
				}
				s += " ]";
				return s;
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
			
			public Strecke[] createPolygon()
			{
				Strecke[] polygon = new Strecke[this.punkte.length];
				for(int index=0; index < this.punkte.length-1; index++)
				{
					polygon[index] = new Strecke(this.punkte[index], this.punkte[index+1]);
				}
				int index = this.punkte.length-1;
				polygon[index] = new Strecke(this.punkte[index], this.punkte[0]);
				return polygon;
			}
			
			public void printStrecken()
			{
				Strecke[] polygon = this.createPolygon();
				for(int index=0; index < polygon.length; index++)
				{
					polygon[index].print();
				}
				System.out.printf("Gesamtlaenge der Strecken : %7.4fcm %n", this.gesamtLaenge());
				System.out.printf("am weitesten links        : %s %n", this.amWeitestenLinks().toString());
				System.out.printf("am weitesten oben         : %s %n", this.amWeitestenOben().toString());
				System.out.printf("laengste                  : %s %n", this.laengsteStrecke().toString());
					
			}
			
			public double gesamtLaenge()
			{
				Strecke[] polygon = this.createPolygon();
				double gesamtLaenge = 0.0;
				for(int index=0; index < polygon.length; index++)
				{
					gesamtLaenge += polygon[index].laenge();
				}
				return gesamtLaenge;
			}
			
			public Punkt2D amWeitestenLinks()
			{
				int indexLinks = 0;
				for(int index=0; index < this.punkte.length-1; index++)
				{
					if(this.punkte[index].xIsSmaller(this.punkte[indexLinks]))
					{
						indexLinks = index;
					}
				}
				return this.punkte[indexLinks];
			}
			
			public Punkt2D amWeitestenOben()
			{
				int indexOben = 0;
				for(int index=0; index < this.punkte.length-1; index++)
				{
					if(this.punkte[index].yIsSmaller(this.punkte[indexOben]))
					{
						indexOben = index;
					}
				}
				return this.punkte[indexOben];
			}
			
			public Strecke laengsteStrecke()
			{
				Strecke[] polygon = this.createPolygon();
				int indexLaengste = 0;
				for(int index=0; index < polygon.length; index++)
				{
					if(polygon[index].laenge() > polygon[indexLaengste].laenge())
					{
						indexLaengste = index;
					}
				}
				return polygon[indexLaengste];
			}
		}
		```	

	=== "Testklasse.java"
		```java linenums="1" 
		package uebungen.uebung11;

		import java.util.Random;

		public class Testklasse
		{

			public static void main(String[] args)
			{
				System.out.printf("%n%n---------------- Punkt2D und Punkt3D ---------------%n%n");
				Random r = new Random();
				Punkt2D[] pa = new Punkt2D[3];
				int anz2D = 0;
				while(anz2D < 3)
				{
					int x = r.nextInt(10);
					int y = r.nextInt(10);
					int z = r.nextInt(10);
					Punkt3D p;
					if(z==0)
					{
						pa[anz2D] = new Punkt2D(x,y);
						pa[anz2D].print();
						anz2D++;
					}
					else
					{
						p = new Punkt3D(x,y,z);
						p.print();
					}
				}
				
				System.out.printf("%n%n-------------------- Strecke -----------------------%n%n");
				Strecke s1 = new Strecke(pa[0], pa[1]);
				Strecke s2 = new Strecke(pa[1], pa[2]);
				Strecke s3 = new Strecke(pa[2], pa[0]);
				s1.print();
				s2.print();
				s3.print();
				
				System.out.printf("%n%n------------------ PunkteArray ---------------------%n%n");
				PunkteArray parr = new PunkteArray(15);
				parr.fillArray();
				parr.print();
				parr.printStrecken();
			}

		}
		```	


??? question "Video zu Übung 11 (unvollständig)"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=bc260423dc5289d4d4071d2817209ba1&width=720&height=389&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="389" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>

---

??? question "Quellcodes aus Klausurvorbereitung (05.02.2021)"
	=== "Uhrzeit.java"
		```java 
		package klausurvorbereitung;

		public class Uhrzeit
		{
			private int stunden;
			private int minuten; 
			private int sekunden;

			public Uhrzeit(int sekunden)
			{
				final int STUNDE = 3600;
				final int MINUTE = 60;
				
				this.stunden = sekunden / STUNDE;
				this.stunden = this.stunden % 24;
				int restSekunden = sekunden % STUNDE;
				// int restSekunden = sekunden - (this.stunden * STUNDE);
				this.minuten = restSekunden / MINUTE;
				restSekunden = restSekunden % MINUTE;
				this.sekunden = restSekunden;
			}
			
			public void print()
			{
				System.out.println(this.stunden +" : " + this.minuten + " : " + this.sekunden);
			}
		}
		```

	=== "SortedArray.java"
		```java linenums="1"
		package klausurvorbereitung;

		public class SortedArray
		{
			private int[] s;
			
			public SortedArray()
			{
				this.s = new int[0];
			}
			
			
			public SortedArray(int el)
			{
				this.s = new int[1];
				this.s[0] = el;
			}
			
			public boolean contains(int element)
			{
				for (int index = 0; index < this.s.length; index++)
				{
					if(this.s[index] == element)
					{
						return true;
					}
				}
				return false;
			}
			
			public boolean insert(int element)
			{
				if(this.contains(element))
				{
					return false;
				}
				else
				{
					int[] copy = new int[this.s.length + 1];
					int indexCopy = 0;
					int indexS = 0;
					while (indexS < this.s.length && this.s[indexS] < element)
					{
						copy[indexCopy++] = this.s[indexS++];
					}
					
					copy[indexCopy++] = element;
					
					// Rest einfuegen
					// indexCopy ist 1 groesser als indexS
					while (indexS < this.s.length)
					{
						copy[indexCopy++] = this.s[indexS++];
					}
					
					this.s = copy;
					return true;
				}
			}
		}
		```

	=== "Testklasse.java"
		```java linenums="1" 
		package klausurvorbereitung;

		public class Testklasse
		{

			public static void main(String[] args)
			{
				Uhrzeit u1 = new Uhrzeit(83);
				u1.print();
				Uhrzeit u2 = new Uhrzeit(3662);
				u2.print();
				Uhrzeit u3 = new Uhrzeit(86399);
				u3.print();
				Uhrzeit u4 = new Uhrzeit(172799);
				u4.print();
				
				/*
				Punkt3D(int x, int y, int z)
				{
					
				}
				
				Punkt2D(int x, int y)
				{
					super(x, y, 0);
				}
				*/
				
				Uhrzeit[] ua = new Uhrzeit[4];
				ua[0] = new Uhrzeit(83);
				System.out.println(ua[0] == u1);
				System.out.println(ua[0].equals(u1));
				
				String s1 = "Hallo";
				String s2 = "hallo";
				System.out.println(s1.equals(s2));
				ua[0].print();
				
			}

		}
		```	


??? question "Video zu Klausurvorbereitung (05.02.2021)"
	- <iframe src="https://mediathek.htw-berlin.de/media/embed?key=c18f188924d0581e3c7e953751c6f2ed&width=720&height=378&autoplay=false&autolightsoff=false&loop=false&chapters=false&related=false&responsive=false&t=0" data-src="" class="iframeLoaded" width="720" height="378" frameborder="0" allowfullscreen="allowfullscreen" allowtransparency="true" scrolling="no"></iframe>




## Weitere Übungsaufgaben (selbständiges Üben)

Hier werden lose und unregelmäßig Übungsaufgaben gesammelt. Am Ende des Semesters soll dann hier eine große Sammlung von Übungsaufgaben entstanden sein, die der eigenen Kontrolle dienen sollen. Die Übungen sind thematisch sortiert, allerdings überschneiden sich manche Themen in einigen Übungen. 

### Probeklausuren


??? note "Power"
	- Implementieren Sie eine Klasse `Power`. 

	- **Idee :** Die Klasse `Power` implementiert die *Potenz*. Eine *Potenz* besteht aus einer Basis (`base`) und dem Exponenten (`exp`): base^exp, z.B. `8^4 = 8 ∙ 8 ∙ 8 ∙ 8`

	- Objektvariablen sind `base` und `exp` vom Typ `int`. Beide Objektvariablen sind nur innerhalb der Klasse sichtbar!
	- Implementieren Sie getter für die Basis (`getBase()`) und für den Exponenten (`getExp()`) (Sichtbarkeit `public`). 
	- Implementieren Sie für die Klasse `Power` einen parametrisierten Konstruktor `Power(int base, int exp)`. Die Werte der Parameter werden verwendet, um den Objektvariablen Werte zuzuweisen.
	- Implementieren Sie eine Objektmethode `getValue()`, die ein `double` zurückgibt. Die Methode gibt den Wert der Potenz zurück, also z.B. für `8^4` den Wert `4096.0`. Beachten Sie: <br/>
		![formel](./files/73_formel.png) <br/>
		Die Verwendung der `Math`-Klasse ist nicht erlaubt!
	- Überschreiben Sie die Methode `toString()`, so dass eine Potenz in der Form `(base, exp)` als `String` zurückgegeben wird, wobei `base` und `exp` die Werte der jeweiligen Objektvariablen sein sollen, also z.B. `(8, 4)`. 
	- Implementieren Sie eine Objektmethode `print()`, die mithilfe von `toString()` eine Potenz auf der Konsole ausgibt. 
	- Erstellen Sie eine Klasse `PowerTest` mit `main()`-Methode. Erzeugen Sie in der `main()`-Methode folgende fünf Objekte der Klasse `Power`: `3^4`, `-3^4`, `3^0`, `3^(-4)`, `-3^(-4)`. Wenden Sie jeweils die Methode `print()` an und geben Sie außerdem jeweils den Wert der Potenz auf die Konsole aus. Es sollte eine Ausgabe in ungefähr der folgenden Form erfolgen:
	```bash
	(3,4)
	(3,4) = 81.0
	(-3,4)
	(-3,4) = 81.0
	(3,0)
	(3,0) = 1.0
	(3,-4)
	(3,-4) = 0.012345679012345678
	(-3,-4)
	(-3,-4) = 0.012345679012345678
	```
	---
	- Erstellen Sie eine Klasse `PowerOfTwo`. Diese Klasse erbt von `Power`. 
	- **Idee :** Ein Objekt der Klasse `PowerOfTwo` ist eine Potenz zur Basis `2`, also z.B. `2^4`.
	- Implementieren Sie einen parametrisierten Konstruktor `PowerOfTwo(int exp)`. Beachten Sie, dass der Basis der Wert `2` zugewiesen wird. 
	- Implementieren Sie eine Objektmethode `printBinary()`. Diese Methode gibt die Potenz als Binärzahl (bestehend aus Einsen und Nullen) auf die Konsole aus, z.B. `2^4`: `1 0 0 0 0`. **Tipp :** es kommt vorne immer eine `1` und danach kommen so viele Nullen, wie der Exponent groß ist. Wenn der Exponent kliner als `0` ist, dann geben Sie `Zahl ist kleiner als 1` auf die Konsole aus. Die Binärzahl für eine Potenz kleiner als `0` muss also **nicht** ermittelt werden. 
	- Erzeugen Sie in der `main()`-Methode der Klasse `PowerTest` folgende drei Objekte der Klasse `PowerOfTwo`: `2^4`, `2^(-4)`, `2^0` und rufen Sie jeweils die Methoden `print()` und `printBinary()` auf. Es sollte eine Ausgabe in ungefähr der folgenden Form erfolgen:
	```bash
	(2,4)
	1 0 0 0 0
	(2,-4)
	Zahl ist kleiner als 1
	(2,0)
	1
	```
	---
	- Erstellen Sie eine Klasse `PowerArray`. Objektvariable ist `p` vom Typ `Power[]`. `p` ist nur innerhalb der Klasse sichtbar!
	- Implementieren Sie einen parametrisierten Konstruktor `PowerArray(int length)`. Darin wird das `p`-Array erzeugt. Die Länge von `p` entspricht dem Wert von `length`.
	- Implementieren Sie eine Objektmethode `fillArray()`. Bei Aufruf der Methode soll das Array `p` mit Objekten der Klasse `Power` gefüllt werden. Die Werte der Objektvariablen der `Power`-Objekte werden zufällig mit Hilfe der `Random`-Klasse erzeugt (um die `Random`-Klasse verwenden zu können, müssen Sie diese aus dem `java.util`-Paket importieren). Beachten Sie folgende Anforderungen:
		1. Sowohl die Basis als auch der Exponent können Werte aus dem Wertebereich `1..5` (jeweils inklusive) annehmen
		2. Die Basis soll nie einen größeren Wert als der Exponent haben (aber es können beide gleich sein).
	- Implementieren Sie eine Objektmethode `createArrayOfValues()`. Diese Methode liefert ein `double[]`-Array zurück, das alle Werte der Potenzen aus dem `p`-Array enthält. 
	- Implementieren Sie eine Objektmethode `getIndexExponent(int exponent)`, die den Index des (ersten) Elementes zurückliefert, bei dem das `Power`-Objekt den Exponenten hat, der als Parameter der Methode übergeben wird. Existiert ein solches Objekt nicht im Array, wird `-1` zurückgegeben. 
	- Überschreiben Sie die Methode `toString()`, so dass das `p`-Array in der Form (Beispiel)
		```bash
		[ (2,5), (2,3), (3,3), (1,5), (2,3), (1,3), (1,3), (1,2), (3,5), (2,3) ]
		```
		als `String` zurückgegeben wird. Implementieren Sie eine Methode `print()`, die mithilfe von `toString()` das `p`-Array auf die Konsole ausgibt.
	- Implementieren Sie eine Methode `sort()`, die das `p`-Array nach den Größen der Werte der Potenzen ordnet – vom kleinsten Wert zum größten Wert. Die Verwendung der `Arrays`-Klasse aus dem `java.util`-Paket ist nicht gestattet. Sollten 2 Potenzen den gleichen Wert haben, z.B. `1^2` und `1^4`, dann soll die Potenz mit dem höheren Exponent größer sein als die Potenz mit dem kleineren Exponenten.
	- Erzeugen Sie in der `main()`-Methode der Klasse `PowerTest` ein Objekt der Klasse `PowerArray`, so dass das `p`-Array die Länge `10` hat. Rufen Sie für dieses Objekt die Objektmethoden `fillArray()`, `print()`, `sort()` und wieder `print()` auf. Testen Sie außerdem (mindestens) einmal die `getIndexExponent()`- und die `createArrayOfValues()`- Methode (um das Array of Values auf der Konsole auszugeben, verwenden Sie die statische `toString()`-Methode der `Arrays`-Klasse (`import java.util.Arrays;`). Es sollte eine Ausgabe in ungefähr der folgenden Form erfolgen (Zufallswerte):
	```bash
	[ (1,5), (1,2), (3,5), (3,4), (4,4), (1,5), (1,2), (3,4), (2,3), (3,5) ]
	[ (1,2), (1,2), (1,5), (1,5), (2,3), (3,4), (3,4), (3,5), (3,5), (4,4) ]
	Index : 5
	Index : -1
	[1.0, 1.0, 1.0, 1.0, 8.0, 81.0, 81.0, 243.0, 243.0, 256.0]
	```

??? question "eine mögliche Lösung für Power"
	=== "Power.java"
		```java linenums="1"
		public class Power
		{
			private int base;
			private int exp;
			
			Power(int base, int exp)
			{
				this.base = base;
				this.exp = exp;
			}
			
			public int getBase()
			{
				return this.base;
			}
			
			public int getExp()
			{
				return this.exp;
			}
			
			public double getValue()
			{
				double value=1.0;
				if(this.exp>=0)
				{
					for(int i=1; i<=this.exp; i++)
					{
						value *= this.base;
					}
				}
				else
				{
					for(int i=1; i<=-this.exp; i++)
					{
						value *= this.base;
					}
					value = 1.0/value;
				}
				return value;
			}
			
			@Override
			public String toString()
			{
				return "("+this.base+","+this.exp+")";
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
			
		}
		```

	=== "PowerOfTwo.java"
		```java linenums="1"
		public class PowerOfTwo extends Power
		{
			public PowerOfTwo(int exp)
			{
				super(2, exp);
			}
			
			public void printBinary()
			{
				if(this.getExp()<0)
				{
					System.out.println("Zahl ist kleiner als 1");
				}
				else
				{
					String s = "1";
					for(int i=1; i<=this.getExp(); i++)
					{
						s += " 0";
					}
					System.out.println(s);
				}
			}
		}
		```

	=== "PowerArray.java"
		```java linenums="1"
		import java.util.Random;

		public class PowerArray
		{
			private Power[] p;
			
			public PowerArray(int length)
			{
				this.p = new Power[length];
			}
			
			public void fillArray()
			{
				Random r = new Random();

				for(int i=0; i<this.p.length; i++)
				{
					int nr1 = r.nextInt(5)+1;
					int nr2 = r.nextInt(5)+1;
					if(nr1>nr2)
					{
						this.p[i] = new Power(nr2, nr1);
					}
					else
					{
						this.p[i] = new Power(nr1, nr2);
					}
				}
			}
			
			public double[] createArrayOfValues()
			{
				double[] values = new double[this.p.length];
				for(int i=0; i<this.p.length; i++)
				{
					values[i] = this.p[i].getValue();
				}
				return values;
			}
			
			public int getIndexExponent(int exponent)
			{
				final int NOT_FOUND = -1;
				for(int i=0; i<this.p.length; i++)
				{
					if(this.p[i].getExp()==exponent)
					{
						return i;
					}
				}
				return NOT_FOUND;
			}
			
			@Override
			public String toString()
			{
				String s = "[ ";
				for(int i=0; i<this.p.length; i++)
				{
					if(i<this.p.length-1)
					{
						s += this.p[i].toString()+", ";
					}
					else
					{
						s += this.p[i].toString();
					}
				}
				s += " ]";
				return s;
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
			
			public void sort()
			{
				for(int bubble=0; bubble<this.p.length-1; bubble++)
				{
					for(int i=0; i<this.p.length-1-bubble; i++)
					{
						if((this.p[i].getValue()>this.p[i+1].getValue()) ||
							((this.p[i].getValue()==this.p[i+1].getValue() && 
							this.p[i].getExp()>this.p[i+1].getExp())))
							{
								Power temp = this.p[i];
								this.p[i] = this.p[i+1];
								this.p[i+1] = temp;
							}
					}
				}
			}
		}
		```

	=== "PowerTest.java"
		```java linenums="1"
		import java.util.Arrays;

		public class PowerTest
		{

			public static void main(String[] args)
			{
				// Objekte erzeugen
				Power p1 = new Power(3,4);
				Power p2 = new Power(-3,4);
				Power p3 = new Power(3,0);
				Power p4 = new Power(3,-4);
				Power p5 = new Power(-3,-4);
				
				System.out.printf("%n%n---------------------- Ausgaben fuer Power ---------------------------%n%n");
				p1.print();
				System.out.println(p1.toString() + " = " + p1.getValue());
				p2.print();
				System.out.println(p2.toString() + " = " + p2.getValue());
				p3.print();
				System.out.println(p3.toString() + " = " + p3.getValue());
				p4.print();
				System.out.println(p4.toString() + " = " + p4.getValue());
				p5.print();
				System.out.println(p5.toString() + " = " + p5.getValue());
				
				System.out.printf("%n%n-------------------- Ausgaben fuer PowerOfTwo -------------------------%n%n");
				PowerOfTwo p21 = new PowerOfTwo(4);
				p21.print();
				p21.printBinary();
				PowerOfTwo p22 = new PowerOfTwo(-4);
				p22.print();
				p22.printBinary();
				PowerOfTwo p23 = new PowerOfTwo(0);
				p23.print();
				p23.printBinary();
				
				System.out.printf("%n%n-------------------- Ausgaben fuer PowerArray -------------------------%n%n");
				PowerArray pa = new PowerArray(10);
				pa.fillArray();
				pa.print();
				pa.sort();
				pa.print();
				
				System.out.println("Index : " +pa.getIndexExponent(4));
				System.out.println("Index : " +pa.getIndexExponent(0));
				
				double[] values = pa.createArrayOfValues();
				System.out.println(Arrays.toString(values));
			}
		}
		```

??? note "Computer"
	- Implementieren Sie eine Klasse `Computer`. 

		- Objektvariablen sind `hersteller` vom Typ `String`, `ram` vom Typ `int` und `platte` vom Typ `int`. Die Objektvariablen sind in der Klasse und allen abgeleiteten Klassen sichtbar!
		- Schreiben Sie einen parametrisierten Konstruktor `Computer(String hersteller, int ram, int platte)`. Die Parameterwerte werden genutzt, um den Objektvariablen die entsprechenden Werte zuzuweisen.
		- Schreiben Sie eine Objektmethode `gleicherHersteller(Computer c)`, die ein `true` zurückgibt, wenn `c` vom gleichen Hersteller ist, wie das aufrufende Objekt. Ansonsten wird ein `false` zurückgegeben. 
		- Schreiben Sie eine Objektmethode `gleicherHersteller(String hersteller)`, die ein `true` zurückgibt, wenn das aufrufende Objekt den Hersteller hat, der als Parameterwert der Methode übergeben wird. Ansonsten wird ein `false` zurückgegeben.
		- Überschreiben Sie die Methode `toString()`, so dass der Computer in folgender Form angezeigt wird (Beispielwerte):
			```bash
			lenovo mit 8 RAM und 256 SSD
			```
		- Schreiben Sie eine Methode `print()`, die mit Hilfe von `toString()` eine Ausgabe auf der Konsole erzeugt.

	- Erstellen Sie eine Klasse `Testklasse` mit `main()`-Methode. Erzeugen Sie in der `main()`-Methode fünf Objekte der Klasse `Computer`:

		- lenovo mit 8 RAM und 256 SSD 
		- lenovo mit 16 RAM und 512 SSD 
		- apple mit 4 RAM und 256 SSD 
		- apple mit 8 RAM und 512 SSD 
		- dell mit 8 RAM und 256 SSD

		Wenden Sie jeweils die Methode `print()` an, wenden Sie die Methode `gleicherHersteller(Computer c)` für den ersten Computer an und vergleichen ihn mit dem zweiten und dem dritten. Geben Sie jeweils den Wert des Vergleiches aus. <br/>
		Es sollten folgende Ausgaben auf der Konsole erzeugt werden:
		```bash
		--------------------- Test Computer --------------------

		lenovo mit 8 RAM und 256 SSD
		lenovo mit 16 RAM und 512 SSD
		apple mit 4 RAM und 256 SSD
		apple mit 8 RAM und 512 SSD
		dell mit 8 RAM und 256 SSD
		c1 und c2 gleicher Hersteller ? : true
		c1 und c3 gleicher Hersteller ? : false
		```

	- Erstellen Sie eine Klasse `Notebook`. Diese Klasse erbt von der Klasse `Computer`. 
	
		- Zusätzliche Objektvariable der Klasse `Notebook` ist `monitor` vom Typ `int`. Die Objektvariablen sind in der Klasse und allen abgeleiteten Klassen sichtbar!	
		- Implementieren Sie einen parametrisierten Konstruktor `Notebook(String hersteller, int ram, int platte, int monitor)`. Die Parameterwerte werden genutzt, um den Objektvariablen des zurückgegebenen Objektes die entsprechenden Werte zuzuweisen.
		- Überschreiben Sie die Methode `toString()`, so dass eine Zeichenkette der Form
			```bash
			(hersteller, ram, platte, monitor)
			```
			zurückgegeben wird (die entsprechenden Werte werden eingesetzt - siehe Ausgabe der `main()`-Methode unten).  

	- Erzeugen Sie in der `main()`-Methode der `Testklasse` zwei Objekte der Klasse `Notebook` (Beispielwerte siehe nächste Zeile) und rufen Sie jeweils die `print()`-Methode auf. <br/>
		Es sollten folgende Ausgaben auf der Konsole erzeugt werden:
		```bash
		--------------------- Test Notebook --------------------

		(lenovo, 8, 256, 13)
		(lenovo, 16, 512, 15)
		```

	- Erstellen Sie eine Klasse `NotebookArray`.  

		- Objektvariable ist `notebooks` vom Typ `Notebook[]`. Die Objektvariable ist nur innerhalb der Klasse sichtbar!
		- Schreiben Sie einen parametrisierten Konstruktor `NotebookArray(int anzahl)`. Darin wird das `notebooks`-Array mit der Länge `anzahl` erzeugt (es wird noch nicht mit `Notebook`-Objekten befüllt - das macht die nächste Methode).
		- Schreiben Sie eine Objektmethode `konfigurieren()`. Bei Aufruf der Methode wird das Array `notebooks` mit Objekten der Klasse `Notebook` befüllt. <br/>
		**Beachten Sie folgende Anforderungen:**

			1. das `notebooks`-Array wird vollständig befüllt
			2. für das Erzeugen der Objekte wird eine Zufallszahl aus dem Bereich `[0, 1, 2, 3, 4]` (`4` inklusive) erzeugt. Nutzen Sie dazu die Klasse `Random` aus dem `java.util`-Paket. Mithilfe von `nextInt(int exclusiveBorder)` wird eine Zufallszahl erzeugt. Je nach Wert der Zufallszahl wird ein anderes Notebook erzeugt:

				Wert `0` -> zu erzeugendes Objekt: `("lenovo", 8, 256, 13)` <br/>
				Wert `1` -> zu erzeugendes Objekt: `("lenovo", 16, 512, 15)` <br/>
				Wert `2` -> zu erzeugendes Objekt: `("apple", 4, 256, 13)` <br/>
				Wert `3` -> zu erzeugendes Objekt: `("apple", 8, 512, 13)` <br/>
				Wert `4` -> zu erzeugendes Objekt: `("dell", 8, 512, 15)` <br/>

		- Überschreiben Sie die Objektmethode `toString()`. Diese Methode gibt einen String in der Form (Beispielwerte):
			```bash
			[ 5 : (lenovo, 8, 256, 13 ), (apple, 8, 512, 13 ), (lenovo, 16, 512, 15 ), (lenovo, 8, 256, 13 ), (apple, 8, 512, 13 )]
			```
			zurück. <br/>
			**Beachten Sie:**
	
			1. die eckigen Klammern zu Beginn und Ende des Strings
			2. die Angabe der Anzahl der Elemente am Anfang (im obigen Beispiel `5 : `) 
			3. das Komma zwischen den Elementen (aber nicht nach dem letzten Element)

		- Schreiben Sie eine Methode `print()`, die den in `toString()` erzeugten `String` auf die Konsole ausgibt.

		- Schreiben Sie eine Objektmethode `getHersteller(String hersteller)`. Diese Methode gibt ein Objekt vom Typ `NotebookArray` zurück. Das `notebooks`-Array des erzeugten Objektes enthält genau alle Notebooks aus dem `notebooks`-Array des aufrufenden Objektes, die von dem Hersteller sind, der als Parameterwert übergeben wird.  <br/>
		**Beispiel:** Angenommen, das `notebooks`-Array des aufrufenden Objektes sieht so aus:
			```bash
			[ 10 : (lenovo, 16, 512, 15 ), (apple, 8, 512, 13 ), (apple, 4, 256, 13 ), (apple, 8, 512, 13 ), (lenovo, 8, 256, 13 ), 
				   (lenovo, 16, 512, 15 ), (lenovo, 16, 512, 15 ), (lenovo, 16, 512, 15 ), (apple, 4, 256, 13 ), (apple, 4, 256, 13 ) ]
			```
		Dann würde bei Aufruf der Methode `getHersteller("apple")` das zurückgegebene `NotebookArray`-Objekt folgendes `notebooks`-Array haben:
			```bash
			[ (apple, 8, 512, 13 ), (apple, 4, 256, 13 ), (apple, 8, 512, 13 ), (apple, 4, 256, 13 ), (apple, 4, 256, 13 ) ]
			```
			, bei Aufruf der Methode `getHersteller("lenovo")` das zurückgegebene `NotebookArray`-Objekt folgendes `notebooks`-Array:
			```bash
			[ (lenovo, 16, 512, 15 ), (lenovo, 8, 256, 13 ), (lenovo, 16, 512, 15 ), (lenovo, 16, 512, 15 ), (lenovo, 16, 512, 15 ) ]
			```
			und bei Aufruf der Methode `getHersteller("dell")` das zurückgegebene `NotebookArray`-Objekt ein leeres `notebooks`-Array:
			```bash
			[ ]
			```

		- Schreiben Sie eine Objektmethode `sortRamPlatte()`. Diese Methode sortiert das `notebooks`-Array wie folgt:

			1. aufsteigend nach RAM-Größe (kleinste RAM-Größe zuerst)
			2. ist die RAM-Größer zweier Notebooks gleich, entscheidet die Plattengröße (kleinste Plattengröße zuerst)

	- Erzeugen Sie in der `main()`-Methode der `Testklasse` ein Objekt der Klasse `NotebookArray`, so dass das `notebooks`-Array die Länge `10` hat. Rufen Sie für dieses Objekt die Objektmethoden `konfigurieren()`, `print()`, `sortRamPlatte()` und `print()` auf. Testen Sie außerdem die `getHersteller()`-Methode für alle drei Hersteller und geben Sie jeweils das erzeugte Array aus.  <br/>
		Es sollten folgende Ausgaben auf der Konsole erzeugt werden (**Zufallswerte!**):
		```bash
		------------------ Test NotebookArray ------------------

		[ 10 : (apple, 8, 512, 13), (lenovo, 16, 512, 15), (apple, 4, 256, 13), (lenovo, 8, 256, 13), (apple, 4, 256, 13), (dell, 8, 512, 15), (apple, 4, 256, 13), (apple, 8, 512, 13), (lenovo, 8, 256, 13), (apple, 8, 512, 13)]
		[ 10 : (apple, 4, 256, 13), (apple, 4, 256, 13), (apple, 4, 256, 13), (lenovo, 8, 256, 13), (lenovo, 8, 256, 13), (apple, 8, 512, 13), (dell, 8, 512, 15), (apple, 8, 512, 13), (apple, 8, 512, 13), (lenovo, 16, 512, 15)]
		[ 3 : (lenovo, 8, 256, 13), (lenovo, 8, 256, 13), (lenovo, 16, 512, 15)]
		[ 6 : (apple, 4, 256, 13), (apple, 4, 256, 13), (apple, 4, 256, 13), (apple, 8, 512, 13), (apple, 8, 512, 13), (apple, 8, 512, 13)]
		[ 1 : (dell, 8, 512, 15)]
		```


??? question "eine mögliche Lösung für Computer"
	=== "Computer.java"
		```java linenums="1"
		package loesungen.probeklausuren.probeklausur2;

		public class Computer
		{
			protected String hersteller;
			protected int ram;
			protected int platte;
			
			public String getHersteller()
			{
				return this.hersteller;
			}
			public int getRam()
			{
				return this.ram;
			}
			public int getPlatte()
			{
				return this.platte;
			}
			
			public Computer(String hersteller, int ram, int platte)
			{
				this.hersteller = hersteller;
				this.ram = ram;
				this.platte = platte;
			}
			
			public boolean gleicherHersteller(Computer c)
			{
				return this.hersteller.equals(c.hersteller);
				// es geht auch: return this.hersteller == c.hersteller;
			}
			
			public boolean gleicherHersteller(String hersteller)
			{
				return this.hersteller.equals(hersteller);
				// es geht auch: return this.hersteller == hersteller;
			}
			
			@Override
			public String toString()
			{
				return this.hersteller + " mit " + this.ram + " RAM und " + this.platte + " SSD";
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
			
			
		}
		```

	=== "Notebook.java"
		```java linenums="1"
		package loesungen.probeklausuren.probeklausur2;

		public class Notebook extends Computer
		{
			protected int monitor;
			
			public Notebook(String hersteller, int ram, int platte, int monitor)
			{
				super(hersteller, ram, platte);
				this.monitor = monitor;
			}
			
			@Override
			public String toString()
			{
				return "(" + this.hersteller + ", " + this.ram + ", " + this.platte + ", " + this.monitor +")";
			}
			
		}
		```

	=== "NotebookArray.java"
		```java linenums="1"
		package loesungen.probeklausuren.probeklausur2;

		import java.util.Random;

		public class NotebookArray
		{
			private Notebook[] notebooks;
			
			public NotebookArray(int anzahl)
			{
				this.notebooks = new Notebook[anzahl];
			}
			
			public void konfigurieren()
			{
				Random r = new Random();
				for (int i = 0; i < this.notebooks.length; i++)
				{
					int auswahl = r.nextInt(5);
					// folgendes kann natuerlich auch mit if..else geloest werden
					this.notebooks[i] = switch(auswahl)
					{
						case 0 -> new Notebook("lenovo", 8, 256, 13); 
						case 1 ->  new Notebook("lenovo", 16, 512, 15); 
						case 2 ->  new Notebook("apple", 4, 256, 13); 
						case 3 ->  new Notebook("apple", 8, 512, 13); 
						case 4 ->  new Notebook("dell", 8, 512, 15); 
						default -> null;
					};
				}
			}
			
			@Override
			public String toString()
			{
				String s = "[ " + this.notebooks.length + " : ";
				for (int i = 0; i < this.notebooks.length; i++)
				{
					if(i<this.notebooks.length-1)
					{
						s += this.notebooks[i].toString() + ", ";
					}
					else
					{
						s += this.notebooks[i].toString();
					}
				}
				s += "]";
				return s;
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
			
			public NotebookArray getHersteller(String hersteller)
			{
				int anzahl = 0;
				for (int i = 0; i < this.notebooks.length; i++)
				{
					if(this.notebooks[i].gleicherHersteller(hersteller))
					{
						anzahl++;
					}
				}
				NotebookArray na = new NotebookArray(anzahl);
				int indexNA = 0;
				for (int i = 0; i < this.notebooks.length; i++)
				{
					if(this.notebooks[i].gleicherHersteller(hersteller))
					{
						na.notebooks[indexNA++] = this.notebooks[i];
					}
				}
				return na;
			}
			
			public void sortRamPlatte()
			{
				for(int bubble=0; bubble<this.notebooks.length-1; bubble++)
				{
					for(int i=0; i<this.notebooks.length-1-bubble; i++)
					{
						if((this.notebooks[i].getRam()>this.notebooks[i+1].getRam()) ||
							(this.notebooks[i].getRam()==this.notebooks[i+1].getRam() && 
							this.notebooks[i].getPlatte()>this.notebooks[i+1].getPlatte()))
						{
							Notebook temp = this.notebooks[i];
							this.notebooks[i] = this.notebooks[i+1];
							this.notebooks[i+1] = temp;
						}
					}
				}
			}
		}
		```

	=== "Testklasse.java"
		```java linenums="1"
		package loesungen.probeklausuren.probeklausur2;

		public class Testklasse
		{

			public static void main(String[] args)
			{
				
				System.out.printf("%n%n--------------------- Test Computer --------------------%n%n");
				Computer c1 = new Computer("lenovo", 8, 256);
				Computer c2 = new Computer("lenovo", 16, 512);
				Computer c3 = new Computer("apple", 4, 256);
				Computer c4 = new Computer("apple", 8, 512);
				Computer c5 = new Computer("dell", 8, 256);
				
				c1.print();
				c2.print();
				c3.print();
				c4.print();
				c5.print();
				
				System.out.println("c1 und c2 gleicher Hersteller ? : " + c1.gleicherHersteller(c2));
				System.out.println("c1 und c3 gleicher Hersteller ? : " + c1.gleicherHersteller(c3));
				
				System.out.printf("%n%n--------------------- Test Notebook --------------------%n%n");
				Notebook n1 = new Notebook("lenovo", 8, 256, 13);
				Notebook n2 = new Notebook("lenovo", 16, 512, 15);
				
				n1.print();
				n2.print();
				
				System.out.printf("%n%n------------------ Test NotebookArray ------------------%n%n");		
				NotebookArray na = new NotebookArray(10);
				na.konfigurieren();
				na.print();
				na.sortRamPlatte();
				na.print();
				NotebookArray lenovo = na.getHersteller("lenovo");
				lenovo.print();
				NotebookArray apple = na.getHersteller("apple");
				apple.print();
				NotebookArray dell = na.getHersteller("dell");
				dell.print();
				
			}

		}
		```

??? note "Uhrzeit"
	- Implementieren Sie eine Klasse `Uhrzeit`. 

		- Objektvariablen sind `stunden` vom Typ `int`, `minuten` vom Typ `int` und `sekunden` vom Typ `int`. Die Objektvariablen sind nur in der Klasse sichtbar!
		- Schreiben Sie einen parametrisierten Konstruktor `Uhrzeit(int sekunden)`. Übergeben wird eine beliebige Anzahl von Sekunden. Aus diesem Wert wird die Uhrzeit berechnet. 

			- Beispiel 1: Angenommen, es wird der Wert `83` übergeben, dann sind das `0` Stunden, `1` Minute (`60` Sekunden) und `23` Sekunden.
			- Beispiel 2: Angenommen, es wird der Wert `3662` übergeben, dann sind das `1` Stunde (`3600` Sekunden), `1` Minute (`60` Sekunden) und `2` Sekunden. 
			- Beispiel 3: Angenommen, es wird der Wert `86399` übergeben, dann sind das `23` Stunden (`23x3600` Sekunden), `59` Minuten (`59x60` Sekunden) und `59` Sekunden. 
			- Die Stunden sollen immer im Bereich `0..23` sein, d.h. für einen Stunden-Wert größer als `24` nehmen Sie einfach den `Modulo-24`-Wert.
			- Initialisieren Sie die Objektvariablen mit den berechneten Werten.  

		- Schreiben Sie eine Objektmethode `uhrzeitInSekunden()`. Diese Methode gibt die Uhrzeit in Sekunden als `int` zurück. Der Wert der zurückgegebenen Sekunden berechnet sich aus den Stunden multipliziert mit `3600` plus den Minuten multipliziert mit `60` plus den Sekunden des aufrufenden `Uhrzeit`-Objektes.  
		- Schreiben Sie eine Objektmethode `frueher(Uhrzeit u)`, die ein `true` zurückgibt, wenn die Uhrzeit des aufrufenden Objektes früher liegt als der Wert von `u`; `false` sonst. 
		- Schreiben Sie eine Objektmethode `jetztPlusXSekunden(int sekunden)`, die ein neues `Uhrzeit`-Objekt zurückgibt. Die Uhrzeit des neuen Objektes ergibt sich aus der Uhrzeit des aufrufenden Objektes plus der Anzahl der Sekunden, die als Parameter übergeben werden.
		- Schreiben Sie eine Objektmethode `differenzInSekunden(Uhrzeit u)`, die die Anzahl in Sekunden (`int`) zurückgibt, die zwischen der Uhrzeit des aufrufenden Objektes und `u` liegen. Geben Sie die Anzahl stets als positiven Wert zurück! Sie können dazu die Methode `Math.abs(int wert)` verwenden, die den absoluten Betrag von `wert` zurückgibt. 
		- Überschreiben Sie die Methode `toString()`, so dass der Wert des aufrufenden Objektes in der Form `hh:mm:ss` als `String` zurückgegeben wird, z.B. `23:59:59`. Achten Sie darauf, dass die Stunden, Minuten und Sekunden führende Nullen enthalten können, also z.B. `01:02:03`!

	- Erstellen Sie eine Klasse `Testklasse` mit `main()`-Methode. Erzeugen Sie in der `main()`-Methode vier Objekte der Klasse `Uhrzeit`. Verwenden Sie als Parameterwerte: `83`, `3662`, `86399` und `172799`. Wenden Sie jeweils die Methoden `System.out.print()` und `print()` aus `Uhrzeit` so an, dass folgende Ausgabe entsteht:  
		```bash
		z1 : 00:01:23
		z2 : 01:01:02
		z3 : 23:59:59
		z4 : 23:59:59
		```
	- Wenden Sie außerdem jeweils die Methoden `System.out.println()` sowie `frueher()`, `jetztPlusXSekunden()`, `differenzInSekunden()` (und evtl. `toString()`) aus `Uhrzeit` so an, dass folgende Ausgabe entsteht:  
		```bash
		z1 frueher als z2 ? true
		z3 frueher als z4 ? false

		z1 plus   40 Sekunden : 00:02:03
		z2 plus 3598 Sekunden : 02:01:00

		z3-z2 in Sekunden : 82737
		```

	- Erstellen Sie eine Klasse `UhrzeitArray`. Objektvariable `uhren` ist ein Array, das Elemente von `Uhrzeit` aufnimmt. Die Variable ist nur innerhalb der Klasse sichtbar.

		- Schreiben Sie einen parametrisierten Konstruktor `UhrzeitArray(int laenge)`. Innerhalb des Konstruktors wird das Array erzeugt, auf das die Objektvariable `uhren` referenziert. Das Array hat die Länge `laenge` (Parameterwert).
		- Schreiben Sie eine Objektmethode `fill()`, die das `uhren`-Array vollständig mit `Uhrzeit`-Objekten befüllt. Die Parameterwerte der `Uhrzeit`-Objekte werden zufällig erzeugt. Erzeugen Sie ein Objekt der Klasse `Random` (dafür muss `java.util.Random` importiert werden) und erzeugen Sie die Parameter-Werte für die `Uhrzeit`-Objekte zufällig (unter Verwendung des `Random`-Objektes) aus dem Bereich `[0, ..., 86399]` (`0` und `86399` jeweils inklusive)
		- Überschreiben Sie die Objektmethode `toString()`, so dass das `uhren`-Array wie folgt als Zeichenkette zurückgegeben wird (Beispielwerte): 
			```bash
			((06:38:30), (01:59:32), (07:16:48), (01:37:58), (18:16:06), (07:50:33), (01:41:47), (05:07:41), (12:38:08), (02:00:04)) 
			```
			Also die Uhrzeit jeweils in runden Klammern und durch Komma getrennt sowie das ganze Array in runden Klammern. 
		- Schreiben Sie eine Objektmethode `print()`, so dass auf der Konsole die durch `toString()` erzeugte eine Zeichenkette ausgegeben wird.  
		- Schreiben Sie eine Objektmethode `spaeteste()`. Diese Methode gibt die kleinste (früheste) `Uhrzeit` aus dem Array `uhren` zurück. 
		- Schreiben Sie eine Objektmethode `zwischen(Uhrzeit frueh, Uhrzeit spaet)`. Diese Methode gibt ein `UhrzeitArray`-Objekt zurück. Das zurückgegebene `UhrzeitArray`-Objekt enthält alle `Uhrzeit`-Objekte aus dem Array `uhren`, welche zwischen den beiden Uhrzeiten `frueh` und `spaet` liegen.
		- Schreiben Sie eine Objektmethode `sortieren()`. Diese Methode sortiert das `uhren`-Array aufsteigend beginnend mit der kleinsten Uhrzeit.
		- Schreiben Sie eine Objektmethode `kleinsterAbstand()`. Diese Methode gibt ein `UhrzeitArray` der Länge `2` zurück. Es enthält die beiden `Uhrzeit`en aus dem Array `uhren`, welche den kleinsten Abstand (Differenz in Sekunden) haben. Sie können beim Schreiben der Methode davon ausgehen, dass das `uhren`-Array bereits sortiert ist! 

	- Erzeugen Sie in der `main()`-Methode ein Objekt der Klasse `UhrzeitArray`. Das Array soll die Länge `10` haben. 

		- Rufen Sie die `fill()`- und dann die `print()`-Methode auf. Es entsteht folgende Ausgabe (Zufallswerte):
			```bash
			((06:38:30), (01:59:32), (07:16:48), (01:37:58), (18:16:06), (07:50:33), (01:41:47), (05:07:41), (12:38:08), (02:00:04))
			```

		- Wenden Sie jeweils die Methoden `System.out.print()` sowie `spaeteste()` so an, dass folgende Ausgabe entsteht (Zufallswerte):  
			```bash
			spaeteste : 18:16:06
			```

		- Wenden Sie jeweils die Methoden `System.out.print()` sowie `sortieren()` und `print()` so an, dass folgende Ausgabe entsteht (Zufallswerte):
			```bash  
			sortiert  : ((01:37:58), (01:41:47), (01:59:32), (02:00:04), (05:07:41), (06:38:30), (07:16:48), (07:50:33), (12:38:08), (18:16:06))
			```

		- Erzeugen Sie zwei weitere `Uhrzeit`-Objekte `frueh` (Parameterwert `36000`) und `spaet` (Parameterwert `72000`) und rufen Sie damit die Objektmethoden `zwischen(frueh, spaet)` und `print()` auf, so dass folgende Ausgabe entsteht (Zufallswerte):
			```bash
			frueh    : 10:00:00
			spaet    : 20:00:00
			zwischen : ((12:38:08), (18:16:06))
			```

		- Wenden Sie jeweils die Methoden `System.out.print()` sowie `kleinsterAbstand()` und `print()` so an, dass folgende Ausgabe entsteht (Zufallswerte):  
			```bash
			kleinster Abstand : ((01:59:32), (02:00:04))
			```

	- **Zur Kontrolle:** ungefähre Ausgabe auf der Konsole (in Teil 2 Zufallswerte):
		```bash
		--------------- Teil 1 ---------------

		z1 : 00:01:23
		z2 : 01:01:02
		z3 : 23:59:59
		z4 : 23:59:59

		z1 frueher als z2 ? true
		z3 frueher als z4 ? false

		z1 plus   40 Sekunden : 00:02:03
		z2 plus 3598 Sekunden : 02:01:00

		z3-z2 in Sekunden : 82737

		--------------- Teil 2 ---------------

		((06:38:30), (01:59:32), (07:16:48), (01:37:58), (18:16:06), (07:50:33), (01:41:47), (05:07:41), (12:38:08), (02:00:04))

		spaeteste : 18:16:06

		sortiert  : ((01:37:58), (01:41:47), (01:59:32), (02:00:04), (05:07:41), (06:38:30), (07:16:48), (07:50:33), (12:38:08), (18:16:06))

		frueh    : 10:00:00
		spaet    : 20:00:00
		zwischen : ((12:38:08), (18:16:06))

		kleinster Abstand : ((01:59:32), (02:00:04))
		```

??? question "eine mögliche Lösung für Uhrzeit"
	=== "Uhrzeit.java"
		```java linenums="1"
		package loesungen.probeklausuren.probeklausur3;

		public class Uhrzeit
		{
			private int stunden;
			private int minuten;
			private int sekunden;
			
			public Uhrzeit(int sekunden)
			{
				final int STUNDE = 3600;
				final int MINUTE = 60;

				this.stunden = (sekunden/STUNDE)%24;
				int rest = sekunden%STUNDE;	
				this.minuten = rest/MINUTE;
				rest = rest%MINUTE;
				this.sekunden = rest;
			}
			
			public int uhrZeitInSekunden()
			{
				final int STUNDE = 3600;
				final int MINUTE = 60;
				
				int sekunden = this.stunden*STUNDE 
						+ this.minuten*MINUTE 
						+ this.sekunden;
				return sekunden;
			}
			
			public boolean frueher(Uhrzeit u)
			{
				return this.uhrZeitInSekunden() < u.uhrZeitInSekunden();
			}
			
			public boolean spaeter(Uhrzeit u)
			{
				return this.uhrZeitInSekunden() > u.uhrZeitInSekunden();
			}
			
			public Uhrzeit jetztPlusXSekunden(int sekunden)
			{
				int jetzt = this.uhrZeitInSekunden();
				int neu = jetzt + sekunden;
				
				return new Uhrzeit(neu);
			}
			
			public int differenzInSekunden(Uhrzeit u)
			{
				int uhrzeit1 = this.uhrZeitInSekunden();
				int uhrzeit2 = u.uhrZeitInSekunden();
				int diff	= Math.abs(uhrzeit1-uhrzeit2);
				return diff;
			}
			
			@Override
			public String toString()
			{
				String s = "";
				if(this.stunden<10)
				{
					s = s + "0";
				}
				s = s + this.stunden +":";
				if(this.minuten<10)
				{
					s = s + "0";
				}
				s = s + this.minuten +":";
				if(this.sekunden<10)
				{
					s = s + "0";
				}
				s = s + this.sekunden;
				
				return s;
			}
			
			public void print()
			{
				System.out.println(this.toString());
			}
		}
		```

	=== "UhrzeitArray.java"
		```java linenums="1"
		package loesungen.probeklausuren.probeklausur3;

		import java.util.Random;

		public class UhrzeitArray
		{
			private Uhrzeit[] uhren;
			
			public UhrzeitArray(int laenge)
			{
				this.uhren = new Uhrzeit[laenge];
			}
			
			public void fill()
			{
				Random r = new Random();
				for(int i=0; i<this.uhren.length; i++)
				{
					int zufSekunden = r.nextInt(86400);
					this.uhren[i] = new Uhrzeit(zufSekunden);
				}
			}
			
			public void print()
			{
				String s = "(";
				for(int i=0; i<this.uhren.length; i++)
				{
					if(i<this.uhren.length-1)
					{
						s = s + "(" + this.uhren[i].toString() + "), ";
					}
					else
					{
						s = s + "(" + this.uhren[i].toString() + ")";
					}
				}
				s = s +")";
				System.out.println(s);
			}
			
			public Uhrzeit frueheste()
			{
				Uhrzeit frueheste = this.uhren[0];
				for(int i=1; i<this.uhren.length; i++)
				{
					if(this.uhren[i].frueher(frueheste))
					{
						frueheste = this.uhren[i];
					}
				}
				return frueheste;
			}
			
			public UhrzeitArray zwischen(Uhrzeit frueh, Uhrzeit spaet)
			{
				int anzZwischen = 0;
				for(Uhrzeit u : this.uhren)
				{
					if(frueh.frueher(u) && u.frueher(spaet))
					{
						anzZwischen++;
					}
				}
				UhrzeitArray ua = new UhrzeitArray(anzZwischen);
				int uaIndex = 0;
				for(int i=0; i<this.uhren.length; i++)
				{
					if(frueh.frueher(this.uhren[i]) 
							&& this.uhren[i].frueher(spaet))
					{
						ua.uhren[uaIndex] = this.uhren[i];
						uaIndex++;
					}
				}
				return ua;
			}
			
			public void sortieren()
			{
				for(int bubble=0; bubble<this.uhren.length-1; bubble++)
				{
					for(int i=0; i<this.uhren.length-1-bubble; i++)
					{
						if(this.uhren[i+1].frueher(this.uhren[i]))
						{
							Uhrzeit temp = this.uhren[i];
							this.uhren[i] = this.uhren[i+1];
							this.uhren[i+1] = temp;
						}
					}
				}
			}
			
			public UhrzeitArray kleinsterAbstand()
			{
				this.sortieren();
				Uhrzeit u1 = this.uhren[0];
				Uhrzeit u2 = this.uhren[1];
				int kleinsterAbstand = u1.differenzInSekunden(u2);
				for(int i=1; i<this.uhren.length-1; i++)
				{
					if(this.uhren[i].differenzInSekunden(this.uhren[i+1]) 
							< kleinsterAbstand)
					{
						u1 = this.uhren[i];
						u2 = this.uhren[i+1];
						kleinsterAbstand = u1.differenzInSekunden(u2);
					}
				}
				UhrzeitArray ua = new UhrzeitArray(2);
				ua.uhren[0] = u1;
				ua.uhren[1] = u2;
				return ua;
					
			}
		}
		```

	=== "Testklasse.java"
		```java linenums="1"
		package loesungen.probeklausuren.probeklausur3;

		public class Testklasse
		{

			public static void main(String[] args)
			{
				System.out.printf("%n%n---------------------- Test Uhrzeit --------------------------%n%n");
				Uhrzeit z1 = new Uhrzeit(83);
				Uhrzeit z2 = new Uhrzeit(3662);
				Uhrzeit z3 = new Uhrzeit(86399);
				Uhrzeit z4 = new Uhrzeit(172799);
				
				System.out.print("z1 : "); 
				z1.print();
				System.out.print("z2 : "); 
				z2.print();
				System.out.print("z3 : "); 
				z3.print();
				System.out.print("z4 : "); 
				z4.print();
				
				System.out.println("z1 frueher als z2 ? " + z1.frueher(z2));
				System.out.println("z3 frueher als z4 ? " + z3.frueher(z4));
				
				System.out.println("z1 plus   40 Sekunden : " 
				+ z1.jetztPlusXSekunden(40));
				System.out.println("z2 plus 3598 Sekunden : " 
				+ z2.jetztPlusXSekunden(3598));
				
				System.out.println("z3-z2 in Sekunden : " 
				+ z3.differenzInSekunden(z2));
				
				System.out.printf("%n%n------------------- Test UhrzeitArray ------------------------%n%n");
				UhrzeitArray ua = new UhrzeitArray(10);
				ua.fill();
				ua.print();
				System.out.println("frueheste : " + ua.frueheste());
				
				Uhrzeit frueh = new Uhrzeit(36000);
				Uhrzeit spaet = new Uhrzeit(72000);
				UhrzeitArray zwischen = ua.zwischen(frueh, spaet);
				
				System.out.print("frueh    : "); frueh.print();
				System.out.print("spaet    : "); spaet.print();
				System.out.print("zwischen : "); zwischen.print();
				
				ua.sortieren();
				ua.print();
				
				UhrzeitArray kleinsterAbstand = ua.kleinsterAbstand();
				System.out.print("kleinster Abstand : ");
				kleinsterAbstand.print();	
			}
		}
		```






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
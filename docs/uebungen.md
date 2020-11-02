# Übungen

## Übungsblätter (wochenweise)

??? note "Übung 0"
	1. Installieren Sie sich - falls noch nicht geschehen - eine Java-Entwicklungsumgebung (siehe [**Java**](./tools/#java)).
	2. Installieren Sie sich die IDE Ihrer Wahl (siehe [**IDE**](./tools/#ide)). In den Vorlesungen und Übungen (Videos) verwende ich [**Eclipse**](./tools/#eclipse) und beschreibe die Schritte auch für Eclipse.
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
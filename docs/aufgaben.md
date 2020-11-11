# Aufgaben

Hier finden Sie die Aufgaben. Die Abgabefristen der einzelnen Aufgaben stehen [hier](../#planung-vorlaufig-kann-sich-noch-andern). Beachten Sie die nachfolgenden Hinweise zum Hochladen der Aufgaben. 

## Hinweise zur Abgabe der Aufgaben

Die Aufgaben laden Sie in [Moodle](https://moodle.htw-berlin.de/course/view.php?id=29156) unter dem Reiter "Aufgaben" hoch. Dort ist für jede Aufgabe eine Moodle-Aufgabe erstellt. Beachten Sie, dass ein Hochladen nach Ablauf der Abgabefrist nicht mehr möglich ist. 

- Achten Sie darauf, dass Sie die Quelldateien (also die `.java`-Dateien aus dem `src`-Verzeichnis) hochladen. 
- Ihre Klassen erstellen Sie immer in einem package `aufgaben.aufgabeX`. Das heißt, Aufgabe1 ist im package `aufgaben.aufgabe1`, Aufgabe2 im package `aufgaben.aufgabe2` usw. 
- In Ihrem `workspace`gibt es dann einen Ordner für Ihr Java-Projekt, z.B. `WS20` (je nachdem, wie Sie Ihr Java-Projekt genannt haben) und darin befindet sich ein `bin`- und ein `src`-Ordner. In dem `src`-Ordner befindet sich dann ein Ordner `aufgaben` und darin ein Ordner `aufgaben1` (für Aufgabe1). Darin befindet sich Ihre `.java`-Datei, die Sie hochladen sollen. Angenommen, Sie haben Ihre Klasse `Aufgabe1` genannt, dann heißt die Klasse also `Aufgabe1.java`. Sie folgen also dem Pfad `workspace`--> *Java-Projekt* (z.B. `WS20`) --> `src` --> `aufgaben` --> `aufgabe`*X*.
- Wenn Ihre Lösung aus mehreren Klassen (mehreren `.java`-Dateien) besteht, können Sie entweder die Dateien einzeln hochladen oder Sie zippen Ihre Dateien (am besten dann den `aufgabeX`-Ordner und laden das `.zip`-File hoch. 
- In Ihrer Lösung (Ihrer/n Klasse/n) fügen Sie direkt oberhalb Ihrer Klassendefinition einen JavaDoc-Kommentar ein (`/** ... */`). Dieser enthält ein `@author`-Tag. dahinter schreiben Sie Ihren Namen. Das sieht dann z.B. so aus:
	```java
	package aufgaben.aufgabe1;

	/**
	 * 
	 * @author Jörn Freiheit
	 * 
	 * Diese Klasse gibt auf die Konsole ein Rhombus (eine Raute) aus.
	 * Der Rhombus ist entweder gefuellt oder ungefuellt. 
	 *
	 */
	public class Aufgabe1
	{
		// hier Ihre Implementierung
	}
	```
- Sie können Ihre Aufgaben zu zweit lösen. Tragen Sie dann hinter das `@author`-Tag beide Namen ein und **laden Sie bitte beide** die Lösung in Moodle hoch!

## Aufgaben

??? "Aufgabe1 - Rhombus"
	- Erstellen Sie eine Klasse `Aufgabe1` mit `main()`-Methode im package `aufgaben.aufgabe1` 
	- Implementieren Sie eine Methode `public static void printRhombus(int upperHalf, boolean filled){}`
	- Ist der Parameterwert von `filled` `true`, dann soll ein Rhombus (eine Raute) wie folgt auf die Konsole ausgegeben werden:
		```bash
		      *
		     ***
		    *****
		   *******
		  *********
		 ***********
		  *********
		   *******
		    *****
		     ***
		      *
		```
	- Ist der Parameterwert von `filled` `false`, dann soll der Rhombus ungefüllt sein, also so:
		```bash
		      *
		     * *
		    *   *
		   *     *
		  *       *
		 *         *
		  *       *
		   *     *
		    *   *
		     * *
		      *
		```
	- der Wert für `upperHalf` gibt die Höhe einer Hälfte des Rhombus an. Die Gesamthöhe des Rhombus berechnet sich aus `
		```java
		int height = 2 * upperHalf +1;
		```
	- In unserem oben gezeigten Beispiel ist der Wert von `upperHalf` `5` und die Gesamthöhe des Rhombus `11`. 
	- Die obere Ausgabe ist also durch die Anweisung `printRhombus(5, true);` und die untere durch die Anweisung `printRhombus(5, false);` entstanden.
	- Die Berechnung der Höhe aus dem Parameterwert `upperHalf` hat die Vorteile, 
		- dass die Höhe dadurch immer eine ungerade Zahl ist (was notwendig ist) und 
		- dass Sie den Wert `upperHalf` gut verwenden können (was ebenfalls notwendig ist, wie Sie merken werden)
	- **Tipp:**: Schreiben Sie sich zwei weitere Methoden `public static void printRhombusFilled(int upperHalf){}` und `public static void printRhombusUnfilled(int upperHalf){}`, die Sie entsprechend des Wertes von `filled` aufrufen. In der einen Methode erstellen Sie die ausgefüllte Raute und in der anderen die ungefüllte. Dann wird Ihr Programm nicht zu unübersichtlich. Fangen Sie am besten mit der ausgefüllten an, die ist etwas leichter. 
	- Das Programm soll für beliebige (nicht so große - max. Wert `100`) positive Zahlen (also `> 0`) von `upperHalf` funktionieren. Insbesondere sind die Tests für `upperhalf == 1` interssant. 
	- Laden Sie Ihre Lösung bis Sonntag, den **22.11.2020 um 24.00 Uhr** in Moodle hoch
	- Viel Spaß und viel Erfolg!
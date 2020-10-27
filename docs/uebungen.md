# Übungen

## Übungsblätter (wochenweise)


## Weitere Übungsaufgaben (selbständiges Üben)

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
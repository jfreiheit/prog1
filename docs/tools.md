# Werkzeuge

## Literaturempfehlungen

## Java

Wir verwenden die Programmiersprache *Java*, um die Programmierkonzepte, die wir lernen und anwenden wollen, zu implementieren. 

Java besteht aus 2 Teilen:

- der *Java Run Time Environment (Java RTE)* (Java-Laufzeitumgebung)
- dem *Java Development Kit (JDK)* (die Java-Entwicklungsumgebung)

Die Java-Laufzeitumgebung ist üblicherweise bereits auf allen Rechnern installiert. Sie ist selbst ein Programm. Innerhalb dieses Programms werden Java-Programme ausgeführt. 

Das JDK müssen Sie installieren. Verwenden Sie dazu [diesen Link](https://www.oracle.com/java/technologies/javase-downloads.html) und gehen wie für Ihr Betriebssystem angegeben vor. 

Testen Sie am besten auf Ihrer Konsole (Terminal), ob Ihr Java korrekt funktioniert. Zum Testen Ihrer Laufzeitumgebung geben Sie dazu

```bash
java -version
``` 

ein. Es sollte soetwas erscheinen, wie (Versionsnummern bei Ihnen sicherlich schon höher):

```bash
java version "12.0.1" 2019-04-16
Java(TM) SE Runtime Environment (build 12.0.1+12)
Java HotSpot(TM) 64-Bit Server VM (build 12.0.1+12, mixed mode, sharing)
```

Somit wissen Sie, dass die Laufzeitumgebung funktioniert. Zum Testen des JDK rufen wir am besten den Compiler (`javac`) auf:


```bash
javac -version
``` 

Es sollte soetwas erscheinen, wie (Versionsnummern bei Ihnen sicherlich schon höher):

```bash
javac 12.0.1
```

!!! success
    Sie haben nun die Java-Laufzeitumgebung installiert, in der unsere Java-Programme ausgeführt werden und Sie haben das Java Development Kit installiert. Teil des JDK ist z.B. der *Compiler*, der unsere Java-Programme in Byte-Code übersetzt. Dieser Bytecode wird in unserer Java-Laufzeitumgebung ausgeführt.

## IDE

Um unsere Programme "zu schreiben", verwenden wir eine sogenannte *Integrated Development Environment (IDE)*, eine integrierte Entwicklungsumgebung, die uns beim Programmieren unterstützt. Wir könnten unsere Programme auch mit einfachen Texteditoren schreiben, aber eine IDE unterstützt uns, indem der Programmcode geeignet hervorgehoben wird (*Syntx-Highlighting*) und uns Vorschläge für die Verwendung von Methoden und Variablen gemacht werden (*Intelligent Code Completion*). 

### Eclipse

Sie sind in der Wahl Ihrer IDE frei. Wir verwenden [**Eclipse**](https://www.eclipse.org/). Eclipse ist in Java geschrieben und Open-Source. Den Download-Link für Eclipse finden Sie [hier](https://www.eclipse.org/downloads/). Es gibt verschiedene Versionen von Eclipse, wir verwenden die *Eclipse IDE for Java Developers*. Installieren Sie Eclipse am besten in ihren *Applications* oder *Programme* Ordner. 

1. Starten Sie Eclipse durch Doppelklick auf das Programmsymbol.
2. Erstellen Sie einen *Workspace* (Arbeitsbereich) in einem gewünschten Ordner (z. B.
Programmieren) im Dateisystem. Achten Sie darauf, dass Sie Schreibrechte in diesem Ordner besitzen.
3. Anlegen eines Projektordners:
	* Auswahl im Menü `File-->New-->Java Project`.
	* Eingabe des `Project name:` Name des Projektes (z.B. *WiSe20* oder *Uebung1* oder *Aufgabe2*). Wenn Sie gefragt werden, ob Sie ein `module-info.java` erstellen wollen, wählen Sie `Don't create`.
	* Klicken auf den Button `Finish`.
4. Erstellen eines neuen Packages (Paketes):
	* Öffnen der Projektmappe im `Package Explorer`.
	* Auswahl des Ordners `src` mit der rechten Maustaste.
	* Auswahl des Menüpunktes `New --> Package`.
	* Geben Sie einen Paketnamen ein (Paketnamen werden kleingeschrieben), z.B. `themen.start`.
5. Erstellen einer neuen Klasse:
	* Öffnen der Projektmappe im Package Explorer.
	* Auswahl des Paketes (z.B. `themen.start`) mit der rechten Maustaste.
	* Auswahl des Menüpunktes `New --> Class`.
	* Eingabe eines beliebigen Namens, der gleichzeitig der Klassen- und Dateiname ist (z.B. `HelloFIW`). Klassennamen werden immer groß geschrieben.
	* Setzen des Häkchens bei `public static void main()`.
	* Klicken auf den Button `Finish`.

Die folgende Abbildung gibt einen Überblick über die Bedeutung der einzelnen Fenster in Eclipse:

![Eclipse](./files/01_eclipse.png)

### IntelliJ

Diejenigen von Ihnen, die nicht Eclipse verwenden, werden sich stattdessen wahrscheinlich für [**IntelliJ**](https://www.jetbrains.com/de-de/idea/) entscheiden. Das ist völlig in Ordnung. IntelliJ ist von JetBrains, einem tschechischen Unternehmen, und derzeit die wohl modernste IDE auf dem Markt, nicht nur für Java- sondern auch für Web-Entwicklungen. IntelliJ ist nicht Open-Source und ist kostenpflichtig. Mit einer Hochschullizenz erhalten Sie jedoch kostenlosen Zugriff auf alle Enterprise-Versionen. Sie müssen sich dazu bei JetBrains mit Ihrer HTW-Adresse registrieren. 

### Visual Studio Code

Wer gerne mit Microsoft-Produkten arbeitet, kann auch gerne [**Visual Studio Code**](https://code.visualstudio.com/docs/java/java-tutorial) arbeiten. Das ist auch eine sehr gute IDE und ebenfalls nicht nur zur Nutzung für die Java-Entwicklung, sondern auch für Web- und App-Entwicklungen geeignet. 


## Weitere nützliche Werkzeuge

### Windows: gitBash

## Online-Kurse

* SoloLearn [https://www.sololearn.com/Course/Java/](https://www.sololearn.com/Course/Java/)
* JetBrains Academy [https://hyperskill.org/tracks/1](https://hyperskill.org/tracks/1)

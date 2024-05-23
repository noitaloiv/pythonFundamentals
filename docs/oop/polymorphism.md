---
layout: default
title: "45. Polymorfism och komposition"
nav_order: 46
parent: "40. OOP"
---

# Polymorfism
Polymorfism och komposition är två viktiga aspekter inom objektorienterad programmering som hjälper till att göra kod både mer flexibel och återanvändbar genom arv, men som samtidigt tillåter oss att undvika eventuella fallgropar med problematiska implementationer av arv.

## Vad är polymorfism?
Polymorfism ursprungar från grekiskans "många former" och är ett koncept där exempelvis samma metod kan ha olika beteenden i olika klasser. Detta uppnås genom att definiera en metod i en basklass och sedan "skriva över" (override) metoden i en eller flera underklasser. Polymorfism gör det möjligt för samma metod att anropas på objekt av olika klasser, där varje klassimplementering ger specifika resultat.

Exempelvis kan vi modifiera en metod som vi nyttjat i tidigare exempel, `display_info`, för att ge varje underklass sin egna implementation av metoden enligt:

```python
class Vehicle:
    def display_info(self):
        print("This is a vehicle.")

class Car(Vehicle):
    def display_info(self):
        print("This is a car.")

class Boat(Vehicle):
    def display_info(self):
        print("This is a boat.")

def print_vehicle_info(vehicle):
    vehicle.display_info()

vehicle_list = [Car(), Boat(), Vehicle()]
for vehicle in vehicle_list:
    print_vehicle_info(vehicle)
```
<div class="code-example" markdown="1">
<pre><code>This is a car.
This is a boat.
This is a vehicle.</code></pre>
</div>

I funktionen `print_vehicle_info()` så anropar vi varje objekts `display_info()`-metod. Detta fungerar då objekt av typen `Car`, `Boat` samt `Vehicle` alla har en metod som kallas för `display_info()` - men med olika implementationer. Istället för att nyttja metoden `super()` för att anropa basklassens implementation av metoden så anropar vi här istället resp. klass egen implementation.

## Problematiska arvsrelationer
Komposition är ett alternativt designmönster till arv och innebär att en klass innehåller instanser av andra klasser istället för att ärva från dem. Detta koncept följer principen "har ett" (__HAS A__) snarare än "är ett" (__IS A__), vilket ofta kan göra systemet lättare att underhålla och förstå. 

Ponera att vi exempelvis vill kunna representera en motor i en bil. Vi kan uppnå detta genom att skapa en bil-klass och en motor-klass och sedan låta bil-klassen ärva från motor-klassen enligt:

```python
class Engine:
    def start_engine(self):
        print("The engine is starting...")

class Car(Engine):
    def start_car(self):
        super().start_engine()
        print("The engine has started.")
        print("The car is starting...")

car = Car()
car.start_car()
```
<div class="code-example" markdown="1">
<pre><code>The engine is starting...
The engine has started.
The car is starting...</code></pre>
</div>

Men detta medför att vi i praktiken påtalar att en bil ÄR en motor snarare än att den HAR en motor. En arvsrelation innefattar nämligen just det - ett arv från en basklass till en underklass. Liknande missuppfattningar kan leda till väldigt problematiska och missvisande klasshierarkier vilket är något vi generellt sett vill undvika. Det är med andra ord absolut inte fel att tillämpa arv i Python, men vi bör säkerställa att vi använder det __korrekt__.

### Komposition över arv (composition over inheritance)
Ett alternativ kan därför tänkas vara att tillämpa _komposition_, vilket tillåter oss att etablera s.k. HAS-A-relationer (där t.ex. en bil HAR en motor). Vi skulle exempelvis kunna revidera ovan kodexempel enligt:
```python
class Engine:
    def start(self):
        print("The engine is starting...")

class Car:
    def  __init__(self):
        self.engine = Engine()

    def start(self):
        self.engine.start()
        print("The engine has started.")
        print("The car is starting...")

car = Car()
car.start()
```
<div class="code-example" markdown="1">
<pre><code>The engine is starting...
The engine has started.
The car is starting...</code></pre>
</div>

### När ska man använda komposition över arv?
Komposition bör övervägas när:

* Flera objekt ska dela samma funktionalitet:
Komposition är idealiskt när flera olika klasser behöver dela specifik funktionalitet utan att nödvändigtvis tillhöra samma klasshierarki. Genom att definiera dessa funktioner i separata klasser och sedan inkludera dessa klasser som objekt i andra klasser, kan du återanvända kod effektivt.

Om du exempelvis vill ha en funktion för att logga meddelanden, kan du skapa en separat ``Logger``-klass och - istället för att låta varje klass ärva denna klass - tillåta klasserna att själva skapa eller ta emot en instans av ``Logger``-klassen.
```python
class Logger:
    def log(self, message):
        print(f"Log: {message}")

class Car:
    def __init__(self):
        self.logger = Logger()

    def drive(self):
        self.logger.log("The car is starting")

class Boat:
    def __init__(self):
        self.logger = Logger()

    def sail(self):
        self.logger.log("The boat is sailing")
```
</br>
* När klasshierarkierna blir för komplexa och svåra att hantera med arv:
Arv kan snabbt bli komplext och svårhanterligt när klasshierarkier växer och blir väldigt djupa. Denna komplexitet kan göra koden svår att förstå och, i förlängningen, svår att underhålla. Komposition tillåter utvecklare att bygga mer modulära system där klassberoenden är tydligare och mer flexibla.

Om exempelvis en `Car` och en `Boat` båda har motorer men även olika attribut och metoder som inte är gemensamma kan det vara mer meningsfullt att skapa en `Engine`-klass och använda den som ett attribut för både `Car` och `Boat` genom komposition.
```python
class Engine:
    def start(self):
        print("The engine is starting...")

class Car:
    def __init__(self):
        self.engine = Engine()

    def start_car(self):
        self.engine.start()
        print("The car is starting...")

class Boat:
    def __init__(self):
        self.engine = Engine()

    def start_boat(self):
        self.engine.start()
        print("The boat is starting...")
```
</br>
* När arv introducerar för mycket tätt kopplad (tightly coupled) kod som kan vara svår att modifiera i efterhand:
Arv skapar en stark koppling mellan basklasser och underklasser, vilket kan leda till problem när program utvecklas och behöver ändras. Komposition tillhandahåller en lösning på detta problem genom att reducera beroendet mellan klasserna, vilket gör det enklare att göra ändringar i en klass utan att det samtidigt påverka andra delar av programmet.

Om du exempelvis har en `Vehicle`-klass med metoder som är gemensamma för alla typer av fordon, men samtidigt har specifika fordonstyper som i sin tur kräver unika metoder eller attribut kan du använda komposition för att _"sätta ihop"_ dessa unika funktioner på ett flexibelt sätt utan att bryta den befintliga kodbasen.
```python
class Vehicle:
    def general_vehicle_function(self):
        print("All vehicles have this in common.")

class CarSpecifics:
    def car_specific_function(self):
        print("This is a car specific function.")

class Car:
    def __init__(self):
        self.vehicle = Vehicle()
        self.specifics = CarSpecifics()

    def display(self):
        self.vehicle.general_vehicle_function()
        self.specifics.car_specific_function()
```

Komposition ger större flexibilitet och minskar komplexiteten i systemdesign, vilket gör det till ett starkt alternativ till arv i många situationer. Genom att använda komposition kan utvecklare skapa mer underhållbara och skalbara applikationer med bättre kodåteranvändning och mindre risk för buggar relaterade till omfattande klasshierarkier.

# Sammanfattning
Polymorfism och komposition är kraftfulla tekniker inom objektorienterad programmering som erbjuder flexibilitet och återanvändbarhet. Genom att använda polymorfism kan programvara hantera många olika typer genom ett gemensamt gränssnitt, medan komposition tillåter en mer modulär och lättanpassad kodstruktur jämfört med arv. 

I praktiken kombineras ofta dessa tekniker för att bygga robusta och flexibla system. Genom att förstå och använda dessa principer effektivt kan utvecklare skapa mer underhållbara och skalbara applikationer.
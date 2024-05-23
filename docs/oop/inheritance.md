---
layout: default
title: "44. Arv"
nav_order: 45
parent: "40. OOP"
---

# Arv i Python
Arv tillåter en klass att ärva attribut och metoder från en annan klass, vilket främjar återanvändning av kod och gör det enklare att bygga och underhålla komplexa system.

## Vad är arv?
Arv är en mekanism där en ny klass, kallad för underklass (sub class), kan ärva egenskaper (attribut och metoder) från en existerande klass som kallas för "basklass" eller superklass. Detta tillåter en underklass att dels nyttja superklassens egenskaper som sina egna, men ges även möjligheten att specialisera sig genom att utöka eller modifiera de egenskaper den ärver. Detta leder till program med mer strukturerad och modulär kod.

Exempelvis kan vi skapa en superklass som representerar delat beteende för alla typer av fordon, `Vehicle`, vilka underklassen `Car` sedan ärver dessa egenskaper ifrån.

```python
class Vehicle:
    def __init__(self, make):
        self.make = make

    def show_make(self):
        print(f"The vehicle's make is: {self.make}")

class Car(Vehicle): 
    def __init__(self, make, model):
        super().__init__(make)  
        self.model = model

    def display_info(self):
        print(f"The car is a: {self.make} {self.model}")
```

Arv uppnås genom att, inom parentes, ange vilken klass som underklassen ska ärva sina egenskaper ifrån. Exempelvis enligt:

```python
class Animal:
    ## Implementation of the Animal class goes here.

class Cat(Animal): 
    ## Implementation of the Cat class goes here.
```

Det är även möjligt att anropa superklassens konstruktor för att säkerställa att den tilldelning som sker där faktiskt genomförs samtidigt som vi undviker att skriva exakt samma kod (d.v.s. duplicerad kod) i underklassens konstruktor. Detta uppnås med hjälp av metoden `super()`.
```python
class Vehicle:
    def __init__(self, make):
        self.make = make

class Car(Vehicle): 
    def __init__(self, make, model):
        ## Calls __init__ in the Vehicle class
        ## with the 'make' argument
        super().__init__(make)      
        self.model = model
```

## Klasshierarkier i Python
Utöver grundläggande arv kan klasshierarkier i Python sträcka sig över flera nivåer, där en basklass exempelvis kan ha flera underklasser och där dessa underklasser i sin tur kan ha sina egna underklasser. Detta skapar en hierarkisk struktur av klasser som kan bli mycket djup och komplex. Att förstå hur man arbetar med klasshierarkier är viktigt för att effektivt utnyttja objektorienterad programmering för att bygga skalbara och välorganiserade program.

### Flera nivåer av arv
En klass kan ärva från en annan klass, som i sin tur ärver från en annan klass, och så vidare. Detta skapar en kedja av arv som kan användas för att _specialisera_ funktioner eller attribut i olika steg. Exempelvis kan det tänkas vara relevant att särskilja en elbil från en "vanlig" bil enligt:
```python
class Vehicle:
    def __init__(self, marke):
        self.marke = marke

    def display_info(self):
        print(f"The vehicle is a: {self.marke}")

class Car(Vehicle):
    def __init__(self, make, model):
        super().__init__(make)
        self.model = model

    def display_info(self):
        super().display_info()
        print(f"and it is a car of the model: {self.model}")

class ElectricCar(Car):
    def __init__(self, make, model, battery_size):
        super().__init__(make, model)
        self.battery_size = battery_size

    def display_info(self):
        super().display_info()
        print(f"with a battery size of {self.battery_size} kWh")
        

v = Vehicle("Volvo")
v.display_info()
c = Car("BMW", "M4")
c.display_info()
ec = ElectricCar("Tesla", "Model 3", 57.5)
ec.display_info()
```
<div class="code-example" markdown="1">
<pre><code>The vehicle is a: Volvo
The vehicle is a: BMW
and it is a car of the model: M4
The vehicle is a: Tesla
and it is a car of the model: Model 3
with a battery size of 57.5 kWh</code></pre>
</div>

Som vi kan se blir varje underklass mer och mer specialiserad i arvskedjan genom att bibehålla egenskaper från sina respektive superklasser samtidigt som de lägger till något som är säreget för underklassen själv.

### Hantera klasshierarkier
När du arbetar med klasshierarkier är det viktigt att noggrant planera din klassstruktur för att undvika komplexitet och behålla kodens läsbarhet och underhållbarhet.

* Kapsla in _gemensam funktionalitet_ i basklasser: 
Se till att all gemensam funktionalitet som kan återanvändas av flera underklasser placeras i en lämplig basklass.
</br>
* Använd `super()` för att anropa basklassmetoder: 
Detta säkerställer att basklassens konstruktor och metoder anropas korrekt, vilket är viktigt för att initialisera basklassattributen ordentligt.

## Fördelar med arv
Arv kan vara fördelaktigt av många anledningar. Exempelvis kan det tillföra:

* God kodåteranvändning:
Istället för att skriva ny kod från början för liknande klasser, kan klasser ärva egenskaper från en befintlig klass. Om vi på förhand vet om att vi exempelvis kommer vilja ha flera subtyper som har ett delat beteende så kan vi implementera detta på ett enda ställe i vårt program. Om vi utvecklar ett spel så kanske vi t.ex. kan tänkas vilja en representation av ett bräde i klassen `Board` vilket tillåter oss att sedan skapa flera subtyper vid behov allteftersom att spelet växer - t.ex. `SmallBoard`, `DifficultBoard` och dylikt.
</br>
* Enklare implementation och underhåll: 
Arv gör det enklare att skapa och underhålla program då ändringar i basklassen automatiskt förs vidare till underklasser, vilket kan minska mängden kod och underhåll. Om vi exempelvis identifierar en bugg i en funktion som tillhör en klasshierarki så behöver vi sannolikt bara åtgärda problemet på ett enda ställe i programmet.
</br>
* Skalbarhet: 
Det är lätt att lägga till fler funktioner till en existerande klasshierarki. Om vi exempelvis skulle vilja lägga till funktionalitet för alla fordon (d.v.s. objekt som är av typen `Vehicle` alt. är av en typ som ärver från klassen `Vehicle`) så behöver vi enbart lägga till denna funktionalitet på ett enda ställe.

# Sammanfattning
Arv är en grundläggande aspekt av objektorienterad programmering som hjälper till att strukturera och organiserar kod genom att skapa en hierarki av klasser. Genom att förstå och implementera arv kan utvecklare effektivisera sina projekt, underlätta kodunderhåll och utveckla flexibla system. 

Klasshierarkier erbjuder även ett kraftfullt sätt att strukturera och återanvända kod inom objektorienterad programmering. Med en djupare förståelse av hur olika klasser kan interagera och ärva från varandra kan utvecklare skapa mer avancerade och funktionella applikationer.
---
layout: default
title: "41. Klasser"
nav_order: 42
parent: "40. OOP"
---

# Klasser i Python
Klasser är en av de mest grundläggande konstruktionerna i objektorienterad programmering (OOP) som hjälper till att organisera och strukturera koden genom att samla data och funktionalitet på ett logiskt och återanvändbart sätt.

## Vad är en klass?
En klass i Python kan ses som en mall eller ritning för att skapa _objekt (instanser av en klass)_. Klassen definierar vilka attribut (data) och metoder (funktioner) som varje objekt kommer att ha. Detta medför att varje objekt skapat från klassen kommer att vara en unik instans av klassen, men som kan dela viss data eller funktionalitet med andra objekt av klassen. Exempelvis kan två bilar vara av samma modell och ha samma färg, men den ena kan vara konstruerad 2014 och den andra 2018. Alternativt så kan de vara identiska sett till respektive bils egenskaper, men det kommer fortfarande att vara två separata bilar med två olika VIN- och regnummer.

### Klassdefinition
En klass definieras alltid med nyckelordet `class` följt av ett namn på klassen och ett `:`. Python kommer sedan att tolka all indenterad kod under definitionen som en del av klassen, likt hur det fungerar vid selektion, iteration och funktioner. Exempelvis kan vi skapa klassen `Car` enligt:
```python
class Car:
```

{: .highlight}
Klassnamn anges generellt sett alltid med en inledande versal till skillnad mot variabler och funktioner. Skulle vi exempelvis vilja skapa en klass för att representera en student så skulle vi enligt namnkonventioner namge klassen enligt: `Student` snarare än `student`.

Vår klass är hitintills tom, d.v.s. att vi saknar både attribut och funktionalitet för klassen. Rimligtvis vill vi kanske att våra bilar kan ha information om vilket märke det är på bilen, vilken modell det är, och dylikt. Vi kan därför lägga till en funktion som tillåter oss att tilldela _initiala attributvärden_ till alla objekt som instansieras genom metoden `__init__`.
```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model
```

Det är möjligt att lägga till hur många parametrar du vill till `__init__`-metoden, men den första parametern måste alltid vara parametern `self`.

### `__init__()` måste inte deklareras
En klass måste inte nödvändigtvis deklarera och implementera `__init__`-metoden för att det ska vara en fungerande klass från vilken vi kan skapa objekt. Det är exempelvis fullt möjligt att skriva en klass i stil med:
```python
class Car:
    print("This is a car")
```
Vilket skulle medföra att varje gång vi instansierar ett objekt av klassen så kommer `This is a car` att skrivas ut:
```python
class Car:
    print("This is a car")

new_car = Car()
```
<div class="code-example" markdown="1">
<pre><code>This is a car</code></pre>
</div>

### Nyckelordet `self`
`self` i Python är en referens till det _aktuella objektet_ som använder klassen. Det används för att komma åt variabler som tillhör klassen och för att anropa andra metoder inom samma klass. Nyckelordet måste specificeras explicit i varje metoddefinition (inkl. `__init__`) för klassen men det behöver __inte__ anges vid metodanrop.

För varje metod vi deklarerar i en klass måste vi alltså ange minst en parameter - `self` - som dessutom alltid måste anges först.

I exemplet ovan så har vi två uttryck (statements) som nyttjar `self`-variabeln:
```python
self.make = make
self.model = model
```
Detta utmynnar i att vi skapar två attribut, `make` och `model`, för objektet som skapas och tilldelar samtidigt de värden som följt med i anropet.

{: .highlight}
Attribut som skapas i `__init__` kallas för _instansattribut_ och varje instansattributvärde kommer att vara säreget för varje objekt. D.v.s. att även om vi skapar flera bilar så kommer varje bil ha sitt egna märke och sin egen modell.  

## Instansmetoder
Utöver metoden `__init__` så kan vi tänkas vilja lägga till funktionalitet för våra objekt. I fallet för bilar så kanske vi skulle vilja ha en funktion för att starta bilen, stanna bilen, skriva ut information om bilen, eller något dylikt - beroende på domänen för vår applikation (exempelvis är det stor skillnad på att representera en bil i verkligheten och en bil i ett datorspel).

Vi kan i detta syfte deklarera _instansmetoder_ i vår klass, exempelvis enligt:
 ```python
class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def display_info(self):
        print(f"This car is a: {self.make} {self.model}")
```

Vilket tillåter oss att skriva ut bilens märke och modell vid behov genom att anropa metoden från ett bilobjekt.

{: .highlight}
Nyckelordet `self` måste utgöra den första parametern även i instansmetoder men skrivs i övrigt som en vanlig funktion.

### Skillnaden mellan _funktioner_ och _metoder_
Som du kanske har märkt använder vi i detta kapitel begreppet _metod_ istället för _funktion_ när vi pratar om funktionalitet i klasser. Båda begrepp beskriver i praktiken samma sak, d.v.s. att en funktion är en fristående enhet av kod som utför en specifik uppgift. Skillnaden ter sig i hur _anrop_ går till. En funktion kan nämligen anropas oberoende var som helst i ditt program medan en metod å andra sidan är en funktion som är definierad __inom en klass__ och därför enbart kan anropas från ett _objekt av klassen_ i fråga (eller från klassen själv).

Det vore exempelvis inte möjligt att anropa metoden `display_info()` utan att skapa ett objekt av klassen `Car`. Om vi däremot implementerar en funktion, `display_stuff`, i vårt program så kan denna anropas vart som helst i programfilen.
```python
def display_stuff():
    print("Hello world!")

class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def display_info(self):
        print(f"This car is a: {self.make} {self.model}")
    
    display_stuff()

display_info()
```
<div class="code-example" markdown="1">
<pre><code>Hello world!
NameError: name 'display_info' is not defined. Did you mean: 'display_stuff'?</code></pre>
</div>

# Sammanfattning
Att förstå klasser är centralt för att utnyttja kraften i objektorienterad programmering i Python. Genom att använda klasser kan du skapa kodbaser som är lättare att underhålla och utöka. 

Dessutom möjliggör klasser återanvändning av kod och kan göra komplexa program enklare att hantera.
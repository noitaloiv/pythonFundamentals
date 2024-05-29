---
layout: default
title: "43. Attribut och metoder"
nav_order: 44
parent: "40. OOP"
---

# Attribut och metoder i Python
Attribut och metoder är centrala komponenter i objektorienterad programmering (OOP) som hjälper till att definiera klassernas data (attribut) och beteende (metoder).

## Vad är attribut?
Attribut är variabler som är bundna till de klasser eller objekt de definieras i och i Python finns det två huvudtyper av attribut: _instansattribut_ och _klassattribut_.

* Instansattribut: 
Dessa attribut är specifika för varje _instans_ av en klass. D.v.s. att alla objekt av klassen `Car` har attributet `make`, men värdet på attributet kommer vara unikt för varje instans. Vi har tidigare sett exempel på detta när vi har arbetat med konstruktorn (`__init__`):

```python
class Car:
    def __init__(self, make, model):
        self.make = make        ## Instance attribute
        self.model = model      ## Instance attribute
```

* Klassattribut: 
Dessa attribut är istället _gemensamma_ för alla instanser av en klass. D.v.s. att alla objekt av klassen `Car` skulle kunna ha attributet `number_of_wheels` med värdet `4` då detta är något som delas av hela _klassen_. Exempelvis enligt:

```python
class Car:
    number_of_wheels = 4        ## Class attribute

    def __init__(self, make, model):
        self.make = make        ## Instance attribute
        self.model = model      ## Instance attribute
```

För att peka på och arbeta med instansattribut har vi i föregående kapitel diskuterat punktnotationen på instansnivå. För att istället peka på och arbeta med klassattribut så nyttjas fortfarande punktnotation, men på _klassnivå_.
```python
class Car:
    number_of_wheels = 4        

    def __init__(self, make, model):
        self.make = make        
        self.model = model    

print(Car.number_of_wheels)  
```
<div class="code-example" markdown="1">
<pre><code>4</code></pre>
</div>

Noterbart är dock att det fortfarande är möjligt att komma åt klassattribut genom en instans. Exempelvis enligt:
```python
class Car:
    number_of_wheels = 4        

    def __init__(self, make, model):
        self.make = make        
        self.model = model    

print(Car.number_of_wheels)
car_a = Car("Volvo", "XC90")
print(car_a.number_of_wheels) 
```
<div class="code-example" markdown="1">
<pre><code>4
4</code></pre>
</div>

Det är dessutom, i Python, möjligt att manipulera klassvariabler som om de vore instansvariabler då objekt är föränderliga (mutable). Exempelvis är följande giltig Python-kod:
```python
class Car:
    number_of_wheels = 4        

    def __init__(self, make, model):
        self.make = make        
        self.model = model    

print(Car.number_of_wheels)  
car_a = Car("Volvo", "XC90")
car_a.number_of_wheels = 6
car_b = Car("Toyota", "Corolla")
print(car_a.number_of_wheels)  
print(car_b.number_of_wheels)  
```
<div class="code-example" markdown="1">
<pre><code>4
6
4</code></pre>
</div>

{: .highlight}
Värdet på `number_of_wheels` ändras enbart för `car_a` i ovan exempel. När vi därefter skapar en ny instans - `car_b` - så ser vi att värdet fortfarande är `4` då det är så det är deklarerat på klassnivå.

## Metoder i klasser
Metoder är som tidigare nämnt funktioner definierade inom en klass och som används för att definiera objekts beteenden. Precis som attribut kan metoder vara av typen _instansmetoder_ eller _klassmetoder_.

* Instansmetoder: 
Dessa kräver en instans av klassen för att kunna anropas och arbetar med data som är specifikt för den instansen. Exempelvis kan vi skapa en metod som skriver ut _information om _instansen__ enligt:

```python
class Car:
    number_of_wheels = 4  

    def __init__(self, make, model):
        self.make = make
        self.model = model
    
    def display_info(self):
        print(f"This car is a: {self.make} {self.model}")

car_a = Car("Volvo", "S60")      
car_a.display_info()
```
<div class="code-example" markdown="1">
<pre><code>This car is a: Volvo S60</code></pre>
</div>

* Klassmetoder:
Dessa metoder är istället bundna till klassen snarare än instanser av klassen. De kan därför anropas på klassnivå och har tillgång till eventuella klassattribut men inte till instansattribut. Exempelvis skulle vi från ett tidigare exempel ha tillgång till attributet `number_of_wheels` men inte `make` i en klassmetod.

```python
class Car:
    number_of_wheels = 4
    number_of_cars_created = 0  

    def __init__(self, make, model):
        self.make = make
        self.model = model
        number_of_cars_created += 1
    
    def display_info(self):
        print(f"This car is a: {self.make} {self.model}")
    
    @classmethod
    def number_of_cars(cls):
        print(f"The number of car objects is: {cls.number_of_cars_created}")

Car.number_of_cars()
car_a = Car("Volvo", "S60")   
car_b = Car("Toyota", "Corolla")      
Car.number_of_cars()
```
<div class="code-example" markdown="1">
<pre><code>0
2</code></pre>
</div>

### `cls` och `@classmethod`
För att deklarera en klassmetod så anger man dekoratorn `@classmethod` över metoddeklarationen. Vi måste göra detta för att särskilja en klassmetod från en instansmetod, annars kommer Pythontolkaren inte att förstå att vi försöker deklarera funktionalitet på klassnivå.

Nyckelordet `cls` nyttjas istället för nyckelordet `self` och representerar klassen. Precis som för `self` så placeras detta nyckelordet i metoddeklarationen och som den första parametern. Det är detta nyckelord som tillåter oss att nå och arbeta med klassattribut eller andra andra klassmetoder.

# Sammanfattning
Att förstå hur attribut och metoder fungerar i Python är grundläggande för effektiv användning av klasser i objektorienterad programmering. 

Genom att dessutom kunna särskilja mellan klass- och instansspecifika komponenter kan utvecklare skapa mer organiserad och modulär kod som är lättare att underhålla och återanvända.
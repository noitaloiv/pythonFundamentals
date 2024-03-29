---
layout: default
title: "26. Funktioner"
nav_order: 27
---

# Funktioner
Python kommer med en rik uppsättning inbyggda funktioner som är redo att användas i dina program. Dessa funktioner utför "vanliga uppgifter" och gör det enklare att skriva kod. Till exempel:

* `print()` som används för att visa information till användaren.
* `input()` som tar emot indata från användaren.
* `len()` som ger längden på en kollektion, t.ex. en lista eller en sträng.
* `range()` som genererar en sekvens av nummer, vilket är användbart i loopar.

Att använda inbyggda funktioner är enkelt. Du behöver bara ange funktionens namn och ge den rätt argument (den information som funktionen behöver för att utföra sin uppgift) för att anropa den. Exempelvis kan du, som du vet, skriva ut något i terminalen enligt:
```python
print("Hello world!")
```
<div class="code-example" markdown="1">
<pre><code>Hello world!</code> </pre>
</div>

Utan att själv behöva skriva implementationen av kod som faktiskt ser till så att texten skrivs ut i terminalen. Det kan dock tänkas vara så att det finns fall där det inte finns någon inbyggd funktion som kan utföra den funktion vi behöver för just vår applikation. Exempelvis en enkel funktion som adderar två heltal för en miniräknar-applikation. I dessa fall behöver vi själva deklarera och implementera funktionen.

## Skapa egna funktioner
Medan inbyggda funktioner täcker många vanliga behov, kommer du ofta att stöta på situationer där du behöver utföra uppgifter som är specifika för ditt program. Genom att då definiera egna funktioner kan du skapa återanvändbara kodblock som utför specifika uppgifter.

För att definiera en funktion i Python använder du nyckelordet `def`, följt av ett namn på funktionen, parenteser () som kan innehålla parametrar (input-värden funktionen tar emot för att utföra sina uppgifter), och slutligen ett kolon (`:`). Kodblocket som utgör funktionens kropp indenteras under funktionsdeklarationen, likt hur koden som utförs i en loop indenteras under loop-deklarationen.

Låt oss exempelvis skapa en funktion som hälsar en användare med namn:
```python
def say_hello(name):
    print(f"Hi {name}, welcome back!")
```
Denna kod kommer inte att resultera i någon utskrift då vi enbart har deklarerat och implementerat funktionen utan att faktiskt _anropa_ den. För att göra ett anrop till funktionen så uppnås det på samma vis som när du anropat inbyggda funktioner, t.ex. enligt:
```python
def say_hello(name):
    print(f"Hi {name}, welcome back!")

say_hello("Anton")
```
<div class="code-example" markdown="1">
<pre><code>Hi Anton, welcome back!</code> </pre>
</div>

Funktionen som sådan representerar _återanvändningsbar kod_, d.v.s. att vi kan anropa funktionen vid behov för att utföra dess funktion:
```python
def say_hello(name):
    print(f"Hi {name}, welcome back!")

say_hello("Anton")

for x in range(0,3):
    print(x)

say_hello("Max")
```
<div class="code-example" markdown="1">
<pre><code>Hi Anton, welcome back!
0
1
2
Hi Max, welcome back!</code> </pre>
</div>

Detta är enormt fördelaktigt om vi vet att vi kommer vilja utföra samma funktion flera gånger i vår applikation. Exempelvis kan vi istället för att skriva en separat loop för varje utskrift av elementen i en sträng definiera detta som en funktion och anropa den vid behov. Vi behöver m.a.o. bara skriva en enda loop för att kunna hantera utskriften för elementen i alla våra strängar.
```python
def print_chars_in_string(input):
    for c in input:
        print(c)

print_chars_in_string("Hello")
print_chars_in_string("world!")
```
<div class="code-example" markdown="1">
<pre><code>H
e
l
l
o
w
o
r
l
d
!</code> </pre>
</div>

## Parametrar och returvärden
Funktioner kan ta emot data genom parametrar och kan också returnera data till den del av koden som anropade funktionen. Returvärden specificeras med `return`-nyckelordet.

Ponera att vi vill ha en funktion som tar emot två heltal och returnerar summan av dessa heltal, vi kan då skriva något i stil med:
```python
def add(number1, number2):
    sum_numbers = number1 + number2
    return sum_numbers

added_numbers = add(5, 10)
print(added_numbers)
added_numbers = add(3, 6)
print(added_numbers)
```
<div class="code-example" markdown="1">
<pre><code>15
9</code> </pre>
</div>

### Matchning av parametrar i anrop och deklaration
Parametrar i anropet måste matcha parametrarna i funktionsdeklarationen. D.v.s. att det inte vore möjligt att enbart ange en enda parameter i anropet enligt:
```python
def add(number1, number2):
    sum_numbers = number1 + number2
    return sum_numbers

added_numbers = add(5)
```
<div class="code-example" markdown="1">
<pre><code>TypeError: add() missing 1 required positional argument: 'number2'</code> </pre>
</div>

Det skulle heller inte vara möjligt att ange en parameter för mycket enligt:
```python
def add(number1, number2):
    sum_numbers = number1 + number2
    return sum_numbers

added_numbers = add(5, 10, 15)
```
<div class="code-example" markdown="1">
<pre><code>TypeError: add() takes 2 positional arguments but 3 were given</code> </pre>
</div>

Antalet parametrar måste således matcha i anropet och deklarationen.

{: .highlight }
Variabelnamnen för parametrarna i en funktionsdeklaration är godtyckliga, d.v.s. att de exempelvis inte måste heta `number1` och `number2` i ovan exempel. Notera gärna även att vi i anropet anger faktiska värden. Detta innefattar att när funktionen tar emot parametrarna så kommer den att - i detta fall - ge variabeln `number1` värdet 5, variabeln `number2` värdet 10, osv. Ordningen som vi anger parametrarna i anropet är således viktig!

## Standardvärden för Parametrar
Att definiera funktioner med standardvärden för vissa parametrar ökar flexibiliteten och användbarheten av funktionen. Det gör det möjligt att anropa funktionen med färre argument än vad som definierats, vilket kan förenkla kodanropen och göra koden mer lättläst.
```python
def say_hello(name, greeting="Hello"):
    print(f"{greeting}, {name} - welcome back!")

say_hello("Anna")  
say_hello("Erik", "Hi")
```
<div class="code-example" markdown="1">
<pre><code>Hello, Anna - welcome back!
Hi, Erik - welcome back!</code> </pre>
</div>

## Obegränsat Antal Parametrar
Python tillåter dig att definiera funktioner som kan ta emot ett obegränsat antal positionella parametrar (`*args`) samt ett obegränsat antal namngivna, eller nyckelordsspecifika, parametrar (`**kwargs`). Detta gör funktionerna extremt flexibla och anpassningsbara till olika användningsfall.

* Positionella Argument (`*args`)
Användningen av `*args` i en funktionsdefinition möjliggör mottagandet av en variabel lista av _positionella argument_ som en tuple. Detta är användbart när du inte vet i förväg hur många argument som kommer att skickas till funktionen.

```python
def add_all(*numbers):      
    total = 0
    for t in numbers:
        total += t
    return total

print(add_all(5, 10, 15, 20))   # numbers will contain 5, 10, 15, 20
print(add_all(5, 10))           # numbers will contain 5, 10
```
<div class="code-example" markdown="1">
<pre><code>50
15</code> </pre>
</div>

* Nyckelordsspecifika Argument (`**kwargs`)
Användningen av `**kwargs` gör det möjligt för en funktion att acceptera ett obegränsat antal nyckelordsspecifika parametrar som en dictionary. Detta är användbart när du behöver hantera funktioner som kräver konfigurationsalternativ eller när du inte vet vilka nyckelord som kommer att användas.

```python
def user_profile(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

user_profile(name="Anna", age=30, profession="Engineer")
user_profile(name="Erik", age=22)
```
<div class="code-example" markdown="1">
<pre><code>50
name: Anna
age: 30
profession: Engineer
name: Erik
age: 22</code> </pre>
</div>

* Kombinera `*args` och `**kwargs`
Du kan även kombinera `*args` och `**kwargs` i samma funktion för att tillåta en funktion att acceptera både en variabel lista av positionella argument och en variabel lista av nyckelordsspecifika argument.

```python
def combo_function(*args, **kwargs):
    total = sum(args)
    print(f"Sum of positional arguments: {total}")
    for key, value in kwargs.items():
        print(f"{key}: {value}")

combo_function(10, 20, name="Erik", profession="Developer")
```
<div class="code-example" markdown="1">
<pre><code>Sum of positional arguments: 30
name: Erik
profession: Developer</code> </pre>
</div>

## Anonyma Funktioner med lambda
Anonyma funktioner, som de skapas med _lambda-uttryck_ i Python, är funktioner utan ett definierat namn. De är särskilt användbara för att utföra små uppgifter som inte kräver upprepade anrop i koden. lambda-uttryck är kortfattade och avsedda för engångsbruk, och kan ofta användas inom andra funktioner som argument.

Syntaxen för ett lambda-uttryck är som följer:
```python
lambda argument: expression
```
Här är `argument` de värden som lambda-funktionen tar emot (likt parametrar i en vanlig funktion), och `expression` är det som utförs och returneras av funktionen.

För att illustrera användningen av lambda, tänk dig att du vill skapa en enkel funktion som multiplicerar ett tal med 2 enligt:
```python
doubled = lambda x: x * 2

print(doubled(5))
```
<div class="code-example" markdown="1">
<pre><code>10</code> </pre>
</div>

I detta exempel är `lambda x: x * 2` en _anonym funktion_ som tar ett argument `x` och returnerar `x * 2`.

### Lambda med funktioner
Lambda-uttryck blir särskilt kraftfulla när de används tillsammans med inbyggda funktioner som `map()`, `filter()`, och `sorted()`. Anta exempelvis att du har en lista med heltal och du vill skapa en ny lista där varje element är dubblat:
```python
numbers = [1, 2, 3, 4, 5]
doubled_numbers = list(map(lambda x: x * 2, numbers))
print(doubled_numbers)
```
<div class="code-example" markdown="1">
<pre><code>[2, 4, 6, 8, 10]</code> </pre>
</div>

Om du istället vill filtrera en lista baserat på ett villkor, kan `filter()` tillsammans med lambda vara användbart. T.ex. för att filtrera ut alla jämna tal från en lista:
```python
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)
```
<div class="code-example" markdown="1">
<pre><code>[2, 4, 6]</code> </pre>
</div>

I detta exempel returnerar `filter()` endast de värden från tal där lambda-uttryckets villkor (`x % 2 == 0`) är sant.

{: .highlight }
lambda-uttryck är kraftfulla för kortfattade operationer, men de har begränsningar. En lambda-funktion kan endast innehålla ett uttryck och kan bli svårläst om uttrycket blir för komplicerat. I sådana fall är det bättre att använda en definierad funktion med def för ökad läsbarhet och flexibilitet.

## Rekursiva funktioner
Rekursiva funktioner är funktioner som anropar sig själva för att lösa ett problem genom att bryta ned det i mindre, mer hanterbara delar. Denna teknik är särskilt användbar för problem som naturligt kan delas upp i liknande underproblem, såsom algoritmer för att gå igenom trädstrukturer, beräkna faktorialvärden, utföra sökningar och sorteringar i datastrukturer, och mer.

En rekursiv funktion består typiskt av två huvudkomponenter:

* Basfall: Det enklaste fallet som inte kräver någon rekursion för att lösas. Det fungerar som ett stoppvillkor för rekursionen för att förhindra oändliga anrop.

* Rekursiva steg: Där funktionen anropar sig själv med en mindre eller modifierad version av det ursprungliga problemet.

Ett klassiskt exempel är en funktion som beräknar fakulteten på ett givet tal, d.v.s. produkten av alla heltal från 1 till och med sig självt. Givet 1 så skulle fakulteten vara 1 (`1*1`), givet 3 så blir den 6 (`1*2*3`), osv. 
```python
def factorial(n):
    if n == 0:                      # base case
        return 1
    else:                           # recursive step
        return n * factorial(n-1)   # The function calls itself with an updated value

print(factorial(5))                 
```
<div class="code-example" markdown="1">
<pre><code>#1*2*3*4*5
120</code> </pre>
</div>

{: .warning }
Rekursion kan göra koden mer intuitiv och lättläst för vissa problemtyper, men det är viktigt att alltid ha ett korrekt och väldefinierat basfall för att förhindra oändlig rekursion, vilket kan leda till ett `stack overflow`-fel - där programmet kraschar på grund av oändliga anrop. Noterbart är även att rekursiva lösningar kan vara mindre effektiva än iterativa lösningar för vissa problem.

### Användningsområden
Rekursiva funktioner är särskilt användbara i följande scenarier:

* Traversering av träd och grafstrukturer: Rekursion förenklar processen att gå igenom strukturer där varje nod kan ha flera undernoder.

* Dynamisk programmering och delproblem: Rekursion kan användas för att dela upp ett problem i mindre delar, vilket är en grundsten i dynamisk programmering.

* Matematiska beräkningar: Problem som faktorialberäkningar, Fibonacci-sekvenser och tornet i Hanoi är naturligt lämpade för rekursiva lösningar.


# Sammanfattning
Funktioner i Python ger en robust grund för att strukturera och återanvända kod. Genom att bemästra funktioner, från de grundläggande koncepten till avancerade funktioner som dekoratorer och rekursiva funktioner, kan du skriva effektiv och lättläst kod. Det är värt att notera att väl designade funktioner kan förenkla komplexa uppgifter och bidra till bättre kodunderhåll och flexibilitet.
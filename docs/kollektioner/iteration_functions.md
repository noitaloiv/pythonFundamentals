---
layout: default
title: "29. Iteration över kollektioner"
nav_order: 30
parent: 24. Kollektioner
---

# Inbyggda funktionsverktyg för iteration
När vi arbetar med loopar behöver vi ofta göra mer än att bara gå igenom ett antal värden i ordning. Ibland vill vi exempelvis hålla reda på både ett elements position såväl som dess värde medan vi i andra fall vill iterera över två kollektioner samtidigt, sortera värden innan vi skriver ut dem, eller undersöka om något värde i en samling uppfyller ett visst villkor.

Python erbjuder flera inbyggda funktioner som hjälper oss med sådana typer av situationer. I detta kapitel introduceras några av de vanligaste: `enumerate()`, `zip()`, `sorted()`, `reversed()`, `any()` och `all()`.

Vi kommer också kort att beröra `map()` och `filter()`, men dessa är mindre centrala i början av kursen eftersom samma saker ofta kan uttryckas tydligare med vanliga loopar eller listförståelse.

## `enumerate()`-funktionen
När vi itererar över en kollektion vill vi ibland ha tillgång till både värdet och dess position i listan. Ett vanligt tillvägagångssätt kan därför tänkas vara att skapa en egen "räknare" i stil med:
```python
names = ["Anna", "Erik", "Sara"] 
index = 0 

for name in names: 
    print(index, name) 
    index += 1
```
<div class="code-example" markdown="1">
<pre><code>0 Anna 
1 Erik 
2 Sara</code> </pre>
</div>

Detta är ett fullt rimligt tillvägagångssätt och fungerar, som demonstrerat ovan, som tänkt. Python erbjuder dock ett tydligare sätt att göra samma sak genom funktionen `enumerate()`:
```python
names = ["Anna", "Erik", "Sara"] 

for index, name in enumerate(names): 
    print(index, name)
```
<div class="code-example" markdown="1">
<pre><code>0 Anna 
1 Erik 
2 Sara</code> </pre>
</div>

`enumerate()` returnerar alltså _både_ positionen och värdet vid varje iteration. Detta gör koden kortare och tydligare, särskilt i de situationer när vi behöver använda indexet i beräkningar eller utskrifter.

### Exempel: numrerad meny
Ett vanligt användningsområde för `enumerate()` är att skriva ut en meny där varje alternativ ska ha ett nummer:
```python
options = ["Start game", "Show instructions", "End game"] 
for number, option in enumerate(options, start=1): 
    print(f"{number}. {option}")
```
<div class="code-example" markdown="1">
<pre><code>1. Start game 
2. Show instructions 
3. End game</code> </pre>
</div>

Argumentet `start=1` innebär att numreringen börjar på `1` i stället för `0` - vilket kan tänkas vara mer användarvänligt när vi visar alternativ för en användare.

## `zip()`-funktionen
Ibland har vi två listor som hör ihop. Anta exempelvis att vi har en lista med namn och en lista med poäng enligt:
```python
names = ["Anna", "Erik", "Sara"] 
scores = [18, 15, 20]
```

Där vi vill skriva ut varje namn tillsammans med rätt poäng. Ett sätt att uppnå detta på kan tänkas vara genom att använda index:
```python
names = ["Anna", "Erik", "Sara"] 
scores = [18, 15, 20]

for i in range(len(names)):
    print(f"{names[i]} fick {scores[i]} poäng.")
```
<div class="code-example" markdown="1">
<pre><code>Anna fick 18 poäng. 
Erik fick 15 poäng. 
Sara fick 20 poäng.</code> </pre>
</div>

Men Python erbjuder ett mer läsbart alternativ genom `zip()`:

```python
names = ["Anna", "Erik", "Sara"] 
scores = [18, 15, 20] 

for name, score in zip(names, scores): 
    print(f"{name} fick {score} poäng.")
```
<div class="code-example" markdown="1">
<pre><code>Anna fick 18 poäng. 
Erik fick 15 poäng. 
Sara fick 20 poäng.</code> </pre>
</div>

`zip()` parar alltså ihop värden från två eller flera sekvenser, där vi vid varje iteration får ett värde från resp. lista.

### Viktigt om olika långa listor
Om listorna är olika långa kommer `zip()` att avsluta när den kortaste listan tar slut:
```python
names = ["Anna", "Erik", "Sara"] 
scores = [18, 15] 

for name, score in zip(names, scores): 
    print(f"{name} fick {score} poäng.")
```
<div class="code-example" markdown="1">
<pre><code>Anna fick 18 poäng. 
Erik fick 15 poäng. </code> </pre>
</div>

Värdet `"Sara"` används alltså inte eftersom det saknas ett motsvarande värde i `scores`.

## `sorted()`-funktionen
Funktionen `sorted()` används för att skapa en sorterad version av en samling. Den ändrar inte den ursprungliga listan, utan returnerar en ny sorterad lista:

```python
numbers = [5, 1, 9, 3] 
sorted_numbers = sorted(numbers) 
print(numbers) 
print(sorted_numbers)
```
<div class="code-example" markdown="1">
<pre><code>[5, 1, 9, 3] 
[1, 3, 5, 9]</code> </pre>
</div>

{: .highlight }
`sorted()` **ändrar inte** originalet. Om vi vill spara sorteringen behöver vi alltså lagra resultatet i en variabel.

## `reversed()`-funktionen
Funktionen `reversed()` kan användas för att iterera över en sekvens baklänges:
```python
numbers = [1, 2, 3, 4]

for number in reversed(numbers):
    print(number)
```
<div class="code-example" markdown="1">
<pre><code>4
3
2
1</code> </pre>
</div>

Precis som med `sorted()` ändras inte originalet utan funktionen påverkar bara hur vi itererar över värdena.

## `any()`- och `all()`-funktionerna
Funktionerna `any()` och `all()` används för att kontrollera flera _sanningsvärden_ samtidigt där `any()` returnerar `True` om minst ett värde är sant:
```python
numbers = [3, 7, -2, 10]

has_negative = any(number < 0 for number in numbers)

print(has_negative)
```
<div class="code-example" markdown="1">
<pre><code>True</code> </pre>
</div>

Eftersom `-2` är mindre än `0` blir resultatet `True`.

`all()` returnerar istället `True` endast om _alla värden_ är sanna:
```python
numbers = [3, 7, 2, 10]

all_positive = all(number > 0 for number in numbers)

print(all_positive)
```
<div class="code-example" markdown="1">
<pre><code>True</code> </pre>
</div>

Resultatet blir `True` då alla tal är större än `0`.

## `map()`- och `filter()`-funktionerna
Funktionerna `map()` och `filter()` används för att bearbeta samlingar på ett mer "funktionellt" sätt. Dessa är inte nödvändiga för att lösa uppgifterna i kursen, men det kan ändå vara fördelaktigt att känna igen dem.

### `map()` 
`map()` används för att applicera en funktion på varje element i en kollektion:
```python
numbers = [1, 2, 3, 4]

squared_numbers = list(map(lambda number: number ** 2, numbers))

print(squared_numbers)
```
<div class="code-example" markdown="1">
<pre><code>[1, 4, 9, 16]</code> </pre>
</div>

Där `lambda number: number ** 2, numbers` alltså avser en funktion som ger varje tal i `numbers` upphöjt i `2`. Samma sak kan även uttryckas med kollektionsförståelse/comprehensions (vilket också avser ett avancerat koncept som inte är nödvändigt för att lösa kursens uppgifter):
```python
numbers = [1, 2, 3, 4]

squared_numbers = [number ** 2 for number in numbers]

print(squared_numbers)
```
<div class="code-example" markdown="1">
<pre><code>[1, 4, 9, 16]</code> </pre>
</div>

Vi nämner comprehensions i denna kontext då det argumenterbart kan upplevas som enklare att läsa än tillvägagångssättet med `map()`.

### `filter()` 
`filter()` används för att enbart behålla de element som uppfyller ett visst villkor:
```python
numbers = [1, 2, 3, 4, 5, 6]

even_numbers = list(filter(lambda number: number % 2 == 0, numbers))

print(even_numbers)
```
<div class="code-example" markdown="1">
<pre><code>[2, 4, 6]</code> </pre>
</div>

Där villkoret i ovan fall uttrycks som en funktion vars syfte är att identifiera alla jämna tal i `numbers`. Även detta kan uttryckas med comprehensions:
```python
numbers = [1, 2, 3, 4, 5, 6]

even_numbers = [number for number in numbers if number % 2 == 0]

print(even_numbers)
```
<div class="code-example" markdown="1">
<pre><code>[2, 4, 6]</code> </pre>
</div>

## När ska man använda dessa funktioner?

En generell tumregel kan tänkas vara:

* Använd `enumerate()` när du behöver både index och värde.
* Använd `zip()` när du vill iterera över flera samlingar samtidigt.
* Använd `sorted()` när du vill iterera över värden i sorterad ordning.
* Använd `reversed()` när du vill iterera baklänges.
* Använd `any()` när du vill veta om minst ett värde uppfyller ett villkor.
* Använd `all()` när du vill veta om alla värden uppfyller ett villkor.
* Använd `map()` och `filter()` mer försiktigt, särskilt i början. I många fall är en vanlig loop eller listförståelse/comprehensions tydligare.

# Sammanfattning

I detta kapitel har vi introducerat några inbyggda funktioner som ofta används tillsammans med iteration. Funktioner som `enumerate()`, `zip()` och `sorted()` hjälper oss att skriva tydligare loopar, medan `any()` och `all()` kan användas för att kontrollera flera villkor på ett kompakt sätt.

Dessa verktyg är inte nödvändiga för att förstå grunderna i loopar, men de gör det enklare att skriva kod som är både mer läsbar och mer idiomatisk i Python.
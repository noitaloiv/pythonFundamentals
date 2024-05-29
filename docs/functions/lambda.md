---
layout: default
title: "32. Lambda och anonyma funktioner"
nav_order: 33
parent: 30. Funktioner
---

# Anonyma funktioner med lambda
Anonyma funktioner, som skapas med s.k. _lambda-uttryck_ i Python, är funktioner utan ett definierat namn. De är särskilt användbara för att utföra små uppgifter som inte kräver upprepade anrop i koden. lambda-uttryck är kortfattade och avsedda för engångsbruk, och kan ofta användas inom andra funktioner som argument.

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

## Multipla argument
Det är även möjligt att skriva fler än ett argument vid lambda-uttryck, vilket kan tänkas vara användbart när du behöver utföra operationer som involverar fler än en parameter. Exempelvis kan vi skriva en lambda-funktion som adderar två tal enligt:
```python
add = lambda x, y: x + y
print(add(5, 3))
```
<div class="code-example" markdown="1">
<pre><code>8</code> </pre>
</div>

## Lambda med funktioner
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

Funktionen `sorted()` kan nyttjas för att anpassa sorteringen av element. Anta exempelvis att du har en lista med tuples som representerar studenter och deras poäng på en tentamen och du vill sortera listan baserat på poäng. Detta kan då uppnås på följande vis:
```python
students = [("Alice", 88), ("Bob", 75), ("Charlie", 92)]
sorted_students = sorted(students, key=lambda student: student[1])  # Sort by score
print(sorted_students)
```
<div class="code-example" markdown="1">
<pre><code>[('Bob', 75), ('Alice', 88), ('Charlie', 92)]</code> </pre>
</div>

{: .highlight }
Lambda-uttryck är kraftfulla för kortfattade operationer, men de har begränsningar. En lambda-funktion kan endast innehålla ett uttryck och kan bli svårläst om uttrycket blir för komplicerat. I sådana fall är det bättre att använda en definierad funktion med def för ökad läsbarhet och flexibilitet.

# Sammanfattning
Lambda-uttryck erbjuder ett kompakt och kraftfullt sätt att definiera anonyma funktioner i Python. De är idealiska för enkla operationer som kan uttryckas som ett enda uttryck, särskilt när de används tillsammans med funktioner som `map()`, `filter()`, och `sorted()`. Trots deras begränsningar i komplexitet erbjuder lambda-uttryck en elegant lösning för många situationer där korta och engångs funktioner krävs. Det är dock viktigt att balansera användningen av lambda med klarhet och läsbarhet i koden.

{: .highlight }
Inom ramen för denna kurs så är detta inget du nödvändigtvis måste tillämpa, men det kan eventuellt vara av intresse i framtiden!
---
layout: default
title: "25. Listförståelse (Comprehensions)"
nav_order: 26
---

# Kollektionsförståelse (Comprehensions)
Kollektionsförståelse i Python är ett kompakt sätt att skapa listor. Tänk dig att du har en stor trädgård och vill skapa en lista över alla röda blommor. Istället för att gå runt i trädgården och manuellt lägga till varje röd blomma i en lista, låter kollektionsförståelse dig göra detta i en enda rad kod. Exempelvis kan vi skapa en lista utifrån en annan lista men med nya värden enligt:
```python
numbers = [1, 2, 3, 4, 5]
squared_numbers = [x**2 for x in numbers]  # Creates a list with the squared value of each number in numbers
print(squared_numbers)
```
<div class="code-example" markdown="1">
<pre><code>[1, 4, 9, 16, 25]</code></pre>
</div>

List-, dictionary- och setförståelser i Python är kraftfulla verktyg som erbjuder ett koncist och lättläst sätt att skapa nya samlingar baserade på existerande itererbara objekt. De gör att du kan uttrycka komplexa loopar och logik i en enda rad kod, vilket kan göra din kod mer effektiv.

## Listförståelse
En listförståelse ger dig möjligheten att skapa nya listor genom att iterera över en sekvens och tillämpa ett uttryck på varje element, likt hur vi gjorde i föregående exempel. Syntaxen för detta ser ut enligt:
```python
[expression for element in iterable if condition]
```

Notera att vi kan välja att lägga till villkor när vi tillämpar listförståelse, exempelvis för att filtrera vilka element som faktiskt ska läggas till.
```python
even_squared = [x**2 for x in range(10) if x % 2 == 0] # Only includes even integers
print(even_squared)
```
<div class="code-example" markdown="1">
<pre><code>[0, 4, 16, 36, 64]</code></pre>
</div>

{: .highlight }
Notera att villkoret inte är obligatoriskt, som vi även kan se från det tidigare exemplet. Med iterable avses något som vi kan iterera över, exempelvis en kollektion av värden såsom en lista, dictionary eller en sträng.

## Dictionaryförståelse
På samma sätt som med listor kan du skapa dictionaries genom att använda dictionaryförståelser, där varje iteration kan producera ett nyckel-värde-par. Syntaxen för detta ser ut enligt:
```python
{key_expression: value_expression for element in iterable if condition}
```

Notera att vi kan välja att lägga till villkor när vi tillämpar listförståelse, exempelvis för att filtrera vilka element som faktiskt ska läggas till.
```python
squared_dict = {x: x**2 for x in range(5)} # Creates a dictionary where the key is the initial value and value is the squared value
print(squared_dict)
```
<div class="code-example" markdown="1">
<pre><code>{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}</code></pre>
</div>

## Mängd (set)-förståelse
Liksom list- och dictionaryförståelser kan du använda setförståelser för att skapa sets på ett enkelt och koncist sätt. Syntaxen för detta efterliknar syntaxen för listor och dictionaries:
```python
{expression for element in iterable if condition}
```

```python
even_squared_set = {x**2 for x in range(10) if x % 2 == 0}
print(even_squared_set)
```
<div class="code-example" markdown="1">
<pre><code>{0, 64, 4, 36, 16}</code></pre>
</div>

## Nästlad iteration med comprehensions
Du kan även använda nästlad iteration inom en förståelse för att utföra mer komplexa transformationer eller beräkningar. Exempelvis enligt:
```python
a = [1, 2]
b = [3, 4]
combinations = [(x, y) for x in a for y in b]
print(combinations)
```
<div class="code-example" markdown="1">
<pre><code>[(1, 3), (1, 4), (2, 3), (2, 4)]</code></pre>
</div>

# Sammanfattning
Förståelser i Python erbjuder ett elegant och kraftfullt sätt att skapa nya kollektioner. De gör att du kan förenkla kod som annars skulle kräva flera rader av loopar och villkorsuttryck. Genom att bemästra dessa förståelser kan du skriva mer effektiv och läsbar kod som är lättare att underhålla och förstå.

{: .highlight }
Inom ramen för denna kurs så är detta inget du nödvändigtvis måste tillämpa, men det kan eventuellt vara av intresse i framtiden!
---
layout: default
title: "26. Tuples"
nav_order: 27
parent: 24. Kollektioner
---

# Tuples
Tuples är en typ av kollektion som liknar listor, men med en viktig distinktion - de är _oföränderliga_. Detta innebär att när en tuple har skapats kan dess innehåll **inte** ändras. Detta innefattar att de fortfarande är _ordnade_ (d.v.s. tillåter för indexering) och tillåter _duplicerade element_, men vi kommer inte att kunna lägga till eller ta bort element från en tuple.

Ponera att du har en kollektion av datum för tentamenstillfällen under terminen. Dessa datum kommer inte att ändras, vilket gör dem till perfekta kandidater för att lagras i en tuple:
```python
important_dates = ("2024-03-01", "2024-04-12", "2024-05-23")
```

Även om du inte kan lägga till eller ta bort element från en tuple, kan du fortfarande iterera över den eller hämta värden på angivna indexpositioner, precis som med en lista:
```python
important_dates = ("2024-03-01", "2024-04-12", "2024-05-23")

for date in important_dates:
    print(date)

print("\n" + important_dates[1])
```
<div class="code-example" markdown="1">
<pre><code>2024-03-01
2024-04-12
2024-05-23

2024-04-12</code></pre>
</div>

## Oföränderlighet
Oföränderligheten hos tuples innebär att de inte bara är säkrare från oförutsedda ändringar men också mer optimerade när det kommer till prestanda jämfört med listor. Detta gör dem till ett idealiskt val för att lagra data som inte bör modifieras, såsom konfigurationsdata eller konstanter i programmet.

## Syntax för tuples
Tuples kan skapas genom att placera en uppsättning värden inom parenteser `()`, separerade med kommatecken. Det är dock kommatecknet, ___inte parenteserna___, som definierar en tuple. En tuple med ett enda element måste följas av ett kommatecken för att skilja den från en vanlig parenteserad uttryck.
```python
single_element_tuple = ("endast ett element",)
print(type(single_element_tuple))
non_tuple = ("Hello world")
print(type(non_tuple))
```
<div class="code-example" markdown="1">
<pre><code>< class 'tuple' >
< class 'str' ></code></pre>
</div>

## "Packning och uppackning" av tuples
Tuples tillåter _"packning"_ och _"uppackning"_, vilket innebär att du kan tilldela flera variabler värden från en tuple i en enda operation:
```python
coordinates = (10, 20)  # Packning/packing
x, y = coordinates      # Uppackning/unpacking
print(x)  
print(y)  
```
<div class="code-example" markdown="1">
<pre><code>10
20</code></pre>
</div>

## Användningsområden
Trots sin oföränderlighet är tuples mycket användbara:

* Funktioner som returnerar flera värden: Funktioner kan använda tuples för att returnera flera värden på en gång.
```python
def min_max(numbers):
    return min(numbers), max(numbers)

min_num, max_num = min_max([1, 2, 3, 4, 5])
print(min_num, max_num)
```
<div class="code-example" markdown="1">
<pre><code>1 5</code></pre>
</div>

{: .highlight }
`def min_max(numbers)` är ett exempel på en egendefinierad funktion, d.v.s. en funktion som vi själva deklarerar och implementerar istället för att nyttja en "inbyggd funktion" - likt `range()`, `print()` och `max()`. Vi kommer att introducera och diskutera konceptet vidare i framtida avsnitt.

* Skyddad data: När du vill säkerställa att dataintegriteten upprätthålls och skyddas från ändringar.

* Som nycklar i dictionaries: Till skillnad från listor kan tuples användas som nycklar i en dictionary på grund av deras oföränderlighet.

# Sammanfattning
Tuples är en grundläggande datastruktur i Python som tillhandahåller en oföränderlig sekvens av element. Deras oföränderlighet, tillsammans med stöd för "packning" och "uppackning", gör dem till ett värdefullt verktyg för situationer där datasekvensens integritet är avgörande. 

Trots att de inte erbjuder den dynamiska flexibiliteten hos listor, är deras effektivitet och säkerhet idealisk för att representera data som inte bör förändras under programmets körning. Genom att integrera tuples i dina Python-program kan du dra nytta av deras unika egenskaper för att skapa mer robust och effektiv kod.
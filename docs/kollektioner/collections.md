---
layout: default
title: "13. Kollektioner"
nav_order: 14
---

# Kollektioner
När man programmerar arbetar man ofta med _kollektioner_ av data. Ponera att du som student vill hålla reda på alla kurser du planerar att läsa under en termin. Vi skulle tekniskt sett kunna lösa detta genom att skapa en separat variabel per kurs enligt:
```python
course1 = "OOP I"
course2 = "Datastrukturer"
course3 = "Databaser"
# Osv. för resp. kurs
```
Men detta tillvägagångssätt skulle snabbt bli ohållbart (eller åtminstone väldigt opraktiskt). Tänk om vi vill lägga till en kurs, `Programmering i Python` som löper samtidigt som `Datastrukturer` (nuvarande `course2`) men långt innan `Databaser` (nuvarande `course3`), ska den då läggas till som `course4` eller behöver vi ändra namnet på våra existerande variabler för att upprätthålla någon form av struktur? Detsamma gäller om vi skulle vilja ta bort en kurs, lista namnet på alla kurser i alfabetisk ordning eller dylikt. Det skulle kräva mycket repeterad och omfattande kod samt att vi eventuellt modifierar existerande kod - vilket vi självfallet vill undvika.

Låt oss därför introducera konceptet kollektioner, mer specifikt _listor_, vilket är en typ av kollektion i Python. Vi kan då enkelt gruppera våra deltagare baserat på vilken sträcka de registrerat sig för enligt: 
```python
coursesT1 = ["OOP I", "Datastrukturer", "Programmering i Python"]
coursesT2 = ["Databaser", "Webbapplikationer"]
# Osv. för resterande terminer
```
Vi har nu organiserat vår data i kollektioner där resp. lista representerar en grupp av kurser per termin. Detta tillåter oss dels att organisera vår data, men även att utföra operationer på listorna, t.ex. som att skriva ut namnet på alla kurser för en termin genom att tillämpa iteration:
```python
coursesT1 = ["OOP I", "Datastrukturer", "Programmering i Python"]

for course in coursesT1:
    print(course)
```
<div class="code-example" markdown="1">
<pre><code>OOP I
Datastrukturer
Programmering i Python</code></pre>
</div>

{: .highlight }
Notera gärna att det är möjligt att skriva ut innehållet i listan utan att tillämpa iteration, d.v.s. genom exempelvis `print(coursesT1)`. Detta kommer dock att resultera i en annorlunda utskrift eftersom att vi skriver ut hela _listan_ snarare än resp. _element i listan_. I detta fall skulle vi få utskriften `['Objektorienterad programmering I', 'Datastrukturer', 'Programmering i Python']`. Nämnvärt är även att detta tillvägagångssätt är något säreget för Python. Om vi skulle försöka utföra motsvarigheten till `print(coursesT1)` i C# eller Java så skulle vi exempelvis istället bara få ut vilken datatyp variabeln avser snarare än dess innehåll. Utgångspunkten bör således vara att tillämpa iteration vid utskrift av element i kollektioner.

Python erbjuder flera inbyggda samlingstyper som är designade för att hantera grupper av objekt på olika sätt. De mest använda samlingstyperna är _listor_, _tupler_, _dictionaries_ och _mängder_.

## Dynamiskt typat språk (Dynamically typed language)
Den dynamiska typningen i Python tillåter variabler att referera till objekt av olika datatyper under programmets körning, vilket ger en stor flexibilitet i hur data kan hanteras och lagras.

När vi pratar om kollektioner i Python, såsom listor, tupler, dictionaries och mängder, innebär flexibiliteten som följer av att vara ett dynamiskt typat språk att dessa kollektioner kan innehålla element av **<ins>olika datatyper inom samma kollektion</ins>**. Detta är möjligt eftersom kollektionerna i själva verket lagrar __referenser__ till objekten de innehåller, snarare än de faktiska objekten. Varje element i en kollektion pekar på ett objekt någonstans i minnet, och detta objekt kan vara av vilken datatyp som helst.

Föreställ dig att du har en låda där du kan förvara olika saker - en bok, några mynt och en lapp med en anteckning. I detta scenario representerar lådan en kollektion i Python, och de olika föremålen representerar data av olika datatyper (boken kan representera en sträng, mynten en lista med heltal och lappen en sträng med anteckningen).

### Varför är detta viktigt?
Denna möjlighet att förvara olika datatyper i samma kollektion gör Python mycket kraftfullt och flexibelt:

* Datarepresentation: Du kan skapa kollektioner som mer exakt representerar verklig data. Till exempel kan en lista som representerar en person innehålla en sträng för namnet, ett heltal för åldern och kanske en annan lista för personens intressen.
```python
person_info = ["Max Power", 25, ["Walks in the park", "F1"]]
print(person_info)
```
<div class="code-example" markdown="1">
<pre><code>['Max Power', 25, ['Walks in the park', 'F1']]</code></pre>
</div>

* Förenklad hantering: Istället för att hantera flera separata kollektioner för varje datatyp, kan du gruppera relaterad information i en enda kollektion, vilket förenklar datahanteringen. Givet vårt föregående exempel så skulle vi exempelvis behöva separera datan i olika variabler och kollektioner och sedan själva etablera en koppling mellan dem.
```python
name = "Max Power"
age = 25
interests = ["Walks in the park", "F1"]
print(f'{name}, {age}, {interests}')
```
<div class="code-example" markdown="1">
<pre><code>Max Power, 25, ['Walks in the park', 'F1']</code></pre>
</div>

I detta fall var en sådan koppling förhållandevis enkel att etablera, men i andra fall kan vi först behöva utvinna informationen från andra kollektioner och därefter försöka kombinera datan - vilket kan utgöra problem.

* Flexibilitet i datastrukturer: Du kan skapa komplexa datastrukturer, som nästlade kollektioner (listor i listor, listor i dictionaries, etc.), som kan representera mer komplexa relationer och hierarkier mellan data.

## Kollektioner i kollektioner
Python är ett flexibelt språk som tillåter att olika datatyper lagras i samma kollektion, men vi kan även lagra kollektioner inuti andra kollektioner såsom listor i listor eller listor i dictionaries. Detta ger en enorm flexibilitet i hanteringen av datastrukturer och är mycket nyttosamt i kontexten av mer komplexa datastrukturer.

Exempelvis kan vi skapa en matris med listor i listor enligt:
```python
matris = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matris[1][2]) #[1] avser indexpositionen för listan vi vill kolla på och [2] avser indexpositionen för ett element i den listan
```
<div class="code-example" markdown="1">
<pre><code>6</code></pre>
</div>

Vi skulle även kunna lagra listor i en dictionary, exempelvis enligt:
```python
person = {
    "namn": "Alice",
    "ålder": 30,
    "intressen": ["programmering", "cykling", "konst"]
}

print(person["intressen"][1])
```
<div class="code-example" markdown="1">
<pre><code>cykling</code></pre>
</div>
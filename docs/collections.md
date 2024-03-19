---
layout: default
title: "11. Kollektioner"
nav_order: 12
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

## Datatypen list
Listor i Python är en typ av samling som låter oss lagra flera värden i en enda variabel. Detta gör det enklare att hantera och manipulera relaterad data. En lista kan skapas med hjälp av hakparenteser `[]`, och vi kan lägga till så många element vi vill i listan, separerade med kommatecken. Listor är _dynamiska samlingar_ som kan innehålla objekt av olika datatyper. De är _föränderliga_, tillåter _duplicerade element_ och är _ordnade_, .

##### Föränderliga kollektioner
Med _föränderliga_ så avses att vi tillåts ändra på innehållet i en lista. Exempelvis kan vi lägga till en ny kurs i listan från vårt föregående exempel enligt:
```python
coursesT1.append("Systemutveckling")
# coursesT1 will contain: ["OOP I", "Datastrukturer", "Programmering i Python", "Systemutveckling"]
```

Eller ta bort ett element enligt:
```python
coursesT1.remove("OOP I")
# coursesT1 will contain: ["Datastrukturer", "Programmering i Python", "Systemutveckling"]
```

##### Duplicerade element
Med _duplicerade element_ så avses att vi tillåts ha flera element av samma värde och datatyp i en lista. Exempelvis kan vi skapa en lista med heltal enligt:
```python
numbers = [1,1,2,3,5,5]
# numbers will contain: [1,1,2,3,5,5]
```
I det fall en kollektion inte tillåter duplicerade element så skulle listan från föregående exempel med andra ord enbart innehålla: `[1,2,3,5]`.

##### Ordnade kollektioner
Du kan ha noterat att `Systemutveckling` lades till i slutet av listan när funktionen `append()` nyttjades samt att det inte blev ett "hål" i listan när vi nyttjade `remove()` - istället blev `Datastrukturer` den första kursen i listan. Detta beror på att listor är _ordnade_. _Ordnad_ innefattar i denna kontext att elementen i en lista har lagrats i en definierad ordning och att denna ordning inte kommer att ändras (med undantag för vissa funktioner som kan ändra ordningen på listor). Denna ordning definieras av _indexering_.

### Indexering
Indexering är ett grundläggande koncept inom programmering som gör det möjligt att komma åt, referera till och manipulera data inom ordnade samlingar, såsom listor och strängar i Python. Indexering innebär att använda ett _index_ för att nå ett specifikt element inom en ordnad samling. I Python, liksom i många andra programmeringsspråk, börjar indexeringen från **0**. Det betyder att det första elementet i en samling har index 0, det andra elementet har index 1 o.s.v. En visualisering av listindexering kan tänkas se ut enligt:

<div align="center">

| Element                | Indexposition |
| :-:| :-: | 
| Datastrukturer                | 0       | 
| Programmering i Python                 | 1       | 
| Systemutveckling  | 2       |

</div>

Exempelvis kan vi peka på en specifik indexposition för att uthämta elementet på den angivna positionen enligt: 
```python
coursesT1 = ["Datastrukturer", "Programmering i Python", "Systemutveckling"]
print(coursesT1[0])
print(coursesT1[1])
print(coursesT1[2])
```
<div class="code-example" markdown="1">
<pre><code>Datastrukturer
Programmering i Python
Systemutveckling</code></pre>
</div>

Vi kan även manipulera ett element på en angiven indexposition enligt:
```python
coursesT1 = ["Datastrukturer", "Programmering i Python", "Systemutveckling"]
coursesT1[1] = "Inledande Java"
print(coursesT1[1])
```
<div class="code-example" markdown="1">
<pre><code>Inledande Java
</code></pre>
</div>

I en _ordnad_ kollektion så kommer vi aldrig att kunna ändra på indexeringen, d.v.s. att 0 alltid kommer att representera det första elementet i en lista. I det fall vi ändrar på elementen i listan, t.ex. genom att ta bort elementet som är lagrat på indexposition 0 så kommer listan att "förskjuta" elementen till vänster. D.v.s. att elementet på indexposition 1 kommer att flyttas till indexposition 0, osv.
```python
coursesT1 = ["Datastrukturer", "Programmering i Python", "Systemutveckling"]
coursesT1.remove(coursesT1[1])
print(coursesT1[0])
print(coursesT1[1])
```
<div class="code-example" markdown="1">
<pre><code>Datastrukturer
Systemutveckling</code></pre>
</div>

{: .warning }
I det fall vi försöker utföra en operation mot en indexposition som inte förekommer i kollektionen så kommer vi att stöta på ett `IndexError`, exempelvis enligt:
```python
coursesT1 = ["Datastrukturer", "Programmering i Python", "Systemutveckling"]
coursesT1.remove(coursesT1[1])
print(coursesT1[0])
print(coursesT1[1])
print(coursesT1[2])
```
<div class="code-example" markdown="1">
<pre><code>Datastrukturer
Systemutveckling
IndexError: list index out of range</code></pre>
</div>

#### Negativ indexering
Python stöder även negativ indexering, där `-1` refererar till det sista elementet, `-2` till det näst sista och så vidare. Exempelvis kan vi skriva ut värdet på den sista indexpositionen enligt:
```python
numbers = [1,2,3,4,5]
print(numbers[-1])
```
<div class="code-example" markdown="1">
<pre><code>5</code></pre>
</div>

#### Slicing
Slicing är en teknik som använder index för att "skära ut" och komma åt delar av en kollektion. I Python uppnås detta med funktionen `slice()` som kan ta emot ett **startindex** och ett **slutindex**, separerade av ett kolon, där slutindexet är _exklusivt_. Att slutindexet är exklusivt avser - i kontexten av slicing i Python - att det element som motsvarar slutindexet inte inkluderas i den del av samlingen som du skär ut. Med andra ord, när du specifierar ett intervall med start- och slutindex för att göra en slice av en samling, kommer elementet på positionen för slutindexet inte att vara en del av den resulterande delen - likt hur funktionen `range()` hanterar intervall.

Om du exempelvis har en lista och vill skapa en slice av den, kommer du att ange ett start- och slutindex enligt: `lista[start:slut]`. Om du anger `1` som startindex och `4` som slutindex, kommer slicen att inkludera elementen på index `1`, `2` och `3`, men inte elementet på index `4`.
```python
numbers = [1,2,3,4,5]
part_of_numbers = numbers[2:4]
print(part_of_numbers)
```
<div class="code-example" markdown="1">
<pre><code>[3,4]</code></pre>
</div>

{: .highlight }
Parametrarna för `slice()` är _optional_, d.v.s. att du kan skriva:
```python
numbers = [1,2,3,4,5]
part_of_numbers = numbers[2:]
print(part_of_numbers)

part_of_numbers = numbers[:]
print(part_of_numbers)

part_of_numbers = numbers[:3]
print(part_of_numbers)
```
<div class="code-example" markdown="1">
<pre><code>[3,4,5]
[1,2,3,4,5]
[1,2,3]</code></pre>
</div>

### Sammanfattning
Listor är en kraftfull typ av kollektion i Python som gör det möjligt för oss att hantera och manipulera grupper av relaterade data på ett effektivt sätt. Genom att använda listor kan vi enkelt lägga till, ta bort, sortera och iterera över element, vilket förenklar många programmeringsuppgifter.

I det stora hela hjälper listor oss att organisera och hantera data på ett mer strukturerat och effektivt sätt än vad som skulle vara möjligt med separata variabler för varje datapunkt.

## Tuples
Tupler är en typ av kollektion som liknar listor, men med en viktig distinktion - de är _oföränderliga_. Detta innebär att när en tupel har skapats kan dess innehåll **inte** ändras. Detta innefattar att de fortfarande är _ordnade_ (d.v.s. tillåter för indexering) och tillåter _duplicerade element_, men vi kommer inte att kunna lägga till eller ta bort element från en tuple.

Ponera att du har en kollektion av datum för tentamenstillfällen under terminen. Dessa datum kommer inte att ändras, vilket gör dem till perfekta kandidater för att lagras i en tupel:
```python
important_dates = ("2024-03-01", "2024-04-12", "2024-05-23")
```

Även om du inte kan lägga till eller ta bort element från en tupel, kan du fortfarande iterera över den eller hämta värden på angivna indexpositioner, precis som med en lista:
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

## Dictionaries
Dictionaries är kollektioner som lagrar data i s.k. _key-value-pairs_, vilket gör dem idealiska för att representera _relationer_ mellan data. Varje nyckel i en dictionary är **unik** och används för att hämta det **associerade** **värdet**. Dictionaries skapas med måsvingar `{}`, där varje element består av en nyckel och ett värde, separerade av ett kolon. Likt listor är dictionaries 

Ponera att du vill lagra information om dina avslutade kurser och vilket betyg du förvärvat på kurserna. En dictionary kan då organisera denna information effektivt genom att nyttja en nyckel som representerar kursen och det tillhörande betyget:
```python
course_grades = {
    "Datastrukturer": "VG",
    "Programmering i Python": "G",
    "Systemutveckling": "G"
}
```

För att sedan hämta ett betyg så kan detta uppnås med hjälp av indexering - men denna gång anger vi nyckeln snarare än en indexposition:
```python
course_grades = {
    "Datastrukturer": "VG",
    "Programmering i Python": "G",
    "Systemutveckling": "G"
}

print(course_grades["Datastrukturer"])
```
<div class="code-example" markdown="1">
<pre><code>VG</code></pre>
</div>

Vi skulle även kunna vända på det och istället lagra kurser per betyg, för att enklare kunna utvinna vilka kurser vi förvärvat ett VG resp. G på, samt vilka kurser som ev. behöver kompletteras:
```python
course_grades = {
    "VG": ["Datastrukturer"]
    "G": ["Programmering i Python", "Systemutveckling"]
}

print(course_grades["G"])
```
<div class="code-example" markdown="1">
<pre><code>['Programmering i Python', 'Systemutveckling']</code></pre>
</div>

## Mängder (sets)
Mängder är en annan typ av kollektion som är mycket användbar när du behöver hantera _unika element_ och utföra operationer såsom `union`, `snitt` och `differens`. Mängder skapas med måsvingar `{}` eller med `set()`-funktionen. Till skillnad från listor och tuples är mängder _oordnade_, vilket innebär att de inte har någon bestämd ordning (d.v.s. att indexering inte kan tillämpas) för sina element och tillåter **inte** för duplicerade element. Mängder är även _oföränderliga_ i det avseendet att vi inte kan ändra på existerande element - men vi kan till skillnad mot tuples lägga till eller ta bort element.

Vi kan arbeta med mängder på följande vis:
```python
# Create a set
colors = {"red", "green", "blue"}

# Add an element
colors.add("yellow")

# Remove an element
colors.discard("green")

# Itererate over a set
for color in colors:
    print(color)

# Indexing will cause a TypeError
print(colors[0])
```
<div class="code-example" markdown="1">
<pre><code>red
blue
yellow
TypeError: 'set' object is not subscriptable</code></pre>
</div>

{: .highlight }
Notera att då mängder är oordnade så kan vi aldrig vara säkra på i vilken ordning elementen kommer att skrivas ut. D.v.s. att den ena körningen kan vi få `red`, `blue`, `yellow` men nästa körning kan det vara `yellow`, `red`, `blue`.

Om du till exempel vill hålla reda på en unik kollektion av studenter som deltar i olika studiegrupper och utföra mängd-operationer (`union`, `snitt`, `differens`), kan mängder vara ett fördelaktigt val:
```python
studiegrupp_a = {"Alice", "Bob", "Charlie"}
studiegrupp_b = {"Bob", "Diana", "Frank"}

# UNION - Will get students that belongs to both groups
print(studiegrupp_a & studiegrupp_b)

# DIFFERENCE - Will get students that belongs to A and not B
print(studiegrupp_a - studiegrupp_b)
```
<div class="code-example" markdown="1">
<pre><code>{'Bob'}
{'Alice', 'Charlie'}</code></pre>
</div>
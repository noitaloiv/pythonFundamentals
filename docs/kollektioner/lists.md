---
layout: default
title: "21. Lists"
nav_order: 22
parent: 20. Kollektioner
---
# Datatypen list
Listor i Python är en typ av samling som låter oss lagra flera värden i en enda variabel. Detta gör det enklare att hantera och manipulera relaterad data. En lista kan skapas med hjälp av hakparenteser `[]`, och vi kan lägga till så många element vi vill i listan, separerade med kommatecken. Listor är _dynamiska samlingar_ som kan innehålla objekt av olika datatyper. De är _föränderliga_, tillåter _duplicerade element_ och är _ordnade_, .

## Föränderliga kollektioner
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

## Duplicerade element
Med _duplicerade element_ så avses att vi tillåts ha flera element av samma värde och datatyp i en lista. Exempelvis kan vi skapa en lista med heltal enligt:
```python
numbers = [1,1,2,3,5,5]
# numbers will contain: [1,1,2,3,5,5]
```
I det fall en kollektion inte tillåter duplicerade element så skulle listan från föregående exempel med andra ord enbart innehålla: `[1,2,3,5]`.

## Ordnade kollektioner
Du kan ha noterat att `Systemutveckling` lades till i slutet av listan när funktionen `append()` nyttjades samt att det inte blev ett "hål" i listan när vi nyttjade `remove()` - istället blev `Datastrukturer` den första kursen i listan. Detta beror på att listor är _ordnade_. _Ordnad_ innefattar i denna kontext att elementen i en lista har lagrats i en definierad ordning och att denna ordning inte kommer att ändras (med undantag för vissa funktioner som kan ändra ordningen på listor). Denna ordning definieras av _indexering_.

### Indexering
Indexering är ett grundläggande koncept inom programmering som gör det möjligt att komma åt, referera till och manipulera data inom ordnade samlingar, såsom listor och strängar i Python. Indexering innebär att använda ett _index_ för att nå ett specifikt element inom en ordnad samling. I Python, liksom i många andra programmeringsspråk, börjar indexeringen från **0**. Det betyder att det första elementet i en samling har index 0, det andra elementet har index 1 o.s.v. En visualisering av listindexering kan tänkas se ut enligt:

| Element                | Indexposition |
| :-:| :-: | 
| Datastrukturer                | 0       | 
| Programmering i Python                 | 1       | 
| Systemutveckling  | 2       |

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

### Negativ indexering
Python stöder även negativ indexering, där `-1` refererar till det sista elementet, `-2` till det näst sista och så vidare. Exempelvis kan vi skriva ut värdet på den sista indexpositionen enligt:
```python
numbers = [1,2,3,4,5]
print(numbers[-1])
```
<div class="code-example" markdown="1">
<pre><code>5</code></pre>
</div>

### Slicing
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

# Sammanfattning
Listor är en kraftfull typ av kollektion i Python som gör det möjligt för oss att hantera och manipulera grupper av relaterade data på ett effektivt sätt. Genom att använda listor kan vi enkelt lägga till, ta bort, sortera och iterera över element, vilket förenklar många programmeringsuppgifter.

I det stora hela hjälper listor oss att organisera och hantera data på ett mer strukturerat och effektivt sätt än vad som skulle vara möjligt med separata variabler för varje datapunkt.
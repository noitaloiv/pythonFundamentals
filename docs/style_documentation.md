---
layout: default
title: "43. Kodstil"
nav_order: 44
---

# Kodstil, dokumentation och typmarkeringar
När vi skriver program är det inte bara viktigt att koden fungerar. Det är också viktigt att koden går att läsa, förstå och underhålla. Det gäller både för dig själv och för andra som kan behöva läsa din kod.

I detta kapitel introduceras tre sätt att göra Python-kod tydligare:
* kodstil,
* docstrings,
* typmarkeringar

Dessa koncept hjälper oss att skriva kod som är tydligare och därmed enklare att felsöka, testa samt vidareutveckla.

## Kodstil
Kodstil avser hur kod skrivs och formateras. Två program kan exempelvis göra exakt samma sak men vara olika lätta att förstå beroende på hur de är skrivna.

Inledningsvis så är det nämnvärt att Python har en etablerad stilguide som kallas för [PEP 8](https://peps.python.org/pep-0008/). Denna beskriver bl.a. rekommendationer för exempelvis indentering, radlängd och namngivning.

### Namngivning
I Python används ofta _snake_case_ för variabler och funktioner, något du sannolikt känner igen från tidigare kapitel i detta kompendium. Det innebär i praktiken att vi skriver små bokstäver och separerar ord med understreck:
```python
student_name = "Anna" 
total_score = 42 

def calculate_average_score(scores): 
    return sum(scores) / len(scores)
```

Detta är i regel tydligare än:
```python
studentName = "Anna" 
totalScore = 42 

def calculateAverageScore(scores): 
    return sum(scores) / len(scores)
```

Den senare stilen förekommer i andra programmeringsspråk (t.ex. C#), men i Python är _snake_case_ den vanligaste konventionen för variabler och funktioner.

Klasser skrivs däremot vanligtvis med stor bokstav i varje ord:
```python
class StudentProfile: 
    pass
```

Medan konstanter - variabler vars värden typsikt sett inte ändras under programmets körning - ofta skrivs med stora bokstäver (också känt som SCREAMING_SNAKE_CASE):
```python
PI = 3.14159 
BOARD_SIZE = 9
```

### Mellanslag och läsbarhet
Kod blir argumenterbart enklare att läsa och tyda om mellanslag används konsekvent. Exempelvis enligt:
```python
total = price * quantity
```

Istället för:
```python
total=price*quantity
```

Även om båda stycken kod utför exakt samma uppgift. Detsamma kan sägas om användandet av kommatecken:
```python
# With spacing
numbers = [1, 2, 3, 4]

# Without spacing
numbers = [1,2,3,4]
```

Dessa skillnader påverkar alltså inte HUR programmet körs, men de påverkar hur LÄTT koden är att LÄSA.

## Kommentarer
Kommentarer används för att förklara kod för människor - det är inget som körs inte av Python-tolkaren. 
```python
# Count the number of words that a user has entered.
counter = 0
```

Kommentarer bör dock inte bara upprepa exakt vad koden gör utan borde istället förklara varför något görs eller vad en större del av programmet har för syfte. Exempelvis kan nedan tänkas vara en något irrelevant kommentar:
```python
# Increases x by 1
x += 1
```

Som istället hade kunnat förtydliga syftet eller intentionen bakom koden, i stil med:
```python
# Moves onto the next attempt
attempt += 1
```

### Docstrings
En docstring är en särskild typ av dokumentation som generellt placeras direkt under en funktion, klass eller modul och skrivs med tre citationstecken:
```python
def word_counter(sentence):
    """Counts the number of words within a given sentence."""
    return len(sentence.split())
```

Docstrings är särskilt användbara för funktioner eftersom de kan användas för att förklara vad funktionen gör, vilka parametrar den förväntar sig och vad den returnerar. Detta genom att fortsätta dokumentera funktionen över flera rader, utan att behöva upprepa `#` (till skillnad mot kommentarer). Ett mer utförligt exempel på användandet av en docstring kan därför tänkas vara:
```python
def calculate_average(numbers):
    """
    Calculates the average given a list of integers.

    The function takes a list of integers or floats and returns the average. If the list is empty, the function returns 0.
    """
    if len(numbers) == 0:
        return 0

    return sum(numbers) / len(numbers)
```

## Typmarkeringar
Python är ett _dynamiskt typat språk_ vilket innebär att vi inte behöver skriva vilken datatyp en variabel eller parameter har. Exempelvis kan vi definiera en funktion på följande sätt:
```python
def add(number1, number2):
    return number1 + number2
```

Men det är även möjligt att lägga till s.k. typmarkeringar för att tydliggöra funktionen ytterligare:
```python
def add(number1: int, number2: int) -> int:
    return number1 + number2
```

I ovan exempel betyder `number1: int` att parametern förväntas vara ett heltal och `-> int` att funktionen förväntas returnera ett heltal. Till skillnad mot programmeringsspråk som inte är dynamiskt typade så påverkar dessa typmarkeringar normalt inte hur programmet körs. Det finns med andra ord inget som automatiskt stoppar anrop i stil med:
```python
def add(number1: int, number2: int) -> int:
    return number1 + number2

print(add("Hello", "World"))
```

Typmarkeringar används således främst för att tydliggöra koden, upptäcka möjliga typfel med särskilda verktyg, dokumentera vad en funktion förväntas ta emot och returnera, etc.

### Typmarkeringar med listor
Om en funktion tar emot en lista med heltal kan vi skriva:
```python
def calculate_total(numbers: list[int]) -> int:
    return sum(numbers)
```

Och om en funktion förväntas returnera en lista med strängar så kan vi skriva detta på följande vis:
```python
def get_names() -> list[str]:
    return ["Klas", "Erik", "Sarah"]
```

## Tydliggörande exempel - kod utan och med tydligare stil
Kodstil är alltså inget som måste tillämpas, koden kommer att vara körbar med eller utan stil - det handlar i slutändan bara om tydliggöranden och tolkning. Exempelvis kan vi skriva en funktion enligt:
```python
def c(x):
    s=0
    for n in x:
        s+=n
    return s/len(x)
```

Men vi kan även skriva samma funktion i stil med:
```python
def calculate_average(numbers: list[float]) -> float:
    """Calculates the average of a list of numbers."""
    total = 0

    for number in numbers:
        total += number

    return total / len(numbers)
```

Båda funktionerna kan ge samma resultat, men den andra är lättare att förstå. Namnen beskriver vad funktionen gör, docstringen ger en kort förklaring och typmarkeringarna visar vilka typer som förväntas.

## Rekommendationer
När du skriver kod bör du sträva efter att:

* använda beskrivande variabelnamn,
* använda snake_case för variabler och funktioner,
* skriva korta kommentarer där de behövs,
* skriva docstrings för större funktioner,
* använda typmarkeringar när de gör koden tydligare,
* undvika onödigt komplicerade lösningar.

Målet är __inte__ att skriva perfekt kod från början utan snarare att  stegvis utveckla vanor som gör din kod lättare att förstå och underhålla.

# Sammanfattning
I detta kapitel har vi gått igenom kodstil, docstrings och typmarkeringar. Kodstil gör kortfattat koden mer konsekvent och läsbar medan docstrings hjälper oss att dokumentera funktioner och klasser. Typmarkeringar gör det i sin tur tydligare vilka typer en funktion förväntar sig och returnerar.

Dessa verktyg förändrar inte nödvändigtvis vad programmet gör, men de gör stor skillnad för hur lätt programmet är att förstå, testa och vidareutveckla.
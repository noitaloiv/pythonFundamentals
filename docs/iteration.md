---
layout: default
title: "10. Iteration"
nav_order: 11
---

# Iteration
Ponera att vi med de byggstenar vi hittills har gått igenom skulle vilja skriva ut alla heltal mellan 1 och 10. Vårt program skulle i sådana fall se ut enligt något i stil med:
```python
print(1)
print(2)
print(3)
# Osv. för resterande heltal
```
Detta skulle dock vara något tradigt att som utvecklare skriva och det skulle dessutom vara svårt att underhålla och tolka för andra utvecklare. Säg att vi exempelvis vill skriva ut heltalen 1-100 följt av heltalen 75-1000 och sedan 20-30, vi skulle då ha skrivit minst 1035 rader kod!

Det finns således ett bättre tillvägagångssätt i de fall vi vill upprepa en instruktion eller en sekvens av instruktioner - **Iteration**. Iteration är ett grundläggande koncept inom programmering som möjliggör utförandet av en eller flera instruktioner baserat på ett angivet _villkor_. Likt hur vi tidigare har arbetat med `if`-satser och deras villkor, t.ex. i stil med `"OM 5 > 10, gör X"` så kan vi med iteration påtala att något t.ex. ska upprepas `"SÅLÄNGE SOM x < 10"`.

Vi kan exempelvis skriva om våra multipla `print`-operationer från föregående exempel enligt:
```python
for x in range(1,11):
  print(x)
```
<div class="code-example" markdown="1">
1
2
3
4
5
6
7
8
9
10
</div>

{: .highlight }
Notera gärna att variabelnamnet `x` kan vara vilket giltigt variabelnamn som helst. Exempelvis skulle vi kunna skriva `a`, `iterator` eller något helt annat. Notera även att `range()`-funktionen kan nyttjas för att ange ett specifikt intervall, vilket i detta fall är heltal från 1 till 11. För varje iteration som utförs (d.v.s. efter varje utskrift) så kommer värdet på `x` att öka med 1. Detta tillåter oss att utföra koden som tidigare hade krävt minst 10 rader på enbart 2 rader, vilket ökar läsbarheten i koden enormt.

## for-loopen
Nyckelordet `for` används för att deklarera en s.k. `for-loop` och följs alltid av ett _villkor_, likt en `if`-sats. Villkoret för en `for-loop` avser däremot inte ett "vägval" utan istället hur många _iterationer_ som ska utföras, d.v.s. hur många gånger koden som loopen avser ska utföras. I det föregående exemplet så nyttjades villkoret `x in range(1,11)` - vilket kan översättas till `"SÅ LÄNGE SOM x ÄR INOM INTERVALLET 1-11"`.

När vi först utför kodraden där `for-loopen` är deklarerad så kommer vi att utvärdera om villkoret uppfylls eller ej. För villkoret i det föregående exemplet så kommer vi med andra ord att kontrollera huruvida 1 är mindre än 11 (1 < 11). Nästa gång kollar vi istället om 2 < 11, osv. När vi avslutningsvis når heltalet 11 så kommer villkoret inte att uppfyllas då 11 inte är mindre än 11, vilket medför att loopen avslutas. Detta kan illustreras på följande vis:

![for-loop](https://github.com/noitaloiv/pythonFundamentals/assets/10771017/e1dd2aa3-7973-41bf-8d07-d89dd57e574a)

### Syntax för for-loopar
`for`-nyckelordet används tillsammans med nyckelordet `in` enligt:
```python
for variabel in sekvens:
    # kod som ska upprepas
```

Där `sekvens` avser något som innehåller multipla värden, t.ex. som en kollektion av data, ett intervall av heltal eller en sträng. Vi måste med andra ord inte tillämpa `range()`-funktionen för att skriva en korrekt `for-loop`. Exempelvis skulle vi kunna iterera över alla bokstäver i ett ord enligt:
```python
word = "Python"
for letter in word:
  print(letter)
```
<div class="code-example" markdown="1">
P
y
t
h
o
n
</div>

Alla rader som är indenterade efter `for-loopen` representerar den operation/de operationer som tillhör `for-loopen` - d.v.s. den kod som ska utföras om villkoret uppfylls. `for-loopen` och dess operationer avslutas på den rad man slutar indentera koden:
```python
print("Loop starting.") # Tillhör inte loopen, d.v.s. att denna kod kommer att utföras vare sig loopen utförs eller ej.
for n in range(1,6):
  print(n)
  print(n + 3)
  print("Number printed")

print("Loop finished.") # Tillhör inte loopen, d.v.s. att denna kod kommer att utföras vare sig loopen utförs eller ej.
```
<div class="code-example" markdown="1">
Loop starting.
1
4
Number printed
2
5
Number printed
3
6
Number printed
4
7
Number printed
5
8
Number printed
Loop finished.
</div>

### Nästlad iteration för for-loop:ar
Nästlad iteration innefattar att man deklarerar en loop inuti en annan loop. Detta medför att den "inre" loopen kommer att utföras för varje iteration i den "yttre" loopen. Vi kan exempelvis nyttja detta för att formatera utskrifter enligt:
```python
for i in range(4):           # Den yttre loopen hanterar rader
    for j in range(4):       # Den inre loopen hanterar kolumner/innehållet per rad
        print('*', end=' ')  # Skriver ut en * och tillämpar inte radbrytning m.h.a. end
    print()                  # När samtliga *:or har skrivits ut på en rad så tillämpas radbrytning
```
<div class="code-example" markdown="1">
* * * *
* * * *
* * * *
* * * *
</div>

{: .highlight }
`print()` kommer alltid att tillämpa radbrytning som standard. Om man vill frångå detta, d.v.s. om man vill fortsätta skriva mot samma rad, så kan parametern `end` nyttjas för att skriva över standardvärdet - t.ex. med ett `' '` som i ovan exempel.

## while-loopen
En `while-loop` är en alternativ loop till `for-loop` och båda loopar har generellt sett sitt eget användningsområde, även om de till stor del är utbytbara. Precis som `for-loop:en` används ett nyckelord (`while`) följt av ett _villkor_. Skillnaden ter sig i hur villkoret uttrycks. För `for-loop:ar` så ter sig villkoret alltid som en _sekvens_, men för `while-loop:ar` ter sig villkoret istället alltid som ett booleskt uttryck - d.v.s. något som kan evalueras till sant ellet falskt. Villkoret för en `while-loop` avser däremot inte ett "vägval" utan istället hur många _iterationer_ som ska utföras, d.v.s. hur många gånger koden som loopen avser ska utföras. 

Istället för villkoret `x in range(1,11)` - vilket kan översättas till `"SÅ LÄNGE SOM x ÄR INOM INTERVALLET 1-11"` - så skulle vi få något i stil med `number < 11` - vilket kan ersättas till `"SÅ LÄNGE SOM number ÄR MINDRE ÄN 11"`:
```python
number = 1          # Deklarera iterator-variabeln utanför loopen
while number < 11   # Ange nyckelord samt villkor
  print(number)     # Utför operationer
  number += 1       # Ändra värdet på iterator-variabeln
```
Till skillnad mot `for-loop:en` så deklarerar vi alltså iterator-variabeln utanför loopen, anger ett _booleskt uttryck_ som vårt villkor till skillnad mot en _sekvens_ och behöver sedan manuellt hantera värdeökningen/värdeminskningen på iterator-variabeln. Principiellt evalueras således båda typer av loopar på samma sätt, men de har en annorlunda syntax.

{: .highlight }
`number += 1` innefattar i praktiken att vi tar det existerande värdet för variabeln `number` och adderar 1. D.v.s. att vi utför följande operation: `number = number + 1`. Detta är även möjligt att tillämpa för subtraktion (`-=`), division (`/=`) eller multiplikation (`*=`).

### Syntax för while-loopar
`while`-nyckelordet följt av ett villkor används enligt:
```python
while villkor:
    # kod som ska upprepas
```

Där `villkor` avser något som kan evalueras som `true` eller `false`, t.ex. `5 < 10` eller `true`. Exempelvis skulle vi kunna skriva en loop som körs för evigt enligt:
```python
while True:
  print("Hello world!")
```

Vilket inte är möjligt med `for-loop:ar`. Exempelvis kommer följande kod att generera ett felmeddelande vid körning:
```python
for n in True:
  print("Hello world!")
```
<div class="code-example" markdown="1">
TypeError: 'bool' object is not iterable
</div>

Likt `for-loop:ar` så är alla rader som är indenterade efter loopen den operation/de operationer som tillhör `while-loop:en` - d.v.s. den kod som ska utföras om villkoret uppfylls. `while-loop:en` och dess operationer avslutas på den rad man slutar indentera koden:
```python
print("Loop starting.") # Tillhör inte loopen, d.v.s. att denna kod kommer att utföras vare sig loopen utförs eller ej.
n = 1
while n < 6:
  print(n)
  print(n + 3)
  print("Number printed")
  n += 1

print("Loop finished.") # Tillhör inte loopen, d.v.s. att denna kod kommer att utföras vare sig loopen utförs eller ej.
```
<div class="code-example" markdown="1">
Loop starting.
1
4
Number printed
2
5
Number printed
3
6
Number printed
4
7
Number printed
5
8
Number printed
Loop finished.
</div>

### Nästlad iteration för while-loop:ar
Fungerar på samma sätt som för `for-loop:ar`. Exempelvis kan vi formatera utskrifter på samma sätt som tidigare enligt:
```python
i = 1
j = 1
while i < 5:                 # Den yttre loopen hanterar rader
    while j < 5:             # Den inre loopen hanterar kolumner/innehållet per rad
        print('*', end=' ')  # Skriver ut en * och tillämpar inte radbrytning m.h.a. end
        j += 1
    print()                  # När samtliga *:or har skrivits ut på en rad så tillämpas radbrytning
    i += 1
    j = 1                    # "nollställ" j efter varje rad för att kunna köra den inre loop:en.
```
<div class="code-example" markdown="1">
* * * *
* * * *
* * * *
* * * *
</div>

### Nyckelordet break
`break` kan nyttjas för att avbryta en loop i förtid, d.v.s. att vi själva kan styra när vi vill att en loop ska avslutas. Exempelvis kan vi föreställa oss att vi vill iterera över alla heltal från 1 till och med 100, men avbryta iterationen när vi når ett från användaren angivet heltal:
```python
userInput = int(input("Enter a value: "))   
for n in range(1,101):
  if n == userInput:
    break
  print(n)
```
<div class="code-example" markdown="1">

</div>
```markdown
Enter a value: 3
1
2
```

{: .highlight }
Notera att det är full möjligt att tillämpa selektion såväl som nästlad selektion inuti en loop.

### Nyckelordet continue
`continue` kan nyttjas för att avbryta en _iteration_ i förtid, d.v.s. att vi själva kan styra när vi vill en viss iteration av loop:en ska avslutas och istället gå vidare till nästa iteration. Exempelvis enligt:
```python
userInput = int(input("Enter a value: "))   
for n in range(1,101):
  if n == userInput:
    continue
  print(n)
```
<div class="code-example highlight" markdown="1">

</div>
```markdown
Enter a value: 3
1
2
4
5
# Osv.
```

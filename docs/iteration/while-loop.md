---
layout: default
title: "23. while-loop:en"
nav_order: 24
parent: 21. Iteration
---

# `while`-loop:en
En `while-loop` är en alternativ loop till `for-loop` och båda loop:ar har generellt sett sitt eget användningsområde, även om de till stor del är utbytbara. Precis som `for-loop:en` används ett nyckelord (`while`) följt av ett _villkor_. Skillnaden ter sig i hur villkoret uttrycks. För `for-loop:ar` så ter sig villkoret alltid som en _sekvens_, men för `while-loop:ar` ter sig villkoret istället alltid som ett booleskt uttryck - d.v.s. något som kan evalueras till sant ellet falskt. Villkoret för en `while-loop` avser däremot inte ett "vägval" utan istället hur många _iterationer_ som ska utföras, d.v.s. hur många gånger koden som loop:en avser ska utföras. 

Istället för villkoret `x in range(1,11)` - vilket kan översättas till `"SÅ LÄNGE SOM x ÄR INOM INTERVALLET 1-11"` - så skulle vi få något i stil med `number < 11` - vilket kan ersättas till `"SÅ LÄNGE SOM number ÄR MINDRE ÄN 11"`:
```python
number = 1          # Declare the iterator variable outside the loop
while number < 11   # Use the keyword and set a condition
  print(number)     # Execute operation(s)
  number += 1       # Update the value of the iterator variable
```
Till skillnad mot `for-loop:en` så deklarerar vi alltså iterator-variabeln utanför loop:en, anger ett _booleskt uttryck_ som vårt villkor till skillnad mot en _sekvens_ och behöver sedan manuellt hantera värdeökningen/värdeminskningen på iterator-variabeln. Principiellt evalueras således båda typer av loop:ar på samma sätt, men de har en annorlunda syntax.

{: .highlight }
`number += 1` innefattar i praktiken att vi tar det existerande värdet för variabeln `number` och adderar 1. D.v.s. att vi utför följande operation: `number = number + 1`. Detta är även möjligt att tillämpa för subtraktion (`-=`), division (`/=`) eller multiplikation (`*=`).

## Syntax för `while`-loop:ar
`while`-nyckelordet följt av ett villkor används enligt:
```python
while condition:
    # code to be repeated
```

Där `condition` avser något som kan evalueras som `true` eller `false`, t.ex. `5 < 10` eller `true`. Exempelvis skulle vi kunna skriva en loop som körs för evigt enligt:
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
<pre><code>TypeError: 'bool' object is not iterable </code> </pre>
</div>

Likt `for-loop:ar` så är alla rader som är indenterade efter loop:en den operation/de operationer som tillhör `while-loop:en` - d.v.s. den kod som ska utföras om villkoret uppfylls. `while-loop:en` och dess operationer avslutas på den rad man slutar indentera koden:
```python
print("Loop starting.") # Does not belong to the loop and will execute regardless
n = 1
while n < 6:
  print(n)
  print(n + 3)
  print("Number printed")
  n += 1

print("Loop finished.") # Does not belong to the loop and will execute regardless
```
<div class="code-example" markdown="1">
<pre><code>Loop starting.
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
Loop finished. </code> </pre>
</div>

## Vikten av villkorets "uppdatering"
I `while`-loopar är det avgörande att det villkor som kontrollerar loop:ens utförande uppdateras på något sätt inuti loop:en. Detta säkerställer att villkoret så småningom blir falskt och att loop:en inte fortsätter att köra i oändlighet. Uppdateringen kan vara en ökning eller minskning av en variabel, eller en förändring av en boolesk flagga, beroende på programmets logik och behov.
```python
i = 0         # Start value
while i < 5:  # Condition to run the loop
    print(i)
    i += 1    # Update condition by increasing the value of i by 1
```
<div class="code-example" markdown="1">
<pre><code>0
1
2
3
4 </code> </pre>
</div>

Utan `i += 1` i exemplet ovan skulle i alltid vara mindre än 5, vilket skulle leda till en _oändlig loop_.

## Oändliga Loopar
En oändlig loop uppstår när villkoret för att avsluta en `while`-loop aldrig blir falskt. Detta kan ske av misstag om loop:ens villkor inte påverkas som förväntat inuti loop:en. Oändliga loopar kan få program att "hänga sig" eller förbruka onödiga systemresurser, vilket kan leda till prestandaproblem eller att programmet slutar svara.

För att undvika oändliga loopar är det viktigt att noggrant planera loop:ens logik, inklusive alla villkor och hur de påverkas under varje iteration. Att lägga till säkerhetsåtgärder, såsom en övre gräns för antalet iterationer, kan också hjälpa till att förhindra oändliga loopar. Vårt tidigare exempel:
```python
while True:
  print("Hello world!")
```

Skulle därför vara körbart, men resultera i att programmet skrivet ut `Hello world!` i all oändlighet eller tills vi avslutar programmet manuellt.

## Praktiska användningsfall
Så varför skulle du vilja använda en `while`-loop över en `for`-loop om det medför risker för bl.a. oändliga loop:ar? `while`-loop:ar är särskilt användbara i scenarier där antalet iterationer inte är känt i förväg. Några praktiska exempel inkluderar:

* Filläsning: Att läsa från en fil eller ström tills slutet nås: En `while`-loop kan användas för att läsa data tills en EOF-markör (End Of File) eller annan slutmarkör detekteras.
```python
line = file.readline()
while line:
    print(line)
    line = file.readline()
```

* Användarinteraktion: Loop:ar kan användas för att be användaren om input upprepade gånger tills giltig input mottas eller användaren väljer att avsluta.
```python
answer = input("Do you wish to continue? (Y/N): ")
while answer.lower() != "N":
    # Execute an operation
    answer = input("Do you wish to continue? (Y/N): ")
```

* Spelloop:ar: I spel och andra interaktiva applikationer används ofta en `while`-loop för att köra spellogiken tills spelaren väljer att avsluta eller spelet når sitt slut.
```python
keepPlaying = True
while keepPlaying:
    # Execute game logic
    keepPlaying = CheckIfWinner()
```

## Nästlad iteration för `while`-loop:ar
Fungerar på samma sätt som för `for-loop:ar`. Exempelvis kan vi formatera utskrifter på samma sätt som tidigare enligt:
```python
i = 1
j = 1
while i < 5:                 # The outer loop handles rows
    while j < 5:             # The inner loop handles columns/content per row
        print('*', end=' ')  # Prints a * and removes linebreaks using the end attribute
        j += 1
    print()                  # When all * of a row has been printed, linebreak here
    i += 1
    j = 1                    # Reset j to 0 after each row, so that the inner loop can be executed
```
<div class="code-example" markdown="1">
<pre><code>****
****
****
**** </code> </pre>
</div>

# Sammanfattning
`while`-loop:ar är en grundläggande kontrollstruktur i Python som möjliggör upprepning av kodblock så länge ett specifikt villkor är sant. Till skillnad från `for`-loop:ar, som är designade för att iterera över en sekvens eller ett intervall av värden, styrs `while`-loop:ar av ett booleskt villkor. Detta gör `while`-loop:ar idealiska för situationer där antalet iterationer inte nödvändigtvis är känt från början.

Kärnan i en `while`-loop är villkoret som utvärderas före varje iteration. Om villkoret är sant, exekveras kroppen av loop:en. Det är viktigt att något inom loop:en påverkar villkoret, så att loop:en så småningom når ett tillstånd där villkoret inte längre är uppfyllt och loop:en avslutas. Misslyckande med att göra detta kan resultera i oändliga loop:ar, vilket kan frysa eller krascha programmet.

`while`-loop:ar kan också innehålla nästlade loop:ar och använda kontrollsatser som break och continue för att finjustera loop:ens beteende. Genom att förstå och korrekt implementera `while`-loop:ar kan programmerare hantera ett brett utbud av upprepningsscenarier effektivt och koncist, vilket gör deras kod mer flexibel och kraftfull.
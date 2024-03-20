---
layout: default
title: "12. while-loop:en"
nav_order: 13
---

# while-loop:en
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

## Syntax för while-loopar
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
<pre><code>TypeError: 'bool' object is not iterable </code> </pre>
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

## Nästlad iteration för while-loop:ar
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
<pre><code>****
****
****
**** </code> </pre>
</div>
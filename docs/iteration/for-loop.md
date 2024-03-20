---
layout: default
title: "11. for-loop:en"
nav_order: 12
parent: 10. Iteration
---

# for-loop:en
Nyckelordet `for` används för att deklarera en s.k. `for-loop` och följs alltid av ett _villkor_, likt en `if`-sats. Villkoret för en `for-loop` avser däremot inte ett "vägval" utan istället hur många _iterationer_ som ska utföras, d.v.s. hur många gånger koden som loopen avser ska utföras. I det föregående exemplet så nyttjades villkoret `x in range(1,11)` - vilket kan översättas till `"SÅ LÄNGE SOM x ÄR INOM INTERVALLET 1-11"`.

När vi först utför kodraden där `for-loopen` är deklarerad så kommer vi att utvärdera om villkoret uppfylls eller ej. För villkoret i det föregående exemplet så kommer vi med andra ord att kontrollera huruvida 1 är mindre än 11 (1 < 11). Nästa gång kollar vi istället om 2 < 11, osv. När vi avslutningsvis når heltalet 11 så kommer villkoret inte att uppfyllas då 11 inte är mindre än 11, vilket medför att loopen avslutas. Detta kan illustreras på följande vis:

![for-loop](../../assets/images/for-loop2.png){: .styled-image }

## Syntax för for-loopar
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
<pre><code>P
y
t
h
o
n</code> </pre>
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
Loop finished.</code> </pre>
</div>

## Nästlad iteration för for-loop:ar
Nästlad iteration innefattar att man deklarerar en loop inuti en annan loop. Detta medför att den "inre" loopen kommer att utföras för varje iteration i den "yttre" loopen. Vi kan exempelvis nyttja detta för att formatera utskrifter enligt:
```python
for i in range(4):           # Den yttre loopen hanterar rader
    for j in range(4):       # Den inre loopen hanterar kolumner/innehållet per rad
        print('*', end=' ')  # Skriver ut en * och tillämpar inte radbrytning m.h.a. end
    print()                  # När samtliga *:or har skrivits ut på en rad så tillämpas radbrytning
```
<div class="code-example" markdown="1">
<pre><code>* * * *
* * * *
* * * *
* * * * </code> </pre>
</div>

{: .highlight }
`print()` kommer alltid att tillämpa radbrytning som standard. Om man vill frångå detta, d.v.s. om man vill fortsätta skriva mot samma rad, så kan parametern `end` nyttjas för att skriva över standardvärdet - t.ex. med ett `' '` som i ovan exempel.
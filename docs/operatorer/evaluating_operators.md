---
layout: default
title: "8. Jämförande operatorer"
nav_order: 9
---

# Jämföra värden i Python
När man programmerar vill man ofta jämföra två variabler. Det kan exempelvis vara jämförelseoperationer som avgör om ett tal är större eller mindre ett annat tal. När man jämför två variabler får man alltid tillbaka värdet `True`, eller `False`, det vill säga, du får tillbaka om operationen är sann eller falsk.

Vi kan exempelvis enkelt jämföra två variabler med jämförelseoperatorn `>` enligt:
```python
a = 10
b = 5
print(a > b)
```
<div class="code-example" markdown="1">
<pre><code>True</code></pre>
</div>

I detta fall blir utskriften `True`, eftersom det är sant att variabeln `a` har ett högre värde än variabeln `b`.

På samma sätt får vi i detta fall:
```python
a = 10
b = 5
print(b > a)
```
Utskriften `False` eftersom det är falskt påstående.

Vanligtvis utför man jämförelseoperationer i `if`-satser där man vill att någonting ska utföras beroende på huruvida ett uttryck är sant eller falskt. På så sätt kan vi skapa _villkorsstyrd programmering_, så att vissa operationer enbart utförs om vissa krav är uppfyllda. Exempelvis vill vi bara ta emot biljetten för karusellen **OM** gästen är längre än 160cm.

### Vanliga sätt att jämföra variabler
Nedan visas de vanligaste sätten att jämföra två variabler:

| Jämförelse                | Notation | Exempel där A = 5, B = 10 |
| :-: | :-:|:-:
| Mindre än                 | <        | A < B   #true             |
| Större än                 | >        | B > A   #true             |
| Mindre än eller lika med  | <=       | A <= B  #true             |
| Större än eller lika med  | >=       | B >= A  #true             |
| Lika med                  | ==       | A == B  #false            |
| Inte lika med             | !        | A != B  #true             |

Vi får alltså tillbaka `True` eller `False` beroende på om påståendet är sant eller falskt.
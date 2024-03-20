---
layout: default
title: "10. Jämförande operatorer"
nav_order: 11
parent: 9. Operatorer
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
<div class="code-example" markdown="1">
<pre><code>False</code></pre>
</div>

Utskriften blir `False` eftersom det är falskt påstående.

Vanligtvis utför man jämförelseoperationer i `if`-satser där man vill att någonting ska utföras beroende på huruvida ett uttryck är sant eller falskt. På så sätt kan vi skapa _villkorsstyrd programmering_, så att vissa operationer enbart utförs om vissa krav är uppfyllda. Exempelvis vill vi bara ta emot biljetten för karusellen **OM** gästen är längre än 160cm.

## Vanliga sätt att jämföra variabler
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

## Identitetsoperatorer
Python erbjuder två identitetsoperatorer, `is` och `is not`, som används för att jämföra minnesadresserna hos två objekt. Detta är särskilt användbart när du vill avgöra om två variabler pekar på samma objekt i minnet.

```python
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a is b)   
print(a is c)       
```
<div class="code-example" markdown="1">
<pre><code>True
False</code></pre>
</div>

Vår första evaluering kommer att ge oss `True` då `b` och `a` pekar på samma lista. Vår andra evaluering kommer dock att ge `False` då vi har skapat en ny lista. Det spelar således ingen roll om innehållet är detsamma, listorna har lagrats på olika platser i minnet och representerar därför två olika listor. Om detta inte var fallet så skulle vi snabbt stöta på problem eftersom borttagandet av ett element i en lista skulle leda till att vi nu pekar på en helt annan lista eller dylikt.

## Medlemskapsoperatorer
Medlemskapsoperatorer `in` och `not in` används för att testa om en sekvens innehåller (eller inte innehåller) ett angivet objekt. Detta kan användas för att enkelt testa medlemskap i listor, strängar, tupler och andra itererbara objekt.

```python
lista = [1, 2, 3, 4, 5]
element = 3

print(element in lista) 
print(10 not in lista)  
```
<div class="code-example" markdown="1">
<pre><code>True
True</code></pre>
</div>

Båda utskrifter resulterar i `True` då det stämmer att 3 förekommer i listan samt att 10 inte förekommer i listan. Dessa operatorer är mycket värdefulla i de fall vi exempelvis vill söka efter specifika värden eller säkerställa att specifika värden inte förekommer i en sekvens.

# Sammanfattning
I detta avsnitt har vi utforskat olika sätt att jämföra värden i Python, från grundläggande jämförelseoperatorer till identitets- och medlemskapsoperatorer. Genom att använda dessa operatorer kan vi skapa villkor och logik för att styra flödet i våra program baserat på jämförelser av variabler och deras relationer till andra objekt.

Att förstå dessa jämförelsemetoder är avgörande för att skriva effektiv och korrekt Python-kod. Det möjliggör skapandet av mer dynamiska och interaktiva program som kan reagera olika beroende på de data och villkor de ställs inför.
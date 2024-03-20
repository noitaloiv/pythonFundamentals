---
layout: default
title: "8. Strängar"
nav_order: 9
---

# Strängar och operationer
Du kan generellt sett inte utföra matematiska operationer på strängar, även i de fall strängarna ser ut som siffror (t.ex. `"15"`). Detta innefattar att nedan uttryck inte är giltiga:
```python
message = "Heya"
message_two = message + 1
```
<div class="code-example" markdown="1">
<pre><code>TypeError: can only concatenate str (not "int") to str</code></pre>
</div>

Som vi ser från felmeddelandet så reagerar kompilatorn inte på operatorn, `+`, utan på att vi försöker använda den med två olika datatyper (`str` + `int`). Vi tillåts nämligen att använda `+`-operatorn mellan två strängar för att konkatenera dem. Strängkonkatenering innefattar att vi slår ihop två strängar:
```python
message_a = "Heya"
message_b = ", Chris!"
message_c = message_a + message_b
message_d = message_b + message_a

print(message_c)
print(message_d)
```
<div class="code-example" markdown="1">
<pre><code>Heya, Chris!
, Chris!Heya</code></pre>
</div>

Även operatorn `*` kan appliceras på strängar för att duplicera en sträng ett antal gånger. Exempelvis skulle `print("Python"*3)` resultera i utskriften `PythonPythonPython`.

## Komposition
Hittills har vi, till merparten, tittat på de olika beståndsdelarna i ett program (variabler, uttryck och påståenden) isolerat utan att prata om hur man kan kombinerar dem.

En av de mest användbara funktionerna i programmeringsspråk är dess förmåga att ta isolerade, små byggstenar och kombinera dem med andra byggstenar för att på så vis bygga ett omfattande program. Vi har sett några exempel på detta tidigare, exempelvis kombinationen av ett påstående (`print()`) med ett uttryck `(2+2)` enligt formen: `print(2+2)`. Noterbart är att beräkningen kommer att utföras först och att utskriften av summan sker därefter. Detta kan även appliceras med flertalet variabler, uttryck och påståenden i stil med:
```python
price = 20
print("The price for four cups of coffee is:", price*4, "which, with the group discount, comes out to:", price*4 - ((price*4)/100)*15)
```
<div class="code-example" markdown="1">
<pre><code>The price for four cups of coffee is: 80 which, with the group discount, comes out to: 68.0</code></pre>
</div>

### Strängformatering
Det bör dock nämnas att det finns enklare sätt att inkludera uttryck eller variabler i strängar - strängformatering. S.k. `f-strängar` (formatsträngar introducerade i Python 3.6) kan exempelvis nyttjas enligt:
```python
price = 20
print(f"The price for four cups of coffee is: {price*4} which, with the group discount, comes out to: {price*4 - ((price*4)/100)*15}")
```
<div class="code-example" markdown="1">
<pre><code>The price for four cups of coffee is: 80 which, with the group discount, comes out to: 68.0</code></pre>
</div>

## Strängmetoder
Python erbjuder en mängd inbyggda metoder för strängmanipulation som gör det möjligt att utföra vanliga uppgifter som att omvandla till stora eller små bokstäver, söka efter substrängar, ersätta delar av en sträng, dela upp en sträng i en lista baserat på en avgränsare, och mycket mer.
```python
message = "Hello World"
print(message.lower())                       # Converts to lowercase (abc..)
print(message.upper())                       # Converts to uppercase (ABC..)
print(message.replace("World", "there"))     # Replaces a substring (a part of the string)
```
<div class="code-example" markdown="1">
<pre><code>hello world
HELLO WORLD
Hello there</code></pre>
</div>

## Strängar och Unicode
I Python representeras strängar som _Unicode_, vilket är en internationell kodningsstandard som tillåter text och symboler från alla skriftsystem i världen att representeras och bearbetas enhetligt. Detta gör Python särskilt kraftfullt när det gäller att hantera internationella applikationer som behöver stödja flerspråkig text.

Unicode tillhandahåller en unik kodpunkt för varje tecken, oavsett plattform, program eller språk, vilket löser många av de begränsningar som fanns med äldre kodningssystem som ASCII. I Python 3 är strängar (str) kodade i Unicode som standard, vilket gör det enkelt att arbeta med text på ett globalt sätt.
```python
greeting = "Hej världen 🌍, こんにちは, 你好"
print(greeting)
```
<div class="code-example" markdown="1">
<pre><code>Hej världen 🌍, こんにちは, 你好</code></pre>
</div>

Denna universella hantering av text underlättar för utvecklare att skapa program som kan interagera med användare på deras eget språk och representera en rik uppsättning tecken och symboler utan bekymmer om inkonsekventa kodningssystem.

## Escape-sekvenser
_Escape-sekvenser_ i Python används för att representera speciella tecken i strängar, tecken som annars skulle vara svåra eller omöjliga att inkludera direkt. De mest vanliga escape-sekvenserna inkluderar:

* `\n` för nyrad, vilket skapar en ny rad i strängen.
* `\t` för tab, vilket lägger till en tabbavstånd i strängen.
* `\\` för att inkludera en bakåtstreck (`\`) i strängen, eftersom bakåtstreck används för escape-sekvenser.
* `\"` och \' för att inkludera dubbla (`"`) respektive enkla (`'`) citationstecken i en sträng, vilket är användbart när du vill inkludera dessa tecken i en sträng som är omsluten av samma tecken.

Escape-sekvenser gör det möjligt att infoga kontrolltecken och andra icke-skrivbara tecken i strängar, vilket är särskilt användbart för formatering och presentation av text.
```python
text = "This is the first row.\nThis is the second row with a \ttab."
print(text)
```
<div class="code-example" markdown="1">
<pre><code>This is the first row.
This is the second row with a   tab.</code></pre>
</div>

# Sammanfattning
I detta kapitel har vi utforskat de grundläggande och avancerade koncepten kring strängar i Python. Vi har sett hur man kan konkatenera och upprepa strängar med + och * operatorerna, samt en mängd användbara strängmetoder som erbjuder kraftfulla möjligheter för att manipulera och interagera med textdata. Dessutom har vi introducerat strängformatering genom `f-strängar` för enklare och mer läsbar kod när vi vill infoga variabler eller uttryck direkt i våra strängar samt diskuterat _Unicode_ och _escape-sekvenser_ vilket kan nyttjas för att hantera en bred uppsättning av textmanipuleringsbehov.

Strängar är en central del av nästan alla Python-program, och att behärska dessa operationer och metoder är avgörande för att effektivt kunna hantera text. Med dessa kunskaper kan vi skapa mer dynamiska och användarvänliga applikationer som kan hantera en mängd olika textbaserade uppgifter.
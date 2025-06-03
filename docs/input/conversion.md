---
layout: default
title: "11. Typkonvertering"
nav_order: 12
parent: 10. Input och output
---

# Typkonvertering
Det är viktigt att ta i beaktande att all input som ges av `input()` kommer att vara av datatypen `string`. D.v.s. att oavsett om användaren anger `30`, `true`, `2.3` så kommer det att lagras som `"30"`, `"true"` resp. `"2.3"`.

Detta är viktigt att ta i beaktande då vi snabbt kan stöta på felmeddelanden om vi exempelvis försöker utföra en matematisk operation på ett inputvärde:
```python
number1 = 10
number2 = 20
number3 = input("Enter a numerical value: ")
print(number1 + number2 + number3)
```
<div class="code-example" markdown="1">
<pre><code>TypeError: unsupported operand type(s) for +: 'int' and 'str'</code> </pre>
</div>

![Type conversion](../../assets/images/banners/ch11.png){: .styled-image }

Ponera att användaren har angivit `30` i terminalen så kommer detta - som tidigare nämnt - ha lagrats som `"30"`. När vi sedan försöker utföra addition för att summera våra numeriska värden så får vi i praktiken något i stil med: `10 + 20 + "30"`, vilket resulterar i ett felmeddelande då enbart numeriska värden kan summeras.

För att hantera sådana problem så behöver vi _konvertera_ vårt inputvärde från `string` till `int`.

I Python använder man typkonvertering för att konvertera (casta) en datatyp till en annan. Det är exempelvis vanligt att konvertera en `string` till en `int` eller vise versa. Detta kan göras med inbyggda funktioner såsom `int()`, `str()` eller `float()`.

## Konvertera (casta) en datatyp
Problemet med olika datatyper löser man genom att casta (konvertera) en datatyp till en annan. Python har inbyggda funktioner som gör att man direkt konverterar en datatyp till en annan. Några av de vanligaste funktionerna för att konvertera datatyper är:

* `int()`
* `str()`
* `float()`
* `bool()`

Om vi exempelvis skulle vilja konvertera inputvärdet från vårt tidigare exempel till ett numeriskt värde så kan vi uppnå detta på följande vis:
```python
number1 = 10
number2 = 20
number3 = input("Enter a numerical value: ")
print(number1 + number2 + int(number3))
```
<div class="code-example" markdown="1">
<pre><code>30 + whatever numerical value the user enters (if it is numerical, otherwise we'll get a ValueError) </code> </pre>
</div>

Motsvarande operationer går att göra med `str()` som konverterar en variabel till en `string`, eller `float()` som konverterar en variabel till en `float`, osv.

{: .highlight }
Det är viktigt att hålla koll på vilken typ man försöker konvertera samt typen man försöker konverta till. Detta då alla konverteringar inte kommer att kunna genomföras. Exempelvis kommer vi inte kunna konverta `"11.3"` till ett heltal enligt: `int("11.3")` då `11.3` inte är ett heltal (d.v.s. att `float()` hade behövts istället för `int()`). Vi hade istället behövt konvertera från `str` till `float` och från `float` till `int`. Det är således viktigt att hålla koll på vilken datatyp variabeln representerar när man vill utföra konvertering.

# Sammanfattning
I detta avsnitt har vi utforskat hur vi kan hantera input från användaren, som alltid kommer att vara av datatypen `string`, genom att tillämpa typkonvertering. Vi har även pratat om vad man behöver ta i beaktande när konvertering tillämpas, exempelvis att `"2.5"` inte direkt kan översättas till ett heltal då det representerar ett decimaltal. 

Att förstå dessa koncept är avgörande för att hantera input och output i dina applikationer, vilket i sin tur lägger grunden för mer avancerade funktioner och användarinteraktioner i framtiden.
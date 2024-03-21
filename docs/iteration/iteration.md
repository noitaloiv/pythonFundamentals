---
layout: default
title: "17. Iteration"
nav_order: 18
has_children: true
---

# Iteration
Ponera att vi med de byggstenar vi hittills har gått igenom skulle vilja skriva ut alla heltal mellan 1 och 10. Vårt program skulle i sådana fall se ut enligt något i stil med:
```python
print(1)
print(2)
print(3)
# Osv. för resterande heltal
```
{: .highlight }
Detta skulle dock vara något tradigt att som utvecklare skriva och det skulle dessutom vara svårt att underhålla och tolka för andra utvecklare. Säg att vi exempelvis vill skriva ut heltalen 1-100 följt av heltalen 75-1000 och sedan 20-30, vi skulle då ha skrivit minst 1035 rader kod!

Det finns således ett bättre tillvägagångssätt i de fall vi vill upprepa en instruktion eller en sekvens av instruktioner - **Iteration**. Iteration är ett grundläggande koncept inom programmering som möjliggör utförandet av en eller flera instruktioner baserat på ett angivet _villkor_. Likt hur vi tidigare har arbetat med `if`-satser och deras villkor, t.ex. i stil med `"OM 5 > 10, gör X"` så kan vi med iteration påtala att något t.ex. ska upprepas `"SÅLÄNGE SOM x < 10"`.

Vi kan exempelvis skriva om våra multipla `print`-operationer från föregående exempel enligt:
```python
for x in range(1,11):
  print(x)
```
<div class="code-example" markdown="1">
<pre><code>1
2
3
4
5
6
7
8
9
10</code></pre>
</div>

{: .text-center }
Notera gärna att variabelnamnet `x` kan vara vilket giltigt variabelnamn som helst. Exempelvis skulle vi kunna skriva `a`, `iterator` eller något helt annat. Notera även att `range()`-funktionen kan nyttjas för att ange ett specifikt intervall, vilket i detta fall är heltal från 1 till 11. För varje iteration som utförs (d.v.s. efter varje utskrift) så kommer värdet på `x` att öka med 1. Detta tillåter oss att utföra koden som tidigare hade krävt minst 10 rader på enbart 2 rader, vilket ökar läsbarheten i koden enormt.

## Nyckelordet break
`break` kan nyttjas för att avbryta en loop i förtid, d.v.s. att vi själva kan styra när vi vill att en loop ska avslutas. Exempelvis kan vi föreställa oss att vi vill iterera över alla heltal från 1 till och med 100, men avbryta iterationen när vi når ett från användaren angivet heltal:
```python
userInput = int(input("Enter a value: "))   
for n in range(1,101):
  if n == userInput:
    break
  print(n)
```
<div class="code-example" markdown="1">
<pre><code>Enter a value: 3
1
2 </code> </pre>
</div>

{: .highlight }
Notera att det är full möjligt att tillämpa selektion såväl som nästlad selektion inuti en loop.

## Nyckelordet continue
`continue` kan nyttjas för att avbryta en _iteration_ i förtid, d.v.s. att vi själva kan styra när vi vill en viss iteration av loop:en ska avslutas och istället gå vidare till nästa iteration. Exempelvis enligt:
```python
userInput = int(input("Enter a value: "))   
for n in range(1,101):
  if n == userInput:
    continue
  print(n)
```
<div class="code-example" markdown="1">
<pre><code>Enter a value: 3
1
2
4
5
# Osv. </code> </pre>
</div>
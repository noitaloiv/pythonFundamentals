---
layout: default
title: "21. Iteration"
nav_order: 22
has_children: true
---

# Iteration
Ponera att vi med de byggstenar vi hittills har gått igenom skulle vilja skriva ut alla heltal mellan 1 och 10. Vårt program skulle i sådana fall se ut enligt något i stil med:
```python
print(1)
print(2)
print(3)
# And so on for numbers 4-10.
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

## Iteration med olika datatyper
Iteration är inte enbart begränsad till att använda `range()` för att generera en sekvens av tal. Python tillåter iteration över en mängd olika datatyper, inklusive listor, tupler, dictionaries och strängar. Detta gör iteration till ett mycket kraftfullt verktyg för att hantera _kollektioner av data_. Exempelvis skulle vi kunna iterera över innehållet i en lista av strängar på följande vis:
```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```
<div class="code-example" markdown="1">
<pre><code>apple
banana
cherry </code> </pre>
</div>

Eller en sträng (som i sin tur tekniskt sett är en kollektion av tecken) enligt:
```python
name = "Wonka"
for character in name:
    print(character)
```
<div class="code-example" markdown="1">
<pre><code>W
o
n
k
a</code> </pre>
</div>

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

### else med loop:ar
I Python kan `else`-block användas tillsammans med loop:ar, vilket är en unik funktion jämfört med många andra programmeringsspråk. `else`-blocket efter en loop körs endast om loop:en avslutades _normalt_ (utan att träffas av en `break`-sats).
```python
for i in range(3):
    answer = input("Enter a password: ")
    if answer == "secret":
        print("Correct!")
        break
else:
    print("Too many attempts.")
```
<div class="code-example" markdown="1">
<pre><code>Enter a password: hello
Enter a password: world
Enter a password: !
Too many attempts.</code> </pre>
</div>

I detta exempel får användaren tre försök att ange rätt lösenord. Om användaren lyckas inom tre försök, avbryts loop:en med `break` och `else`-blocket exekveras inte. Om användaren misslyckas tre gånger, avslutas loop:en normalt och `else`-blocket körs.

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

# Sammanfattning
I detta avsnitt har vi utforskat grundläggande och avancerade koncept inom iteration, ett kraftfullt verktyg i programmering som möjliggör upprepning av kodblock. Genom att använda `for`-loop:ar kan vi enkelt iterera över sekvenser som siffror, listor, och mer, vilket effektiviserar koden och minskar behovet av upprepning.

Vi har även tittat på viktiga kontrollstrukturer som `break` och `continue`, som erbjuder finjusterad kontroll över loop:ens beteende, antingen genom att avsluta loop:en i förtid eller hoppa över en iteration. Dessutom har vi kortfattat introducerat konceptet av att använda `else` med loop:ar för att utföra ett block av kod när loop:en avslutas normalt.

Genom att förstå och utnyttja dessa iterationstekniker kan utvecklare skriva mer effektiv och läsbar kod som kan hantera upprepade uppgifter med lätthet. Denna kunskap är avgörande för att bygga robusta program som effektivt kan bearbeta och manipulera data.
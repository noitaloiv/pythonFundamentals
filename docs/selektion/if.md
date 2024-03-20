---
layout: default
title: "8. if-satsen"
nav_order: 9
parent: selection
---

# if-satser i Python
`if`-satsen används som nämnt för att avgöra om ett villkor uppfylls eller ej för att sedan leda programmet till en eller flera olika "vägar". Om ett villkor exempelvis är sant (`true`), så vill vi utföra den kod som `if`-satsen omsluter och om villkoret är falskt (`false`) så vill vi istället gå en annan väg i programmet. Det är av denna anledning som vi har kompletterande satser i form av `elif`- och `else`-satser.

Ponera exempelvis att vi i vårt program vill kontrollera huruvida det finns tillräckligt med täckning på ett transaktionskonto för att genomföra ett köp. Vi kan då nyttja en `if`-sats för att utvärdera detta villkor i stil med:
```python
account_credit = 1500
price_of_product = 1200

if account_credit >= price_of_product:
  account_credit = account_credit - price_of_product
  print(account_credit)
  print("Transaction successful")
```
<div class="code-example" markdown="1">
<pre><code>300
Transaction successful</code></pre>
</div>

Där `account_credit` är en variabel som representerar värdet på transaktionskontot och `price_of_product` representerar priset på produkten vi vill köpa. I vårt villkor staterar vi då att täckningen på kontot måste vara större än eller lika med kostnaden på produkten för att köpet ska kunna genomföras.

Om detta villkor inte uppfylls, d.v.s. att villkor utmynnar i värdet `false`, så kommer vi inte genomföra köpet. Varje `if`-sats har med andra ord ett villkor som kan besvaras med `true` eller `false`.

## Syntaxen för if-satser
Man skapar en `if`-sats med syntaxten:
```python
if villkor:
  Operation1
  Operation2
  ...
```

Man deklarerar alltså inledningsvis en `if`-sats med nyckelordet `if` och ett tillhörande villkor. Detta villkor måste vara av en boolesk natur, d.v.s. att det måste vara något som kan evalueras till `true` eller `false`:
```python
if 10: # An unacceptable condition

if 10 > 5: # An acceptable condition

if true: # Another acceptable condition
```
Det är således vanligt förekommande att vi nyttjar jämförande operatorer i kontexten av `if`- och `elif`-satser.

Alla rader som är indenterade efter `if`-satsen representerar sedan den operation/de operationer som tillhör `if`-satsen - d.v.s. den kod som ska utföras om villkoret uppfylls. `if`-satsen och dess operationer avslutas på den rad man slutar indentera koden:
```python
number = input("Enter a value: ")

if int(number) > 5:
  print(number, " is larger than 5") # Kommer enbart att utföras om talet som anges är större än 5
  print("Run the application again to check another number!") # Kommer enbart att utföras om talet som anges är större än 5

print("Run the application to check other numbers!") # Tillhör inte if-satsen, d.v.s. att denna kod kommer att utföras vare sig villkoret för if-satsen är sant eller ej.
```
<div class="code-example" markdown="1">
<pre><code>#If the user enters 10
10 is larger than 5
Run the application again to check another number!

#If the user enters 3
Run the application to check other numbers!</code></pre>
</div>

## if-satser med flera villkor
Det är även möjligt att ha flera villkor på samma gång i en `if`-sats genom att nyttja logiska operatorer (`and` och `or`) och jämförelseoperatorer såsom mindre än, större än, osv (`<`, `>`). 

I Python kan man använda nyckelordet `and` (`&`) för att lägga till ett extra villkor. Detta kommer medföra att `if`-satsen kommer att evaluera båda uttryck och enbart utföra de operationer som `if`-satsen avser om båda villkor är sanna.
```python
number = input("Enter a value: ")
number2 = 16

if int(number) > 5 & number2 < 15:
  print("Success!")
```

Givet att `number2` alltid kommer ha värdet 16 så kommer vi aldrig att kunna utföra den utskrift som `if`-satsen avser. Om vi däremot skulle nyttja operatorn `or` (`|`) så behöver enbart ett villkor uppfyllas.
```python
number = input("Enter a value: ")
number2 = 16

if int(number) > 5 & number2 < 15:
  print("Success!") # Will execute if number > 5
```
<div class="code-example" markdown="1">
<pre><code>#If the user enters 7
Success!</code></pre>
</div>

Det finns ingen övre gräns för hur många villkor du kan lägga till, men som alltid så är det viktigt att ta läsbarhet i beaktande när man skriver kod. Bara för att du kan lägga till ett villkor per heltal mellan 1-100 för att kontrollera att värdet på en variabel är större än 100 så är det sannolikt inte det vettigaste valet.
```python
number = input("Enter a value: ")

if int(number) > 1 & int(number) > 2 & int(number) > 3 & int(number) > 4 & ...:
  print("The number is larger than 100!")

if int(number) > 100:
  print("The number is larger than 100!")
```

## Nästlade if-satser
Nästlade `if`-satser innebär att man placerar en `if`-sats inuti en annan `if`-sats. Detta möjliggör kontroll av flera villkor i en hierarkisk ordning. Exempelvis kan det tänkas vara relevant att kontrollera huruvida en medlem redan har röstat innan vi ger samma medlem tillgång till enkäten.
```python
user_name = input("Enter your username: ")

if not hasVoted(userName):
  voteResult = allowVote(userName)

  if isEligible(voteResult):
    print("Thank you for your vote!")
```
I ovan scenario kontrollerar vi först och främst att en användare inte redan har röstat genom `!hasVoted(userName)` där vårt villkor avser att vi vill ha värdet `false` från funktionen `hasVoted()`. OBS! Detta är inte en inbyggd funktion i Python likt `input()` eller `print()` utan avser istället en _egendefinierad funktion_ vars syfte är att kontrollera om en användare har röstat eller ej.

Om användaren inte har röstat, d.v.s. att funktionen `hasVoted()` skickar tillbaka `false`, så utför vi en annan egendefinierad funktion - `allowVote()` - som i sin tur skickar tillbaka användarens röstning. I den inre `if`-satsen kontrolleras sedan villkoret `isEligible(voteResult)`, som i sin tur är ytterligare en egendefinierad funktion vars syfte är att kontrollera om en röst är legitim eller ej.

Om `isEligible()` skickar tillbaka `true` så vet vi med oss att användaren dels inte har röstat och dels att rösten är legitim. Till skillnad mot tidigare exempel när vi evaluerade två villkor samtidigt så kan vi i detta fall evaluera en förutsättning (huruvida användaren har röstat), utföra en eller flera operationer och sedan avslutningsvis ta emot användarens röstning.

{: .highlight }
**OBS!** Vi kommer att prata mer om egendefinierade funktioner (d.v.s. funktioner som du själv deklarerar och implementerar) i framtida kapitel. Det är således inget du förväntas ha koll på redan i detta skede utan nyttjades enbart i syfte om att exemplifiera relevansen av nästlade `if`-satser.
---
layout: default
title: "8. Selektion"
nav_order: 9
---

# Selektion
I Python är `if`-satsen en så kallad _villkorssats_. Med detta menas att vi placerar ett villkor på en eller flera rader kod och deklarerar att denna kod enbart ska kompileras OM ett specifikt villkor uppfylls.

Vi tillämpas således selektion för att styra logiken i ett program genom att skapa "vägval", exempelvis genom att påstå att vi enbart vill dirigera en medlem på en webbplats till medlemssidan OM det angivna användarnamnet och lösenordet faktiskt finns i vår databas. Detta kapitel går igenom de olika typerna av selektion och förklarar hur man använder dem.

## If-satser i Python
`if`-satsen används som nämnt för att avgöra om ett villkor uppfylls eller ej för att sedan leda programmet till en eller flera olika "vägar". Om ett villkor exempelvis är sant (`true`), så vill vi utföra den kod som `if`-satsen omsluter och om villkoret är falskt (`false`) så vill vi istället gå en annan väg i programmet. Det är av denna anledning som vi har kompletterande satser i form av `elif`- och `else`-satser.

Ponera exempelvis att vi i vårt program vill kontrollera huruvida det finns tillräckligt med täckning på ett transaktionskonto för att genomföra ett köp. Vi kan då nyttja en `if`-sats för att utvärdera detta villkor i stil med:
```python
if accountCredit >= priceOfProduct:
  accountCredit = accountCredit - priceOfProduct
  print("Transaction successful")
```
Där `accountCredit` är en variabel som representerar värdet på transaktionskontot och `priceOfProduct` representerar priset på produkten vi vill köpa. I vårt villkor staterar vi då att täckningen på kontot måste vara större än eller lika med kostnaden på produkten för att köpet ska kunna genomföras.

Om detta villkor inte uppfylls, d.v.s. att villkor utmynnar i värdet `false`, så kommer vi inte genomföra köpet. Varje `if`-sats har med andra ord ett villkor som kan besvaras med `true` eller `false`.

### Syntaxen för if-satser
Man skapar en `if`-sats med syntaxten:
```python
if villkor:
  Operation1
  Operation2
  ...
```

Man deklarerar alltså inledningsvis en `if`-sats med nyckelordet `if` och ett tillhörande villkor. Detta villkor måste vara av en boolesk natur, d.v.s. att det måste vara något som kan evalueras till `true` eller `false`:
```python
if 10: # Ett icke acceptabelt villkor

if 10 > 5: # Ett acceptabelt villkor

if true: # Ett annat acceptabelt villkor
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

### if-satser med flera villkor
Det är även möjligt att ha flera villkor på samma gång i en `if`-sats genom att nyttja logiska operatorer (`and` och `or`) och jämförelseoperatorer såsom mindre än, större än, osv (`<`, `>`). 

I Python kan man använda nyckelordet `and` (`&`) för att lägga till ett extra villkor. Detta kommer medföra att `if`-satsen kommer att evaluera båda uttryck och enbart utföra de operationer som `if`-satsen avser om båda villkor är sanna.
```python
number = input("Enter a value: ")
number2 = 16

if int(number) > 5 & number2 < 15:
  print("Success!") # Oavsett värdet som användaren anger så kommer denna utskrift aldrig ske
```
Givet att `number2` alltid kommer ha värdet 16 så kommer vi aldrig att kunna utföra den utskrift som `if`-satsen avser. Om vi däremot skulle nyttja operatorn `or` (`|`) så behöver enbart ett villkor uppfyllas.
```python
number = input("Enter a value: ")
number2 = 16

if int(number) > 5 & number2 < 15:
  print("Success!") # Kommer att utföras så länge användaren anger ett heltal större än 5
```

Det finns ingen övre gräns för hur många villkor du kan lägga till, men som alltid så är det viktigt att ta läsbarhet i beaktande när man skriver kod. Bara för att du kan lägga till ett villkor per heltal mellan 1-100 för att kontrollera att värdet på en variabel är större än 100 så är det sannolikt inte det vettigaste valet.
```python
number = input("Enter a value: ")

if int(number) > 1 & int(number) > 2 & int(number) > 3 & int(number) > 4 & ...:
  print("The number is larger than 100!")

if int(number) > 100:
  print("The number is larger than 100!")
```

### Nästlade if-satser
Nästlade `if`-satser innebär att man placerar en `if`-sats inuti en annan `if`-sats. Detta möjliggör kontroll av flera villkor i en hierarkisk ordning. Exempelvis kan det tänkas vara relevant att kontrollera huruvida en medlem redan har röstat innan vi ger samma medlem tillgång till enkäten.
```python
if !hasVoted(userName):
  voteResult = allowVote(userName)

  if isEligible(voteResult):
    print("Thank you for your vote!")
```
I ovan scenario kontrollerar vi först och främst att en användare inte redan har röstat genom `!hasVoted(userName)` där vårt villkor avser att vi vill ha värdet `false` från funktionen `hasVoted()`. OBS! Detta är inte en inbyggd funktion i Python likt `input()` eller `print()` utan avser istället en _egendefinierad funktion_ vars syfte är att kontrollera om en användare har röstat eller ej.

Om användaren inte har röstat, d.v.s. att funktionen `hasVoted()` skickar tillbaka `false`, så utför vi en annan egendefinierad funktion - `allowVote()` - som i sin tur skickar tillbaka användarens röstning. I den inre `if`-satsen kontrolleras sedan villkoret `isEligible(voteResult)`, som i sin tur är ytterligare en egendefinierad funktion vars syfte är att kontrollera om en röst är legitim eller ej.

Om `isEligible()` skickar tillbaka `true` så vet vi med oss att användaren dels inte har röstat och dels att rösten är legitim. Till skillnad mot tidigare exempel när vi evaluerade två villkor samtidigt så kan vi i detta fall evaluera en förutsättning (huruvida användaren har röstat), utföra en eller flera operationer och sedan avslutningsvis ta emot användarens röstning.

{: .highlight }
OBS! Vi kommer att prata mer om egendefinierade funktioner (d.v.s. funktioner som du själv definierar) i framtida kapitel. Det är således inget du förväntas ha koll på redan i detta skede utan nyttjades enbart i syfte om att exemplifiera relevansen av nästlade `if`-satser.

## Else-satser
En `else`-sats i Python är ett valfritt tillägg som man använder när man vill att programmet ska utföra en operation i det fall när villkoret i en `if`-sats **inte** uppfylls. D.v.s. vilken kod som ANNARS ska utföras i de fall ett eller flera villkor inte uppfylls.

Låt oss återgå till vårt tidigare exempel avseende transaktionskontot och produktköpet. Säg nu att vi vill kunna informera kunden om att transaktionen misslyckades. Vi kan lägga till en `print()` efter `if`-satsen i stil med:
```python
if accountCredit >= priceOfProduct:
  accountCredit = accountCredit - priceOfProduct
  print("Transaction successful")

print("Transaction failed.")
```

Men detta medför att vi i de fall transaktionen lyckas kommer få följande utskrifter:
```python
"Transaction successful"
"Transaction failed."
```
Vilket kan tänkas vara missvisande för kunden. Vi kan därför istället nyttja en `else`-sats för att tala om för vårt program vad som ska hända i de fall transaktionen misslyckas:
```python
if accountCredit >= priceOfProduct:
  accountCredit = accountCredit - priceOfProduct
  print("Transaction successful")

else:
  print("Transaction failed.")
```
`"Transaction failed."` kommer nu enbart att skrivas ut i de fall villkoret för vår `if`-sats ger `false` - d.v.s. i de fall transaktionen misslyckas.

### Syntaxen för else-satser
En `else`-sats kan inledningsvis bara existera om det finns en tillhörande `if`-sats. Det är med andra ord inte möjligt att erbjuda ett alternativt vägval om det inte redan finns vägval. 

Syntaxen för en `else`-sats påminner om syntaxen för en `if`-sats, med undantaget att vi inte anger något villkor:
```python
if villkor:
  Operation1
  Operation2
  ...
else:
  Operation1
  Operation2
  ...
```

Då en `else`-sats representerar vad som ska ske om ett villkor inte uppfylls så behövs helt enkelt inga egna villkor. Likt `if`-satser så tillhör samtliga operationer som är indenterade under `else`-satsen det vägvalet. Notera gärna även att `else`-satser anges på samma _hierarkiska nivå_ som den tillhörande `if`-satsen. En `else`-sats anges dessutom alltid EFTER en `if`-sats.
```python
else:       # Icke acceptabel syntax då else är placerat innan if
if 10 > 5: 

if 10 > 5:   # Acceptabel syntax
  Operation1
else
  Operation2

else:        # Icke acceptabel syntax då vi saknar en if
```
Avslutningsvis så är det heller inte möjligt att nästla `else`-satser.

{: .highlight }
Notera: En `else`-sats representerar ett **ANNARS**-fall i vårt program, d.v.s. det som ska ske om inget villkor uppfylls. Det är således omöjligt att nästla `else`-satser eller ange dem utan tillhörande `if`-satser.

## Elif-satser
En `elif`-sats i Python är ett valfritt tillägg som man använder när man vill att programmet ska utföra en operation i det fall när villkoret i en `if`-sats **inte** uppfylls, likt en `else`-sats. D.v.s. vilken kod som ANNARS ska utföras i de fall ett eller flera villkor inte uppfylls.

Skillnaden mot en `else`-sats är vi att vi med `elif`-satser kan ange _alternativa_ villkor.

Låt oss återigen utgå från vårt tidigare exempel avseende transaktionskontot och produktköpet:
```python
if accountCredit >= priceOfProduct:
  accountCredit = accountCredit - priceOfProduct
  print("Transaction successful")

else:
  print("Transaction failed.")
```

Ponera nu att vi vill erbjuda en rabatt om en viss procentsats beroende på olika prisnivåer, t.ex. ska 5% dras av från kostnaden om priset är över 500kr, 10% vid 1000kr osv. upp till och med 30%. Vi kan då uppnå detta i stil med:
```python
if accountCredit >= priceOfProduct:
  discount = 0

  if priceOfProduct > 500 & priceOfProduct <= 1000:
    discount = 0.05
    
  elif priceOfProduct > 1000 & priceOfProduct <= 1500:
    discount = 0.10

  # Osv. för resterande prisnivåer

  accountCredit = accountCredit - (priceOfProduct - (priceOfProduct * discount))
  print("Transaction successful")

else:
  print("Transaction failed.")
```

Vi kontrollerar fortfarande initialt att vi har täckning på kontot för att utföra transaktionen. Om så är fallet så lägger vi senda till en variabel som avser rabatten, `discount`, och ger den det initiala värdet 0. Vi kontrollerar sedan huruvida `priceOfProduct` förhåller sig till en prisnivå och tilldelar ett nytt värde till `discount` beroende vilken prisnivå det gäller. `(priceOfProduct - (priceOfProduct * discount))` kommer att fungera vare sig en prisnivå har uppfyllts eller ej då vi antingen subtraherar 0 eller ett specifikt belopp från produktpriset. 

### Syntaxen för elif-satser
En `elif`-sats kan inledningsvis bara existera om det finns en tillhörande `if`-sats. Det är med andra ord inte möjligt att erbjuda ett alternativt vägval om det inte redan finns vägval. 

Syntaxen för en `elif`-sats påminner om syntaxen för `if`-satser:
```python
if villkorA:
  Operation1
  Operation2
  ...
elif villkorB:
  Operation1
  Operation2
  ...
```

En `elif`-sats representerar vad som ska ske om ett specifikt villkor inte uppfylls och vi vill kunna erbjuda alternativa vägval. Likt `if`-satser så tillhör samtliga operationer som är indenterade under `elif`-satsen det vägvalet. Notera gärna även att `elif`-satser anges på samma _hierarkiska nivå_ som den tillhörande `if`-satsen. En `elif`-sats anges dessutom alltid EFTER en `if`-sats.
```python
elif 5 > 3:   # Icke acceptabel syntax då elif är placerat innan if
if 10 > 5: 

if 10 > 5:    # Acceptabel syntax
  Operation1
elif 5 > 3:
  Operation2

elif 5 > 3:   # Icke acceptabel syntax då vi saknar en if
```
Notera att både `elif`- och `else`-satser är frivilliga tillägg till en `if`-sats. D.v.s. att vi kan ha enbart en `if`-sats, en `if`-sats med en `elif`-sats _utan_ en `else`-sats, en `if`-sats med en `else`-sats _utan_ en `elif`-sats, osv.

{: .highlight }
Notera: En `elif`-sats representerar ett **ANNARS OM**-fall i vårt program, d.v.s. det som ska utvärderas om ett specifikt villkor inte uppfylls. Det är således omöjligt att ange dem utan tillhörande `if`-satser.

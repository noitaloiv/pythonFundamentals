---
layout: default
title: "8. else-satsen"
nav_order: 9
parent: 8. Selektion
---

# else-satser
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

## Syntaxen för else-satser
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
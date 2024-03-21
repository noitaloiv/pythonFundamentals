---
layout: default
title: "15. elif-satsen"
nav_order: 16
parent: 12. Selektion
---

# elif-satser
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

## Syntaxen för elif-satser
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
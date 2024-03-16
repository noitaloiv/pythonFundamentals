---
layout: default
title: "9. Switch-sats"
---

# Switch-satsen
I Python är en `switch`-sats en annan typ av _villkorssats_. Dessa fungerar på så vis att vi tar emot ett input-värde och utvärderar vilket "fall" som matchar denna input. Där vi har en matchning kan vi sedan lägga till relevant kod som ska utföras, likt hur `if`-satser och deras villkor fungerar.

Även `switch`-satser nyttjas därför för att styra logiken i ett program genom att skapa vägval.

## Switch-satser i Python
`switch`-satser introducerades i Python 10.0 och används genom nyckelorden `match` resp. `case` för att matcha ett värde mot eller flera "fall", vilka i sin tur agerar olika "vägar" i programmet. Om input exempelvis är `Addition` så kan vi etablera ett "fall" för `Addition` där vi sedan kan utföra addition mellan två heltal. Nästa gång applikationen körs så kanske input istället är `Subtraktion` och då utför vi istället subtraktion, osv.

Ponera exempelvis att vi har skrivit en miniräknare och vi vill att användaren inledningsvis ska få välja vilken operation som ska genomföras:
```python
choice = input("Choose operation (Addition or Subtraction): ")
number1 = int(input("Enter the first value: "))
number2 = int(input("Enter the second value: "))

match choice:
  case "Addition":
    print(number1 + number2)
  case "Subtraction":
    print(number1 - number2)
  case _:
    print("You must choose between 'Addition' and 'Subtraction'. Try again!")
```

{: .highlight }
Notera: `case _:` avser ett "default" fall, d.v.s. vad som ska ske i de fall det inte finns något matchande case. Det fungerar med andra ord på samma sätt som en `else`-sats i den bemärkelsen. Notera gärna även att `int()` behövs för att konvertera värdena vi läser in från användaren till heltal, annars kommer vi inte att kunna utföra någon matematisk operation.

Vi hade givetvis kunnat uppnå samma struktur genom att arbeta med `if`-satser, t.ex. enligt:
```python
choice = input("Choose operation (Addition or Subtraction): ")
number1 = int(input("Enter the first value: "))
number2 = int(input("Enter the second value: "))

if choice == "Addition":
    print(number1 + number2)
elif choice == "Subtraction":
    print(number1 - number2)
else:
    print("You must choose between 'Addition' and 'Subtraction'. Try again!")
```

Så när vill man nyttja den ena syntaxen över den andra? Svaret är att det i de allra flesta fall inte spelar någon roll, d.v.s. att det är personlig preferens som får styra. Det finns vissa argument för att en `switch`-sats är snabbare än multipla `if`-satser, men skillnaden är oftast minimal. En generell utgångspunkt kan dock tänkas vara att nyttja en `switch`-sats i de fall vi behöver utvärdera fler än 5 påståenden då läsbarheten i koden argumenterbart är högre.

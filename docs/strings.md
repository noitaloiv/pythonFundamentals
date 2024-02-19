---
layout: default
title: "6. Strängar"
---

# Operationer på strängar
Du kan generellt sett inte utföra matematiska operationer på strängar, även i de fall strängarna ser ut som siffror (t.ex. `"15"`). Detta innefattar att nedan uttryck inte är giltiga:
```python
# Exempel 1
message = "Heya"
message_two = message + 1
# will generate: TypeError: can only concatenate str (not "int") to str 
```

Som vi ser från felmeddelandet så reagerar kompilatorn inte på operatorn, `+`, utan på att vi försöker använda den med två olika datatyper (`str` + `int`). Vi tillåts nämligen att använda `+`-operatorn mellan två strängar för att konkatenera dem. Strängkonkatenering innefattar att vi slår ihop två strängar:
```python
# Exempel 2
message_a = "Heya"
message_b = ", Chris!"
message_c = message_a + message_b
message_d = message_b + message_a
print(message_c)
# will print: Heya, Chris!
print(message_d)
# will print: , Chris!Heya
```

Även operatorn `*` kan appliceras på strängar för att duplicera en sträng ett antal gånger. Exempelvis skulle `print("Python"*3)` resultera i utskriften `PythonPythonPython`.

# Komposition

Hittills har vi, till merparten, tittat på de olika beståndsdelarna i ett program (variabler, uttryck och påståenden) isolerat utan att prata om hur man kan kombinerar dem.

En av de mest användbara funktionerna i programmeringsspråk är dess förmåga att ta isolerade, små byggstenar och kombinera dem med andra byggstenar för att på så vis bygga ett omfattande program. Vi har sett några exempel på detta tidigare, exempelvis kombinationen av ett påstående (`print()`) med ett uttryck `(2+2)` enligt formen: `print(2+2)`. Noterbart är att beräkningen kommer att utföras först och att utskriften av summan sker därefter. Detta kan även appliceras med flertalet variabler, uttryck och påståenden i stil med:
```python
# Exempel 1
price = 20
print("The price for four cups of coffee is:", price*4, "which, with the group discount, comes out to:", price*4 - ((price*4)/100)*15)
# will print: The price for four cups of coffee is: 80 which, with the group discount, comes out to: 68.0
```

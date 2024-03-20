---
layout: default
title: "9. Logiska operatorer"
nav_order: 10
parent: operators
---

# Logiska operatorer i Python
Det finns även logiska operatorer i Python. Med dessa kan vi avgöra om flera påstående är sanna eller falska samtidigt.

| Operator  | Syntax          | Exempel där A = 5, B = 10     |
| :-:| :-:|:-:
| OCH       | `and` alt. `&`  | A == 10 & B == 10     #false  |
| ELLER     | `or` alt. \|    | A > 1 | B == 20       #true   |
| INTE      | `not` alt. `!`  | A > 5 and not B == 5  #true   |

## Lika-med-operatorn
Sant om det vänstra **och** högra uttrycket är likadant.

Lika-med-operatorn avgör om två variabler är lika med varandra. Lika-med-operatorn anger man med dubbla “lika-med-tecken” (`==`).
```python
# Exempel 1
number1 = 3
number2 = 4
print(number1 == number2)

string1 = "true"
bool1 = true
print (string1 == bool1)
```
I detta fall blir den första utskriften `false`, eftersom `number1` och `number2` inte har samma värde. Även den andra utskriften kommer att resulter i `false` då `string1` är av datatypen `string` och `bool1` är av datatypen `bool` - d.v.s. att de inte är likvärdiga.

```python
#Exempel 2
bool1 = true
number1 = 1
print(a == b)
```
Här blir utskriften `true` eftersom `1` kan tolkas som det booleska värdet `true` i Python. På samma vis kan vi nyttja `0` för att indikera `false`, och vice versa.

## Inte-lika-med-operatorn
Sant om det vänstra uttrycket **inte** är detsamma som det högra uttrycket.

Inte-lika-med-operatorn (`!=`) avgör om två variabler eller uttryck inte är likadana.
```python
#Exempel 3
number1 = 5
number2 = 6
print(number1 != number2)
```
Ovanstående kod ger `true` eftersom variablen `number1` inte är lika med variablen `number2`.

## AND och OR-operatorerna
`AND`-operatorn nyttjas för att undersöka om **båda** uttryck är sanna medan `OR`-operatorn nyttjas för att undsöka om det vänstra uttrycket **eller** det högra uttrycket är sant. Resp. operator nyttjas med andra ord i de fall man vill undersöka två _logiska uttryck_.

```python
#Exempel 4
bool1 = true
bool2 = true
print(bool1 and bool2) # Alt. print(bool1 & bool2)
```
Utskriften blir `true` då både `bool1` och `bool2` har värdet `true`. Om `bool1` eller `bool2` hade haft värdet `false` så hade resultatet dock blivit `false`. 

```python
#Exempel 5
bool1 = true
bool2 = false
print(bool1 or bool2) # Alt. print(bool1 | bool2)
```
Utskriften blir `true` trots att `bool2` har värdet `false` då `bool1` har värdet `true`. Om `bool1` samt `bool2` båda haft värdet `false` så hade resultatet dock blivit `false`. 

## Inte-operatorn
Utvinner det inverterade värdet hos en variabel eller ett uttryck, d.v.s. att vi vill identifiera motsatsen till ett _booleskt uttryck_. Med det sistnämnda menar vi på att operatorn nyttjas för att invertera ett `true`-värde till ett `false`-värde eller vice versa. Vi kan inte nyttja det för att identifiera ett inverterat värde till heltalet `10` eller dylikt.
```python
#Exempel 6
bool1 = false
print(not bool1) # Alt. print(!bool1)
```
Utskriften blir `true`, eftersom värdet i `bool1` är `false` - d.v.s. att vi får tillbaka det inverterade värdet på variabeln.

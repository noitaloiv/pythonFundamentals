---
layout: default
title: "13. Logiska operatorer"
nav_order: 14
parent: 11. Operatorer
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
number1 = 15
number2 = 42
print(number1 == number2)

string1 = "true"
bool1 = True
print (string1 == bool1)
```
<div class="code-example" markdown="1">
<pre><code>False
False</code></pre>
</div>

I detta fall blir den första utskriften `False`, eftersom `number1` och `number2` inte har samma värde. Även den andra utskriften kommer att resultera i `False` då `string1` är av datatypen `string` och `bool1` är av datatypen `bool` - d.v.s. att de inte är likvärdiga.

```python
bool1 = True
number1 = 1
print(a == b)
```
<div class="code-example" markdown="1">
<pre><code>True</code></pre>
</div>

Här blir utskriften `True` då `1` kan tolkas som det booleska värdet `True` i Python. `0` kan således också nyttjas för att indikera `False`.

## Inte-lika-med-operatorn
Sant om det vänstra uttrycket **inte** är detsamma som det högra uttrycket.

Inte-lika-med-operatorn (`!=`) avgör om två variabler eller uttryck inte är likadana.
```python
number1 = 5
number2 = 6
print(number1 != number2)
```
<div class="code-example" markdown="1">
<pre><code>True</code></pre>
</div>

Ovanstående kod ger `True` eftersom variablen `number1` **inte** är lika med variablen `number2`.

## AND och OR-operatorerna
`AND`-operatorn nyttjas för att undersöka om **båda** uttryck är sanna medan `OR`-operatorn nyttjas för att undsöka om det vänstra uttrycket **eller** det högra uttrycket är sant. Resp. operator nyttjas med andra ord i de fall man vill undersöka två _logiska uttryck_.

```python
bool1 = True
bool2 = True
print(bool1 and bool2) # Alt. print(bool1 & bool2)
```
<div class="code-example" markdown="1">
<pre><code>True</code></pre>
</div>

Utskriften blir `True` då både `bool1` och `bool2` har värdet `True`. Om `bool1` eller `bool2` hade haft värdet `False` så hade resultatet alltså blivit `False`. 

```python
bool1 = True
bool2 = False
print(bool1 or bool2) # Alt. print(bool1 | bool2)
```
<div class="code-example" markdown="1">
<pre><code>True</code></pre>
</div>

Utskriften blir `True` trots att `bool2` har värdet `False` då `bool1` har värdet `True`. Om `bool1` samt `bool2` båda haft värdet `False` så hade resultatet alltså blivit `False`. 

## Inte-operatorn
Utvinner det inverterade värdet hos en variabel eller ett uttryck, d.v.s. att vi vill identifiera motsatsen till ett _booleskt uttryck_. Med det sistnämnda menar vi på att operatorn nyttjas för att invertera ett `true`-värde till ett `false`-värde eller vice versa. Vi kan inte nyttja det för att identifiera ett inverterat värde till heltalet `10` eller dylikt.
```python
bool1 = False
print(not bool1) # Alt. print(!bool1)
```
<div class="code-example" markdown="1">
<pre><code>True</code></pre>
</div>

Utskriften blir `True`, eftersom värdet i `bool1` är `False` - d.v.s. att vi får tillbaka det inverterade värdet på variabeln.

## Kortslutning
Notera att Python inte utvärderar det andra uttrycket i ett `and`- eller `or`-uttryck om det inte är nödvändigt. Detta kan påverka programflödet i vår applikation och det är således något vi behöver ta i beaktande. Nedan exemplifieras kortslutning:

```python
a = False
b = print("Hello world!")
a and b
```
Ingen utskrift kommer att ske då vi först utvärderar `a` och för att vi har använt en `and`-operator. Givet att det första påståendet är falskt så kommer vi alltså inte ens att utvärdera b. Detta kan även tänkas ha implikationer vid användandet av en `or`-operator där ordningen på argumenten kommer att spela roll.

# Sammanfattning
I detta avsnitt har vi utforskat de logiska operatorerna i Python, som spelar en avgörande roll i att bygga villkorslogik och kontrollstrukturer i programmering. Dessa operatorer, `and`, `or`, och `not`, låter oss kombinera, jämföra och invertera Booleska uttryck för att skapa mer komplexa villkor. Vi har även sett hur jämförelseoperatorerna `==` och `!=` används för att jämföra värden, och hur detta kan integreras i logiska uttryck för att göra precisa och meningsfulla beslut i kod.

Kortslutning, som är ett viktigt beteende hos `and` och `or`, optimerar hur uttryck utvärderas genom att inte evaluera mer än nödvändigt, vilket kan påverka programflödet och prestandan. Förståelse för dessa koncept är avgörande för att skriva effektiv och pålitlig kod i Python.
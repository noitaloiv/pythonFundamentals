---
layout: default
title: "15. Logiska operatorer"
nav_order: 16
parent: 13. Operatorer
---

# Logiska operatorer i Python
Det finns även logiska operatorer i Python. Med dessa kan vi avgöra om flera påstående är sanna eller falska samtidigt.

| Operator  | Syntax | Exempel där A = 5, B = 10 | Resultat |
| :-: | :-:|:-:|:-:
| OCH       | `and`   | A == 10 and B == 10       | False     |
| ELLER     | `or` |    A > 1 or B == 20         | True | 
| INTE      | `not`  | A > 5 and not B == 5     | True |

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
Utvinner det inverterade värdet hos en variabel eller ett uttryck, d.v.s. att vi vill identifiera motsatsen till ett _booleskt uttryck_. Med det sistnämnda menar vi på att operatorn nyttjas för att invertera ett `True`-värde till ett `False`-värde eller vice versa. Vi kan inte nyttja det för att identifiera ett inverterat värde till heltalet `10` eller dylikt.
```python
bool1 = False
print(not bool1) 
```
<div class="code-example" markdown="1">
<pre><code>True</code></pre>
</div>

Utskriften blir `True`, eftersom värdet i `bool1` är `False` - d.v.s. att vi får tillbaka det inverterade värdet på variabeln.

## Skillnaden mellan logiska operatorer och bitvisa operatorer
I Python finns det både _logiska operatorer_ och s.k. _bitvisa (bit-wise) operatorer_. Dessa två typer av operatorer används i olika sammanhang och har olika beteenden.

### Logiska operatorer
Logiska operatorer används för att kombinera Booleska uttryck (sant eller falskt). De vanligaste logiska operatorerna är `and`, `or`, och `not` som kan nyttjas exempelvis enligt:
```python
bool1 = True
bool2 = False
print(bool1 and bool2)  
print(bool1 or bool2)   
print(not bool2)        
```
<div class="code-example" markdown="1">
<pre><code>False
True
True</code></pre>
</div>

### Bitvisa operatorer
Bitvisa operatorer, å andra sidan, utför operationer på _bitnivå_ mellan två heltal. De vanligaste bitvisa operatorerna är `&` (AND), `|` (OR), och `^` (XOR).

* `&`: <br>
Utför en _AND_-operation på varje _par av bitar_ (båda delar exempelvis kan vara en variabel som lagrar ett heltal eller dylikt). En bit i resultatet är 1 (`True`) endast om båda motsvarande bitar är 1.

* `|`: <br>
Utför istället en _OR_-operation på varje _par av bitar_. En bit i resultatet är 1 (`True`) om minst en av de motsvarande bitarna är 1.

* `~`: <br>
Utför avslutningsvis en _NOT_-operation på varje _par av bitar_. D.v.s. att alla bitar i ett heltal inverteras (1 blir 0 och 0 blir 1).

Desas kan exempelvis nyttjas enligt:
```python
# A 6 in the decimal system equates 110 in the binary system  
num1 = 6
# A 3 in the decimal system equates 011 in the binary system   
num2 = 3  

print(num1 & num2)  
print(num1 | num2)  
print(~num2)       
```
<div class="code-example" markdown="1">
<pre><code>2
7
-4</code></pre>
</div>

### Booleska värden med ``&`` och `and` operatorerna
`&`-operatorn och `and`-operatorn med andra ord fundamentalt olika operationer, men det finns undantagsfall där dessa kan vara utbytbara - när vi arbetar med booleska värden.

Detta då `True` kan evalueras till `1` och `False` kan evalueras till `0`. Exempelvis får vi samma resultat i nedan exempel:
```python
bool1 = True
bool2 = False

# Using logical AND
result_logical = bool1 and bool2  

# Using bitwise AND
result_bitwise = bool1 & bool2  

print("Logical AND result:", result_logical)  
print("Bitwise AND result:", result_bitwise)        
```
<div class="code-example" markdown="1">
<pre><code>False
False</code></pre>
</div>

`bool1` och `bool2` evalueras i detta fall till `False` med `and`-operatorn då `bool1` har värdet `True` men `bool2` har värdet `False`. Detsamma gäller för den bitvisa operatorn ``&`` där `bool1` evalueras till `1` och `bool2` evalueras till `False`.

{: .highlight }
Bitvisa operatorer nyttjas primärt i de fall vi behöver göra bitvisa beräkningar på tal och är således inte lika vanligt förekommande som logiska operatorer. Du kommer med största sannolikhet inte att behöva arbeta med bitvisa operatorer förrän långt in på programmeringsresan, men du kommer implicit och explicit att stöta på logiska operatorer i kontexten av utvärderingar och formulering av villkor.


## Kortslutning
Notera att Python inte utvärderar det andra uttrycket i ett `and`- eller `or`-uttryck om det inte är nödvändigt. Detta kan påverka programflödet i vår applikation och det är således något vi behöver ta i beaktande. Nedan exemplifieras kortslutning:

```python
a = False
b = print("Hello world!")
a and b
```
Ingen utskrift kommer att ske då vi först utvärderar `a` och för att vi har använt en `and`-operator. Givet att det första påståendet är falskt så kommer vi alltså inte ens att utvärdera b. Detta kan även tänkas ha implikationer vid användandet av en `or`-operator där ordningen på argumenten kommer att spela roll.

# Sammanfattning
I detta avsnitt har vi utforskat de logiska operatorerna i Python, som spelar en avgörande roll i att bygga villkorslogik och kontrollstrukturer i programmering. Dessa operatorer - `and`, `or` och `not` - låter oss kombinera, jämföra och invertera Booleska uttryck för att skapa mer komplexa villkor. Vi har även sett hur jämförelseoperatorerna `==` och `!=` används för att jämföra värden, och hur detta kan integreras i logiska uttryck för att göra precisa och meningsfulla beslut i kod.

Kortslutning, som är ett viktigt beteende hos `and` och `or`, optimerar hur uttryck utvärderas genom att inte evaluera mer än nödvändigt, vilket kan påverka programflödet och prestandan. Förståelse för dessa koncept är avgörande för att skriva effektiv och pålitlig kod i Python.
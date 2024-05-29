---
layout: default
title: "8. Strängar"
nav_order: 9
has_children: true
---

# Strängar och operationer
Du kan generellt sett inte utföra matematiska operationer på strängar, även i de fall strängarna ser ut som siffror (t.ex. `"15"`). Detta innefattar att nedan uttryck inte är giltiga:
```python
message = "Heya"
message_two = message + 1
```
<div class="code-example" markdown="1">
<pre><code>TypeError: can only concatenate str (not "int") to str</code></pre>
</div>

Som vi ser från felmeddelandet så reagerar kompilatorn inte på operatorn, `+`, utan på att vi försöker använda den med två olika datatyper (`str` + `int`). Vi tillåts nämligen att använda `+`-operatorn mellan två strängar för att konkatenera dem. Strängkonkatenering innefattar att vi slår ihop två strängar:
```python
message_a = "Heya"
message_b = ", Chris!"
message_c = message_a + message_b
message_d = message_b + message_a

print(message_c)
print(message_d)
```
<div class="code-example" markdown="1">
<pre><code>Heya, Chris!
, Chris!Heya</code></pre>
</div>

Även operatorn `*` kan appliceras på strängar för att duplicera en sträng ett antal gånger. Exempelvis skulle `print("Python"*3)` resultera i utskriften `PythonPythonPython`.

## Komposition
Hittills har vi, till merparten, tittat på de olika beståndsdelarna i ett program (variabler, uttryck och påståenden) isolerat utan att prata om hur man kan kombinerar dem, vilket kallas för _komposition_.

En av de mest användbara funktionerna i programmeringsspråk är dess förmåga att ta isolerade, små byggstenar och kombinera dem med andra byggstenar för att på så vis bygga ett omfattande program. Vi har sett några exempel på detta tidigare, exempelvis kombinationen av ett påstående (`print()`) med ett uttryck `(2+2)` enligt formen: `print(2+2)`. Noterbart är att beräkningen i detta fall kommer att utföras först och att utskriften av summan sker därefter. Dett kan även appliceras med flertalet variabler, uttryck och påståenden i stil med:
```python
price = 20
print("The price for four cups of coffee is:", price*4, "which, with the group discount, comes out to:", price*4 - ((price*4)/100)*15)
```
<div class="code-example" markdown="1">
<pre><code>The price for four cups of coffee is: 80 which, with the group discount, comes out to: 68.0</code></pre>
</div>

## Strängmetoder
Python erbjuder en mängd inbyggda metoder för strängmanipulation som gör det möjligt att utföra vanligt förekommande uppgifter såsom att omvandla strängen till stora (`upper()`) eller små (`lower()`) bokstäver, eliminera whitespace (`strip()`), ersätta delar av en sträng (`replace()`), dela upp en sträng i en lista baserat på en avgränsare (`split()`), kombinera flera strängar i en lista till en enda sträng (`join()`) och många fler.

- `upper()` och `lower()` kan nyttjas för att ersätta samtliga bokstäver i en sträng med dess motsvarande versal respektive gemen.
   ```python
   message = "Hello World"
   print(message.lower())                      
   print(message.upper())                       
   ```
   <div class="code-example" markdown="1">
   <pre><code>hello world
   HELLO WORLD
   </code></pre>
   </div>

* `strip()` och dess varianter `lstrip()` och `rstrip()` kan användas för att ta bort whitespace från början eller slutet av en sträng.
   ```python
   message = "   Hello   "
   print(message.strip(), "World")                       
   print(message.lstrip(), "World")  
   print(message.rstrip(), "World")                    
   ```
   <div class="code-example" markdown="1">
   <pre><code>Hello World
   Hello    World
      Hello World</code></pre>
   </div>

* `replace()` kan nyttjas för att ersätta en delsträng med en annan i en sträng.
   ```python
   message = "Hello World"
   print(message.replace("World", "there"))                         
   ```
   <div class="code-example" markdown="1">
   <pre><code>Hello there</code></pre>
   </div>

* `split()` kan nyttjas för att dela upp en sträng i en lista av flera strängar baserat på ett angivet separator-tecken. 
   ```python
   text = "apple,banana,cherry"
   print(text.split(","))          # Will split the string on ','                  
   ```
   <div class="code-example" markdown="1">
   <pre><code>['apple', 'banana', 'cherry']</code></pre>
   </div>

* `join()` kan nyttjas för att istället sammanfoga elementen i en lista till en enda sträng, separerade med ett angivet separator-tecken.
   ```python
   words = ["Python", "is", "awesome"]
   print(" ".join(words))          # Will join with ' '               
   ```
   <div class="code-example" markdown="1">
   <pre><code>Python is awesome</code></pre>
   </div>

# Sammanfattning
I detta kapitel har vi utforskat de grundläggande och avancerade koncepten kring strängar i Python. Vi har sett hur man kan konkatenera (kombinera genom komposition) och upprepa strängar med `+` och `*` operatorerna, samt en mängd användbara strängmetoder som erbjuder kraftfulla möjligheter för att manipulera och interagera med textdata.

Strängar är en central del av nästan alla Python-program, och att behärska dessa operationer och metoder är avgörande för att effektivt kunna hantera text. Med dessa kunskaper kan vi skapa mer dynamiska och användarvänliga applikationer som kan hantera en mängd olika textbaserade uppgifter.

# Relevanta länkar
* [Python Docs - Strings](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)
* [Python Docs - String methods](https://docs.python.org/3/library/stdtypes.html#string-methods)
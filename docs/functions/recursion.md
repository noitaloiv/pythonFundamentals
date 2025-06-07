---
layout: default
title: "34. Rekursion"
nav_order: 35
parent: 31. Funktioner
---

# Rekursiva funktioner
Rekursiva funktioner är funktioner som anropar sig själva för att lösa ett problem genom att bryta ned det i mindre, mer hanterbara delar. Denna teknik är särskilt användbar för problem som naturligt kan delas upp i liknande underproblem, såsom algoritmer för att gå igenom trädstrukturer, beräkna faktorialvärden, utföra sökningar och sorteringar i datastrukturer, och mer.

En rekursiv funktion består typiskt av två huvudkomponenter:

* Basfall: <br>
Det enklaste fallet som inte kräver någon rekursion för att lösas. Det fungerar som ett stoppvillkor för rekursionen för att förhindra oändliga anrop.

* Rekursiva steg: <br>
Där funktionen anropar sig själv med en mindre eller modifierad version av det ursprungliga problemet.

Ett klassiskt exempel är en funktion som beräknar fakulteten på ett givet tal, d.v.s. produkten av alla heltal från 1 till och med sig självt. Givet 1 så skulle fakulteten vara 1 (`1*1`), givet 3 så blir den 6 (`1*2*3`), osv. 
```python
def factorial(n):
    if n == 0:                      # base case
        return 1
    else:                           # recursive step
        return n * factorial(n-1)   # The function calls itself with an updated value

print(factorial(5))                 
```
<div class="code-example" markdown="1">
<pre><code>#5*4*3*2*1
120</code> </pre>
</div>

{: .warning }
Rekursion kan göra koden mer intuitiv och lättläst för vissa problemtyper, men det är viktigt att alltid ha ett korrekt och väldefinierat basfall för att förhindra oändlig rekursion, vilket kan leda till ett `stack overflow`-fel - där programmet kraschar på grund av oändliga anrop. Noterbart är även att rekursiva lösningar kan vara mindre effektiva än iterativa lösningar för vissa problem.

## Användningsområden
Rekursiva funktioner är särskilt användbara i följande scenarier:

* Traversering av träd och grafstrukturer: <br>
Rekursion förenklar processen att gå igenom strukturer där varje nod kan ha flera undernoder.

* Dynamisk programmering och delproblem: <br>
Rekursion kan användas för att dela upp ett problem i mindre delar, vilket är en grundsten i dynamisk programmering.

* Matematiska beräkningar: <br>
Problem som faktorialberäkningar, Fibonacci-sekvenser och tornet i Hanoi är naturligt lämpade för rekursiva lösningar.

# Sammanfattning
Rekursiva funktioner är ett kraftfullt verktyg i programmering som tillåter dig att lösa problem genom att bryta ner dem i mindre, hanterbara delar. De är särskilt användbara för problem som naturligtvis kan delas upp i liknande subproblem. Det är dock viktigt att ta basfall och rekursionens djup i beaktande då det kan leda till problem såsom `stack overflow`-fel eller påverka applikationens effektivitet negativt.
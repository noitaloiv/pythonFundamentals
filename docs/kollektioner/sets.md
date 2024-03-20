---
layout: default
title: "17. Mängder (sets)"
nav_order: 18
parent: collections
---

# Mängder (sets)
Mängder är en annan typ av kollektion som är mycket användbar när du behöver hantera _unika element_ och utföra operationer såsom `union`, `snitt` och `differens`. Mängder skapas med måsvingar `{}` eller med `set()`-funktionen. Till skillnad från listor och tuples är mängder _oordnade_, vilket innebär att de inte har någon bestämd ordning (d.v.s. att indexering inte kan tillämpas) för sina element och tillåter **inte** för duplicerade element. Mängder är även _oföränderliga_ i det avseendet att vi inte kan ändra på existerande element - men vi kan till skillnad mot tuples lägga till eller ta bort element.

Vi kan arbeta med mängder på följande vis:
```python
# Create a set
colors = {"red", "green", "blue"}

# Add an element
colors.add("yellow")

# Remove an element
colors.discard("green")

# Itererate over a set
for color in colors:
    print(color)

# Indexing will cause a TypeError
print(colors[0])
```
<div class="code-example" markdown="1">
<pre><code>red
blue
yellow
TypeError: 'set' object is not subscriptable</code></pre>
</div>

{: .highlight }
Notera att då mängder är oordnade så kan vi aldrig vara säkra på i vilken ordning elementen kommer att skrivas ut. D.v.s. att den ena körningen kan vi få `red`, `blue`, `yellow` men nästa körning kan det vara `yellow`, `red`, `blue`.

Om du till exempel vill hålla reda på en unik kollektion av studenter som deltar i olika studiegrupper och utföra mängd-operationer (`union`, `snitt`, `differens`), kan mängder vara ett fördelaktigt val:
```python
studiegrupp_a = {"Alice", "Bob", "Charlie"}
studiegrupp_b = {"Bob", "Diana", "Frank"}

# UNION - Will get students that belongs to both groups
print(studiegrupp_a & studiegrupp_b)

# DIFFERENCE - Will get students that belongs to A and not B
print(studiegrupp_a - studiegrupp_b)
```
<div class="code-example" markdown="1">
<pre><code>{'Bob'}
{'Alice', 'Charlie'}</code></pre>
</div>
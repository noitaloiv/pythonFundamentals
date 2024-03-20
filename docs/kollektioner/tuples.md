---
layout: default
title: "15. Tuples"
nav_order: 16
---

# Tuples
Tupler är en typ av kollektion som liknar listor, men med en viktig distinktion - de är _oföränderliga_. Detta innebär att när en tupel har skapats kan dess innehåll **inte** ändras. Detta innefattar att de fortfarande är _ordnade_ (d.v.s. tillåter för indexering) och tillåter _duplicerade element_, men vi kommer inte att kunna lägga till eller ta bort element från en tuple.

Ponera att du har en kollektion av datum för tentamenstillfällen under terminen. Dessa datum kommer inte att ändras, vilket gör dem till perfekta kandidater för att lagras i en tupel:
```python
important_dates = ("2024-03-01", "2024-04-12", "2024-05-23")
```

Även om du inte kan lägga till eller ta bort element från en tupel, kan du fortfarande iterera över den eller hämta värden på angivna indexpositioner, precis som med en lista:
```python
important_dates = ("2024-03-01", "2024-04-12", "2024-05-23")

for date in important_dates:
    print(date)

print("\n" + important_dates[1])
```
<div class="code-example" markdown="1">
<pre><code>2024-03-01
2024-04-12
2024-05-23

2024-04-12</code></pre>
</div>
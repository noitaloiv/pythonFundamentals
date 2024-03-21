---
layout: default
title: "23. Dictionaries"
nav_order: 24
parent: 20. Kollektioner
---

# Dictionaries
Dictionaries är kollektioner som lagrar data i s.k. _key-value-pairs_, vilket gör dem idealiska för att representera _relationer_ mellan data. Varje nyckel i en dictionary är **unik** och används för att hämta det **associerade** **värdet**. Dictionaries skapas med måsvingar `{}`, där varje element består av en nyckel och ett värde, separerade av ett kolon. Likt listor är dictionaries 

Ponera att du vill lagra information om dina avslutade kurser och vilket betyg du förvärvat på kurserna. En dictionary kan då organisera denna information effektivt genom att nyttja en nyckel som representerar kursen och det tillhörande betyget:
```python
course_grades = {
    "Datastrukturer": "VG",
    "Programmering i Python": "G",
    "Systemutveckling": "G"
}
```

För att sedan hämta ett betyg så kan detta uppnås med hjälp av indexering - men denna gång anger vi nyckeln snarare än en indexposition:
```python
course_grades = {
    "Datastrukturer": "VG",
    "Programmering i Python": "G",
    "Systemutveckling": "G"
}

print(course_grades["Datastrukturer"])
```
<div class="code-example" markdown="1">
<pre><code>VG</code></pre>
</div>

Vi skulle även kunna vända på det och istället lagra kurser per betyg, för att enklare kunna utvinna vilka kurser vi förvärvat ett VG resp. G på, samt vilka kurser som ev. behöver kompletteras:
```python
course_grades = {
    "VG": ["Datastrukturer"]
    "G": ["Programmering i Python", "Systemutveckling"]
}

print(course_grades["G"])
```
<div class="code-example" markdown="1">
<pre><code>['Programmering i Python', 'Systemutveckling']</code></pre>
</div>
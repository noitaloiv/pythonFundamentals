---
layout: default
title: "27. Dictionaries"
nav_order: 28
parent: 24. Kollektioner
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

## Modifiering av dictionaries
Att ändra på dictionaries i Python är argumenterbart en förhållandevis enkel process som involverar tillägg, uppdatering och borttagning av _nyckel-värde-par_ (_key-value pairs_).

* Tillägg av key-value pairs: <br>
Du kan lägga till nya par genom att helt enkelt tilldela ett värde till en ny nyckel. Om nyckeln redan finns, uppdateras det befintliga värdet.
```python
course_grades = {}
course_grades["Databaser"] = "G"
course_grades["Webbutveckling"] = "VG"
```

* Uppdatering av värden: <br>
För att ändra värdet associerat med en specifik nyckel, tilldela helt enkelt ett nytt värde till nyckeln enligt:
```python
course_grades["Databaser"] = "VG"  # Updates the value to VG for the key "Databaser"
```

* Borttagning av key-value pairs: <br>
Använd `del`-nyckelordet eller `pop()`-funktionen för att ta bort ett par. `pop()` returnerar även värdet som togs bort, vilket kan vara användbart.
```python
# Removes the key-value pair for the key "Webbutveckling"
del course_grades["Webbutveckling"]         
# Removes and returns the value for the key "Databaser"
removed_grade = course_grades.pop("Databaser")
print(removed_grade) 
```

## Iteration över dictionaries
Iteration över dictionaries kan utföras på flera sätt, beroende på om du behöver iterera över nycklarna, värdena eller båda.

* Iterera över nycklar: <br>
Standardbeteendet när du itererar över en dictionary är att iterera över dess nycklar.
    ```python
    course_grades = {
        "Datastrukturer": "VG",
        "Programmering i Python": "G",
        "Systemutveckling": "G"
    }
    for course in course_grades:
        print(course)
    ```
    <div class="code-example" markdown="1">
    <pre><code>Datastrukturer
Programmering i Python
Systemutveckling</code></pre>
    </div>

* Iterera över värden: <br>
För att iterera över värdena, använd `values()`-funktionen:
    ```python
    course_grades = {
        "Datastrukturer": "VG",
        "Programmering i Python": "G",
        "Systemutveckling": "G"
    }
    for grade in course_grades.values():
        print(grade)
    ```
    <div class="code-example" markdown="1">
    <pre><code>VG
G
G</code></pre></div>

* Iterera över key-value pairs: <br>
Använd `items()`-metoden för att få tillgång till både nycklar och värden samtidigt.
    ```python
    course_grades = {
        "Datastrukturer": "VG",
        "Programmering i Python": "G",
        "Systemutveckling": "G"
    }
    for course, grade in course_grades.items():
        print(f"Course: {course}, Grade: {grade}")
    ```
    <div class="code-example" markdown="1">
    <pre><code>Course: Datastrukturer, Grade: VG
Course: Programmering i Python, Grade: G
Course: Systemutveckling, Grade: G</code></pre>
    </div>

# Sammanfattning
Dictionaries i Python är kraftfulla och flexibla kollektioner som tillhandahåller en effektiv mekanism för att lagra och hantera data i nyckel-värde-par (key-value pairs). Deras förmåga att enkelt modifieras och deras stöd för dynamisk datahantering gör dem idealiska för ett brett spektrum av användningsfall, från enkla datakartläggningar till komplexa datamodeller. 

Genom att utnyttja dictionaries kan utvecklare skapa mer organiserad, läsbar och effektiv kod som lätt kan anpassas till ändrade datakrav.
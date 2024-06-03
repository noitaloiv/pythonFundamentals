---
layout: default
title: "5. Värden och typer"
nav_order: 6
parent: 4. Syntax
---

# Värden och typer
Ett värde är ett grundläggande ting - såsom en bokstav, ett tecken, eller en siffra - vilket ett program kan manipulera (exempelvis kombinera med andra värden, utföra beräkningar på värdet och dylikt). I föregående kapitel så stötte vi på ett textuellt värde i form av `"Hello, world!"` när vi skrev vårt första program - som utmynnade i att skriva ut texten `"Hello, world!"`.

`"Hello, world!"` är ett exempel på ett textuellt värde, men värden kan även vara av andra typer. Textuella värden, som består av mer än ett tecken, kallas exempelvis för stängar (_strings_) medan heltalet 2 skulle klassificeras som just ett heltal (_integer_). Du (såväl som Python-tolkaren) kan särskilja en sträng från ett heltal baserat på huruvida värdet är omgivet av sitationstecken (`"`).

## Starkt typat programmeringsspråk
Python är ett _starkt typat språk_ (strongly typed language) vilket innebär att det spelar roll vilken datatyp en variabel innehåller. Det är exempelvis skillnad på strängen `"1"` och siffran `1`. Vi skulle därför stöta på problem om vi exempelvis försöker utföra en matematisk operation på textuella värden och vice versa.

Det är således viktigt att vi är medvetna om vilken datatyp vi lagrar och/eller arbetar med för att undvika eventuella fel som kan uppstå alt. ett oväntat beteende i vårt program.

## `type()`-funktionen
Likt hur vi tidigare skrev ut `"Hello, world!"` med hjälp av `print()`-funktionen så skulle vi likväl kunna skriva ut ett heltal med: `print(23)`. Detta då allt som hanteras genom terminalen (d.v.s. input och output) automatiskt kommer att behandlas som textuella värden. 

Om du skulle vara osäker på vilken typ ett värde har så kan kompilatorn berätta det för dig genom användningen av `type()`-funktionen: 

``` python
print(type("Hello, world!"))
print(type(23))
```
<div class="code-example" markdown="1">
<pre><code>< class 'str' >
< class 'int' ></code></pre>
</div>

## Andra datatyper
Det finns självfallet även andra typer av värden som inte riktigt passar som varken ett heltal eller en sträng. 

* Float: 
Exempelvis behandlas decimaltal annorlunda än heltal och klassificeras därför som typen `float`.
    ```python
    print(type(3.2))
    ```
    <div class="code-example" markdown="1">
    <pre><code>< class 'float' ></code></pre>
    </div>

    Vi skulle nu även kunna testa vårt påstående avseende att datorn tolkar strängar som de värden som anges inom citationstecken. Exempelvis kan vi genom `type`-funktionen se att `"3.2"` och `3.2` inte är samma typ:
    ``` python
    print(type("3.2"))
    print(type(3.2))
    ```
    <div class="code-example" markdown="1">
    <pre><code>< class 'str' >
    < class 'float' ></code></pre>
    </div>

* Booleans: 
En binär datatyp som enbart kan ges värdena `True` eller `False`.
    ```python
    guess = True
    print(type(guess))
    ```
    <div class="code-example" markdown="1">
    <pre><code>< class 'bool' ></code></pre>
    </div>

* Datetime: 
En datatyp som måste _importeras_ och som sedan kan nyttjas för att representera datum eller utvinna datumrelaterad information (såsom dagens datum).
    ```python
    import datetime                 # import is used to import the library 'datetime', which allow us to use datetime objects
    print(type(datetime))
    print(datetime.datetime.now())  # The value will differ depending on when you execute the function
    ```
    <div class="code-example" markdown="1">
    <pre><code>< class 'module' >
    2024-03-20 17:00:50.932698</code></pre>
    </div>

Det finns självfallet även många andra datatyper som nyttjas i olika avseenden och med olika syften och vi kommer att stöta på flera typer i framtida kapitel.

## Formatet är viktigt!
Det är även viktigt att ta formatet på värdet i beaktande när man anger det. Exempelvis så skulle `type(1,000,000)` generera ett oförväntat resultat då det inte kan tolkas som ett giltigt heltal p.g.a. de kommatecken som nyttjas. Det skulle istället snarare tolkas som en kommaseparerad lista som innehåller värdena `1 0 0`, vilket vi kan se ett exempel på om vi försöker skriva ut det enligt:
``` python
print(1,000,000)
```
<div class="code-example" markdown="1">
<pre><code>1 0 0</code></pre>
</div>

Ovan felaktiga tolkning är ett exempel på ett s.k. _semantiskt fel_, d.v.s. att koden tillåts utföras utan att ett faktiskt felmeddelande genereras, men det kommer att resultera i ett annat värde än vad vi förväntar oss. Om vi istället skulle försöka utföra koden: `type(1.000.000)` så skulle vi få ett s.k. _kompileringsfel_ när vi försöker exekvera koden. Ett kompileringsfel innefattar med andra ord att koden inte är körbar medan semantiska fel istället kan resultera i körbar kod som ger oförväntade resultat.

# Sammanfattning
I detta kapitel har vi utforskat Python-syntaxens grundläggande element - värden och datatyper. Vi har sett exempel på olika typer som används i olika syften och hur vi kan använda `type()`-funktionen för att identifiera vilka datatyper vi arbetar med. Vi har även diskuterat implikationerna av att Python är ett _starkt typat språk_, t.ex. att vi måste vara säkra på att det är numeriska värden vi arbetar med om vi ämnar utföra matematiska operationer.
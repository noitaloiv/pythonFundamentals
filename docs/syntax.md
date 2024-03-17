---
layout: default
title: "3. Syntax"
nav_order: 4
---

# Syntax
Nu när du har skapat samt ställt in din arbetsyta och skrivit ditt första program i Python är det dags att fördjupa dig i Python-syntaxens värld. Man kan likna en syntax med hur grammatiken fungerar i det svenska språket där man skriver på ett visst sätt för att andra ska förstå vad du menar.

Utöver syntaxen så finns det även vissa regler och mönster som styr hur ditt "språk" ser ut, vilka säkerställer att datorn kan tolka och förstå dina kommandon korrekt. För att dra paralleller till det svenska språket så kan detta t.e.x. tänkas vara att vi måste använda fullständiga meningar. 

I detta kapitel kommer vi att visa exempel på strukturen för språket Python samt några regler som vi behöver anpassa oss efter.

## Att förstå Python-syntaxen

I syfte om att förstå syntaxen i Python, låt oss bryta ned och beskriva varje beståndsdel var för sig.

### Värden och typer

Ett värde är ett grundläggande ting - såsom en bokstav, ett tecken, eller en siffra - vilket ett program kan manipulera (exempelvis kombinera med andra värden, utföra beräkningar på värdet och dylikt). I Kapitel 1.2 så stötte vi på ett textuellt värde i form av `"Hello, world!"` när vi skrev vårt första program - som utmynnade i att skriva ut texten `"Hello, world!"`.

`"Hello, world!"` är ett exempel på ett textuellt värde, men värden kan även vara av andra typer. Textuella värden, som består av mer än ett tecken, kallas exempelvis för stängar (strings) medan heltalet 2 skulle klassificeras som just ett heltal (integer). Du (såväl som Python-kompilatorn) kan särskilja en sträng från ett heltal baserat på huruvida värdet är omgivet av sitationstecken (").

Likt hur vi tidigare skrev ut `"Hello, world!"` med hjälp av `print()`-funktionen så skulle vi likväl kunna skriva ut ett heltal med: `print(23)`. Detta då allt som hanteras genom terminalen (d.v.s. input och output) automatiskt kommer att behandlas som textuella värden. 

Om du skulle vara osäker på vilken typ ett värde har så kan kompilatorn berätta det för dig genom användningen av `type`-funktionen: 

``` python
# Exempel 1
print(type("Hello, world!"))
# will print <class 'str'>
print(type(23))
# will print <class 'int'>
```

Notera gärna att `#`-symbolen indikerar startpunkten för en kommentar. En kommentar kan vara körbar kod, fritext eller principiellt vad du än kan tänkas vilja skriva. Kommentarer är något som kompilatorn kommer att ignorera när koden körs, d.v.s. att det enbart är till för dig och andra utvecklare - exempelvis för att tillhandahålla beskrivande text för den kod du skrivit.

Det är möjligt att skriva kommentarer över en eller flera rader där `#`-symbolen nyttjas för enradiga kommentarer och `'''` kan nyttjas för att skriva kommentarer över flera rader, t.ex. enligt: 
```python
# Exempel 2
print(type("Hello, world!"))
print(type(23))
'''
the first row will print <class 'int'> and
the second row will print <class 'str'>
'''
```

Det finns självfallet även andra typer av värden som inte riktigt passar som varken ett heltal eller en sträng. Exempelvis behandlas decimaltal annorlunda än heltal och klassificeras därför som typen `float`.
```python
# Exempel 2
print(type(3.2))
# will print <class 'float'>
```

Vi skulle nu även kunna testa vårt påstående avseende att datorn tolkar strängar som de värden som anges inom situationstecken. Exempelvis kan vi genom `type`-funktionen se att `"3.2"` och `3.2` inte är samma typ:
``` python
# Exempel 3
print(type("3.2"))
# will print <class 'str'>
print(type(3.2))
# will print <class 'float'>
```

Det är även viktigt att ta formatet på värdet i beaktande när man anger det. Exempelvis så skulle `type(1,000,000)` generera ett felmeddelande då det inte kan tolkas som ett giltigt heltal p.g.a. de kommatecken som nyttjas. Det skulle istället snarare tolkas som en kommaseparerad lista som innehåller värdena `1 0 0`, vilket vi kan se ett exempel på om vi försöker skriva ut det enligt:
``` python
# Exempel 4
print(1,000,000)
# will print 1 0 0
```
Ovan felaktiga tolkning är ett exempel på ett s.k. _semantiskt fel_, d.v.s. att koden kan utföras utan att ett faktiskt felmeddelande genereras, men det kommer att resultera i ett annat värde än vad vi förväntar oss. Om vi istället skulle försöka utföra koden: `type(1,000,000)` så skulle vi få ett s.k. _kompileringsfel_ när vi försöker kompilera (köra) koden. Ett kompileringsfel innefattar med andra ord att koden inte är körbar medan semantiska fel istället kan resultera i körbar kod som ger oförväntade resultat.

### Variabler
En av de mest kraftfulla funktionerna i ett programmeringsspråk är förmågan att manipulera variabler. En variabel är ett namn som refererar till ett värde.

Genom tilldelning så kan vi skapa variabler och tillhandahålla dem med värden: 
```python
# Exempel 1
message = "Hello, world!"
student_age = 22
pi = 3.14159
```

I ovan exempel så ser vi tre olika tilldelningar som resulterar i tre olika variabler. På den första raden så tilldelas variabeln `message` strängen `"Hello, world!"`, på den andra raden tilldelas variabeln `studentAge` heltalet `22` och på den tredje raden tilldelas variabeln `pi` flyttalet `3.14159`.

Notera att vi för `"Hello, world!"` använder dubbla situationstecken för att omsluta strängen. Generellt sett har ' och " samma funktion i Python, men om en sträng innehåller ett enda '-tecken (t.ex. ordet it's all ogre) så måste det omslutas av dubbla situationstecken ("it's all ogre") för att tolkas som en sträng.

Tidigare så har vi angivit värdet som vi vill skriva ut direkt inom parenteserna för `print()`-funktionen (t.ex. `print(3.2)`), men det är även möjligt att ange representationen av ett värde - d.v.s. en variabel:  
```python
# Exempel 2
print(message)
# will print "Hello, world!"
print(student_age)
# will print 22
```

### Variabelnamn och nyckelord

Utvecklare väljer generellt meningsfulla och representativa namn för sina variabler. Detta för att utvecklaren själv såväl som andra enkelt ska förstå vad det är som variabeln i fråga representerar. Om vi föreställer oss ett scenario där vi ämnar lagra en användares angivna lösenord så är det möjligt att lagra det i stil med:
```python
# Exempel 1
x = "xHyra6h%"
```

Men det kan snabbt bli svårt att särskilja en variabel från en annan samt snabbt bilda sig en uppfattning av koden och dess syfte första gången man ser den. Det skulle således vara betydligt tydligare vilket värde variabeln representerar om vi istället hade något i stil med:
```python
# Exempel 2
user_password = "xHyra6h%"
```

Variabelnamn som sådana kan vara godtyckligt långa och innehålla bokstäver såväl som siffror (de måste dock inledas med en bokstav). Det finns dock vissa konventioner för namngivning i Python och dessa talar för att vi exempelvis inte nyttjar versaler i variabelnamn, även om Python accepterar sådan namngivning. D.v.s. att `Student_Age` och `student_age` skulle vara två olika variabler.

Underscore (_) kan förekomma i variabelnamn då vi vill att variabelnamnet ska bestå av flera ord, t.ex. `user_password`, `user_name`, och dylikt.

Du behöver inte vara orolig över att ange otillåtna variabelnamn då du snabbt kommer att bemötas av ett syntaxfel i de fall du har otillåtna namn. Exempelvis enligt:
```python
# Exempel 3
123 = "test"
SyntaxError: invalid syntax
a123 = "test"

ab$ = "test"
SyntaxError: invalid syntax
if = "test"
SyntaxError: invalid syntax
```

`123` är ett otillåtet namn då det inte inleds med en bokstav - därav att `a123` anses vara ett tillåtet namn. `ab$` är ett otillåtet namn då det innehåller specialtecknet `$`, men varför får vi ett syntaxfel i det sista fallet med `if`? Felet beror på att `if` råkar vara ett av 29 st. nyckelord som är integrerade i Python - d.v.s. att det är ord som redan uppfyller ett syfte genom att definiera språkets regler och struktur, vilket medför att de inte kan nyttjas som variabelnamn. Det skulle dock vara tillåtet om vi inte längre representerade nyckelordet genom att bygga vidare på variabelnamnet, t.ex. i stil med:
```python
# Exempel 4
if_old_age = "Sorry, you're too old to be eating of the children's menu"
```
Du kommer under denna kurs att stöta på fler nyckelord såsom `and`, `class`, `else`, `for`, etc. men vi kommer att introducera var och ett successivt allt eftersom att vi introducerar fler koncept och byggstenar i språket.

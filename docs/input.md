---
layout: default
title: "12. Input och output"
nav_order: 13
---

# Input och output i Python 
Vi har hittills arbetat med olika variabeltyper och operatorer där vi använt oss av funktionen `print()` för att generera en _output_, d.v.s. ett utfall av den kompilerade koden som en användare kan se. Det kan dock tänkas vara relevant att tillåta en användare att skicka in värden som programmet sedan kan använda sig utav, s.k. _inputs_.

Det kan exempelvis vara ett namn, en ålder eller dylik information som programmet behöver veta för att fungera som tänkt. Exempelvis har du säkerligen någon gång angett information i en dialogruta eller ett formulär, t.ex. ditt användarnamn och lösenord när du loggar in via Studium. Denna information måste datorn kunna spara, tolka och eventuellt nyttja och Python har därför förprogrammerade funktioner för att på ett enkelt sätt hantera inputs.

För att skicka in värden till våra program i Python så kan vi nyttja funktionen `input()`.

## Hur gör man inputs i Python?
Med funktionen `input()` kan man enkelt mata in värden till programmet. Funktionen fungerar på så vis att när programmet når kodraden som berör `input()`-funktionen så kommer programmet att vänta till dess att användaren anger någon input i terminalen, kommer programmet vänta tills dess att användaren har skrivit in något i konsolen och sedan fortsätta i programmet.

## Syntax för input
Du kan använda funktionen `input()` med följande syntax:
```python
userInput = input()
```
Där variabeln `userInput` kommer att lagra värdet som har angivits. Det är även möjligt att tillhandahålla instruktioner till användaren innanför parenteserna, t.ex. avseende vilken information man vill ha från användaren. T.ex. enligt:
```python
string1 = "10"
string2 = "20"
string3 = input("Enter a numerical value: ")
print(string1 + string2 + string3)
```
<div class="code-example" markdown="1">
<pre><code>'1020' + whatever value the user provides whether its numeric or not.</code> </pre>
</div>

Observera att det är ett mellanslag i uppmaningen `"Enter a numerical value: "`. Detta är för att få ett mellanrum mellan uppmaningen och värdet som anges, vilket gör programmet lite mer stilrent. Vi kan i detta fall även se hur programmet stannar upp och väntar på input från användaren innan programmet fortsätter:

<img src="../assets/images/runInput.gif" alt="visualizationOfInput">

Som du kan se i GIF:en så kommer utskriften att bli `"102030"` (om `30` anges som input), vilket kan tänkas vara en svårtolkad input. Avser vi exempelvis ett enda värde, en talföljd eller tre individuella värden? Det kan därför vara fördelaktigt att _formatera_ vår utskrift.

## Formatera utskrifter i Python
Du kan formatera dina utskrifter så att de presenteras såsom du vill, exempelvis genom att separera variablvärden med kommatecken, mellanslag eller presentera informationen över flera rader.

### Flera utskrifter samtidigt
Ponera att vi enbart vill skriva ut `string1` resp. `string2` från föregående exempel, fast som två separata värden:
```python
string1 = "10"
string2 = "20"
print(string1, string2)
```
<div class="code-example" markdown="1">
<pre><code>'10'
'20'</code> </pre>
</div>

Kommatecknet används med andra ord för att separera de två variablerna med ett mellanslag.

### Utskrifter på flera rader
Vi kan, som nämnt i föregående kapitel, även skriva ut värdena på olika rader genom att nyttja `\n` för att representera en radbrytning:
```python
print("Hello,", "\nworld!")
```

### format() och f-strings
Formatering av strängar i Python kan göras på flera sätt, men två av de mest användbara och moderna metoderna är `str.format()` metoden och `f-strings` (formatsträngar).

Metoden `str.format()` låter dig infoga värden i en strängs platshållare. Platshållarna definieras med klammerparentes `{}` i strängen och värdena som ska sättas in anges som argument i `format()`-anropet. Detta gör det möjligt att skapa dynamiskt genererade strängar.
```python
name = "Erik"
age = 29
message = "Hi, my name is {0} and I am {1} years old.".format(name, age)
print(message)
```
<div class="code-example" markdown="1">
<pre><code>Hi, my name is Erik and I am 29 years old.</code> </pre>
</div>

Med `str.format()` kan du även namnge argumenten, vilket gör strängen lättare att läsa och underhålla.
```python
message = "Hi, my name is {name} and I am {age} years old.".format(name = "Erik", age = 29)
print(message)
```

`f-strings` erbjuder ett ännu mer lättläst och bekvämt sätt att infoga uttryck direkt inuti strängliteraler. En `f-string` skapas genom att sätta ett `f` framför strängen och sedan inkludera variabler eller uttryck direkt inom `{}` i strängen.
```python
name = "Erik"
age = 29
message = f"Hi, my name is {name} and I am {age} years old."
print(message)
```
<div class="code-example" markdown="1">
<pre><code>Hi, my name is Erik and I am 29 years old.</code> </pre>
</div>

`f-strings` stöder inte bara variabler utan också uttryck direkt inom `{}`. Detta gör dem extremt kraftfulla för strängformatering.
```python
name = "Erik"
age = 29
print(f"In five years, {name} will be {age + 5} years old.")
```
<div class="code-example" markdown="1">
<pre><code>In five years, Erik will be 34 years old.</code> </pre>
</div>

## Skillnaden mellan print() och input()
Även om `print()` och `input()` är grundläggande funktioner i Python, tjänar de olika syften.

`print()`-funktionen i Python används för att skicka data till standard output, vanligtvis till konsolen, vilket gör det möjligt för användaren att se data, meddelanden eller resultat av programmet. `print()` kan ta flera argument och konverterar dem till strängar (om de inte redan är strängar) innan de skrivs ut. Du kan också använda `sep` och `end` parametrarna i `print()` för att anpassa separatorelementet och sluttecknet.
```python
a = 10
b = 20
print(a, b, sep=", ", end=".\n")
```
<div class="code-example" markdown="1">
<pre><code>10, 20.</code> </pre>
</div>

`input()`-funktionen används för att ta emot data från användaren genom standard input, vanligtvis från tangentbordet. Det gör det möjligt för programmet att interagera med användaren genom att be om information. När `input()`-funktionen körs, pausas programmet och väntar på att användaren ska mata in något och trycka på enter. Texten som användaren skriver in konverteras till en sträng och kan lagras i en variabel för vidare användning.
```python
user = input("What's your name? ")
print(f"Hi {user}!")
```
<div class="code-example" markdown="1">
<pre><code># If user enters "Erik"
Hi Erik!</code> </pre>
</div>

## Typkonvertering
Det är viktigt att ta i beaktande att all input som ges av `input()` kommer att vara av datatypen `string`. D.v.s. att oavsett om användaren anger `30`, `true`, `2.3` så kommer det att lagras som `"30"`, `"true"` resp. `"2.3"`.

Detta är viktigt att ta i beaktande då vi snabbt kan stöta på felmeddelanden om vi exempelvis försöker utföra en matematisk operation på ett inputvärde:
```python
number1 = 10
number2 = 20
number3 = input("Enter a numerical value: ")
print(number1 + number2 + number3)
```
<div class="code-example" markdown="1">
<pre><code>TypeError: unsupported operand type(s) for +: 'int' and 'str'</code> </pre>
</div>

Ponera att användaren har angivit `30` i terminalen så kommer detta - som tidigare nämnt - ha lagrats som `"30"`. När vi sedan försöker utföra addition för att summera våra numeriska värden så får vi i praktiken något i stil med: `10 + 20 + "30"`, vilket resulterar i ett felmeddelande då enbart numeriska värden kan summeras.

För att hantera sådana problem så behöver vi _konvertera_ vårt inputvärde från `string` till `int`.

I Python använder man typkonvertering för att konvertera (casta) en datatyp till en annan. Det är exempelvis vanligt att konvertera en `string` till en `int` eller vise versa. Detta kan göras med inbyggda funktioner såsom `int()`, `str()` eller `float()`.

### Konvertera (casta) en datatyp
Problemet med olika datatyper löser man genom att casta (konvertera) en datatyp till en annan. Python har inbyggda funktioner som gör att man direkt konverterar en datatyp till en annan. Några av de vanligaste funktionerna för att konvertera datatyper är:

* `int()`
* `str()`
* `float()`
* `bool()`

Om vi exempelvis skulle vilja konvertera inputvärdet från vårt tidigare exempel till ett numeriskt värde så kan vi uppnå detta på följande vis:
```python
number1 = 10
number2 = 20
number3 = input("Enter a numerical value: ")
print(number1 + number2 + int(number3))
```
<div class="code-example" markdown="1">
<pre><code>30 + whatever numerical value the user enters (if it is numerical, otherwise we'll get a ValueError) </code> </pre>
</div>

Motsvarande operationer går att göra med `str()` som konverterar en variabel till en `string`, eller `float()` som konverterar en variabel till en `float`, osv.

### Ha koll på vad du försöker konvertera!
Notera dock att alla konverteringar inte kommer att lyckas. Exempelvis kommer vi inte kunna konverta `"11.3"` till ett heltal enligt:
```python
number1 = "11.3"
int(number1) 
```
Då `11.3` inte är ett heltal snarare ett decimaltal (d.v.s. en `float` istället för en `int`).

Det är således viktigt att hålla koll på vilken datatyp variabeln representerar när man vill utföra konvertering.

# Sammanfattning
I detta avsnitt har vi utforskat grunderna i input och output i Python, vilket är grundläggande för interaktionen mellan användaren och programmet. Genom att använda `input()`-funktionen kan vi fånga data som användaren matar in, vilket möjliggör interaktiva och responsiva program. `print()`-funktionen låter oss å andra sidan visa data och meddelanden till användaren, vilket är avgörande för användarupplevelsen.

Vi har också sett hur man kan formatera output för att presentera data på ett läsbart och estetiskt tilltalande sätt, samt vikten av att korrekt hantera och konvertera datatyper för att undvika fel.

Att förstå dessa koncept är avgörande för att bygga grundläggande interaktioner i dina Python-program och lägger grunden för mer avancerade funktioner och användarinteraktioner i framtiden.
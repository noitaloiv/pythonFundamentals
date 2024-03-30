---
layout: default
title: "14. Input och output"
nav_order: 15
has_children: true
---

# Input och output i Python 
Vi har hittills arbetat med olika variabeltyper och operatorer där vi använt oss av funktionen `print()` för att generera en _output_, d.v.s. ett utfall av den kompilerade koden som en användare kan se. Det kan dock tänkas vara relevant att tillåta en användare att skicka in värden som programmet sedan kan använda sig utav, s.k. _inputs_.

Det kan exempelvis vara ett namn, en ålder eller dylik information som programmet behöver veta för att fungera som tänkt. Exempelvis har du säkerligen någon gång angett information i en dialogruta eller ett formulär, t.ex. ditt användarnamn och lösenord när du loggar in via Studium. Denna information måste datorn kunna spara, tolka och eventuellt nyttja och Python har därför förprogrammerade funktioner för att på ett enkelt sätt hantera inputs.

## Hur hanterar man inputs i Python?
Med funktionen `input()` kan man enkelt mata in värden till programmet. Funktionen fungerar på så vis att när programmet når kodraden som berör `input()`-funktionen så kommer programmet att vänta till dess att användaren anger någon input i terminalen, kommer programmet vänta tills dess att användaren har skrivit in något i konsolen och sedan fortsätta i programmet.

## Syntax för `input()`
Du kan använda funktionen `input()` enligt följande syntax:
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

{ .highlight }
Observera att det är ett mellanslag i uppmaningen `"Enter a numerical value: "`. Detta är för att få ett mellanrum mellan uppmaningen och värdet som anges, vilket gör programmet lite mer stilrent. 

Vi kan i detta fall även se hur programmet stannar upp och väntar på input från användaren innan programmet fortsätter:

<img src="../assets/images/runInput.gif" alt="visualizationOfInput">

Som du kan se i GIF:en så kommer utskriften att bli `"102030"` (om `30` anges som input), vilket kan tänkas vara en svårtolkad input. Avser vi exempelvis ett enda värde, en talföljd eller tre individuella värden? Det kan därför vara fördelaktigt att _formatera_ vår utskrift.

## Hantera utskrifter i Python
Du kan hantera dina utskrifter i Python, exempelvis genom att separera variablvärden med kommatecken, mellanslag eller presentera informationen över flera rader.

### Flera utskrifter samtidigt
Ponera att vi enbart vill skriva ut `string1` resp. `string2` från föregående exempel, fast som två separata värden:
```python
string1 = "10"
string2 = "20"
print(string1, string2)
```
<div class="code-example" markdown="1">
<pre><code>10 20</code> </pre>
</div>

Kommatecknet används med andra ord för att separera de två variablerna med ett mellanslag.

{ .highlight }
Kom ihåg att vi även kan nyttja `str.format()` och `f-strängar` för att formatera utseendet på våra utskrifter, t.ex. enligt: `print(f"{string1} {string2}")`.

### Utskrifter på flera rader
Vi kan, som nämnt i föregående kapitel, även skriva ut värdena på olika rader genom att nyttja `\n` för att representera en radbrytning:
```python
print("Hello,", "\nworld!")
```

## Skillnaden mellan `print()` och `input()`
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

# Sammanfattning
I detta avsnitt har vi utforskat grunderna i input och output i Python, vilket är grundläggande för interaktionen mellan användaren och programmet. Genom att använda `input()`-funktionen kan vi fånga data som användaren matar in, vilket möjliggör interaktiva och responsiva program. `print()`-funktionen låter oss å andra sidan visa data och meddelanden till användaren, vilket är avgörande för användarupplevelsen.

Vi har även kollat på hur vi kan hantera input genom typkonvertering samt vad man behöver ta i beaktande vid tillämpning av konvertering.

Att förstå dessa koncept är avgörande för att bygga grundläggande interaktioner i dina Python-program och lägger grunden för mer avancerade funktioner och användarinteraktioner i framtiden.

# Relevanta länkar

https://docs.python.org/3/library/functions.html#print
https://docs.python.org/3/library/functions.html#input
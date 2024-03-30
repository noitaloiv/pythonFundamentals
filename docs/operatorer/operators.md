---
layout: default
title: "11. Operatorer"
nav_order: 12
has_children: true
---

# Operatorer och operander 
Operatorer är speciella symboler som fungerar likt de nyckelord vi tidigare pratat om - d.v.s. att de representerar viss inbyggd funktionalitet, exempelvis `+` för addition och `*` för multiplikation. De värden som operatören använder kallas för "operander", exempelvis skulle `4` resp. `5` i uttrycket `4 + 5` agera _operander_ för _operationen_ addition.

## Matematiska uttryck
Samtliga utav nedan matematiska uttryck är giltiga: 
```python
20 * 32
hour - 2
3**2
14 - 4
10 / 2
(10 + 5) * 2 
```

Varje symbol representerar en operation. `+`-operationen avser addition, `-`-operationen avser subtraktion. `/`-operationen avser division, `*`-operationen avser multiplikation och avslutningsvis så avser `**`-operationen exponentiering.. D.v.s. att operationerna i Python är demsamma som i matematik. 

## Utförandeordning av operationer
Även parenteser utvärderas enligt matematikens lagar, d.v.s. att värdet från det sista uttrycket ovan skulle bli 30 (15 * 2). Akronymen _PEMDAS_ kan vara behjälplig i att komma ihåg ordningen för dessa regler:
* Parenteser har högst prioritet och kan användas för att tvinga ett uttryck att utvärderas i den ordning du vill. Eftersom uttryck inom parentes utvärderas först, ger `2 * (3-1)` resultatet `4`, och `(1+1)**(5-2)` ger resultatet `8`. Du kan också använda parenteser för att göra ett uttryck enklare att läsa, som i `( minut * 100) / 60` - trots att detta inte har någon inverkan på resultatet.
  
* Exponentiering har näst högsta prioritet, så `2**1+1` är `3`, inte `4` och `3*1**3` är `3`, inte `27`.
  
* Multiplikation och division har samma företräde, vilket är högre än addition och subtraktion, som också har samma företräde. Så `2*3-1` är `5`, inte `4` och `6+4/2` är `8`, inte `5`.
  
* Operatörer med samma prioritet utvärderas från vänster till höger (förutom exponentiering). Så i uttrycket `grader / 2 * pi` sker divisionen först och resultatet multipliceras sedan med pi. För att dividera med `2π` kan du använda parenteser eller skriva `grader / 2 / pi`.

I det fall vi har lagrat ett värde i en variabel så kommer varibeln att ersättas med dess värde innan operationen utförs. Detta sker automatiskt när koden körs av kompilatorn. 

## Divisionsberäkning
Noterbart avseende divisionsberäkning är att Python utför decimaltalsdivision. D.v.s. att även om vi dividerar två heltal som resulterar i en jämn kvot såsom `6 / 2` så skulle resultatet bli `3.0` snarare än `3`. Om man vill utföra heltalsdivision så behöver man istället nyttja operatorn `//`:
```python
>>> 10/2
>>> 10//2
```
<div class="code-example" markdown="1">
<pre><code>5.0
5</code></pre>
</div>

I det fall man tillämpar heltalsdivision så kommer kompilatorn alltid avrunda resultatet nedåt:
```python
>>> 10/4
>>> 10//4
```
<div class="code-example" markdown="1">
<pre><code>2.5
2</code></pre>
</div>

## Modulo operatorn
Modulusoperatorn, betecknad med `%` i Python, är en aritmetisk operator som används för att hitta resten när ett tal delas med ett annat. Den är särskilt användbar i situationer där du behöver veta om ett tal är jämnt fördelat eller för att hålla tal inom ett visst intervall, exempelvis när du arbetar med cykliska strukturer som klockslag eller dagar i veckan.

### Användningsområden för Modulusoperatorn
Ett vanligt användningsområde för modulusoperatorn är att avgöra om ett tal är jämnt eller udda. Ett jämnt tal ger alltid resten `0` när det delas med `2`, medan ett udda tal ger resten `1`.
```python
number = 7
if number % 2 == 0:
    print(f"{number} is an even number.")
else:
    print(f"{number} is an odd number")
```
<div class="code-example" markdown="1">
<pre><code>7 is an odd number</code></pre>
</div>

{: .highlight }
Notera gärna `f`:et i `print()`. Detta kan nyttjas för att formatera utskriften, i detta fall genom att hämta variabelns värde vid utskrift. Hade vi istället försökt skriva `print(number is an even number)` så hade vi skrivit ut `number` snarare än värdet hos variabeln `number`. `if` och `else` är nyckelord som nyttjas vid _selektion_, vilket vi kommer diskutera i framtida kapitel.

### Arbeta med Cykliska Strukturer
Modulusoperatorn kan användas för att "loopa runt" när du når slutet av en cyklisk struktur. Detta är praktiskt när du hanterar enheter som tiden (0 till 23 timmar) eller veckodagar (1 till 7).
```python
current_hour = 23
hours_to_add = 5
new_hour = (current_hour + hours_to_add) % 24
print(f"The new hour is: {new_hour}:00.")
```
<div class="code-example" markdown="1">
<pre><code>The new hour is: 4:00.</code></pre>
</div>

Modulusoperatorn `%` är ett kraftfullt verktyg i Python som används för att hitta resten av en division mellan två tal. Dess användningsområden sträcker sig från att avgöra om tal är jämna eller udda, till att hantera cykliska strukturer och mycket mer. Att förstå och kunna använda modulusoperatorn är ett viktigt steg för att bli en skickligare programmerare, eftersom det erbjuder eleganta lösningar på vanliga matematiska och logiska problem.

# Sammanfattning
I detta avsnitt har vi utforskat olika typer av operatorer i Python, inklusive aritmetiska operatorer och modulooperatorn. Vi diskuterade även om operanderna som är värdena som operatorerna verkar på samt hur Python följer en bestämd ordning när operationer utförs i ett uttryck, enligt regeln _PEMDAS_. Detta hjälper oss att förstå och förutsäga resultatet av mer komplexa uttryck.
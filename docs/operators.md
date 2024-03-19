---
layout: default
title: "5. Operatorer"
nav_order: 6
---

# Operatorer och operander 
Operatorer är speciella symboler som fungerar likt de nyckelord vi tidigare pratat om - d.v.s. att de representerar viss inbyggd funktionalitet, exempelvis `+` för addition och `*` för multiplikation. De värden som operatören använder kallas för "operander", exempelvis skulle `4` resp. `5` i uttrycket `4 + 5` agera _operander_ för _operationen_ addition.

## Matematiska uttryck

Samtliga utav nedan matematiska uttryck är giltiga: 
```python
# Exempel 1
20 * 32
hour - 2
3**2
14 - 4
10 / 2
(10 + 5) * 2 
```

Varje symbol representerar en operation. `+`-operationen avser addition, `-`-operationen avser subtraktion. `/`-operationen avser division, `*`-operationen avser multiplikation och avslutningsvis så avser `**`-operationen exponentiering.. D.v.s. att operationerna i Python är demsamma som i matematik. 

### Utförandeordning av operationer
Även parenteser utvärderas enligt matematikens lagar, d.v.s. att värdet från det sista uttrycket ovan skulle bli 30 (15 * 2). Akronymen _PEMDAS_ kan vara behjälplig i att komma ihåg ordningen för dessa regler:
* Parenteser har högst prioritet och kan användas för att tvinga ett uttryck att utvärderas i den ordning du vill. Eftersom uttryck inom parentes utvärderas först, ger `2 * (3-1)` resultatet `4`, och `(1+1)**(5-2)` ger resultatet `8`. Du kan också använda parenteser för att göra ett uttryck enklare att läsa, som i `( minut * 100) / 60` - trots att detta inte har någon inverkan på resultatet.
  
* Exponentiering har näst högsta prioritet, så `2**1+1` är `3`, inte `4` och `3*1**3` är `3`, inte `27`.
  
* Multiplikation och division har samma företräde, vilket är högre än addition och subtraktion, som också har samma företräde. Så `2*3-1` är `5`, inte `4` och `6+4/2` är `8`, inte `5`.
  
* Operatörer med samma prioritet utvärderas från vänster till höger (förutom exponentiering). Så i uttrycket `grader / 2 * pi` sker divisionen först och resultatet multipliceras sedan med pi. För att dividera med `2π` kan du använda parenteser eller skriva `grader / 2 / pi`.

I det fall vi har lagrat ett värde i en variabel så kommer varibeln att ersättas med dess värde innan operationen utförs. Detta sker automatiskt när koden körs av kompilatorn. 

### Divisionsberäkning
Noterbart avseende divisionsberäkning är att Python utför decimaltalsdivision. D.v.s. att även om vi dividerar två heltal som resulterar i en jämn kvot såsom `6 / 2` så skulle resultatet bli 3.0 snarare än 3. Om man vill utföra heltalsdivision så behöver man istället nyttja operatorn `//`:
```python
# Exempel 2
>>> 10/2
# will print 5.0 
>>> 10//2
# will print 5 
```

I det fall man tillämpar heltalsdivision så kommer kompilatorn alltid avrunda resultatet nedåt:
```python
# Exempel 3
>>> 10/4
# will print 2.5 
>>> 10//4
# will print 2 
```
## Jämföra värden i Python
När man programmerar vill man ofta jämföra två variabler. Det kan exempelvis vara jämförelseoperationer som avgör om ett tal är större eller mindre ett annat tal. När man jämför två variabler får man alltid tillbaka värdet `True`, eller `False`, det vill säga, du får tillbaka om operationen är sann eller falsk.

Exempel: Jämföra två variabler i Python
Vi kan enkelt jämföra två variabler:
```python
a = 10
b = 5
print(a > b)
```

I detta fall blir utskriften `True`, eftersom det är sant att variabeln `a` har ett högre värde än variabeln `b`.

På samma sätt får vi i detta fall:
```python
a = 10
b = 5
print(b > a)
```
Utskriften `False` eftersom det är falskt påstående.

Vanligtvis utför man jämförelseoperationer i `if`-satser där man vill att någonting ska utföras beroende på huruvida ett uttryck är sant eller falskt. På så sätt kan vi skapa _villkorsstyrd programmering_, så att vissa operationer enbart utförs om vissa krav är uppfyllda. Exempelvis vill vi bara ta emot biljetten för karusellen **OM** gästen är längre än 160cm.

### Vanliga sätt att jämföra variabler
Nedan visas de vanligaste sätten att jämföra två variabler:

<div align="center">

| Jämförelse                | Notation | Exempel där A = 5, B = 10 |
| :-: | :-:|:-:
| Mindre än                 | <        | A < B   #true             |
| Större än                 | >        | B > A   #true             |
| Mindre än eller lika med  | <=       | A <= B  #true             |
| Större än eller lika med  | >=       | B >= A  #true             |
| Lika med                  | ==       | A == B  #false            |
| Inte lika med             | !        | A != B  #true             |

</div>

Vi får alltså tillbaka `True` eller `False` beroende på om påståendet är sant eller falskt.

### Logiska operatorer i Python
Det finns även logiska operatorer i Python. Med dessa kan vi avgöra om flera påstående är sanna eller falska samtidigt.

<div align="center">

| Operator  | Syntax          | Exempel där A = 5, B = 10     |
| :-:| :-:|:-:
| OCH       | `and` alt. `&`  | A == 10 & B == 10     #false  |
| ELLER     | `or` alt. \|    | A > 1 | B == 20       #true   |
| INTE      | `not` alt. `!`  | A > 5 and not B == 5  #true   |

</div>

### Exempel på logiska jämförelser i Python
Nedan kommer ett par exempel på logiska operationer och vad utskriften blir.

#### Lika-med-operatorn
Sant om det vänstra **och** högra uttrycket är likadant.

Lika-med-operatorn avgör om två variabler är lika med varandra. Lika-med-operatorn anger man med dubbla “lika-med-tecken” (`==`).
```python
# Exempel 1
number1 = 3
number2 = 4
print(number1 == number2)

string1 = "true"
bool1 = true
print (string1 == bool1)
```
I detta fall blir den första utskriften `false`, eftersom `number1` och `number2` inte har samma värde. Även den andra utskriften kommer att resulter i `false` då `string1` är av datatypen `string` och `bool1` är av datatypen `bool` - d.v.s. att de inte är likvärdiga.

```python
#Exempel 2
bool1 = true
number1 = 1
print(a == b)
```
Här blir utskriften `true` eftersom `1` kan tolkas som det booleska värdet `true` i Python. På samma vis kan vi nyttja `0` för att indikera `false`, och vice versa.

#### Inte-lika-med-operatorn
Sant om det vänstra uttrycket **inte** är detsamma som det högra uttrycket.

Inte-lika-med-operatorn (`!=`) avgör om två variabler eller uttryck inte är likadana.
```python
#Exempel 3
number1 = 5
number2 = 6
print(number1 != number2)
```
Ovanstående kod ger `true` eftersom variablen `number1` inte är lika med variablen `number2`.

#### AND och OR-operatorerna
`AND`-operatorn nyttjas för att undersöka om **båda** uttryck är sanna medan `OR`-operatorn nyttjas för att undsöka om det vänstra uttrycket **eller** det högra uttrycket är sant. Resp. operator nyttjas med andra ord i de fall man vill undersöka två _logiska uttryck_.

```python
#Exempel 4
bool1 = true
bool2 = true
print(bool1 and bool2) # Alt. print(bool1 & bool2)
```
Utskriften blir `true` då både `bool1` och `bool2` har värdet `true`. Om `bool1` eller `bool2` hade haft värdet `false` så hade resultatet dock blivit `false`. 

```python
#Exempel 5
bool1 = true
bool2 = false
print(bool1 or bool2) # Alt. print(bool1 | bool2)
```
Utskriften blir `true` trots att `bool2` har värdet `false` då `bool1` har värdet `true`. Om `bool1` samt `bool2` båda haft värdet `false` så hade resultatet dock blivit `false`. 

#### Inte-operatorn
Utvinner det inverterade värdet hos en variabel eller ett uttryck, d.v.s. att vi vill identifiera motsatsen till ett _booleskt uttryck_. Med det sistnämnda menar vi på att operatorn nyttjas för att invertera ett `true`-värde till ett `false`-värde eller vice versa. Vi kan inte nyttja det för att identifiera ett inverterat värde till heltalet `10` eller dylikt.
```python
#Exempel 6
bool1 = false
print(not bool1) # Alt. print(!bool1)
```
Utskriften blir `true`, eftersom värdet i `bool1` är `false` - d.v.s. att vi får tillbaka det inverterade värdet på variabeln.

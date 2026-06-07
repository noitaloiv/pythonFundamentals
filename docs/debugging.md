---
layout: default
title: "12. Debugging/felsökning"
nav_order: 13
---

# Debuggingtekniker
Debugging är processen att hitta och åtgärda buggar (fel) i programvaran. Förståelsen av felsökning, eller debugging, är avgörande för varje programmerare och att kunna identifiera och korrigera fel (buggar) i din kod är en viktig färdighet och något som kommer att ligga till grund för en ökad förståelse av den kod du skriver. I det här avsnittet kommer vi att gå igenom grundläggande debuggingtekniker som hjälper dig att snabbt hitta och åtgärda fel i dina Python-program.

## Vad är en bugg?
En bugg är ett fel i programmet som orsakar  att programmet resulterar i ett oväntat beteende (t.ex. som att fel resultat ges vid summering av två heltal eller dylikt) eller att applikationen till och med avbryts och kraschar. Buggar kan uppstå av många olika skäl, inklusive felaktig kodning, missförstånd av specifikationen, eller oförutsedda användarinteraktioner.

![Debugging](../assets/images/banners/ch12.png){: .styled-image }

## Grundläggande felsökning
Ett av de enklaste sätten att debugga är att använda `print()`-funktionen för att visa värden på variabler eller för att bekräfta att exekveringen har nått en viss del av koden. Ponera exempelvis att vi vill undersöka resultatet på en matematisk operation enligt:
```python
sum_of_operations = (10 * 4 / (4-2)) * 14 / 8
print(sum_of_operations)
```
<div class="code-example" markdown="1">
<pre><code>35.0</code></pre>
</div>

Vi kan även bryta ned det i flera delar och undersöka varje uttryck var för sig:
```python
evaluate1 = 4-2
print(evaluate1)
evaluate2 = 4 / evaluate1
print(evaluate2)
evaluate3 = 10 * evaluate2
print(evaluate3)
evaluate4 = 14/8
print(evaluate4)
result = evaluate3 * evaluate4
print(result)
```
<div class="code-example" markdown="1">
<pre><code>2
2.0
20.0
1.75
35.0</code></pre>
</div>

## Inbyggd felsökning i Visual Studio Code
Ovan tillvägagångssätt kan dock snabbt bli förhållandevis tradigt och det finns därför andra sätt att felsöka på. Visual Studio Code har exempelvis en inbyggd felsökare (som ingår i tillägget Python när du installerar det) vilket låter dig stega igenom koden - rad för rad. Detta ger dig en djupare förståelse av hur ditt program fungerar samt vart och varför vissa problem uppstår.

Debugging-verktyget nyttjas enligt följande steg:
1. Placera en s.k. break-point (brytpunkt) på den kodrad som du vill påbörja felsökningen från.
![Adding breakpoint](../assets/images/debugging/breakpoint.png){: .styled-image }

    Brytpunkten läggs till genom att vänsterklicka där du ser den röda pricken i bilden och du tar bort brytpunkter genom att klicka på den på nytt. Det är även möjligt att lägga till flera brytpunkter, i de fall man t.ex. vill kunna hoppa från en brytpunkt till en annan istället för att stega igenom koden.
![Placing breakpoint](../assets/images/debugging/add_breakpoint.png){: .styled-image }

2. Starta debugging, t.ex. genom att klicka på "Debug Python File", F5 eller "Start Debugging" från "Run"-menyn.
![Run debugger](../assets/images/debugging/run_debugger.png){: .styled-image }

    Din kod kommer nu att exekveras fram till och med den brytpunkt du placerat och du kommer bemötas av ett nytt gränssnitt.
![Extensions in VSCode](../assets/images/debugging/debugging.png){: .styled-image }

3. Du har nu möjligheten att stega igenom koden via navigationsmenyn t.ex. genom att antingen hoppa till nästa brytpunkt, stega igenom varje rad var för sig eller avbryta felsökningen.
![Extensions in VSCode](../assets/images/debugging/debugging_navigation.png){: .styled-image }

    Notera att du kan se värdet i dina variabler i fönstret till vänster såväl som genom att hovera över variabelns namn (så länge kodraden i fråga faktiskt har exekverats, d.v.s. att variabeln har tilldelats ett värde.)
![Extensions in VSCode](../assets/images/debugging/debugging_values.png){: .styled-image }

Detta är ett extremt värdefullt verktyg när man försöker identifiera eventuella fel eller oväntade resultat som har uppstått i koden. Exempelvis kan vi gå igenom varje iteration av en loop steg-för-steg för att identifiera varför ett specifikt felmeddelande dyker upp vid körning av koden. Du kan läsa mer om hur man använder verktyget här: [VS Code - Debugging](https://code.visualstudio.com/docs/python/debugging#_basic-debugging)

## Debugging med `breakpoint()` och `pdb`
Utöver att felsöka med `print()` och Visual Studio Codes inbyggda debugger kan vi även använda Pythons egen debugger, `pdb`.

`pdb` står för just "Python Debugger" och låter oss pausa programmet under körning, undersöka variabler samt köra programmet steg för steg. Det kan vara särskilt användbart när vi vill förstå exakt vad som händer i ett program, exempelvis i en loop eller i en funktion som inte returnerar det värde vi förväntar oss.

### `breakpoint()`
Det enklaste sättet att starta Pythons debugger är att skriva `breakpoint()` på den rad där vi vill pausa programmet.

```python
def calculate_total(price, quantity): 
    breakpoint() 
    total = price * quantity 
    return total 

result = calculate_total(50, 3) 
print(result)
```

I ovan exempel har vi skrivit en funktion - `calculate_total` - vars syfte är att beräkna ett totalbelopp genom att multiplicera enhetspris mot antalet enheter. I denna funktion har vi sedan lagt till `breakpoint()`, i syfte om att felsöka funktionen.

När koden körs och vi kommer till raden med `breakpoint()` så pausas nämligen körningen och i terminalen visas då en särskild prompt:
```python
(Pdb)
```

Detta innebär att programmet just nu befinner sig i debugläge/felsökningsläge och du kan då skriva olika kommandon för att undersöka programmet.

### Vanliga kommandon i `pdb`
Några av de vanligaste kommandona är:
* `p variable_name` – skriver ut värdet på en variabel.
* `n` – kör nästa rad.
* `s` – går in i ett funktionsanrop.
* `c` – fortsätter körningen tills nästa brytpunkt eller tills programmet avslutas.
* `q` – avslutar debugläget.

Exempelvis enligt:
```python
(Pdb) p price 
50 
(Pdb) p quantity 
3 
(Pdb) n 
(Pdb) p total 
150 
(Pdb) c
```

Här använder vi `p price` och `p quantity` för att undersöka värdena i variablerna. Därefter kör vi nästa rad med `n`, vilket gör att `total` beräknas. Sedan skriver vi ut `total` och fortsätter programmet med `c`.

### När är `pdb` användbart?
`pdb` är särskilt användbart när:

* du vill se hur variabler förändras över tid,
* ett program kraschar men du inte förstår varför,
* du vill förstå hur en loop eller funktion körs,
* du inte har tillgång till en grafisk debugger,
* du vill felsöka direkt i terminalen.

{.highlight }
För att förtydliga så måste du generellt sett inte arbeta med `pdb` om du använder dig utav en IDE såsom Visual Studio Code eller dylikt. Det är istället ett inbyggt tillvägagångssätt för felsökning i Python.

## Inbyggd hantering av syntaxfel
Visual Studio Code hjälper även till med att identifiera syntaxfel och andra problem i din kod med understrykningar och beskrivningar. Exempelvis får vi varningar om vi deklarerar en variabel utan att tilldela den ett värde:

![Extensions in VSCode](../assets/images/debugging/warnings.png){: .styled-image }

Vid faktiska fel (som medför att programmet dessutom inte är körbart) så får vi även information om vad felet beror på - vilket kan hjälpa oss att lösa problemet:

![Extensions in VSCode](../assets/images/debugging/syntaxError.png){: .styled-image }

# Sammanfattning
Att bemästra debuggingtekniker är avgörande för alla programmerare. Genom att använda Visual Studio Codes inbyggda verktyg och Python-specifika metoder som `print()`, kan du effektivt identifiera och åtgärda problem i dina program. Pythons inbyggda debugger `pdb` möjliggör också för att pausa program, undersöka variabler och köra kod steg för steg - där funktionen `breakpoint()` är det enklaste sättet att starta debuggern. 

Genom att kombinera `print()`-felsökning, VS Code-debuggern och `pdb` får du flera olika verktyg för att förstå och rätta fel i dina program.

Denna kunskap, tillsammans med en solid förståelse för felhantering, lägger grunden för att skriva robust och pålitlig kod.
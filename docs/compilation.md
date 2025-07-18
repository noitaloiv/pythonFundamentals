---
layout: default
title: "3. Kompilation"
nav_order: 4
---

# Hur fungerar programmering?
Du har nu skrivit och kört ditt första program, men du kanske inte har funderat kring hur datorn faktiskt förstår de instruktioner du har givit den. Som du kanske vet så talar alla datorer i s.k. binärkod - d.v.s. i 1:or och 0:or - inte på språk som är människoläsbara såsom Python. Exempelvis kan vi uttrycka ordet `"Hi"` i binärkod enligt:

```python
01001000 01101001
```
Där `01001000` representerar ett `H` och `01101001` representerar ett `i`. För att underlätta vid utveckling av program så kan vi idag istället arbeta med s.k. _högnivåspråk_ som förlitar sig på en s.k. _kompilator_ som översätter dina instruktioner till körbar maskinkod. Denna process utmynnar generellt sett i följande steg:
* bryta upp koden i mindre delar, 
* kontrollerar ifall det förekommer några fel i koden, 
* översätter koden till maskinkod, 
* producerar en körbar fil som instruerar datorn att utföra/exekvera maskinkoden vilket avslutningsvis leder till att texten `"Hello world!"` visas upp i din terminal.

Detta är något som sker varje gång som man exekverar ett program.

Avseende felkontrollen så agerar kompilatorn även rollen som korrekturläsare av din kod. De typer av fel som fångas upp av kompilatorn kallas för _kompileringsfel_.

Python är dock ett _tolkat språk_, till skillnad mot kompilerade språk såsom C eller Java. Detta innebär att koden du skriver _tolkas_ och _exekveras_ direkt av Python-tolken istället för att först kompileras till maskinkod. Även i Python sker en form av kompilering, fast i en lite annorlunda bemärkelse. Låt oss utforska detta djupare.

![Create folder and drag](../assets/images/banners/ch3.png){: .styled-image }

## Kompilering och tolkningsprocessen i Python
När du kör ett Python-skript, går din kod igenom två huvudsakliga steg: ett _kompileringssteg_ och ett _exekveringssteg_.

### "Kompilering"
I det första steget omvandlar Python din kod till något som kallas för _"bytecode"_. _Bytecode_ är en lågnivå, plattformsoberoende representation av din källkod som kan tolkas av Python-tolken. Denna process sker automatiskt och är transparent för användaren. Kompileringen sker endast en gång för varje skript, såvida inte koden ändras.

### "Tolkning"
Efter att koden har kompilerats till _bytecode_, tolkas och exekveras denna _bytecode_ av Python-tolken. Tolken läser igenom _bytecode:n_ - en instruktion i taget - och utför vad varje instruktion säger. Denna process sker i realtid när du kör ditt skript.

![Create folder and drag](../assets/images/chapter_images/ch3.png){: .styled-image }

### Jämförelse mot kompilerade språk
Till skillnad mot kompilerade språk, där koden kompileras direkt till maskinkod som kan exekveras direkt av datorns CPU, kompileras alltså Python-kod först till en "mellannivå" (_bytecode_) som sedan exekveras av Python-tolken. Detta tillåter Python att vara plattformsoberoende - d.v.s. att samma Python-kod kan köras på vilket operativsystem som helst - så länge det finns en Python-tolk installerad på maskinen.

### Fördelar och nackdelar
✅ Plattformsoberoende: Python-kod kan köras på alla system där en s.k. Python-tolk är installerad.

✅ Flexibilitet och dynamik: Python tillåter för dynamiska datatyper och sena bindningar (late bindings), vilket gör det enklare att skriva flexibel kod. D.v.s. att vi t.ex. inte på förhand måste definiera datatypen för en variabel.

✅ Enkel syntax och läsbarhet: Python har - argumenterbart - ett enkelt, engelskliknande språk vilket gör det lättare att lära sig, läsa och underhålla jämfört mot vissa andra språk

Exempel (i Python):
```python
for item in list:
    ...
```

Exempel (i C): 
```c
for (int i = 0; i < cars.Length; i++) 
{ ... }
```

✅ Stort ekosystem och bibliotek: Python har ett stort antal bibliotek och ramverk för allt från dataanalys till webbutveckling och AI/ML. Det gör att man kan utveckla avancerade system snabbt utan att skriva allt från grunden.

❌ Prestanda: Eftersom Python-kod tolkas vid körning kan prestandan vara lägre jämfört mot andra, kompilerade språk.

❌ Mindre kontroll över hårdvara/minne: Python ger mindre låg-nivåkontroll jämfört med språk som C/C++, vilket kan vara en nackdel i system där hårdvaruoptimering är viktigt.

❌ Dynamisk typning kan leda till svårupptäckta fel: Eftersom Python är "dynamiskt typat" kan vissa typer av buggar dyka upp först vid körning av ett program, vilka i andra språk hade fångas upp innan körning.

❌ Distributionsproblem: Python-program kräver att tolken är installerad på maskinen som kör koden, vilket kan skapa hinder jämfört mot en fristående fil.

# Sammanfattning
Även om Python primärt är ett _tolkat språk_, innefattar dess exekveringsprocess ändå ett steg där källkoden kompileras till _bytecode_. Denna process bidrar till Pythons flexibilitet och plattformsoberoende, samtidigt som den erbjuder en relativt smidig utvecklingscykel. 

{: .highlight }
Att förstå denna process kan hjälpa dig att bättre förstå hur dina Python-program körs och hur du kan optimera dem för bättre prestanda, men notera att detta inte examineras i denna kurs. Det är viktigt att ta i beaktande vid mer avancerad programmering, men det bör inte vara ditt fokus när du lär dig programmering.
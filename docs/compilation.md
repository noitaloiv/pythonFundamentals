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

## Kompilering och tolkningsprocessen i Python
När du kör ett Python-skript, går din kod igenom två huvudsakliga steg: ett _kompileringssteg_ och ett _exekveringssteg_.

### "Kompilering"
I det första steget omvandlar Python din kod till något som kallas för _"bytecode"_. _Bytecode_ är en lågnivå, plattformsoberoende representation av din källkod som kan tolkas av Python-tolken. Denna process sker automatiskt och är transparent för användaren. Kompileringen sker endast en gång för varje skript, såvida inte koden ändras.

### "Tolkning"
Efter att koden har kompilerats till _bytecode_, tolkas och exekveras denna _bytecode_ av Python-tolken. Tolken läser igenom _bytecode:n_ - en instruktion i taget - och utför vad varje instruktion säger. Denna process sker i realtid när du kör ditt skript.

### Jämförelse mot kompilerade språk
Till skillnad mot kompilerade språk, där koden kompileras direkt till maskinkod som kan exekveras direkt av datorns CPU, kompileras alltså Python-kod först till en "mellannivå" (_bytecode_) som sedan exekveras av Python-tolken. Detta tillåter Python att vara plattformsoberoende - samma Python-kod kan köras på vilket operativsystem som helst - så länge det finns en Python-tolk installerad - utan att behöva kompileras om för varje plattform.

### Fördelar och nackdelar
++ Plattformsoberoende: Python-kod kan köras på alla system där en Python-tolk är installerad utan behov av omkompilering.

++ Flexibilitet och Dynamik: Python tillåter dynamiska datatyper och sena bindningar, vilket gör det enklare att skriva flexibel kod.

-- Prestanda: Eftersom Python-kod tolkas vid körning, kan prestandan vara lägre jämfört med kompilerade språk. Detta kan dock ofta mildras genom optimeringar och användning av verktyg som Cython eller PyPy.

# Sammanfattning
Även om Python primärt är ett _tolkat språk_, innefattar dess exekveringsprocess ändå ett steg där källkoden kompileras till _bytecode_. Denna process bidrar till Pythons flexibilitet och plattformsoberoende, samtidigt som den erbjuder en relativt smidig utvecklingscykel. 

{: .highlight }
Att förstå denna process kan hjälpa dig att bättre förstå hur dina Python-program körs och hur du kan optimera dem för bättre prestanda, men notera att detta inte examineras i denna kurs. Det är viktigt att ta i beaktande vid mer avancerad programmering, men det bör inte vara ditt fokus när du lär dig programmering.
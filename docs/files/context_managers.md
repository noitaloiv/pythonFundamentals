---
layout: default
title: "36. Context managers & with"
nav_order: 37
parent: "35. Filhantering"
---

# Context Managers och `with`-satsen
Context managers är kraftfulla verktyg i Python som tillåter dig att allokera och frigöra resurser precis när du behöver dem. Det vanligaste användningsområdet för context managers är vid hantering av filer. Med hjälp av `with`-satsen kan vi säkerställa att en fil stängs ordentligt efter att dess innehåll har hanterats, oavsett om ett undantag inträffar eller inte.

Användningen av `with`-satsen förenklar hantering av resurser genom att ta hand om upprättandet och stängningen av resurser automatiskt. Detta koncept är inte begränsat till filhantering utan kan appliceras på alla resurser som kräver en _explicit frigöring_, såsom nätverksanslutningar eller databasanslutningar.

Ponera att vi behöver läsa data från en fil. Istället för att manuellt öppna och stänga filen kan vi använda `with`-satsen som sköter detta åt oss:
```python
with open('example.txt', 'r') as file:
    data = file.read()
    print(data)
```

I exemplet ovan används `open()`-funktionen tillsammans med `with`-satsen för att öppna en fil. file är en variabel som representerar filobjektet. När blocket under `with`-satsen har exekverats färdigt, stängs filen automatiskt, även om ett fel skulle uppstå under exekveringen.

Detta sätt att hantera filer reducerar risken för filrelaterade fel, såsom att glömma att stänga en fil, vilket kan leda till minnesläckor eller korruption av data. Det säkerställer att resursen frigörs korrekt och gör koden mer läsbar och robust.

## Context Managers
En Context Manager i Python är ett objekt som är designat för att användas tillsammans med `with`-satsen och som har specifika metoder för att hantera körningskontexten. Dessa metoder är __enter__ och __exit__. En Context Manager ser till att nödvändiga förberedelser görs _innan_ dess block körs och att städning/avslutningsprocedurer genomförs efteråt.

I nedan exempel är `ManagedFile` en Context Manager eftersom den implementerar __enter__ och __exit__ metoderna. När vi använder `ManagedFile` med `with`-satsen garanteras att filen öppnas vid början av `with`-blocket och stängs när blocket avslutas, oavsett om ett undantag kastas eller inte, vilket ger en tydlig struktur för resurshantering.
```python
class ManagedFile:
    def __init__(self, filename):
        self.filename = filename

    def __enter__(self):
        self.file = open(self.filename, 'r') # Preparations (in this case - open the file)
        return self.file                     # Return the object (the file) which can then be used in the with-block

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()                # Cleaning (in this case - close the file)

with ManagedFile('example.txt') as file:
    data = file.read()
    print(data)
```

När `with ManagedFile('example.txt')` körs, anropas först `__enter__`-metoden på `ManagedFile`-objektet. Detta öppnar filen och returnerar filobjektet, vilket gör det tillgängligt inom `with`-blocket under variabelnamnet `file`. När exekveringen lämnar `with`-blocket, oavsett om det skedde genom normal avslutning eller på grund av ett undantag, anropas `__exit__`-metoden. Det är här filen stängs, vilket säkerställer att resursen frigörs korrekt.

Context Managers är inte begränsade till filhantering utan kan användas i en mängd olika scenarier där resurser behöver allokeras och sedan frigöras, vilket gör dem till ett kraftfullt verktyg i Python-programmering. Genom att följa denna struktur bidrar Context Managers till att göra koden mer robust, säker och lättläst genom att automatisera hantering av resurser och städning.

{: .highlight }
Vi kommer att prata mer om klasser och objekt i framtida kapitel rörande objektorienterad programmering, men i detta fall kan `ManagedFile` tänkas motsvara en funktion som i sin tur innehåller flera funktioner.

## Använda Context Managers istället för enbart `with`-block
Att använda Context Managers i stället för att enbart förlita sig på ett `with`-block med inbyggda funktioner (såsom `open` för filhantering) erbjuder flera fördelar, speciellt när det gäller att hantera egna resurser eller mer komplexa uppgifter. Här är några skäl till varför det kan vara fördelaktigt att implementera egna Context Managers:

* Anpassad resurshantering: Med egna Context Managers kan du skräddarsy hur resurser allokeras och frigörs, vilket är särskilt användbart för resurser som inte har inbyggt stöd för context management eller när standardbeteendet inte passar dina behov.

* Ökad läsbarhet och underhållbarhet: Genom att definiera resurshanteringslogiken i en Context Manager blir din kod mer organiserad och lättläst. Användare av din Context Manager behöver inte oroa sig för detaljerna i resurshanteringen, vilket gör koden enklare att förstå och underhålla.

* Felhantering och städning: Context Managers ger en robust struktur för att hantera undantag och säkerställa att städning alltid sker, oavsett hur blocket avslutas. Detta minskar risken för resursläckor, som kan uppstå vid undantag eller fel.

* Återanvändbarhet: Genom att kapsla resurshanteringen i en Context Manager blir det enklare att återanvända samma logik i olika delar av din kod eller till och med i andra projekt, utan att behöva duplicera kod.

* Utökad funktionalitet: En Context Manager kan ge dig möjlighet att lägga till ytterligare funktionalitet runt öppning och stängning av resurser, såsom logging, mätning av exekveringstid, resurspoolning eller andra förberedande och avslutande åtgärder som inte direkt stöds av resursen själv.

Ponera exempelvis att vi vill etablera en databasanslutning. En Context Manager kan då inte bara hantera upprättandet och stängningen av anslutningen utan också säkerställa att transaktioner begås eller återställs på ett korrekt sätt, vilket minskar risken för datainkonsekvens.
```python
class DatabaseConnection:
    def __enter__(self):
        # Establish database connection
        self.connection = establish_connection()
        return self.connection

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Make sure that transactions are handled correct and close the connection
        if exc_type is not None:
            self.connection.rollback()
        else:
            self.connection.commit()
        self.connection.close()
```

Med denna Context Manager kan användaren interagera med databasen inom ett `with`-block, säker i vetskapen att anslutningen kommer att hanteras korrekt oavsett utfall:
```python
with DatabaseConnection() as conn:
    # Do database related operations
```

# Sammanfattning
`with`-satsen och Context Managers erbjuder en kraftfull mekanism för resurshantering i Python. De förenklar processen att allokera och frigöra resurser och ökar kodens robusthet och läsbarhet. Genom att automatiskt hantera stängning av resurser, såsom filer, nätverksanslutningar eller databaser, minskar `with`-satsen risken för fel och läckor i dina program. 

Även om `with`-blocket är kraftfullt för grundläggande resurshantering, ger skapandet av egna Context Managers dig en större kontroll och flexibilitet, samt gör din kod mer återanvändbar och underhållbar. Att bemästra dessa koncept är därför avgörande för att skriva effektiv och pålitlig Python-kod.
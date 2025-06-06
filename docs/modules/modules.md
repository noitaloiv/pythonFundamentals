---
layout: default
title: "37. Moduler"
nav_order: 38
has_children: True
---

# Moduler i Python
Python är känt för sin mångsidighet och effektivitet, mycket tack vare sitt omfattande bibliotek av moduler. En modul i Python kan ses som en samling kod – funktioner, klasser och variabler – som du kan inkludera i dina egna projekt. 

Python har ett rikt ekosystem av standardmoduler som tillhandahåller användbara funktioner för att utföra en mängd olika uppgifter, från matematiska beräkningar till att arbeta med datum och tider.

## Vad är en modul?
En modul i Python är en fil som innehåller Python-kod. Denna kod kan vara allt från variabler och funktioner till klasser. Moduler används för att organisera kod på ett logiskt sätt och återanvända kod över flera projekt. Tänk på moduler som verktygslådor som innehåller alla verktyg du behöver för ett specifikt jobb.

![Modules in Python](../assets/images/banners/ch37.png){: .styled-image }

## Importera moduler
För att använda en modul i ditt Python-skript måste du först 'importera' den med hjälp av nyckelordet `import`. Det finns olika sätt att importera moduler på:

* Importera hela modulen: <br>
Detta gör alla funktioner och klasser inom modulen tillgängliga i ditt skript.
    ```python
    import math
    squared = math.sqrt(16)    # Uses the sqrt-function from the math module
    ```

* Importera specifika attribut: <br>
Om du bara behöver vissa funktioner eller klasser kan du importera dem direkt. Detta kan göra ditt skript mer läsbart och effektivt.
    ```python
    from math import sqrt
    squared = sqrt(16)         # Only imports the sqrt function, allowing us to use it without math
    ```

## Vanliga och nyttiga moduler 
* `math`: <br>
Denna modul innehåller matematiska funktioner. Förutom `sqrt`, har den funktioner som `sin`, `cos`, `log` och många fler.
    ```python
    from math
    print (math.cos(0.00))      # 1.0
    print (math.cos(-1.23))     # 0.3342377271245026
    print (math.cos(10))        # -0.8390715290764524
    ```

* `datetime`: <br>
Används för att hantera datum och tider. Med denna modul kan du extrahera den nuvarande tiden, manipulera datum, räkna ut tidsdifferenser, och mer.
    ```python
    from datetime import datetime
    print(datetime.now())   # Prints the current date and time
    ```

* `random`: <br>
Mycket användbar när du behöver generera slumpmässiga tal för spel, simuleringar eller för att välja ett slumpmässigt element från en lista.
    ```python
    import random
    print(random.randint(1, 100))  # Prints random numbers between 1 and 100
    ```

* `os` och `sys`: <br>
Dessa moduler används för att interagera med operativsystemet, till exempel för att hantera filvägar, ändra mappar och hämta information om Python-tolkaren.
    ```python
    import os, sys
    # Prints the name of the name of the folder where the script is stored
    print(os.getcwd()) 
    # Prints the version of the Python interpreter and additional info     
    print(sys.version)      
    ```

## Hitta och lära sig mer om moduler
Python har ett omfattande standardbibliotek med moduler redo att användas. Dessutom finns det tusentals tredjepartsmoduler tillgängliga. Här är några resurser för att hitta och lära dig om moduler:

* [Python Standard Library](https://docs.python.org/3/tutorial/modules.html): <br>
Python-dokumentationen är en utmärkt resurs. Den innehåller en fullständig lista över standardbibliotekets moduler med beskrivningar och exempel.

* [PyPI (Python Package Index)](https://pypi.org/): <br>
Förutom standardbiblioteket finns det tusentals tredjepartsmoduler tillgängliga på PyPI. Dessa kan installeras med `pip`, Pythons pakethanterare.

* Exempel och tutorials: <br>
Det finns många online-resurser, inklusive tutorials och exempel, som visar hur man använder olika moduler.

### Praktiska exempel
* Använda `random` för att välja ett slumpmässigt element:
```python
import random
frukter = ["apple", "banana", "lemon"]
print(random.choice(frukter)) # Will print either 'apple', 'banana' or 'lemon' each run
```

* Beräkna skillnaden mellan två datum med `datetime`:
```python
from datetime import datetime
date1 = datetime(2024, 1, 1)
date2 = datetime.now()
difference = date2 - date1
print(f"Days since the new year: {difference.days}")
```

## Sammanfattning
Förståelsen och användningen av moduler är central i Python-programmering. Genom att effektivt använda moduler kan du dra nytta av förskrivna funktioner och klasser, vilket minskar mängden kod du behöver skriva själv och underlättar kodåteranvändning. Som nybörjare är det viktigt att bli bekant med några av de grundläggande modulerna och sedan utforska vidare baserat på dina projektbehov och intressen.
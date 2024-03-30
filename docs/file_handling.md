---
layout: default
title: "35. Filhantering"
nav_order: 36
---

# Filhantering
Att hantera filer är en grundläggande del av många program, och Python erbjuder en enkel syntax för att öppna, läsa, skriva och stänga filer. Genom att förstå och utnyttja Pythons filhanteringsfunktioner kan du enkelt interagera med filsystemet för att lagra och hämta data.

## Öppna och Stänga Filer
Använd `open()`-funktionen för att öppna en fil. `open()` tar två huvudargument: filens sökväg och öppningsläget, som `'r'` för läsning, `'w'` för skrivning (överskriver filens innehåll), `'a'` för att lägga till (skriver till slutet av filen), och `'b'` för binärt läge.

När du är klar med filen, använd `close()`-metoden för att stänga den och frigöra systemresurser.
```python
file = open('example.txt', 'r') # Open/read the file
# Do something with the file
file.close() # Close the file
```

### Skriva till Filer
Använd `write()`-metoden för att skriva strängar till en fil. Om filen öppnas i `'w'`-läge, kommer innehållet att överskrivas. Använd `'a'`-läge för att lägga till innehåll i slutet av filen.
```python
# Write to a file
file = open('new_file.txt', 'w')
file.write('Hi from Python!\n')
file.close()

# Add to existing file
file = open('new_file.txt', 'a')
file.write('Another row of text.\n')
file.close()
```

### Läsa från Filer
För att läsa en fils innehåll finns det flera metoder, som `read()`, `readline()` och `readlines()`:
```python
# Read the entire file
file = open('example.txt', 'r')
content = file.read()
print(content)
fil.close()

# Read file row by row
file = open('example.txt', 'r')
for row in file:
    print(row, end='')  # 'end' to avoid double rowbreak
file.close()
```

### Använda with-Satsen
För att undvika problem med att inte stänga filer ordentligt är det rekommenderat att använda `with`-satsen, vilket säkerställer att filen stängs korrekt när blocket är slutfört.
```python
# Read the entire file
with open('exempel.txt', 'r') as file:
    content = file.read()
    print(content)
# File closes automatically here
```

### Hantera Filvägar
Modulen `os.path` kan användas för att konstruera och hantera filvägar på ett plattformsoberoende sätt, vilket gör din kod mer portabel.
```python
import os

# Create a file path
file_path = os.path.join('mapp', 'example.txt')
```

## Sammanfattning
Filhantering är en kritisk aspekt av många program, och Python erbjuder flexibla verktyg för att läsa och skriva filer. Genom att följa goda praxis som att använda `with`-satsen för resurshantering och `os.path` för att hantera filvägar kan du skapa robust och plattformsoberoende kod som interagerar effektivt med filsystemet.
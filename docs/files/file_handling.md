---
layout: default
title: "36. Filhantering"
nav_order: 37
has_children: True
---

# Filhantering
Att hantera filer är en grundläggande del av många program, och Python erbjuder en enkel syntax för att öppna, läsa, skriva och stänga filer. Genom att förstå och utnyttja Pythons filhanteringsfunktioner kan du enkelt interagera med filsystemet för att lagra och hämta data.

![File handling](../assets/images/banners/ch35.png){: .styled-image }

## Öppna och stänga filer
Använd `open()`-funktionen för att öppna en fil. `open()` tar två huvudargument: filens sökväg och öppningsläget, som `'r'` för läsning, `'w'` för skrivning (överskriver filens innehåll), `'a'` för att lägga till (skriver till slutet av filen), och `'b'` för binärt läge.

När du är klar med filen, använd `close()`-metoden för att stänga den och frigöra systemresurser.
```python
file = open('example.txt', 'r') # Open/read the file
# Do something with the file
file.close() # Close the file
```

## Skriva till filer
Använd `write()`-metoden för att skriva strängar till en fil. Om filen öppnas i `'w'`-läge, kommer innehållet att överskrivas, alt. så skapas en helt ny fil inuti samma mapp som ditt Python-script har exekverats ifrån. Du kan även använda `'a'`-läge för att lägga till innehåll i slutet av filen.
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

## Filvägar till filer
När du anger filens namn i `open()` så anger du mer specifikt filvägen till filen och filens namn. Om vi exempelvis anger: `open('new_file.txt', 'w')` så kommer vi att öppna filen `'new_file.txt'` om det finns en fil med det namnet i samma mapp som du kört ditt Python-script ifrån. Anger vi istället: `open('files/new_file.txt', 'w')` så försöker vi navigera till mappen `files` och sedan peka på filen. Vi behöver med andra ord alltid ta filvägen till filen vi vill öppna i beaktande.

```python
# Write to file within the same folder as the script
file = open('example.txt', 'w')
file.write('Hi from Python!\n')
file.close()

# Write to file within a subfolder of the folder that stores the script
file = open('Sub_folder/example2.txt', 'w')
file.write('Hi from Python!\n')
file.close()
```

{: .highlight }
Tänk på att eventuella sub-mappar måste existera om vi vill navigera till dem. Om mappen `files` inte existerar inom den mapp där python-scriptet är lagrat så kommer vi att bemötas av ett felmeddelande. `../` kan nyttjas för att "hoppa upp" en nivå i mapphierarkin, d.v.s. att `open('../example2.txt', 'w')` skulle försöka skriva till en fil som är placerad i mappen ovanför mappen där scriptet är lagrat.

## Läsa från filer
För att läsa en fils innehåll finns det flera metoder, som `read()`, `readline()` och `readlines()`:
```python
# Read the entire file
file = open('example.txt', 'r')
content = file.read()
print(content)
file.close()

# Read file row by row
file = open('example.txt', 'r')
for row in file:
    print(row, end='')  # 'end' to avoid double rowbreak
file.close()
```

Funktionen `readline()` kan nyttjas istället för att tillämpa iteration i de fall vi vill läsa in en rad i taget. Exempelvis enligt:
```python
# Where example.txt contains the following:
# Hello world
# I am programming in Python
# How are you?
file = open('example.txt', 'r')
print(file.readline())
print(file.readline())
file.close()
```
<div class="code-example" markdown="1">
<pre><code>Hello world
I am programming in Python</code> </pre>
</div>

`readlines()` kan istället nyttja för att läsa in allt innehåll i filen där varje rad i filen utgör ett element i en lista. Exempelvis enligt:
```python
# Where example.txt contains the following:
# Hello world
# I am programming in Python
# How are you?
file = open('example.txt', 'r')
print(file.readlines())
file.close()
```
<div class="code-example" markdown="1">
<pre><code>['Hello world\n', 'I am programming in Python\n', 'How are you?']</code> </pre>
</div>

Notera att vi i ovan kod inte säkerställer att filen existerar innan vi försöker läsa den, vilket kan leda till ett `FileNotFoundError`. För att hantera detta problem så bör vi med andra ord lägga till felhantering, exempelvis enligt:
```python
try:
    file = open('example.txt', 'r')
    content = file.read()
    print(content)
    fil.close()
except FileNotFoundError:
    print("The file does not exist")
```

## Hantera filvägar med `os.path`
Modulen `os.path` i Python är en del av det inbyggda `os`-modulen och erbjuder ett brett spektrum av funktioner för att interagera med filsystemet. Användningen av `os.path` gör det möjligt att konstruera, modifiera och undersöka filvägar på ett sätt som är kompatibelt över olika operativsystem, vilket ökar portabiliteten för din kod.

### Konstruera filvägar
För att bygga filvägar på ett säkert sätt som fungerar över olika operativsystem, använd `os.path.join()`. Detta garanterar att rätt typ av skiljetecken används för det specifika operativsystemet.
```python
import os

# Create a file path that works on all OS's
file_path = os.path.join('folder', 'subfolder', 'example.txt')
print(file_path)
```
<div class="code-example" markdown="1">
<pre><code># On Windows
folder\subfolder\example.txt</code></pre>
</div>

### Undersöka filvägar
`os.path` erbjuder funktioner för att få information om filvägar och filer, som `os.path.isdir()` för att kontrollera om en väg pekar på en mapp och `os.path.isfile()` för att kontrollera om vägen pekar på en fil.
```python
import os

path = 'folder'

# Check if path leads to a folder
if os.path.isdir(path):
    print(f"{path} is a folder.")

# Check if path leads to a file
if os.path.isfile(path):
    print(f"{path} is a file.")
```

### Hantera namn och filtillägg
`os.path` ger dig möjlighet att enkelt extrahera filnamnet och filtillägget från en filväg, vilket kan vara särskilt användbart för filbearbetningsuppgifter.
```python
import os

file_path = os.path.join('folder', 'example.txt')

# Extract filename and file extention
filename, file_extension = os.path.splitext(file_path)
print(f"File name: {filename}, file extension: {file_extension}")
```

## Sammanfattning
Filhantering är en kritisk aspekt av många program, och Python erbjuder flexibla verktyg för att läsa och skriva filer. `os.path`-modulen erbjuder robusta funktioner för hantering av filvägar som gör din kod mer anpassningsbar och plattformsoberoende. Genom att integrera dessa funktioner i dina filhanteringsrutiner kan du öka robustheten och flexibiliteten i dina program.
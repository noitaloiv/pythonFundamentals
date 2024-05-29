---
layout: default
title: "40. OOP"
nav_order: 41
has_children: true
---

# Introduktion till Objektorienterad Programmering (OOP)
Objektorienterad Programmering (OOP) är ett programmeringsparadigm som används för att strukturera program som samlingar av _objekt_, vilket tillåter oss att enkelt återanvända kod, bygga applikationer med skalbarhet i åtanke och som gör det enklare att underhålla program på sikt.

## Vad är objektorienterad programmering?
Objektorienterad programmering är en programmeringsstil som är baserad på konceptet av "objekt" vilka kan innehålla data i form av _fält_ (_fields_) - ofta kallade _attribut_ eller _egenskaper_ - samt kod, i form av procedurer (ofta kallade _metoder_).

### Nyckelprinciper inom OOP
OOP kan sägas stå på tre primära grundläggande principer som hjälper till att organisera och hantera programvarukomplexitet:

* _Inkapsling_: <br>
Denna princip handlar om att _dölja_ viss information och funktionalitet i ett objekt och bara exponera vissa delar till andra delar av programmet (såsom andra klasser och objekt). Detta hjälper till att minska systemets komplexitet och ökar återanvändbarheten av komponenter.


* _Arv_: <br>
Denna princip är en mekanism där en ny klass kan _ärva_ egenskaper och metoder från en befintlig klass. Den nya klassen, en s.k. "underklass" (sub class), kan lägga till sina egna unika egenskaper och metoder eller modifiera befintliga från den överordnade klassen. Exempelvis kan klassen `Car` ärva fordonsrelaterade egenskaper och metoder från klassen `Vehicle` då en bil är ett fordon. I klassen `Car` så kan vi sedan lägga till egenskaper och metoder som är säreget för just bilar. Detta främjar kodåteranvändning och skapar en naturlig hierarki inom programvarustrukturer.


* _Polymorfism_: <br>
Denna princip tillåter exempelvis metoder att göra olika saker baserat på vilket objekt metoderna tillhör. Detta innebär exempelvis att en metod kan ha samma namn men olika beteenden över olika klasser. Exempelvis skulle vi kunna ha en metod som kallas `display_info()` som kan nyttjas av klasserna `Car`, `Truck` och `Bike` men som listar olika typer av information beroende på om objektet är en bil, en lastbil eller en motorcykel. Detta koncept är särskilt användbart för att hantera flera objekt som delar samma gränssnitt (interface) men kräver olika implementeringar.

## Fördelar med OOP
Implementering av OOP i programutveckling medför flera fördelar:

* Modularitet: <br>
Eftersom OOP delar upp program i moduler, eller objekt, blir det enklare att underhålla och förstå kod. Varje objekt kan ses som en egen liten maskin med särskilda uppgifter och interaktioner.

* Återanvändbarhet: <br>
Genom arv kan nya objekt skapas med minimal kod, återanvända och utvidga befintlig kod, vilket sparar tid och resurser.

* Skalbarhet: <br>
OOP underlättar utvecklingen av mer komplexa program genom att bygga vidare på befintliga objekt och klasser, vilket möjliggör en stegvis utvecklingsprocess.

* Underhållbarhet: <br>
Med tydliga moduler och mindre kodupprepning blir systemet enklare att underhålla och felsöka.

# Sammanfattning
Objektorienterad programmering erbjuder en robust grund för att bygga mjukvara med tydliga strukturella och beteendemässiga scheman. Genom att lära sig och använda OOP-principer kan utvecklare effektivt hantera stora mjukvaruprojekt och förbättra programmens kvalitet och livslängd. 

Som nybörjare är det viktigt att förstå dessa koncept för att kunna utnyttja deras fulla potential i framtida programmeringsprojekt.
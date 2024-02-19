---
layout: default
title: "4. Statements och expressions"
---

# "Påståenden" (statements)
Ett påstående är en instruktion som vår kompilator kan utföra. Vi har redan sett exempel på tre sorters påståenden: `print()`, `type()` och tilldelning.

När du skriver ett påstående i din Python-fil och sedan kör koden via terminalen (alt. kör kod direkt genom terminalen) så kommer Python att kompilera koden och visa eventuella resultat. Med eventuella resultat avses att exempelvis tilldelning i sig självt inte kommer att skriva ut något i terminalen, om inte variabeln efter tilldelningen skrivs ut med hjälp av `print()`.
```python
# Exempel 1
assignment = "A value"
# nothing happens

assignment = "A value"
print(assignment)
# will print "A value"
```

Ett Python-skript innehåller generellt sett en sekvens av påståenden. Om det finns mer än ett påstående (med tillhörande utskrift) så kommer resultaten att visas ett i taget allteftersom att resp. påstående kompileras/körs - vilket sker i en hierarkisk ordning (d.v.s. från påståendet på den första kodraden till påståendet på den sista kodraden).
```python
# Exempel 2
number = 10
print(number)
# will print 10
number = 20
number = 30
print(number)
# will print 30
```

# "Uttryck" (expressions)
Ett uttryck är en kombination av värden, variabler och operatorer. Om du skriver ett uttryck, exempelvis `2 + 2`, så kommer kompilatorn att tolka och visa resultatet:
```python
# Exempel 1
>>> 2 + 2
# will print: 4
```

Ett uttryck som sådant måste dock inte innehålla värden, variabler såväl som operatorer för att klassas som ett uttryck. Ett värde eller en variabel i sig kan exempelvis evalueras som ett uttryck:
```python
# Exempel 2
>>> 10
# will print: 10
>>> number = 5
>>> number
# will print: 5
```

Att utvärdera ett uttryck är dock inte riktigt samma sak som att skriva ut ett värde, likt hur vi gjort tidigare med funktionen `print()`.
```python
# Exempel 3
>>> hello = "Hello, world!"
>>> hello
# will print: 'Hello, world!'

>>> print(hello)
# will print: Hello, world!
```

När kompilatorn visar värdet för ett uttryck använder den med andra ord samma format som du skulle använda för att ange ett värde. När det gäller strängar innefattar det således att värdet innehåller situationstecken. Om vi istället använder funktionen `print()` så kommer utskriften dock enbart att visa det faktiska värdet.

I ett Python-script så kan alla uttryck vara tillåtna sådana (d.v.s. att inga fel genereras), men det betyder inte nödvändigtvis att det resulterar i något som är synligt för en användare. Exempelvis skulle vi kunna skriva något i stil med:
```python
# Exempel 4
test_1 = "msg"
test_2 = 22
test_3 = 4 + 5
```
Men då vi aldrig gör något med de variabler vi skapat så kommer inget att skrivas ut. 

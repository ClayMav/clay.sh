---
layout: note
categories: notes
title: Algorithms Lecture 2
course: Algorithms - CS2500
topic: Recursion
---
## Recursion
Recursion is when a function or definition calls itself.

### Structure of Recursion
```python
if CONDITION:
    DIRECT CASE
else:
    RECURSIVE CASE(S)
```

List all direct calculations first, or else recursion will never end

EX:
```python
def f1(n):
    return 1 + f1(n-1)

print f1(1) # Hangs
```

```python
def f(n):
    if n<1:
        return 0
    else:
        return 1 + f2(n-1)

for i in range(10): # will always be i, i if positive
    print i, f2(i)
```

```python
def f3(n):
    if n==0:
        return 0
    else:
        return 1+f3(n-2)

for i in range(2,12,2): # Odd numbers will skip going to 0 and hang. This will work though
      print i, f3(i)
```

### The 3-5 Problem
- Show how to write any natural number >= 8 as a NON-NEGATIVE multiple of 3 and a NON-NEGATIVE multiple of 5
```python
def f35(n):
    if n<8:
        return "Error"
    elif n==8:
        return (1,1)
    elif n==9:
        return (3,0)
    elif n==10:
        return (0,2)
    else:
        m3, m5 = f35(n-3)
        return (1+m3,m5)
```

### Insertion Sort
- Suppose you want to sort [5, 2, 4, 6, 1, 3] by insertion sort, what do you get?

```python
def InsSortR(L):
    if len(L)<2:
        return L
    else:
        return Insert(L[-1], InsSortR(L[:-1]))

def Insert(e, sL):
    if len(sL) == 0:
        return [e]
    elif e >= sL[-1]:
        return sL+[e]
    else:
        return Insert(e, sL[:-1]) + [sL[-1]]
```

### Recursive GCD
```python
def GCD(a,b):
    if(0 == a %b): return b
    return GCD(b, a%b)
```

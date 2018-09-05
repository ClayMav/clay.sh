---
layout: note
categories: notes
title: Digital Logic Lecture 4
course: Introduction to Digital Logic - CPE2210
topic: Boolean Algebra
---
### AND Gate
- Symbol is rounded

|x|y|F|
|-|-|-|
|0|0|0|
|0|1|0|
|1|0|0|
|1|1|1|

### OR Gate
- Nose cone shape, triangular

|x|y|F|
|-|-|-|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|

### NOT Gate
- Also known as inverter
- Symbol is triangle with dot on top

|x|F|
|-|-|
|0|1|
|1|0|

### Operators
- Basic operators (more later)
  - AND = multiplication
  - OR = addition
  - NOT = ' or top-bar

Ex.
- F(a,b,c) = ab+c+ac'
- What are the variables?
  - a, b, c
- What are the literals?
  - a, b, c, a, c'
- What are the product terms?
  - ab, c, ac'

### Commutativity
- Communtative
- a + b = b + a
- ab = ba

### Distributive
- a(b + c) = ab + ac
- a + (bc) = (a + b)(a + c)

### Associative
- a(bc) = (ab)c

### Identity
- a + 0 = 0 + a = a
- a1 = 1a = a

### Complementary
- a + a' = 1

### Null
- a + 1 = 1
- a0 = 0

### Idempotent Law
- a + a = a
- aa = a

### DeMorgan's Law
- (a + b)' = a'b'
- (ab)' = a' + b'

### Absoption Law
- a + ab = a
- a(a + b) = a

### Theorem
- a + a'b = a + b
- a(a' + b) = ab

Ex.
- F = x'yz + x'yz' + xz
- Simplify
- F = x'y(z + z') + xz
- F = x'y + xz

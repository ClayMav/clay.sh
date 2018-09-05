---
layout: note
categories: notes
title: Digital Logic Lecture 6
course: Introduction to Digital Logic - CPE2210
topic: Karnaugh Maps
---
# Karnaugh Maps
Gray code is a 1 bit change per
000 -> 001 -> 011 -> 010 -> 110 -> 111 -> 101 -> 100
0 -> 1 -> 3 -> 2 -> 6 -> 7 -> 5 -> 4

|x|y|F|
|-|-|-|
|0|0|1|
|0|1|1|
|1|0|1|
|1|1|0|

y on left, x on top

| | | |x| |
| | | |0|1|
| | | | | |
|y|0| |1|1|
| |1| |1|0|

simplifies to x' + y'

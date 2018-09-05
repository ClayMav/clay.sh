---
layout: note
categories: notes
course: Database Systems - CS2300
topic: B Tree
---
B-Tree
- of order p (how many levels)
- Each internal node has the following format
  > <P1, <K1, Pr1>, P2, <K1, Pr1>, ... , Pq-1, <Kq-1, Prq-1>, Pq>
  - q <= p
  - Pi is a tree pointer a pointer to another node in the B-Tree
  - Pri is a data pointer, a pointer to a data block that contains a record with a search key value equal to Ki.

Must have ciel(p/2) pointers

> Likely seeing B-Tree or B+-Tree on the test

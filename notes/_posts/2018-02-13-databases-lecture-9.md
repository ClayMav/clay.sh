---
layout: note
categories: notes
course: Database Systems - CS2300
topic: File Organization (Cont.)
---
## Hashing
- Advantages
  - Fast search time
- Disadvantages
  - Collisions
  - Address space (wasted space)
    > the size of the address space is m (records) * n (buckets)

    > fixed size
  - Difficult to get a good hash function

### Buckets
- Once one bucket fills up, it splits into two
- binary tree
- Internal nodes have no data, but point
- leaf nodes contain data

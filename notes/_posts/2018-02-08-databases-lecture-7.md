---
layout: note
categories: notes
course: Database Systems - CS2300
topic: File Organization (Cont.)
---
Record i in an unordered, fixed length unspanned contigous file (relative file) can be accessed very easily, how?

> `ceil(i / bfr)` will be equal to the block that you are trying to access, and the displacement will tell you the record

**Above point might be on the exam**

#### Ordered Files
- Records will be sorted based on several **ordering fields**
- In the case that the *ordering field* is also a **key field**, the field is also called the **ordering key**

> Irrelevant info: **Index** is auxiliary information that we will use to find a position

Index files will add complexity, as they may need to be modified as files are deleted or modified. With ordered, much more so as many blocks may change at a time.

#### Hashing
- Allows us to establish a relationship between value and address.
- Uses an input (value) as a parameter in a hashing function which results in an address
- A good hashing function will distribute data evenly, minimalize collisions, and utilize space efficiently
- Problems:
  - Collisions, if the hash mapping is not 1-1 (i.e. value is not unique, or function produces same output)

##### Internal Hashing
- Happens in internal memory

##### External Hashing
- Happens in external storage (disk)
- The addresses are not to memory, but to blocks on the disk
- Collisions are better in external hashing

##### Collision Resolution
- **Open Hashing**: After collision, proceed to the next available spot
- **Chaining**: Each slot is augmented by a pointer that points to a table which contains overflow space
- **Multiple hashing**: A second (different) hash function is applied if collision occurs
- Insertion, deletion, and retrieval vary based on algorithm used.
- Chaining is easiest

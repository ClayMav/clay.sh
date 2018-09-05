---
layout: note
categories: notes
course: Database Systems - CS2300
topic: File Organization
---
**Spanning**: When a record is broken up into multiple blocks and each piece is paired with a pointer to point to the next segment

**Unspanned organization**: The case where records are not allowed to cross block boundaries.

**Blocking Factor**: Size of block / Size of records

> To get # of blocks for a file, calculate `r / brf` where `r` is the number of records in a file, and `brf` is the blocking factor

**Advantages of Blocking**:
- Higher performance
- Higher space utilization

> Computers can only read/write to blocks, not to records. Therefore, the formula `r / brf` determines how many I/O operations will happen per file accessed.

#### Allocating File blocks on disk
- **Contiguous allocation** - blocks used are on consecutive disk blocks:
  - Allows for *fast reading*
  - *Difficult* to expand the file
- **Linked allocaton** - each file block contains a pointer to the next file block
  - *Easy* to expand
  - *Slow* in reading the file
- **Cluster allocation**: Collections of blocks (**Clusters**), that are linked together.
  - Clustering is good based on the affinity of the data
- **Indexed allocation**: *Index blocks* contain pointers to file blocks

#### Operations on files
- **Retrieval** - File does not change
- **Update** - Changing file

##### Unordered Records
- **Insertion** is very efficient, `O(1)`
- **Search** is very expensive, `O(n)`
- **Deletion and Modification** is very expensive, modification may be problematic with variable-length. Generally speaking, `O()`

##### Ordered Records
- **Insertion** is very expensive.
- **Search** is very efficient, `O(log(base2)n)`
- **Deletion and Modification** is very efficient, as long as the size of the file does not grow too large for the current available space in the block.

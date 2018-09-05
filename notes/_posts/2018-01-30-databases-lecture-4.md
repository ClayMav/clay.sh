---
layout: note
categories: notes
title: Databases Lecture 4
course: Database Systems - CS2300
topic: Parallel Disks
---
**Disk Pack**: Group of disks

### RAID
- Increases performance and reliability with Data Striping
- Allows for reconstruction if a disk fails with Redundancy

**Data striping**
- Distributing data over multiple disks
- **Striping Unit**: size of segments located on each drive

**Redundancy**
  - **Check Disks**: Store redundant data on small number of separate disks
  - Distribute the redundant data uniformly over all disks
  - **Parity Schemes**: Additional information that can be used to recover from a failure of any one disk

#### Types of RAID:
- **Level 0**: Striping without Redundancy
  - Highest write speed
  - Highest space utilization
  - Not the highest read speed

- **Level 1**: Mirrored disk (Shadow)
  - Lowest space utilization
  - Parallel reads are allowed
  - Data is secure, as there is a full backup
  - Maximum transfer speed is equal to that of one of the disks

- **Level 0 + 1**: Striped and Mirrored
  - Parallel reads are allowed
  - Space utilization is same as Level 1 (Low)
  - Write involves two disks and cost of write is the same as Level 1
  - Transfer rate is equal to the aggregate bandwidth of the disks

- **Level 2**: Error Correcting Codes
  - The striping unit is a single bit
  - Hamming coding is used as a redundancy scheme
  - Space utilization increases as the number of data disks increases
  - Maximum transfer rate is equal to the aggregate bandwidth of the disks
    - Read is very efficient for large requests
    - Read is very bad for small requests of the size of an individual block
    - Why is this?

- **Level 3**: Bit Interleaved Parity
  - The striping unit is a single bit
  - Unlike Level 2, the check disk is just a single parity disk, disk utilization is higher
  - Write protocol is similar to Level 2 - read-modify-write cycle
  - Similar to Level 2, can process one I/O at a time. Each read/write request involves all disks

- **Level 4**: Block Interleaving Parity
  - The striping unit is a single block
  - Read requests of the size of a single block can be served just by one disk
  - Parallel reads are possible for small requests, large request can utilize full bandwidth
  - Space utilization increases with more disks
  - Read should be faster than Level 3

- **Level 5**: Block Interleaving Distributed Parity
  - Parity blocks are uniformly distributed among all disks. No bottleneck at check disks
  - Several writes can be done in parallel
  - Read requests have a higher level of parallelism

- **Level 6**: P+Q Redundancy
  - Can tolerate higher level of failures than Level 2
  - Requires two check disks
  - For
  small
  and
  large
  read
  requests,
  and
  large
  write
  requests,
  the
  performance
  is  similar
  to
  level
  5.
  - For
  small
  write
  requests,
  it
  behaves
  the
  same

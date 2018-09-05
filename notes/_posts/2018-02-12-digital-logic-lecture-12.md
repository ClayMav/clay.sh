---
layout: note
categories: notes
course: Introduction to Digital Logic - CPE2210
topic: Special Gates
---
- NAND
  - Outputs 0 when both inputs are 1 (opposite of AND)
- NOR
  - Outputs 1 if both inputs are 0 (opposite of OR)
- XOR ⊕
  - Outputs 1 when there are only odd numbered 1s inputted
- XNOR
  - Outputs 1 when there are only even numbered 1s inputted

### Expressing the gates as other gates
- NOT = same input NAND, same input NOR
- AND = double NAND, double NOT NOR
- OR = double NOT NAND, double NOR

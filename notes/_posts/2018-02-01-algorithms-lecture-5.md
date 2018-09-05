---
layout: note
categories: notes
title: Algorithms Lecture 5
course: Algorithms - CS2500
topic: Mathematical Induction
---
- Methodology in designing algorithms that proves program correctness
- Forms:
  - Simple Induction
  - Strong Induction

### Simple Induction
- Let P be the property Domain D
- to prove P(n), n < N is True:
  1. Base case: Verify that P(b) is true for b, start value
    - Check for two other values
  2. Induction Hypothesis: Assume P(n-1)
  3. Induction Step: Prove P(n) is True

#### Procedure?
1. Define the problem
2. Check base case and two other values
3. Assume that P(n-1) is true.
4. Prove that P(n) is true when base case is true and with the induction hypothesis.
5. Invoke principle of simple induction to prove that P(n) is true for all n in set of natural numbers.

#### Example:
Q. Prove that (n^3+2n) mod 3 = 0

1. Define the problem
  - Domain D = Set of natural numbers N
  - f(n) = (n^3+2n)
2. Check base case and two other values
  - n=0 f(0) mod 3 = 0 ✓
  - n=0 f(1) mod 3 = 0 ✓
  - n=0 f(2) mod 3 = 0 ✓
3. Induction Hypothesis
  - Assume f(n-1) mod 3 = 0
  - (n^3 - 3n + 5n - 3) mod 3 = 0
4. Induction Step
  - We have to prove that f(n) mod 3 = 0
  - f(n) - f(n-1) = 3n^2 - 3n + 3
  - f(n) = 3(n^2 - n + 1) + f(n-1)
  - f(n) mod 3 = 3(n^2 - n + 1) + f(n-1) mod 3
  - f(n) mod 3 = 0 + 0
5. By Principle of Induction, we conclude that f(n) mod 3 = 0 for all natural numbers

## Something is going on?
### Assume:
- Addition of nth line adds n regions (natural numbers might be domain??)

1. Base case:
  - n=1 we have 2 regions, Addition of one line introduces 1 more regions ✓
  - n=2 we have 4 regions, Addition of a second line introduces 2 more regions ✓
  - n=3 we have 7 regions, Addition of a third line introduces 3 more regions ✓
  - i <= 3 this holds
2. Induction Hypothesis:
  - Addition of (n-1)th line introduces (n-1) more regions
3. Inductive Step:
  - Addition of nth line introduces n more regions
  - Adding 1 line to existing (n-1) lines in general position in plane increases the number of regions by n
  - Since lines are in general position (non parallel, not more than 2 lines intersecting) it has to cut through the region
  - So, nth line intersects n existing regions
  - Lets consider the nth line to draw from our Induction hypothesis
  - Lets assume nth line is added. When (n-1)th line is not there. By Induction hypothesis it will introduce (n-1) regions

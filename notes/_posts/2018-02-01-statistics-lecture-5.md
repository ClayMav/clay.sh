---
layout: note
categories: notes
title: Engineering Statistics Lecture 5
course: Engineering Statistics - STAT3115
topic: Probability
---
#### Subjective Interpretation
- P(Impossibility) = 0
- P(Win the Lottery) ≈ 0
- P(Sure Thing) = 1
- P(Death and Taxes) ≈ 1 (basically assured)
- P("Heads on a coin toss") = 0.5
- P(Gender of newborn is Female) ≈ 0.5

#### Overcounting
- It is when you are doing unions and you count the same data more than once
- Happens when two data sets have overlap
- To counter for this, with two data sets
  - P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
- To counter for this, with three data sets
  - P(A ∪ B ∪ C) = P(A) + P(B) + P(C) - P(A ∩ B) - P(A ∩ C) - P(B ∩ C) + P(A ∩ B ∩ C)

### Laws/ Identities
#### Commutative Laws
- A ∪ B = B ∪ A
- A ∩ B = B ∩ A

#### Associative Laws
- A ∪ B ∪ C = (A ∪ B) ∪ C = A ∪ (B ∪ C)
- A ∩ B ∩ C = (A ∩ B) ∩ C = A ∩ (B ∩ C)

#### Distributive Laws
- (A ∪ B) ∩ C = (A ∩ C) ∪ (B ∩ C)
- (A ∩ B) ∪ C = (A ∪ C) ∩ (B ∪ C)

#### DeMorgan's Laws
- (A ∩ B)' = A' ∪ B'
- (A ∪ B)' = A' ∩ B'

### Find the probability
1. Define the experiment
2. List the simple events associated with the experiment and test each to make certain that it cannot be decomposed; this defines the sample space *S*
3. Assign reasonable Probabilities to the outcomes in *S*
4. Define the event of interest, *A*, as a union of simple events or a collection of outcomes
5. Fine P(*A*) by summing the probabilities of the simple events whose outcomes are in *A*

---
layout: note
categories: notes
title: Algorithms Lecture 3
course: Algorithms - CS2500
topic: Recursion (Cont.)
---
## Proofs
A proof is a sequence of steps to get from a hypothesis to a conclusion

### Counterexamples
An example that proves a certain point is wrong.

###The principle of Recursion
Definition: A property P on a domain D is a function P that accepts inputs from the domain D and returns a Boolean value. If P is a property on D, and d is in D then we say that P holds for d if P(d) is true, P does not hold for d if P(d) is false

Ex: D is the set of all cars and P is a property "is blue"

The Six Steps:
1. Define the Problem
2. Check Stopping Values + Two More
3. Check that Recursion Stays in D
4. Check that Recursion Halts
5. Check Inheritance
6. Conclude the proof

#### Step 1. Define the Problem
- Define the Domain D: clearly state what objects you are dealing with -- numbers, trees, Tower of Hanoi disks, etc.
- Provide names and definitions for all functions you will be talking about
  - You can often use Python for the definitions
  - Look carefully for anomalies such as division by 0
- State clearly what you are trying to prove.

#### Step 2. Check the Stopping Values and Two Other Values
- Checking that whatever you are trying to prove is required for the stopping values, but optional for the two other values
- We do the two other values because we want to reduce the likelihood of having made a mistake
- If you fail, go back to Step 1.

#### Step 3. Prove that Recursion Stays in D
- If you fail, go back to Step 1.

#### Step 4. Prove that Recursion Halts
- Don't trace the recursion
- We use the Counting Strategy
- Assign a non-negative integer as a counter to every value in the domain D. If whenever recursion is triggered, the counters associated with called values are < the value associated with the calling value, recursion will halt!
- If you fail, go back to Step 1.

#### Step 5. Check that P is Inherited Recursively
- This is often the hard part
- You may assume that P is true for all values called recursively.
- If you fail, go back to Step 1.

#### Step 6. Invoke the Principle of Recursion
- Clearly indicate that you have finished the proof.

### Equivalent Functions
- How can you tell that 2 functions are always equivalent?

Example Proof:
1. Domain D: All natural numbers; P(n) is true if f1(n) = f2(n); We want to prove that for any natural number n, P(n) is true.
2. Check the values
3. <Missed it>
4. Use the counting strategy. Use n as the counter, the counter decreases, and done.
5. Statement: f2(n) = n + f2(n-1); f2(n) = n + f1(n-1); f2(n) = n + n\*(n-1)/2; n\*(1 + (n-1)/2); n\*(2 + (n-1))/2; n\*(n+1)/2; f1(n); Therefore: f2(n) = f1(n)

### Modulo
- P mod Q is always between 0 and Q-1 (assuming P and Q are positive integers)
- (P+R) mod Q = P mod Q+R mod Q

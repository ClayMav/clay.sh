---
layout: note
categories: notes
title: Elm Lecture 1
course: Contemporary Programming Languages - CS2001
topic: Elm - Basics, States, and Type Annotation
---

## Elm Basics
Evan Czaplicki
- Elm Creator
- Proposed in 2012

## Imperitive Programming
- What you are used to
- The steps the computer must take to solve a problem
- Sometimes used with the term "procedural"

## Declaritive Programming
- Describing what the program must accomplish, as opposed to how to accomplish a task as a series of steps
- Examples: SQL, Regular Expressions, and Functional Programming
- Composing the solution to a problem as a set of functions to be executed
  - You carefully define the input to each function and what each function returns
  - Avoids state and mutable data

### What its used for
- Client-side web applications

## In CPL
- We will use V0.18
- Only the very basics


## Running Elm
- Can be run on the elm website

## State
- Your code cannot change state
  - No side effects
  - Can't modify variables
  - No loops

## Type Annotation
```elm
-- Value
pi : Float
pi = 3.14...

-- Function
minus : Int -> Int -> Int -- Last is return type
minus x y = x-y

sin : Float -> Float

add : Int -> Int -> Int -> Int
add a b c = a+b+c

flip : (a -> b -> c) -> b -> a -> c -- takes a function that takes an "a", "b", and returns "c", and also a "b" and a "c"
flip f x y = f y x

g = flip minus
g 1 2 == 1
minus 1 2 == -1
```

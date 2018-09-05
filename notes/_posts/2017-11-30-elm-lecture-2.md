---
layout: note
categories: notes
title: Elm Lecture 2
course: Contemporary Programming Languages - CS2001
topic: Elm - Union Types and Function Composition
---

```elm
flip : (a->b->c) -> b -> a -> c
flip f x y = f y x

repeat : Int -> a -> List a
repeat = ... -- Part of Elm's core library

repeat2 : a -> Int -> List a
repeat2 = flip repeat
```

## Union Types
```elm
type Bool
  = True -- constructor
  | false -- constructor

type Thing
  = A
  | B
  | C
  | D

type Maybe a
  = Just a
  | Nothing

a : Array.Array
a = Array.fromList[1,2,3]
Array.get 4 a -- Maybe Int(Nothing)

List.head : List a -> Maybe a

List.head [1, 2, 3] -- Just 1
List.head [] -- Nothing

type Result err value
  = OK value
  | Err err

toInt : String -> Result String

toInt "123" -- Ok 123
toInt "-42" -- Ok -42
toInt "3.5" -- Err "could not convert"
toInt "3a" -- Err "could not convert"

case toInt "123" of
  Ok val ->
    -- Int
  Err err ->
    -- No good

main : Html.Html m
main =
  let
    first = case List.head[1,2,3] of
            Just h ->
              "Found" t(toString h)
            Nothing ->
              "No front"
  in
    Html.text first

Core Type
  List -- [1,2,3] List Int
  Tuple -- (1, "giraffe") (Int, String)
  Record

Record type
  type alias Point =
    { x : Int
    , y : Int
    }

let
  p = {x = 10, y = 3}
  q = {x = 10, y = 4}
  r = {p | y = 4}
in
  Html.text(toString r) -- {x = 10, y = 4}
```

### Function Composition Operator
- f(g(x)) = f*g
- \* is >> or << in elm

```elm
pad : Int -> Char -> String -> String
pad 3 '!' "hello" -- "!!!hello!!!"

toUpper : String -> String
toUpper "hello" -- "HELLO"

wideYell : a -> String
wideYell = 
  toString
    >> toUpper
    >> (pad 100 '!') -- Now a String -> String

-- Alt method
wideYell2 : a -> String
wideYell2 x = 
  let
    str = toString x
    upper = toUpper str
    yelled = pad 100 '!' upper
  in
    yelled
```

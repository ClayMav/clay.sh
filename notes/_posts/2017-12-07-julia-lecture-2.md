---
layout: note
categories: notes
title: Julia Lecture 2
course: Contemporary Programming Languages - CS2001
topic: Julia - Implementing Functions and Matrices
---

```julia
# |1 0 0 0 0|
# |0 2 0 0 0|
# |0 0 3 0 0|
# |0 0 0 4 0|
# |0 0 0 0 5|

# By adding the AbstractArray stuff, all functions in AbstractArray, all operations with matrices will be available
struct SingleDiag{T <: Real} <: AbstractArray{T, 2}
  diag::Array{T,1}
end

# Finding dimensions w/ size()

  # returns tuple of (numrows, numcols)
  Base.size(sd::SingleDiag)=(length(sd.diag, length(sd.diag))

# Using [] for access

  function getindex(sd::SingleDiag, indices::Vararg{Int, 2})
  (i, j)=indices
  return i == j? sd.diag[i] : 0

# Using [] for setting values

  function Base.setindex!(sd::SingleDiag, val, indices::Vararg{Int, 2})
  (i, j)=indices
  if i != j
    error("Can't assign outside diag")
  end
  sd.diag[i]=val
  return sd

s = SingleDiag([1,2,3,4,5])
@show size(s) # (5,5)
@show s[1,1] # 1
@show s[1,2] # 0
s[1,1] = 10
@show s # SingleDiag{Int64}
        # ([10, 2, 3, 4, 5])
t=s+s
t=s*2
t=s*s

supertype(Integer)
subtypes(Integer)
methods(+)
methods(+, (Integer, Integer))
```

Make sure:
  - You're reading the stable docs.
  - You're using Julia v0.6.1

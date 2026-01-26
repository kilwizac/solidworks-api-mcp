---
type: enum
name: swCreateFacesBodyAction_e
description: Options for creating missing faces on an open body.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swCreateFacesBodyAction_e

Options for creating missing faces on an open body.

## Values

| Member | Value | Description |
|---|---|---|
| `swCreateFacesBodyActionCap` | 1 | = Cap the missing face |
| `swCreateFacesBodyActionGrow` | 2 | = Grow the missing face |
| `swCreateFacesBodyActionGrowFromParent` | 3 | = Grow the missing face from the parent |
| `swCreateFacesBodyActionLeaveRubber` | 4 | = Create a virtual face topological entity without any associated geometry |
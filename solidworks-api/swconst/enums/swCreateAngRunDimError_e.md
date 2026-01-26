---
type: enum
name: swCreateAngRunDimError_e
description: Statuses when inserting an angular running dimension.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swCreateAngRunDimError_e

Statuses when inserting an angular running dimension.

## Values

| Member | Value | Description |
|---|---|---|
| `swCreateAngRunDimError_GenFailure` | 0 | = Cannot create this angular running dimension |
| `swCreateAngRunDimError_IdenticalDimension` | 2 | = Identical dimensions cannot be created in the same angular running dimension |
| `swCreateAngRunDimError_SelectAnotherEntity` | 3 | = Cannot use the selected entity to create this angular running dimension; select another entity |
| `swCreateAngRunDimError_Success` | 1 |  |
| `swCreateAngRunDimError_Undefined` | -1 |  |
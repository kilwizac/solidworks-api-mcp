---
type: enum
name: swFilletOverFlowType_e
description: Fillet overflow types.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swFilletOverFlowType_e

Fillet overflow types.

## Values

| Member | Value | Description |
|---|---|---|
| `swFilletOverFlowType_Default` | 0 | = Default; system picks the appropriate method to create a fillet when the fillet surface overflows to adjacent surfaces; it either smoothly blends with adjacent surfaces or limits the fillet surface with the adjacent edges, thereby not changing the edge, or trims the fillet surface by the adjacent surface onto which the fillet overflows; the method actually used by default depending on the geometric condition; this option always tries to create a fillet if possible |
| `swFilletOverFlowType_KeepEdge` | 1 | = Edges that are overflowed by the fillet are not modified; the fillet surface is trimmed by all the adjacent edges; as a result, an additional transition fillet surface might be needed to complete the fillet |
| `swFilletOverFlowType_KeepSurface` | 2 | = Fillet surface is either merged with the adjacent surfaces smoothly or trimmed by the adjacent surfaces; as a result, it is unlikely that an additional transition fillet surface is created |
---
type: enum
name: swPartingLineFeatureStatus_e
description: Statuses of parting line features.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swPartingLineFeatureStatus_e

Statuses of parting line features.

## Values

| Member | Value | Description |
|---|---|---|
| `STATUS_MOLD_PARTINGLINE_EDGES_OPEN` | 2 | = Select edges that form a closed loop |
| `STATUS_MOLD_PARTINGLINE_NON_SEPARABLE` | 4 | = The parting line is complete, but the mold cannot be separated into core and cavity; you might need to create shut-off surfaces |
| `STATUS_MOLD_PARTINGLINE_SEPARABLE` | 3 | = The parting line is complete; the mold can be separated into core and cavity |
| `STATUS_MOLD_REDUNDANT_EDGES` | 1 | = There are more than enough edges selected to form a parting line; remove any redundant edges or add edges to close gaps between disjoint edge chains |
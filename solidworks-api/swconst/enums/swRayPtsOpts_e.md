---
type: enum
name: swRayPtsOpts_e
description: Ray points options. Bitmask.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swRayPtsOpts_e

Ray points options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swRayPtsOptsENTRY_EXIT` | 4 | or 0x4; Output requested of whether ray was entering or exiting body when it hit |
| `swRayPtsOptsNORMALS` | 1 | or 0x1; Output of normals requested |
| `swRayPtsOptsTOPOLS` | 2 | or 0x2; Output of entities hit requested |
| `swRayPtsOptsUNBLOCK` | 8 | or 0x8; Allow the system to respond while waiting |
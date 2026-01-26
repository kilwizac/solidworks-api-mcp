---
type: enum
name: swCornerTreatmentTrimType_e
description: Structure system corner treatment trim types.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swCornerTreatmentTrimType_e

Structure system corner treatment trim types.

## Values

| Member | Value | Description |
|---|---|---|
| `swCornerTreatmentTrim_BodyTrim` | 1 | = Conforms the intersecting member to the shape of adjacent faces by adding or removing material according to trim order |
| `swCornerTreatmentTrim_MiterTrim` | 2 | = Trims the members at a 45 degree angle; valid only for two member corner treatments |
| `swCornerTreatmentTrim_PlanarTrim` | 0 | = Cuts the intersecting member with a plane using first contact or full contact trim |
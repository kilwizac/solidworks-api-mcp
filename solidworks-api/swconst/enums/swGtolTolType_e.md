---
type: enum
name: swGtolTolType_e
description: Tolerance zone types in Gtol frame boxes.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swGtolTolType_e

Tolerance zone types in Gtol frame boxes.

## Values

| Member | Value | Description |
|---|---|---|
| `swGtolTolType_MAX` | 5 | = Specifies a maximum value for a material condition that has already been specified as a modifier of the tolerance in the Gtol; this maximum upper tolerance is typically specified in the Tolerance 2 box with "MAX" |
| `swGtolTolType_None` | 0 |  |
| `swGtolTolType_ProjectedTolerance` | 2 | = Applies to holes in which a pin, stud, or screw is to be inserted; controls the perpendicularity of the hole to the extent of the projection from the hole; specified with a circle-P symbol; typically a height is also specified in a separate field |
| `swGtolTolType_Square` | 3 |  |
| `swGtolTolType_UnequallyDisposedProfile` | 4 | = Indicates that the profile of a surface tolerance is not symmetrical about the true profile; the value following the circle-U symbol is the amount of the tolerance that is in a direction that would allow additional material to be added to the true profile |
| `swGtolTolType_Unknown` | 1 |  |
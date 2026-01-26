---
type: enum
name: swDisplayDimensionLeaderText_e
description: Display dimension leaders and text placement.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swDisplayDimensionLeaderText_e

Display dimension leaders and text placement.

## Values

| Member | Value | Description |
|---|---|---|
| `swBrokenLeaderAlignedText` | 3 | = Leader is broken and the text is aligned with the leader |
| `swBrokenLeaderHorizontalText` | 2 | = Leader is broken and the text is horizontal |
| `swSolidLeaderAlignedText` | 1 | = Leader is solid (not broken) and the text is aligned with the leader |
| `swSolidLeaderHorizontalText` | 4 | = The leader is solid and the text is horizontal; although this value can be applied to any type of dimension where the dimension text is not between the extension lines, it is currently only implemented by SOLIDWORKS for chamfer dimensions |
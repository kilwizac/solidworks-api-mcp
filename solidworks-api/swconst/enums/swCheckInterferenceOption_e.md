---
type: enum
name: swCheckInterferenceOption_e
description: Check interference options. Bitmask.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swCheckInterferenceOption_e

Check interference options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swBodyInterference_IncludeCoincidentFaces` | 2 | or 0x2; Abutment (i.e., faces touching each other) type of clash |
| `swBodyInterference_OptionDefault` | 1 | or 0x1; If this option specified, then swBodyInterference_IncludeCoincidentFaces and swBodyInterference_ReturnInterferingObject are set to false |
| `swBodyInterference_ReturnInterferingObject` | 4 | or 0x4; Return face and body arrays |
---
type: enum
name: swRebuildOptions_e
description: Rebuild options. Bitmask.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swRebuildOptions_e

Rebuild options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swCurrentSheetDisp` | 8 | or 0x8; Drawing only; only rebuilds the display of the views on the current drawing sheet |
| `swForceRebuildAll` | 2 | or 0x2; Assembly or drawing; Forces a rebuild of all geometry |
| `swRebuildAll` | 1 | or 0x1; Assembly or drawing; rebuilds geometry that has not been regenerated |
| `swUpdateDirtyOnly` | 16 | or 0x10; Drawing only; only rebuilds drawing views that are dirty when OR'd with swCurrentSheetDisp option |
| `swUpdateMates` | 4 | or 0x4; Assembly only; only rebuilds mates, which is much faster than rebuilding the geometry. Especially useful for IComponent2::Transform2 |
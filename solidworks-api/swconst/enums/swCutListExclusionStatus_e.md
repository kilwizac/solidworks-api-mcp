---
type: enum
name: swCutListExclusionStatus_e
description: Status of excluding the selected faces and features in the cut list sort exclusion list.
member_count: 2
docset: swconst
categories:
  - constants
used_by: []
---

# swCutListExclusionStatus_e

Status of excluding the selected faces and features in the cut list sort exclusion list.

## Values

| Member | Value | Description |
|---|---|---|
| `swCutListExclusionStatus_InvalidEntities` | 1 | = Selected faces and features are invalid because they are not of selection type BODYFEATURE or FACE. Other examples of face and features that are invalid for exclusion: Chamfers that remove an entire face. Suppressed features. Features that create new bodies from sketches, such as boss-extrude, revolve, and sweep. Certain sheet metal features. |
| `swCutListExclusionStatus_Success` | 0 |  |
---
type: enum
name: swModelRebuildStatus_e
description: Rebuild status of model. Bitmask.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swModelRebuildStatus_e

Rebuild status of model. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swModelRebuildStatus_FrozenFeatureNeedsRebuild` | 2 |  |
| `swModelRebuildStatus_FullyRebuilt` | 0 | or FALSE |
| `swModelRebuildStatus_NonFrozenFeatureNeedsRebuild` | 1 | or TRUE |
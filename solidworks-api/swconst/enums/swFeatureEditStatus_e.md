---
type: enum
name: swFeatureEditStatus_e
description: Editing status of feature. Bitmask.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swFeatureEditStatus_e

Editing status of feature. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swFeature_Editable` | 0 | or 0x0; Feature can be edited |
| `swFeature_NonEditable` | 1 | or 0x1; Feature cannot be edited |
| `swFeature_UnderEditing` | 2 | or 0x2; If the feature is a sketch, then the sketch is already being edited |
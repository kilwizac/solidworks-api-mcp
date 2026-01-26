---
type: enum
name: swFeatureScope_e
description: Feature scope options.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swFeatureScope_e

Feature scope options.

## Values

| Member | Value | Description |
|---|---|---|
| `swFeatureScope_AllBodies` | 0 | = All of the bodies in the multibody part are affected by the Mirror feature. |
| `swFeatureScope_SelectedBodiesWithAutoSelect` | 1 | = Only the specified bodies in the multibody part are affected by the Mirror feature when AutoSelect is true. |
| `swFeatureScope_SelectedBodiesWithOutAutoSelect` | 2 | = Only the specified bodies in the multibody part are affected by the Mirror feature when AutoSelect is false. |
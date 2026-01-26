---
type: enum
name: swFeatureTreeFolderType_e
description: Ways to insert feature folders for selected features or components in the FeatureManager design tree.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swFeatureTreeFolderType_e

Ways to insert feature folders for selected features or components in the FeatureManager design tree.

## Values

| Member | Value | Description |
|---|---|---|
| `swFeatureTreeFolder_Containing` | 2 | = Create and insert a folder to contain the pre-selected features |
| `swFeatureTreeFolder_EmptyBefore` | 1 | = Create and insert an empty folder before the pre-selected features |
| `swFeatureTreeFolder_Mold` | 3 | = Create and insert a Surface Bodies folder containing three folders: Cavity Surface Bodies, Core Surface Bodies, and Parting Surface Bodies for a pre-selected surface feature |
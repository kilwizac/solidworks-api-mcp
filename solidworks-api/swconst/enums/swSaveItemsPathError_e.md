---
type: enum
name: swSaveItemsPathError_e
description: Error return codes for IAdvancedSaveAsOptions::ModifyItemsNameAndPath.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swSaveItemsPathError_e

Error return codes for IAdvancedSaveAsOptions::ModifyItemsNameAndPath.

## Values

| Member | Value | Description |
|---|---|---|
| `swSaveItemsPathError_ArraySizeNotMatching` | 1 | = Input arrays must be the same size |
| `swSaveItemsPathError_InvalidPath` | 2 | = Path provided does not exist or user does not have write access |
| `swSaveItemsPathError_Succeeded` | 0 |  |
| `swSaveItemsPathError_WrongComponentName` | 3 | = Name provided is not supported by SOLIDWORKS |
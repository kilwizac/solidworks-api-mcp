---
type: enum
name: swFileSaveWarning_e
description: Values for File, Save warnings that can be returned from the IModelDoc2 Save methods. These warnings do not cause the File, Save operation to fail. Bitmask.
member_count: 12
docset: swconst
categories:
  - constants
used_by: []
---

# swFileSaveWarning_e

Values for File, Save warnings that can be returned from the IModelDoc2 Save methods. These warnings do not cause the File, Save operation to fail. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swFileSaveWarning_AnimatorCameraViews` | 128 | or 0x80 |
| `swFileSaveWarning_AnimatorFeatureEdits` | 16 | or 0x10 |
| `swFileSaveWarning_AnimatorLightEdits` | 64 | or 0x40 |
| `swFileSaveWarning_AnimatorNeedToSolve` | 8 | or 0x8 |
| `swFileSaveWarning_AnimatorSectionViews` | 256 | or 0x100 |
| `swFileSaveWarning_EdrwingsBadSelection` | 32 | or 0x20 |
| `swFileSaveWarning_MissingOLEObjects` | 512 | or 0x200 |
| `swFileSaveWarning_NeedsRebuild` | 2 | or 0x2 |
| `swFileSaveWarning_OpenedViewOnly` | 1024 | or 0x400 |
| `swFileSaveWarning_RebuildError` | 1 | or 0x1 |
| `swFileSaveWarning_ViewsNeedUpdate` | 4 | or 0x4 |
| `swFileSaveWarning_XmlInvalid` | 2048 | or 0x800 |
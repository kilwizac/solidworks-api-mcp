---
type: enum
name: swFileSaveError_e
description: File save errors. Bitmask.
member_count: 15
docset: swconst
categories:
  - constants
used_by: []
---

# swFileSaveError_e

File save errors. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swFileLockError` | 16 | or 0x10 |
| `swFileNameContainsAtSign` | 8 | or 0x8 = File name cannot contain the at symbol (@) |
| `swFileNameEmpty` | 4 | or 0x4 = File name cannot be empty |
| `swFileSaveAsBadEDrawingsVersion` | 1024 | or 0x400 |
| `swFileSaveAsDetachedDrawingsNotSupported` | 16384 | or 0x4000 = Detached drawing save as options is not supported |
| `swFileSaveAsDoNotOverwrite` | 128 | or 0x80 = Do not overwrite an existing file |
| `swFileSaveAsInvalidFileExtension` | 256 | or 0x100 = File name extension does not match the SOLIDWORKS document type |
| `swFileSaveAsNameExceedsMaxPathLength` | 2048 | or 0x800 = File name cannot exceed 255 characters |
| `swFileSaveAsNoSelection` | 512 | or 0x200 = Save the selected bodies in a part document. Valid option for IPartDoc::SaveToFile2 ; however, not a valid option for IModelDocExtension::SaveAs |
| `swFileSaveAsNotSupported` | 4096 | or 0x1000 = Save As operation: is not supported was executed is such a way that the resulting file might not be complete, possibly because SOLIDWORKS is hidden; if the error persists after setting SOLIDWORKS to visible and re-attempting the Save As operation, contact SOLIDWORKS API support . |
| `swFileSaveFormatNotAvailable` | 32 | or 0x20 = Save As file type is not valid |
| `swFileSaveRequiresSavingReferences` | 8192 | or 0x2000 = Saving an assembly with renamed components requires saving the references |
| `swFileSaveWithRebuildError` |  | Obsolete = See swFileSaveWarning_e |
| `swGenericSaveError` | 1 | or 0x1 |
| `swReadOnlySaveError` | 2 | or 0x2 |
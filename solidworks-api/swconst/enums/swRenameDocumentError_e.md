---
type: enum
name: swRenameDocumentError_e
description: Rename components errors.
member_count: 20
docset: swconst
categories:
  - constants
used_by: []
---

# swRenameDocumentError_e

Rename components errors.

## Values

| Member | Value | Description |
|---|---|---|
| `swRenameDocumentError_ComponentNotResolved` | 5 | = You must resolve the component before attempting to rename it |
| `swRenameDocumentError_DocumentNameInUse` | 12 | = You cannot rename the component to the specified name because a document with that name is open |
| `swRenameDocumentError_DocumentNotSaved` | 15 | = You cannot rename the document, and the document was not saved |
| `swRenameDocumentError_FileAlreadyExists` | 8 | = You cannot rename the component to the specified name because a file with that name exists on disk |
| `swRenameDocumentError_InvalidCharactersInName` | 9 | = You specified an invalid component name; the name is either too long or contains invalid characters |
| `swRenameDocumentError_InvalidForDrawings` | 3 | = You cannot rename drawing documents |
| `swRenameDocumentError_InvalidSelection` | 2 | = You must select a valid component; your selection is invalid for renaming |
| `swRenameDocumentError_InvalidVirtualComponent` | 10 | = You cannot rename virtual components |
| `swRenameDocumentError_LightWeightComponent` | 6 | = You cannot rename the child component whose parent component is lightweight |
| `swRenameDocumentError_NameTooLong` | 11 | = You cannot rename the component to the specified name because that name is too long |
| `swRenameDocumentError_NoModelLoaded` | 4 | = You cannot rename the component because a model is not loaded in memory |
| `swRenameDocumentError_None` | 0 | = Success |
| `swRenameDocumentError_NotAllowedWithPDM` | 17 | = You cannot rename the component because the SOLIDWORKS Professional PDM add-in is not loaded |
| `swRenameDocumentError_PatternedComponent` | 19 | = You cannot rename patterned components |
| `swRenameDocumentError_PendingNameAlreadyInUse` | 13 | = You cannot rename the component to the specified name because a document with the same name has been temporarily renamed but not yet saved |
| `swRenameDocumentError_ReadOnlyDocument` | 14 | = You cannot rename read-only documents or documents referenced by read-only documents |
| `swRenameDocumentError_RoutingComponent` | 7 | = You cannot rename routing components |
| `swRenameDocumentError_ToolboxComponent` | 18 | = You cannot rename Toolbox components |
| `swRenameDocumentError_UnspecifiedInternalError` | 1 | = You cannot rename the component due to an internal error |
| `swRenameDocumentError_VirtualComponent` | 16 | = You cannot rename virtual components |
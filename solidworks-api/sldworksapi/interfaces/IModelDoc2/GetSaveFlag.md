---
type: method
interface: IModelDoc2
member: GetSaveFlag
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IConfiguration.IsDirty
  - IModelDoc2.SetSaveFlag
keywords:
  - save
  - document
  - dirty
  - getsaveflag
  - imodeldoc2
  - model
  - doc2
  - flag
  - boolean
  - determine
  - vba
---

# IModelDoc2.GetSaveFlag

Gets whether the document is currently dirty and needs to be saved.

## Signature

```csharp
System.Boolean GetSaveFlag()
```
## Parameters

None.

## Return Value

True if this document needs to be saved, false if not

## Remarks

This flag:
determines if the
Do you wish to save changes?
dialog is displayed when the user tries to close the document. Many operations cause this flag to be set, and you can use
IModelDoc2::SetSaveFlag
to set this flag.
is set to true if the document was created in an older version of SOLIDWORKS.
is set to true for assemblies only when a subassembly has been saved. If this flag is set to true for a subassembly, then the assembly is not marked as dirty until the subassembly is saved.
is reset to false after an end-user has saved the file.
NOTE:
This method returns true if the model is opened read-only, the system option
Don't prompt to save read-only referenced documents
is not selected, and the model is dirty and visible.

## Examples

- Determine If Document Is Dirty (VBA) (Determine_if_Document_is_Dirty_Example_VB.htm)

## See Also

- `IConfiguration.IsDirty`
- `IModelDoc2.SetSaveFlag`
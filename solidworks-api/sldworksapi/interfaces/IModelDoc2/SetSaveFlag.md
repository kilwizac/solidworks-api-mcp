---
type: method
interface: IModelDoc2
member: SetSaveFlag
returns: void
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
  - IModelDoc2.GetSaveFlag
keywords:
  - document
  - dirty
  - save
  - setsaveflag
  - imodeldoc2
  - model
  - doc2
  - flag
  - void
  - remove
  - textures
  - assembly
  - components
  - vba
---

# IModelDoc2.SetSaveFlag

Flags the document as dirty.

## Signature

```csharp
void SetSaveFlag()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

If the user tries to close the part, the
Do you wish to save changes?
dialog is displayed.
If SOLIDWORKS data has changed, this method marks the SOLIDWORKS document as dirty so that the end-user is prompted when attempting to close the document. You might want to use this method with applications that use
IModelDoc2::IGet3rdPartyStorage
to save stream data in SOLIDWORKS files.
If you have programmatically changed the SOLIDWORKS model, using this method is not necessary because the SOLIDWORKS document is flagged as dirty automatically.

## Examples

- Remove Textures from Assembly Components (VBA) (Remove_Textures_from_Assembly_Components_Example_VB.htm)

## See Also

- `IModelDoc2.GetSaveFlag`
---
type: method
interface: IModelDocExtension
member: ListExternalFileReferencesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - ui
related:
  - IModelDoc2.BreakAllExternalReferences
  - IModelDoc2.IListAuxiliaryExternalFileReferences
  - IModelDoc2.ListAuxiliaryExternalFileReferences
  - IModelDoc2.ListAuxiliaryExternalFileReferencesCount
  - IModelDoc2.LockAllExternalReferences
  - IModelDocExtension.IListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferences
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - external
  - references
  - number
  - listexternalfilereferencescount
  - imodeldocextension
  - model
  - doc
  - extension
  - list
  - file
  - count
  - int32
  - vba
  - vb
  - net
---

# IModelDocExtension.ListExternalFileReferencesCount

Gets the number of external references on this part or assembly.

## Signature

```csharp
System.Int32 ListExternalFileReferencesCount()
```
## Parameters

None.

## Return Value

Number of external references

## Remarks

Call this method before calling
IModelDocExtension::IListExternalFileReferences
to get the number of external references on the part.

## Examples

- Get External References (VBA) (Get_External_References_Example_VB.htm)
- Get External References (VB.NET) (Get_External_References_Example_VBNET.htm)
- Get External References (C#) (Get_External_References_Example_CSharp.htm)

## See Also

- `IModelDoc2.BreakAllExternalReferences`
- `IModelDoc2.IListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferencesCount`
- `IModelDoc2.LockAllExternalReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.UpdateExternalFileReferences`
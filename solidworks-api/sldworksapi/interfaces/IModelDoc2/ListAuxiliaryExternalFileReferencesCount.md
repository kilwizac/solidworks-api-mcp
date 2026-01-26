---
type: method
interface: IModelDoc2
member: ListAuxiliaryExternalFileReferencesCount
returns: System.Int32
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
  - IModelDoc2.ListAuxiliaryExternalFileReferences
  - IModelDoc2.LockAllExternalReferences
  - IModelDocExtension.IListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferencesCount
keywords:
  - dependent
  - documents
  - external
  - references
  - auxiliary
  - listauxiliaryexternalfilereferencescount
  - imodeldoc2
  - model
  - doc2
  - list
  - file
  - count
  - int32
---

# IModelDoc2.ListAuxiliaryExternalFileReferencesCount

Gets the number of auxiliary external file references for this model.

## Signature

```csharp
System.Int32 ListAuxiliaryExternalFileReferencesCount()
```
## Parameters

None.

## Return Value

Number of auxiliary file references

## Remarks

Call this method before calling
IModelDoc2::IListAuxiliaryExternalFileReferences
.

## See Also

- `IModelDoc2.ListAuxiliaryExternalFileReferences`
- `IModelDoc2.LockAllExternalReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
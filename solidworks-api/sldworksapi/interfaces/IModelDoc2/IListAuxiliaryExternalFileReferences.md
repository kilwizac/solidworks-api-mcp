---
type: method
interface: IModelDoc2
member: IListAuxiliaryExternalFileReferences
returns: void
parameters:
  -
    name: NumRefs
    type: System.Int32
    description: Number of external references
  -
    name: Feature
    type: System.String
    description: Array of size NumRefs containing the names of features that include auxiliary external references
  -
    name: ExternalFileName
    type: System.String
    description: Array of size NumRefs containing the names of the auxiliary external files
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
  - IModelDoc2.ListAuxiliaryExternalFileReferencesCount
  - IModelDoc2.LockAllExternalReferences
  - IModelDocExtension.IListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferences
keywords:
  - dependent
  - documents
  - external
  - references
  - auxiliary
  - ilistauxiliaryexternalfilereferences
  - imodeldoc2
  - model
  - doc2
  - list
  - file
  - num
  - refs
  - int32
  - feature
  - string
  - name
  - void
---

# IModelDoc2.IListAuxiliaryExternalFileReferences

Gets the names of auxiliary external file references for this model.

## Signature

```csharp
void IListAuxiliaryExternalFileReferences( 
   System.Int32
NumRefs
,
   out System.String
Feature
,
   out System.String
ExternalFileName
)
```
## Parameters

- `NumRefs` (System.Int32): Number of external references
- `Feature` (System.String): Array of size NumRefs containing the names of features that include auxiliary external references
- `ExternalFileName` (System.String): Array of size NumRefs containing the names of the auxiliary external files

## Return Value

Unknown.

## Remarks

Call
IModelDoc2::ListAuxiliaryExtenalFileReferencesCount
before calling of this method to determine the size of the arrays.

## See Also

- `IModelDoc2.ListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferencesCount`
- `IModelDoc2.LockAllExternalReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
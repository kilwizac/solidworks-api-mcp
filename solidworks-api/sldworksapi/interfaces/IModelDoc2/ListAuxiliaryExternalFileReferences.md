---
type: method
interface: IModelDoc2
member: ListAuxiliaryExternalFileReferences
returns: void
parameters:
  -
    name: Feature
    type: System.Object
    description: Array containing the names of features that include auxiliary external references
  -
    name: ExternalFileName
    type: System.Object
    description: Array containing the names of the auxiliary external files
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IFeatureManager.InsertMacroFeature3
  - IModelDoc2.IListAuxiliaryExternalFileReferences
  - IModelDoc2.ListAuxiliaryExternalFileReferencesCount
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
  - listauxiliaryexternalfilereferences
  - imodeldoc2
  - model
  - doc2
  - list
  - file
  - feature
  - object
  - name
  - void
---

# IModelDoc2.ListAuxiliaryExternalFileReferences

Gets the names of auxiliary external file references for this model.

## Signature

```csharp
void ListAuxiliaryExternalFileReferences( 
   out System.Object
Feature
,
   out System.Object
ExternalFileName
)
```
## Parameters

- `Feature` (System.Object): Array containing the names of features that include auxiliary external references
- `ExternalFileName` (System.Object): Array containing the names of the auxiliary external files

## Return Value

Unknown.

## See Also

- `IFeatureManager.InsertMacroFeature3`
- `IModelDoc2.IListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferencesCount`
- `IModelDoc2.LockAllExternalReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
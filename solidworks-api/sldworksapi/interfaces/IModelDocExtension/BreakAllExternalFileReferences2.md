---
type: method
interface: IModelDocExtension
member: BreakAllExternalFileReferences2
returns: void
parameters:
  -
    name: InsertFeatures
    type: System.Boolean
    description: True to insert the features of the original parts if the external references are broken, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - ui
related:
  - IModelDoc2.GetExternalReferenceName
  - IModelDoc2.IListAuxiliaryExternalFileReferences
  - IModelDoc2.ListAuxiliaryExternalFileReferences
  - IModelDoc2.ListAuxiliaryExternalFileReferencesCount
  - IModelDoc2.LockAllExternalReferences
  - IModelDocExtension.IListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferencesCount
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - break
  - external
  - references
  - dependent
  - documents
  - breakallexternalfilereferences2
  - imodeldocextension
  - model
  - doc
  - extension
  - all
  - file
  - references2
  - insert
  - features
  - boolean
  - void
---

# IModelDocExtension.BreakAllExternalFileReferences2

Breaks all external references and allows you to insert the features of the original part, or parts, if the external references are broken.

## Signature

```csharp
void BreakAllExternalFileReferences2( 
   System.Boolean
InsertFeatures
)
```
## Parameters

- `InsertFeatures` (System.Boolean): True to insert the features of the original parts if the external references are broken, false to not

## Return Value

See ModelDocExtension::BreakAllExternalFileReferences2 .

## See Also

- `IModelDoc2.GetExternalReferenceName`
- `IModelDoc2.IListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferencesCount`
- `IModelDoc2.LockAllExternalReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
- `IModelDocExtension.UpdateExternalFileReferences`
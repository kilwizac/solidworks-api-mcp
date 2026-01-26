---
type: method
interface: IModelDocExtension
member: UpdateExternalFileReferences
returns: void
parameters:
  -
    name: ConfigOption
    type: System.Int32
    description: Configuration options as defined by swExternalFileReferencesConfig_e
  -
    name: ConfigName
    type: System.String
    description: Name of configuration; required when configOption set to swExternalFileReferencesNamedConfig
  -
    name: UpdateStatus
    type: System.Int32
    description: Update status option as defined by swExternalFileReferencesUpdate_e
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
  - IModelDocExtension.ListExternalFileReferencesCount
keywords:
  - updateexternalfilereferences
  - imodeldocextension
  - model
  - doc
  - extension
  - update
  - external
  - file
  - references
  - config
  - option
  - int32
  - name
  - string
  - status
  - void
---

# IModelDocExtension.UpdateExternalFileReferences

Updates the external files references on this model.

## Signature

```csharp
void UpdateExternalFileReferences( 
   System.Int32
ConfigOption
,
   System.String
ConfigName
,
   System.Int32
UpdateStatus
)
```
## Parameters

- `ConfigOption` (System.Int32): Configuration options as defined by swExternalFileReferencesConfig_e
- `ConfigName` (System.String): Name of configuration; required when configOption set to swExternalFileReferencesNamedConfig
- `UpdateStatus` (System.Int32): Update status option as defined by swExternalFileReferencesUpdate_e

## Return Value

Unknown.

## See Also

- `IModelDoc2.BreakAllExternalReferences`
- `IModelDoc2.IListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferencesCount`
- `IModelDoc2.LockAllExternalReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
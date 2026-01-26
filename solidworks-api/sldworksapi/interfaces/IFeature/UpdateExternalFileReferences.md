---
type: method
interface: IFeature
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
    description: Name of configuration; required when ConfigOption set to swExternalFileReferencesNamedConfig
  -
    name: UpdateStatus
    type: System.Int32
    description: Update status option as defined by swExternalFileReferencesUpdate_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IComponent2.IListExternalFileReferences2
  - IComponent2.ListExternalFileReferences
  - IComponent2.RemoveMaterialProperty2
  - IComponent2.UpdateExternalFileReferences
  - IFeature.IListExternalFileReferences2
  - IFeature.ListExternalFileReferences2
  - IFeature.ListExternalFileReferencesCount
  - IModelDocExtension.IListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferencesCount
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - external
  - references
  - features
  - updateexternalfilereferences
  - ifeature
  - feature
  - update
  - file
  - config
  - option
  - int32
  - name
  - string
  - status
  - void
---

# IFeature.UpdateExternalFileReferences

Updates the external file references on this model.

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
- `ConfigName` (System.String): Name of configuration; required when ConfigOption set to swExternalFileReferencesNamedConfig
- `UpdateStatus` (System.Int32): Update status option as defined by swExternalFileReferencesUpdate_e

## Return Value

Unknown.

## See Also

- `IComponent2.IListExternalFileReferences2`
- `IComponent2.ListExternalFileReferences`
- `IComponent2.RemoveMaterialProperty2`
- `IComponent2.UpdateExternalFileReferences`
- `IFeature.IListExternalFileReferences2`
- `IFeature.ListExternalFileReferences2`
- `IFeature.ListExternalFileReferencesCount`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
- `IModelDocExtension.UpdateExternalFileReferences`
---
type: method
interface: IComponent2
member: UpdateExternalFileReferences
returns: void
parameters:
  -
    name: ConfigOption
    type: System.Int32
    description: Configuration option as defined swExternalFileReferencesConfig_e
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
  - assemblies
  - file-io
related:
  - IComponent2.IListExternalFileReferences2
  - IComponent2.ListExternalFileReferences2
  - IFeature.IListExternalFileReferences2
  - IFeature.ListExternalFileReferences2
  - IFeature.UpdateExternalFileReferences
  - IModelDocExtension.IListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferences
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - dependent
  - documents
  - external
  - references
  - components
  - updateexternalfilereferences
  - icomponent2
  - component2
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

# IComponent2.UpdateExternalFileReferences

Updates the external file references of this model.

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

- `ConfigOption` (System.Int32): Configuration option as defined swExternalFileReferencesConfig_e
- `ConfigName` (System.String): Name of configuration; required when ConfigOption set to swExternalFileReferencesNamedConfig
- `UpdateStatus` (System.Int32): Update status option as defined by swExternalFileReferencesUpdate_e

## Return Value

Unknown.

## See Also

- `IComponent2.IListExternalFileReferences2`
- `IComponent2.ListExternalFileReferences2`
- `IFeature.IListExternalFileReferences2`
- `IFeature.ListExternalFileReferences2`
- `IFeature.UpdateExternalFileReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.UpdateExternalFileReferences`
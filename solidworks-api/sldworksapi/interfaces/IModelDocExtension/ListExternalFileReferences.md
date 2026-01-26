---
type: method
interface: IModelDocExtension
member: ListExternalFileReferences
returns: void
parameters:
  -
    name: ModelPathName
    type: System.Object
    description: Array of path names of documents
  -
    name: ComponentPathName
    type: System.Object
    description: Array of path names of referenced components
  -
    name: Feature
    type: System.Object
    description: Array of in-context items (sketches, features, and so on)
  -
    name: DataType
    type: System.Object
    description: Array of the type of data used to create the items (converted edge or face, converted or offset sketch entity, body, and so on)
  -
    name: Status
    type: System.Object
    description: Array of the statuses of the external references as defined in swExternalReferenceStatus_e
  -
    name: RefEntity
    type: System.Object
    description: Array of the actual items being used and the names of the documents that contain the items
  -
    name: FeatCom
    type: System.Object
    description: Array of the names of the components in which the affected features exist; this information is only displayed when one or more RefEntity is in a different component in an assembly and does not apply to derived parts
  -
    name: ConfigOption
    type: System.Int32
    description: Configuration options as defined by swExternalFileReferencesConfig_e
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration when configOption is swExternalFileReferencesNamedConfig
docset: sldworksapi
deprecated: true
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
  - IModelDocExtension.ListExternalFileReferencesCount
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - listexternalfilereferences
  - imodeldocextension
  - model
  - doc
  - extension
  - list
  - external
  - file
  - references
  - path
  - name
  - object
  - component
  - feature
  - data
  - type
  - status
  - ref
  - entity
  - feat
  - com
  - config
  - option
  - int32
  - string
  - void
---

# IModelDocExtension.ListExternalFileReferences

Obsolete. Superseded by IModelDocExtension::ListExternalFileReferences2.

## Signature

```csharp
void ListExternalFileReferences( 
   out System.Object
ModelPathName
,
   out System.Object
ComponentPathName
,
   out System.Object
Feature
,
   out System.Object
DataType
,
   out System.Object
Status
,
   out System.Object
RefEntity
,
   out System.Object
FeatCom
,
   out System.Int32
ConfigOption
,
   out System.String
ConfigName
)
```
## Parameters

- `ModelPathName` (System.Object): Array of path names of documents
- `ComponentPathName` (System.Object): Array of path names of referenced components
- `Feature` (System.Object): Array of in-context items (sketches, features, and so on)
- `DataType` (System.Object): Array of the type of data used to create the items (converted edge or face, converted or offset sketch entity, body, and so on)
- `Status` (System.Object): Array of the statuses of the external references as defined in swExternalReferenceStatus_e
- `RefEntity` (System.Object): Array of the actual items being used and the names of the documents that contain the items
- `FeatCom` (System.Object): Array of the names of the components in which the affected features exist; this information is only displayed when one or more RefEntity is in a different component in an assembly and does not apply to derived parts
- `ConfigOption` (System.Int32): Configuration options as defined by swExternalFileReferencesConfig_e
- `ConfigName` (System.String): Name of the configuration when configOption is swExternalFileReferencesNamedConfig

## Return Value

Unknown.

## See Also

- `IModelDoc2.BreakAllExternalReferences`
- `IModelDoc2.IListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferencesCount`
- `IModelDoc2.LockAllExternalReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
- `IModelDocExtension.UpdateExternalFileReferences`
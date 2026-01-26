---
type: method
interface: IFeature
member: ListExternalFileReferences2
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
    description: Array of data used to create the items (converted edge or face, converted or offset sketch entity, body, and so on)
  -
    name: Status
    type: System.Object
    description: Array of statuses of external reference as defined in swExternalReferenceStatus_e
  -
    name: RefEntity
    type: System.Object
    description: Array of actual items being used and the names of the documents that contain the items
  -
    name: FeatCom
    type: System.Object
    description: Array of the names of the components in which the affected features exist; this information is only displayed when one or more RefEntity is in a different component in an assembly and does not apply to derived parts
  -
    name: ConfigOption
    type: System.Int32
    description: Configuration option as defined by swExternalFileReferencesConfig_e
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration when ConfigOption is swExternalFileReferencesNamedConfig
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IComponent2.IListExternalFileReferences2
  - IComponent2.ListExternalFileReferences2
  - IComponent2.ListExternalFileReferencesCount
  - IComponent2.UpdateExternalFileReferences
  - IFeature.IListExternalFileReferences2
  - IFeature.ListExternalFileReferencesCount
  - IFeature.UpdateExternalFileReferences
  - IModelDocExtension.IListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferencesCount
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - external
  - references
  - features
  - listexternalfilereferences2
  - ifeature
  - feature
  - list
  - file
  - references2
  - model
  - path
  - name
  - object
  - component
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
  - vba
  - vb
  - net
---

# IFeature.ListExternalFileReferences2

Gets the names and statuses of the external references on the feature in a part or assembly.

## Signature

```csharp
void ListExternalFileReferences2( 
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
- `DataType` (System.Object): Array of data used to create the items (converted edge or face, converted or offset sketch entity, body, and so on)
- `Status` (System.Object): Array of statuses of external reference as defined in swExternalReferenceStatus_e
- `RefEntity` (System.Object): Array of actual items being used and the names of the documents that contain the items
- `FeatCom` (System.Object): Array of the names of the components in which the affected features exist; this information is only displayed when one or more RefEntity is in a different component in an assembly and does not apply to derived parts
- `ConfigOption` (System.Int32): Configuration option as defined by swExternalFileReferencesConfig_e
- `ConfigName` (System.String): Name of the configuration when ConfigOption is swExternalFileReferencesNamedConfig

## Return Value

Unknown.

## Examples

- Get External References (VBA) (Get_External_References_Example_VB.htm)
- Get External References (VB.NET) (Get_External_References_Example_VBNET.htm)
- Get External References (C#) (Get_External_References_Example_CSharp.htm)

## See Also

- `IComponent2.IListExternalFileReferences2`
- `IComponent2.ListExternalFileReferences2`
- `IComponent2.ListExternalFileReferencesCount`
- `IComponent2.UpdateExternalFileReferences`
- `IFeature.IListExternalFileReferences2`
- `IFeature.ListExternalFileReferencesCount`
- `IFeature.UpdateExternalFileReferences`
- `IModelDocExtension.IListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
- `IModelDocExtension.UpdateExternalFileReferences`
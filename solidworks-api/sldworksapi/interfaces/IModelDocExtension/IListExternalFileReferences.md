---
type: method
interface: IModelDocExtension
member: IListExternalFileReferences
returns: void
parameters:
  -
    name: NumRefs
    type: System.Int32
    description: Number of external references
  -
    name: ModelPathName
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of path names of documents of size NumRefs VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: CompPathName
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of path names of referenced components of size NumRefs VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: Feature
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of in-context items (sketches, features, and so on) of size NumRefs VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: DataType
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the type data used to create the items (converted edge or face, converted or offset sketch entity, body, and so on) of size NumRefs VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: Status
    type: System.Int32
    description: in-process, unmanaged C++: Array of statuses of the external references as defined in swExternalReferenceStatus_e VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: RefEntity
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of actual items being used and the names of the documents that contain the items of size NumRefs VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: FeatComp
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of the names of the components in which the affected features exist of size NumRefs; this information is only displayed when one or more RefEntity is in a different component in an assembly and does not apply to derived parts VBA, VB.NET, C#, and C++/CLI: Not supported
  -
    name: ConfigOption
    type: System.Int32
    description: Configuration option as defined by swExternalFileReferencesConfig_e
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration when configOption is swExternalFileReferencesNamedConfig
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
  - IModelDocExtension.ListExternalFileReferences
  - IModelDocExtension.ListExternalFileReferencesCount
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - external
  - references
  - list
  - document
  - dependents
  - ilistexternalfilereferences
  - imodeldocextension
  - model
  - doc
  - extension
  - file
  - num
  - refs
  - int32
  - path
  - name
  - string
  - comp
  - feature
  - data
  - type
  - status
  - ref
  - entity
  - feat
  - config
  - option
  - void
---

# IModelDocExtension.IListExternalFileReferences

Gets the names and statuses of the external file references on this part or assembly.

## Signature

```csharp
void IListExternalFileReferences( 
   System.Int32
NumRefs
,
   out System.String
ModelPathName
,
   out System.String
CompPathName
,
   out System.String
Feature
,
   out System.String
DataType
,
   out System.Int32
Status
,
   out System.String
RefEntity
,
   out System.String
FeatComp
,
   out System.Int32
ConfigOption
,
   out System.String
ConfigName
)
```
## Parameters

- `NumRefs` (System.Int32): Number of external references
- `ModelPathName` (System.String): in-process, unmanaged C++: Pointer to an array of path names of documents of size NumRefs VBA, VB.NET, C#, and C++/CLI: Not supported
- `CompPathName` (System.String): in-process, unmanaged C++: Pointer to an array of path names of referenced components of size NumRefs VBA, VB.NET, C#, and C++/CLI: Not supported
- `Feature` (System.String): in-process, unmanaged C++: Pointer to an array of in-context items (sketches, features, and so on) of size NumRefs VBA, VB.NET, C#, and C++/CLI: Not supported
- `DataType` (System.String): in-process, unmanaged C++: Pointer to an array of the type data used to create the items (converted edge or face, converted or offset sketch entity, body, and so on) of size NumRefs VBA, VB.NET, C#, and C++/CLI: Not supported
- `Status` (System.Int32): in-process, unmanaged C++: Array of statuses of the external references as defined in swExternalReferenceStatus_e VBA, VB.NET, C#, and C++/CLI: Not supported
- `RefEntity` (System.String): in-process, unmanaged C++: Pointer to an array of actual items being used and the names of the documents that contain the items of size NumRefs VBA, VB.NET, C#, and C++/CLI: Not supported
- `FeatComp` (System.String): in-process, unmanaged C++: Pointer to an array of the names of the components in which the affected features exist of size NumRefs; this information is only displayed when one or more RefEntity is in a different component in an assembly and does not apply to derived parts VBA, VB.NET, C#, and C++/CLI: Not supported
- `ConfigOption` (System.Int32): Configuration option as defined by swExternalFileReferencesConfig_e
- `ConfigName` (System.String): Name of the configuration when configOption is swExternalFileReferencesNamedConfig

## Return Value

Unknown.

## Remarks

Before calling this method, call
IModelDocExtension::ListExternalFileReferencesCount
to specify NumRefs.

## See Also

- `IModelDoc2.BreakAllExternalReferences`
- `IModelDoc2.IListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferencesCount`
- `IModelDoc2.LockAllExternalReferences`
- `IModelDocExtension.ListExternalFileReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
- `IModelDocExtension.UpdateExternalFileReferences`
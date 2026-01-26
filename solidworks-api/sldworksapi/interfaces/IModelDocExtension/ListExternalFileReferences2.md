---
type: method
interface: IModelDocExtension
member: ListExternalFileReferences2
returns: void
parameters:
  -
    name: ModelPathName
    type: System.Object
    description: Array of path names of externally referenced model documents
  -
    name: ComponentPathName
    type: System.Object
    description: Array of path names of externally referenced assembly components
  -
    name: Feature
    type: System.Object
    description: Array of in-context items (e.g., FeatureManager design tree sketches, features, and so on) that externally reference ModelPathName and ComponentPathName elements
  -
    name: DataType
    type: System.Object
    description: Array of data types used to create RefEntity (e.g., arc, line, sketch plane, converted edge or face, converted or offset sketch entity, body, and so on)
  -
    name: Status
    type: System.Object
    description: Array of statuses of the external references as defined by swExternalReferenceStatus_e
  -
    name: RefEntity
    type: System.Object
    description: Array of actual items being used (FeatureManager design tree entities in the Feature parameter's external references) and the names of the documents containing the items
  -
    name: FeatCom
    type: System.Object
    description: Array of names of the components in which the affected Features exist; valid only if one or more RefEntity is in a different component in an assembly; not valid for derived parts
  -
    name: ConfigOptions
    type: System.Object
    description: Array of configuration options as defined by swExternalFileReferencesConfig_e
  -
    name: ConfigNames
    type: System.Object
    description: Array of configuration names when corresponding element of ConfigOptions array contains swExternalFileReferencesNamedConfig, empty strings otherwise
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - ui
related:
  - IModelDoc2.BreakAllExternalReferences
  - IModelDoc2.ListAuxiliaryExternalFileReferences
  - IModelDoc2.LockAllExternalReferences
  - IModelDocExtension.ListExternalFileReferencesCount
  - IModelDocExtension.UpdateExternalFileReferences
keywords:
  - dependent
  - documents
  - external
  - references
  - list
  - listexternalfilereferences2
  - imodeldocextension
  - model
  - doc
  - extension
  - file
  - references2
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
  - options
  - names
  - void
  - vba
  - vb
  - net
---

# IModelDocExtension.ListExternalFileReferences2

Gets the specified external file reference information for this part or assembly.

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
   out System.Object
ConfigOptions
,
   out System.Object
ConfigNames
)
```
## Parameters

- `ModelPathName` (System.Object): Array of path names of externally referenced model documents
- `ComponentPathName` (System.Object): Array of path names of externally referenced assembly components
- `Feature` (System.Object): Array of in-context items (e.g., FeatureManager design tree sketches, features, and so on) that externally reference ModelPathName and ComponentPathName elements
- `DataType` (System.Object): Array of data types used to create RefEntity (e.g., arc, line, sketch plane, converted edge or face, converted or offset sketch entity, body, and so on)
- `Status` (System.Object): Array of statuses of the external references as defined by swExternalReferenceStatus_e
- `RefEntity` (System.Object): Array of actual items being used (FeatureManager design tree entities in the Feature parameter's external references) and the names of the documents containing the items
- `FeatCom` (System.Object): Array of names of the components in which the affected Features exist; valid only if one or more RefEntity is in a different component in an assembly; not valid for derived parts
- `ConfigOptions` (System.Object): Array of configuration options as defined by swExternalFileReferencesConfig_e
- `ConfigNames` (System.Object): Array of configuration names when corresponding element of ConfigOptions array contains swExternalFileReferencesNamedConfig, empty strings otherwise

## Return Value

Unknown.

## Remarks

This method conveniently collects the same information that is displayed when you right-click on a feature or component with
{ -> }
at the end of its name in the FeatureManager design tree and select
External References...
from the context menu.
The External References dialog displays the assembly or part name of the external reference, configuration if applicable, name of the feature in this document that has an external reference, status of the external reference, the entity in the external reference to which this feature or component points, and the data type of the external reference entity.
For more information, see the
SOLIDWORKS Design user-interface help > Assemblies > Top-Down Design > External References > External References Dialog Box
.
The elements of the arrays returned by this method map one to one.

## Examples

- Get External References (VBA) (Get_External_References_Example_VB.htm)
- Get External References (VB.NET) (Get_External_References_Example_VBNET.htm)
- Get External References (C#) (Get_External_References_Example_CSharp.htm)

## See Also

- `IModelDoc2.BreakAllExternalReferences`
- `IModelDoc2.ListAuxiliaryExternalFileReferences`
- `IModelDoc2.LockAllExternalReferences`
- `IModelDocExtension.ListExternalFileReferencesCount`
- `IModelDocExtension.UpdateExternalFileReferences`
---
type: method
interface: IFeatureManager
member: IInsertCombineFeature
returns: Feature
parameters:
  -
    name: OperationType
    type: System.Int32
    description: Operation as defined in swBodyOperationType_e
  -
    name: MainBody
    type: Body2
    description: If OperationType is ... Then set MainBody to ... swBodyOperationType_e.SWBODYADD Nothing or null swBodyOperationType_e.SWBODYCUT Target body swBodyOperationType_e.SWBODYINTERSECT Nothing or null (See Remarks )
  -
    name: ToolsCount
    type: System.Int32
    description: Number of bodies to combine
  -
    name: ToolsArr
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of bodies to combine of size ToolsCount (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICombineBodiesFeatureData
  - IFeatureManager.InsertCombineFeature
keywords:
  - feature
  - see
  - also
  - ifeature
  - combine
  - parts
  - icombinebodiesfeaturedata
  - iinsertcombinefeature
  - ifeaturemanager
  - manager
  - insert
  - operation
  - type
  - int32
  - main
  - body
  - body2
  - tools
  - count
  - arr
---

# IFeatureManager.IInsertCombineFeature

Combines the specified bodies in the multibody part to create a combine feature.

## Signature

```csharp
Feature IInsertCombineFeature( 
   System.Int32
OperationType
,
   Body2
MainBody
,
   System.Int32
ToolsCount
,
   ref Body2
ToolsArr
)
```
## Parameters

- `OperationType` (System.Int32): Operation as defined in swBodyOperationType_e
- `MainBody` (Body2): If OperationType is ... Then set MainBody to ... swBodyOperationType_e.SWBODYADD Nothing or null swBodyOperationType_e.SWBODYCUT Target body swBodyOperationType_e.SWBODYINTERSECT Nothing or null (See Remarks )
- `ToolsCount` (System.Int32): Number of bodies to combine
- `ToolsArr` (Body2): in-process, unmanaged C++: Pointer to an array of bodies to combine of size ToolsCount (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

IFeature

## Remarks

You can either call this method, directly passing in the bodies with MainBody and ToolVar, or you can:
Select the bodies using
IModelDocExtension::SelectByID2
as follows:
To select...
Use Mark...
MainBody
1
ToolVar bodies
2
Call this method, setting MainBody to Nothing or null and ToolVar to an empty array.
See the SOLIDWORKS Help for more information about the combined feature.

## See Also

- `ICombineBodiesFeatureData`
- `IFeatureManager.InsertCombineFeature`
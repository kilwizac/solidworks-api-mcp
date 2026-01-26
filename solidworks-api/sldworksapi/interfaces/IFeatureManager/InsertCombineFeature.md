---
type: method
interface: IFeatureManager
member: InsertCombineFeature
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
    name: ToolVar
    type: System.Object
    description: Array of bodies to combine (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICombineBodiesFeatureData
  - IFeatureManager.IInsertCombineFeature
keywords:
  - feature
  - see
  - also
  - ifeature
  - combine
  - parts
  - icombinebodiesfeaturedata
  - insertcombinefeature
  - ifeaturemanager
  - manager
  - insert
  - operation
  - type
  - int32
  - main
  - body
  - body2
  - tool
  - var
  - object
  - bodies
  - vb
  - net
  - vba
---

# IFeatureManager.InsertCombineFeature

Combines the specified bodies in the multibody part to create a combine feature.

## Signature

```csharp
Feature InsertCombineFeature( 
   System.Int32
OperationType
,
   Body2
MainBody
,
   System.Object
ToolVar
)
```
## Parameters

- `OperationType` (System.Int32): Operation as defined in swBodyOperationType_e
- `MainBody` (Body2): If OperationType is ... Then set MainBody to ... swBodyOperationType_e.SWBODYADD Nothing or null swBodyOperationType_e.SWBODYCUT Target body swBodyOperationType_e.SWBODYINTERSECT Nothing or null (See Remarks )
- `ToolVar` (System.Object): Array of bodies to combine (see Remarks )

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
See the SOLIDWORKS Help for more information about the combine feature.

## Examples

- Combine Bodies (C#) (Combine_Bodies_Example_CSharp.htm)
- Combine Bodies (VB.NET) (Combine_Bodies_Example_VBNET.htm)
- Combine Bodies (VBA) (Combine_Bodies_Example_VB.htm)

## See Also

- `ICombineBodiesFeatureData`
- `IFeatureManager.IInsertCombineFeature`
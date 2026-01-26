---
type: method
interface: IHealEdgesFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc2
    description: Top-level document (see Remarks )
  -
    name: Component
    type: Component2
    description: Component in which the feature is to be modified (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - selections
related: []
keywords:
  - accessselections
  - ihealedgesfeaturedata
  - heal
  - edges
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - model
  - doc2
  - component
  - component2
  - boolean
  - modify
  - vba
  - vb
  - net
---

# IHealEdgesFeatureData.AccessSelections

Gains access to the selections that describe this heal edges feature.

## Signature

```csharp
System.Boolean AccessSelections( 
   ModelDoc2
TopDoc
,
   Component2
Component
)
```
## Parameters

- `TopDoc` (ModelDoc2): Top-level document (see Remarks )
- `Component` (Component2): Component in which the feature is to be modified (see Remarks )

## Return Value

True if the selections are accessed, false if not

## Remarks

To modify a feature in a...
Then...
Part
TopDoc argument is the
IModelDoc2
for the part
Component argument is Nothing or null
Assembly
TopDoc is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefintion
or
IFeature::IModifyDefinition2
if you modified the feature
IHealEdgesFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Modify Heal Edges Feature (VBA) (Modify_Heal_Edges_Feature_Example_VB.htm)
- Get Heal Edges Feature Data (C#) (Get_Heal_Edges_Feature_Data_Example_CSharp.htm)
- Get Heal Edges Feature Data (VB.NET) (Get_Heal_Edges_Feature_Data_Example_VBNET.htm)
- Get Heal Edges Feature Data (VBA) (Get_Heal_Edges_Feature_Data_Example_VB.htm)
---
type: method
interface: IMoveCopyBodyFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: PTopDoc
    type: ModelDoc2
    description: Top-level document (see Remarks )
  -
    name: PComponent
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
  - imovecopybodyfeaturedata
  - move
  - copy
  - body
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
  - rotate
  - using
  - edge
  - vba
  - setting
  - transforms
  - modify
  - vertex
  - vb
  - net
  - bodies
---

# IMoveCopyBodyFeatureData.AccessSelections

Gains access to selections that define this feature.

## Signature

```csharp
System.Boolean AccessSelections( 
   ModelDoc2
PTopDoc
,
   Component2
PComponent
)
```
## Parameters

- `PTopDoc` (ModelDoc2): Top-level document (see Remarks )
- `PComponent` (Component2): Component in which the feature is to be modified (see Remarks )

## Return Value

True if the selections were successfully accessed, false if not

## Remarks

To modify a feature in a...
Then...
Part
PTopDoc argument is the
IModelDoc2
for the part
PComponent argument is Nothing or null
Assembly
PTopDoc is the IModelDoc2 object for the assembly
PComponent argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you modified the feature
IMoveCopyBodyFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Copy and Rotate Body Using Edge (VBA) (Copy_and_Rotate_Body_using_Edge_Example_VB.htm)
- Move and Copy Body By Setting Transforms (VBA) (Move_and_Copy_Body_by_Setting_Transforms_Example_VB.htm)
- Modify Move/Copy Body Using Vertex (C#) (Move_and_Copy_Body_Using_Vertex_Example_CSharp.htm)
- Modify Move/Copy Body Using Vertex (VB.NET) (Move_and_Copy_Body_Using_Vertex_Example_VBNET.htm)
- Modify Move/Copy Body Using Vertex (VBA) (Move_and_Copy_Body_using_Vertex_Example_VB.htm)
- Set Bodies for Move/Copy (C#) (Set_Bodies_for_Move_Copy_Example_CSharp.htm)
- Set Bodies for Move/Copy (VB.NET) (Set_Bodies_for_Move_Copy_Example_VBNET.htm)
- Set Bodies for Move/Copy (VBA) (Set_Bodies_for_Move_Copy_Example_VB.htm)
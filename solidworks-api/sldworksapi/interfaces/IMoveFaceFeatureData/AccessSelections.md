---
type: method
interface: IMoveFaceFeatureData
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
  - imovefacefeaturedata
  - move
  - face
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
  - change
  - direction
  - reference
  - vba
  - faces
  - rotate
  - vb
  - net
  - create
  - modify
---

# IMoveFaceFeatureData.AccessSelections

Gains access to selections that define this Move Face feature.

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

True if the selections were successfully accessed, false if not

## Remarks

To modify a feature in a...
Then...
Part
TopDoc argument is the
IModelDoc2
for the part
Component argument is NULL
Assembly
TopDoc is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you modified the feature
IMoveFaceFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Change Direction Reference of Move Face Feature (VBA) (Change_Direction_Reference_of_Move_Face_Feature_Example_VB.htm)
- Change Faces of Move Face Feature (VBA) (Change_Faces_of_Move_Face_Feature_Example_VB.htm)
- Rotate Move Face Feature (VB.NET) (Rotate_Move_Face_Feature_Example_VBNET.htm)
- Create and Modify Move Face Feature (C#) (Create_and_Modify_Move_Face_Feature_Example_CSharp.htm)
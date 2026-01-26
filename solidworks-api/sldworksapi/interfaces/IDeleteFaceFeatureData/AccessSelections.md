---
type: method
interface: IDeleteFaceFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: System.Object
    description: Top-level document
  -
    name: Component
    type: System.Object
    description: Top-level document
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - selections
related:
  - IDeleteFaceFeatureData.IAccessSelections
keywords:
  - accessselections
  - ideletefacefeaturedata
  - delete
  - face
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - insert
  - change
  - deleteface
  - vb
  - net
  - vba
---

# IDeleteFaceFeatureData.AccessSelections

Allows access to the selections that describe the DeleteFace feature.

## Signature

```csharp
System.Boolean AccessSelections( 
   System.Object
TopDoc
,
   System.Object
Component
)
```
## Parameters

- `TopDoc` (System.Object): Top-level document
- `Component` (System.Object): Top-level document

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
TopDoc argument is the ModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
if you modified the feature
IDeleteFaceFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Insert and Change DeleteFace Feature (C#) (Insert_and_Change_DeleteFace_Feature_Example_CSharp.htm)
- Insert and Change DeleteFace Feature (VB.NET) (Insert_and_Change_DeleteFace_Feature_Example_VBNET.htm)
- Insert and Change DeleteFace Feature (VBA) (Insert_and_Change_DeleteFace_Feature_Example_VB.htm)

## See Also

- `IDeleteFaceFeatureData.IAccessSelections`
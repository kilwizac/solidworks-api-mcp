---
type: method
interface: ICoordinateSystemFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: ModelDoc2
    description: Top-level document
  -
    name: Component
    type: Component2
    description: Component in which the feature is to be modified
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - ICoordinateSystemFeatureData.IAccessSelections
keywords:
  - accessselections
  - icoordinatesystemfeaturedata
  - coordinate
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
  - create
  - vba
  - insert
  - center
  - mass
  - points
  - repeating
  - elements
  - table
  - driven
  - pattern
  - vb
  - net
---

# ICoordinateSystemFeatureData.AccessSelections

Allows access to the selections that describe this coordinate system feature.

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

- `TopDoc` (ModelDoc2): Top-level document
- `Component` (Component2): Component in which the feature is to be modified

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
and
IFeature::IModifyDefinition2
if you modified the feature
ICoordinateSystemFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Create Coordinate System Feature (VBA) (Create_Coordinate_System_Feature_Example_VB.htm)
- Insert Coordinate System Feature at Center of Mass (VBA) (Insert_Coordinate_System_Feature_at_Center_of_Mass_Example_VB.htm)
- Get Points of Repeating Elements in Table-driven Pattern (C#) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_CSharp.htm)
- Get Points of Repeating Elements in Table-driven Pattern (VB.NET) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_VBNET.htm)
- Get Points of Repeating Elements in Table-driven Pattern (VBA) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_VB.htm)

## See Also

- `ICoordinateSystemFeatureData.IAccessSelections`
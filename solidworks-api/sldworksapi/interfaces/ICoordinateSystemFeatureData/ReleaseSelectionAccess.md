---
type: method
interface: ICoordinateSystemFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - icoordinatesystemfeaturedata
  - coordinate
  - feature
  - data
  - release
  - selection
  - access
  - void
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

# ICoordinateSystemFeatureData.ReleaseSelectionAccess

Releases access to selections that describe this coordinate system feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ICoordinateSystemFeatureData::AccessSelections
and
ICoordinateSystemFeatureData::IAccessSelections
puts the model into a rollback state to allow access to the selections that define the coordinate system feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- Create Coordinate System Feature (VBA) (Create_Coordinate_System_Feature_Example_VB.htm)
- Insert Coordinate System Feature at Center of Mass (VBA) (Insert_Coordinate_System_Feature_at_Center_of_Mass_Example_VB.htm)
- Get Points of Repeating Elements in Table-driven Pattern (C#) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_CSharp.htm)
- Get Points of Repeating Elements in Table-driven Pattern (VB.NET) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_VBNET.htm)
- Get Points of Repeating Elements in Table-driven Pattern (VBA) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_VB.htm)
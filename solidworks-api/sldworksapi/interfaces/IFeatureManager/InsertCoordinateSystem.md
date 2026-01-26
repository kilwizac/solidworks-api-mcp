---
type: method
interface: IFeatureManager
member: InsertCoordinateSystem
returns: Feature
parameters:
  -
    name: XFlippedIn
    type: System.Boolean
    description: True to flip the x axis direction, false to not
  -
    name: YFlippedIn
    type: System.Boolean
    description: True to flip the y axis direction, false to not
  -
    name: ZFlippedIn
    type: System.Boolean
    description: True to flip the y axis direction, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData
  - IFeatureManager.CreateCoordinateSystem
keywords:
  - coordinate
  - insertcoordinatesystem
  - ifeaturemanager
  - feature
  - manager
  - insert
  - flipped
  - boolean
  - center
  - mass
  - vba
---

# IFeatureManager.InsertCoordinateSystem

Inserts a coordinate system feature.

## Signature

```csharp
Feature InsertCoordinateSystem( 
   System.Boolean
XFlippedIn
,
   System.Boolean
YFlippedIn
,
   System.Boolean
ZFlippedIn
)
```
## Parameters

- `XFlippedIn` (System.Boolean): True to flip the x axis direction, false to not
- `YFlippedIn` (System.Boolean): True to flip the y axis direction, false to not
- `ZFlippedIn` (System.Boolean): True to flip the y axis direction, false to not

## Return Value

Feature

## Remarks

Make the selections using
IModelDocExtension::SelectByID2
with a mark of:
1 - Origin
2 - X axis
4 - Y axis
8 - Z axis
This method:
does not require all three axis to be selected. The behavior is the same as interactively creating a coordinate system. See the SOLIDWORKS Help for more information.
works in section-view mode, but not if temporary geometry that only exists in section-view mode is selected.

## Examples

- Insert Coordinate System Feature at Center of Mass (VBA) (Insert_Coordinate_System_Feature_at_Center_of_Mass_Example_VB.htm)

## See Also

- `ICoordinateSystemFeatureData`
- `IFeatureManager.CreateCoordinateSystem`
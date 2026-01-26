---
type: method
interface: IModelDoc2
member: InsertCoordinateSystem
returns: System.Boolean
parameters:
  -
    name: XFlippedIn
    type: System.Boolean
    description: True to flip the x direction, false to not
  -
    name: YFlippedIn
    type: System.Boolean
    description: True to flip the y direction, false to not
  -
    name: ZFlippedIn
    type: System.Boolean
    description: True to flip the z direction, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetCurrentCoordinateSystemName
  - IModelDocExtension.GetCoordinateSystemTransformByName
keywords:
  - insertcoordinatesystem
  - imodeldoc2
  - model
  - doc2
  - insert
  - coordinate
  - flipped
  - boolean
  - center
  - mass
  - vba
---

# IModelDoc2.InsertCoordinateSystem

Obsolete. Superseded by IFeatureManager::InsertCoordinateSystem.

## Signature

```csharp
System.Boolean InsertCoordinateSystem( 
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

- `XFlippedIn` (System.Boolean): True to flip the x direction, false to not
- `YFlippedIn` (System.Boolean): True to flip the y direction, false to not
- `ZFlippedIn` (System.Boolean): True to flip the z direction, false to not

## Return Value

True if coordinate system is added successfully, false if not

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

- Insert Coordinate System at Center of Mass (VBA) (Insert_Coordinate_System_at_Center_of_Mass_Example_VB.htm)

## See Also

- `IModelDoc2.GetCurrentCoordinateSystemName`
- `IModelDocExtension.GetCoordinateSystemTransformByName`
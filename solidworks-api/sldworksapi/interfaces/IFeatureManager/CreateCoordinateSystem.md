---
type: method
interface: IFeatureManager
member: CreateCoordinateSystem
returns: Feature
parameters:
  -
    name: OriginPointEntity
    type: System.Object
    description: Entity (vertex, point, midpoint, or the default point of origin on a part or assembly) for the coordinate system origin
  -
    name: XAxisEntities
    type: System.Object
    description: Array of entities (vertex, point, or midpoint; linear edge or sketch line; non-linear edge or sketch entity; or planar face) for the x axis
  -
    name: YAxisEntities
    type: System.Object
    description: Array of entities (vertex, point, or midpoint; linear edge or sketch line; non-linear edge or sketch entity; or planar face) for the y axis
  -
    name: ZAxisEntities
    type: System.Object
    description: Array of entities (vertex, point, or midpoint; linear edge or sketch line; non-linear edge or sketch entity; or planar face) for the z axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData
  - IFeatureManager.CreateCoordinateSystemUsingNumericalValues
  - IFeatureManager.InsertCoordinateSystem
keywords:
  - coordinate
  - createcoordinatesystem
  - ifeaturemanager
  - feature
  - manager
  - create
  - origin
  - point
  - entity
  - object
  - axis
  - entities
  - vba
---

# IFeatureManager.CreateCoordinateSystem

Creates a coordinate system feature using the specified entities.

## Signature

```csharp
Feature CreateCoordinateSystem( 
   System.Object
OriginPointEntity
,
   System.Object
XAxisEntities
,
   System.Object
YAxisEntities
,
   System.Object
ZAxisEntities
)
```
## Parameters

- `OriginPointEntity` (System.Object): Entity (vertex, point, midpoint, or the default point of origin on a part or assembly) for the coordinate system origin
- `XAxisEntities` (System.Object): Array of entities (vertex, point, or midpoint; linear edge or sketch line; non-linear edge or sketch entity; or planar face) for the x axis
- `YAxisEntities` (System.Object): Array of entities (vertex, point, or midpoint; linear edge or sketch line; non-linear edge or sketch entity; or planar face) for the y axis
- `ZAxisEntities` (System.Object): Array of entities (vertex, point, or midpoint; linear edge or sketch line; non-linear edge or sketch entity; or planar face) for the z axis

## Return Value

Feature

## Examples

- Create Coordinate System Feature (VBA) (Create_Coordinate_System_Feature_Example_VB.htm)

## See Also

- `ICoordinateSystemFeatureData`
- `IFeatureManager.CreateCoordinateSystemUsingNumericalValues`
- `IFeatureManager.InsertCoordinateSystem`
---
type: method
interface: ICoordinateSystemFeatureData
member: GetXAxisEntitiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData.GetXAxisEntitiesTypes
  - ICoordinateSystemFeatureData.IGetXAxisEntities
  - ICoordinateSystemFeatureData.IGetXAxisEntitiesTypes
  - ICoordinateSystemFeatureData.ISetXAxisEntities
  - ICoordinateSystemFeatureData.XAxisEntities
  - ICoordinateSystemFeatureData.XFlipped
keywords:
  - coordinate
  - axis
  - getxaxisentitiescount
  - icoordinatesystemfeaturedata
  - feature
  - data
  - entities
  - count
  - int32
  - create
  - vba
  - insert
  - center
  - mass
---

# ICoordinateSystemFeatureData.GetXAxisEntitiesCount

Gets the number of entities for the x axis of this coordinate system feature.

## Signature

```csharp
System.Int32 GetXAxisEntitiesCount()
```
## Parameters

None.

## Return Value

Number of entities for the x axis

## Remarks

Call this method before calling
ICoordinateSystemFeatureData::IGetXAxisEntities
to determine the size of the array for that method.

## Examples

- Create Coordinate System Feature (VBA) (Create_Coordinate_System_Feature_Example_VB.htm)
- Insert Coordinate System Feature at Center of Mass (VBA) (Insert_Coordinate_System_Feature_at_Center_of_Mass_Example_VB.htm)

## See Also

- `ICoordinateSystemFeatureData.GetXAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.IGetXAxisEntities`
- `ICoordinateSystemFeatureData.IGetXAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.ISetXAxisEntities`
- `ICoordinateSystemFeatureData.XAxisEntities`
- `ICoordinateSystemFeatureData.XFlipped`
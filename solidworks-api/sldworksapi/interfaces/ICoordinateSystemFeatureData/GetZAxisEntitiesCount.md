---
type: method
interface: ICoordinateSystemFeatureData
member: GetZAxisEntitiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData.GetZAxisEntitiesTypes
  - ICoordinateSystemFeatureData.IGetZAxisEntities
  - ICoordinateSystemFeatureData.IGetZAxisEntitiesTypes
  - ICoordinateSystemFeatureData.ISetZAxisEntities
  - ICoordinateSystemFeatureData.ZAxisEntities
  - ICoordinateSystemFeatureData.ZFlipped
keywords:
  - coordinate
  - axis
  - getzaxisentitiescount
  - icoordinatesystemfeaturedata
  - feature
  - data
  - entities
  - count
  - int32
  - create
  - vba
---

# ICoordinateSystemFeatureData.GetZAxisEntitiesCount

Gets the number of entities for the z axis for this coordinate system feature.

## Signature

```csharp
System.Int32 GetZAxisEntitiesCount()
```
## Parameters

None.

## Return Value

Number of entities for the z axis

## Remarks

Call this method before calling
ICoordinateSystemFeatureData::IGetZAxisEntities
to determine the size of the array for that method.

## Examples

- Create Coordinate System Feature (VBA) (Create_Coordinate_System_Feature_Example_VB.htm)

## See Also

- `ICoordinateSystemFeatureData.GetZAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.IGetZAxisEntities`
- `ICoordinateSystemFeatureData.IGetZAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.ISetZAxisEntities`
- `ICoordinateSystemFeatureData.ZAxisEntities`
- `ICoordinateSystemFeatureData.ZFlipped`
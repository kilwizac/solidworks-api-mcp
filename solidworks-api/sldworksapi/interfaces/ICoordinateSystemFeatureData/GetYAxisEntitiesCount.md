---
type: method
interface: ICoordinateSystemFeatureData
member: GetYAxisEntitiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData.GetYAxisEntitiesTypes
  - ICoordinateSystemFeatureData.IGetYAxisEntities
  - ICoordinateSystemFeatureData.IGetYAxisEntitiesTypes
  - ICoordinateSystemFeatureData.ISetYAxisEntities
  - ICoordinateSystemFeatureData.YAxisEntities
  - ICoordinateSystemFeatureData.YFlipped
keywords:
  - coordinate
  - axis
  - getyaxisentitiescount
  - icoordinatesystemfeaturedata
  - feature
  - data
  - entities
  - count
  - int32
  - create
  - vba
---

# ICoordinateSystemFeatureData.GetYAxisEntitiesCount

Gets the number of entities for the y axis of this coordinate system feature.

## Signature

```csharp
System.Int32 GetYAxisEntitiesCount()
```
## Parameters

None.

## Return Value

Number of entities for the y axis

## Remarks

Call this method before calling
ICoordinateSystemFeatureData::IGetYAxisEntities
to determine the size of the array for that method.

## Examples

- Create Coordinate System Feature (VBA) (Create_Coordinate_System_Feature_Example_VB.htm)

## See Also

- `ICoordinateSystemFeatureData.GetYAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.IGetYAxisEntities`
- `ICoordinateSystemFeatureData.IGetYAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.ISetYAxisEntities`
- `ICoordinateSystemFeatureData.YAxisEntities`
- `ICoordinateSystemFeatureData.YFlipped`
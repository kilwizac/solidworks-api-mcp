---
type: method
interface: ICoordinateSystemFeatureData
member: IGetYAxisEntities
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities for the y axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData.GetYAxisEntitiesCount
  - ICoordinateSystemFeatureData.GetYAxisEntitiesTypes
  - ICoordinateSystemFeatureData.IGetYAxisEntitiesTypes
  - ICoordinateSystemFeatureData.ISetYAxisEntities
  - ICoordinateSystemFeatureData.YAxisEntities
  - ICoordinateSystemFeatureData.YFlipped
keywords:
  - coordinate
  - axis
  - igetyaxisentities
  - icoordinatesystemfeaturedata
  - feature
  - data
  - entities
  - count
  - int32
  - object
---

# ICoordinateSystemFeatureData.IGetYAxisEntities

Gets the entities for the y axis of this coordinate system feature.

## Signature

```csharp
System.Object IGetYAxisEntities( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of entities for the y axis

## Return Value

in-process, unmanaged C++: Pointer to an an array of entities for the y axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ICoordinateSystemFeatureData::GetYAxisEntitiesCount
before calling this method to get Count.
See SOLIDWORKS Help for a list of valid entities.

## See Also

- `ICoordinateSystemFeatureData.GetYAxisEntitiesCount`
- `ICoordinateSystemFeatureData.GetYAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.IGetYAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.ISetYAxisEntities`
- `ICoordinateSystemFeatureData.YAxisEntities`
- `ICoordinateSystemFeatureData.YFlipped`
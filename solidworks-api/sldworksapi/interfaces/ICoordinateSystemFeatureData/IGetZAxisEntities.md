---
type: method
interface: ICoordinateSystemFeatureData
member: IGetZAxisEntities
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities for the z axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData.GetZAxisEntitiesCount
  - ICoordinateSystemFeatureData.GetZAxisEntitiesTypes
  - ICoordinateSystemFeatureData.IGetZAxisEntitiesTypes
  - ICoordinateSystemFeatureData.ISetXAxisEntities
  - ICoordinateSystemFeatureData.ZAxisEntities
  - ICoordinateSystemFeatureData.ZFlipped
keywords:
  - coordinate
  - axis
  - igetzaxisentities
  - icoordinatesystemfeaturedata
  - feature
  - data
  - entities
  - count
  - int32
  - object
---

# ICoordinateSystemFeatureData.IGetZAxisEntities

Gets the entities for the z axis for this coordinate system feature.

## Signature

```csharp
System.Object IGetZAxisEntities( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of entities for the z axis

## Return Value

in-process, unmanaged C++: Pointer to an an array of entities for the z axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ICoordinateSystemFeatureData::GetZAxisEntitiesCount
before calling this method to get Count.
See SOLIDWORKS Help for a list of valid entities.

## See Also

- `ICoordinateSystemFeatureData.GetZAxisEntitiesCount`
- `ICoordinateSystemFeatureData.GetZAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.IGetZAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.ISetXAxisEntities`
- `ICoordinateSystemFeatureData.ZAxisEntities`
- `ICoordinateSystemFeatureData.ZFlipped`
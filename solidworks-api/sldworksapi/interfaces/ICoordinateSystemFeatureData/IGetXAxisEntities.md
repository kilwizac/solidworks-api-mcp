---
type: method
interface: ICoordinateSystemFeatureData
member: IGetXAxisEntities
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entites for the x axis
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData.GetXAxisEntitiesCount
  - ICoordinateSystemFeatureData.GetXAxisEntitiesTypes
  - ICoordinateSystemFeatureData.IGetXAxisEntitiesTypes
  - ICoordinateSystemFeatureData.ISetXAxisEntities
  - ICoordinateSystemFeatureData.XAxisEntities
  - ICoordinateSystemFeatureData.XFlipped
keywords:
  - coordinate
  - axis
  - igetxaxisentities
  - icoordinatesystemfeaturedata
  - feature
  - data
  - entities
  - count
  - int32
  - object
---

# ICoordinateSystemFeatureData.IGetXAxisEntities

Gets the entities for the x axis of this coordinate system feature.

## Signature

```csharp
System.Object IGetXAxisEntities( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of entites for the x axis

## Return Value

in-process, unmanaged C++: Pointer to an an array of entities for the x axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ICoordinateSystemFeatureData::GetXAxisEntitiesCount
before calling this method to get Count.
See SOLIDWORKS Help for a list of valid entities.

## See Also

- `ICoordinateSystemFeatureData.GetXAxisEntitiesCount`
- `ICoordinateSystemFeatureData.GetXAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.IGetXAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.ISetXAxisEntities`
- `ICoordinateSystemFeatureData.XAxisEntities`
- `ICoordinateSystemFeatureData.XFlipped`
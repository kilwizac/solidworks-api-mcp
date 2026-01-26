---
type: method
interface: ICoordinateSystemFeatureData
member: ISetYAxisEntities
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities for the y axis
  -
    name: EntArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an an array of entities for the y axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData.GetYAxisEntitiesCount
  - ICoordinateSystemFeatureData.GetYAxisEntitiesTypes
  - ICoordinateSystemFeatureData.IGetYAxisEntities
  - ICoordinateSystemFeatureData.IGetYAxisEntitiesTypes
  - ICoordinateSystemFeatureData.YAxisEntities
  - ICoordinateSystemFeatureData.YFlipped
keywords:
  - coordinate
  - axis
  - isetyaxisentities
  - icoordinatesystemfeaturedata
  - feature
  - data
  - entities
  - count
  - int32
  - ent
  - array
  - object
  - void
---

# ICoordinateSystemFeatureData.ISetYAxisEntities

Sets the entities for the y axis of this coordinate system feature.

## Signature

```csharp
void ISetYAxisEntities( 
   System.Int32
Count
,
   ref System.Object
EntArray
)
```
## Parameters

- `Count` (System.Int32): Number of entities for the y axis
- `EntArray` (System.Object): in-process, unmanaged C++: Pointer to an an array of entities for the y axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See SOLIDWORKS Help for a list of valid entities.

## See Also

- `ICoordinateSystemFeatureData.GetYAxisEntitiesCount`
- `ICoordinateSystemFeatureData.GetYAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.IGetYAxisEntities`
- `ICoordinateSystemFeatureData.IGetYAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.YAxisEntities`
- `ICoordinateSystemFeatureData.YFlipped`
---
type: method
interface: ICoordinateSystemFeatureData
member: ISetXAxisEntities
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities for the x axis
  -
    name: EntArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an an array of entities for the x axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData.GetXAxisEntitiesCount
  - ICoordinateSystemFeatureData.GetXAxisEntitiesTypes
  - ICoordinateSystemFeatureData.IGetXAxisEntities
  - ICoordinateSystemFeatureData.IGetXAxisEntitiesTypes
  - ICoordinateSystemFeatureData.XAxisEntities
  - ICoordinateSystemFeatureData.XFlipped
keywords:
  - coordinate
  - axis
  - isetxaxisentities
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

# ICoordinateSystemFeatureData.ISetXAxisEntities

Sets the entities for the x axis of this coordinate system feature.

## Signature

```csharp
void ISetXAxisEntities( 
   System.Int32
Count
,
   ref System.Object
EntArray
)
```
## Parameters

- `Count` (System.Int32): Number of entities for the x axis
- `EntArray` (System.Object): in-process, unmanaged C++: Pointer to an an array of entities for the x axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See SOLIDWORKS Help for a list of valid entities.

## See Also

- `ICoordinateSystemFeatureData.GetXAxisEntitiesCount`
- `ICoordinateSystemFeatureData.GetXAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.IGetXAxisEntities`
- `ICoordinateSystemFeatureData.IGetXAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.XAxisEntities`
- `ICoordinateSystemFeatureData.XFlipped`
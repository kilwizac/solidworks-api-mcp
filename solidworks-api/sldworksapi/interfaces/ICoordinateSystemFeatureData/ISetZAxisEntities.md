---
type: method
interface: ICoordinateSystemFeatureData
member: ISetZAxisEntities
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of enties for the z axis
  -
    name: EntArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an an array of entities for the z axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData.GetZAxisEntitiesCount
  - ICoordinateSystemFeatureData.GetZAxisEntitiesTypes
  - ICoordinateSystemFeatureData.IGetZAxisEntities
  - ICoordinateSystemFeatureData.IGetZAxisEntitiesTypes
  - ICoordinateSystemFeatureData.ZAxisEntities
  - ICoordinateSystemFeatureData.ZFlipped
keywords:
  - coordinate
  - axis
  - isetzaxisentities
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

# ICoordinateSystemFeatureData.ISetZAxisEntities

Sets the entities for the z axis of this coordinate system feature.

## Signature

```csharp
void ISetZAxisEntities( 
   System.Int32
Count
,
   ref System.Object
EntArray
)
```
## Parameters

- `Count` (System.Int32): Number of enties for the z axis
- `EntArray` (System.Object): in-process, unmanaged C++: Pointer to an an array of entities for the z axis VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See SOLIDWORKS Help for a list of valid entities.

## See Also

- `ICoordinateSystemFeatureData.GetZAxisEntitiesCount`
- `ICoordinateSystemFeatureData.GetZAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.IGetZAxisEntities`
- `ICoordinateSystemFeatureData.IGetZAxisEntitiesTypes`
- `ICoordinateSystemFeatureData.ZAxisEntities`
- `ICoordinateSystemFeatureData.ZFlipped`
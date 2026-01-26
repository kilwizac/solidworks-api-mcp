---
type: method
interface: ICoordinateSystemFeatureData
member: ISetOriginEntity
returns: void
parameters:
  -
    name: Ent
    type: System.Object
    description: Entity for origin
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoordinateSystemFeatureData.GetOriginEntityType
  - ICoordinateSystemFeatureData.IGetOriginEntity
  - ICoordinateSystemFeatureData.IGetOriginEntityType
  - ICoordinateSystemFeatureData.OriginEntity
keywords:
  - coordinate
  - origin
  - entity
  - isetoriginentity
  - icoordinatesystemfeaturedata
  - feature
  - data
  - ent
  - object
  - void
---

# ICoordinateSystemFeatureData.ISetOriginEntity

Sets the entity for the origin of this coordinate feature data.

## Signature

```csharp
void ISetOriginEntity( 
   System.Object
Ent
)
```
## Parameters

- `Ent` (System.Object): Entity for origin

## Return Value

Unknown.

## Remarks

See SOLIDWORKS Help for a list of valid entities.

## See Also

- `ICoordinateSystemFeatureData.GetOriginEntityType`
- `ICoordinateSystemFeatureData.IGetOriginEntity`
- `ICoordinateSystemFeatureData.IGetOriginEntityType`
- `ICoordinateSystemFeatureData.OriginEntity`
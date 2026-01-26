---
type: method
interface: ISurfaceOffsetFeatureData
member: ISetEntities
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of offset surfaces or faces
  -
    name: EntityArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of offset surface or face feature entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfaceOffsetFeatureData.Entities
  - ISurfaceOffsetFeatureData.GetEntitiesCount
  - ISurfaceOffsetFeatureData.IGetEntities
keywords:
  - isetentities
  - isurfaceoffsetfeaturedata
  - surface
  - offset
  - feature
  - data
  - entities
  - count
  - int32
  - entity
  - array
  - object
  - void
---

# ISurfaceOffsetFeatureData.ISetEntities

Sets the offset surfaces or faces for this surface offset feature.

## Signature

```csharp
void ISetEntities( 
   System.Int32
Count
,
   ref System.Object
EntityArray
)
```
## Parameters

- `Count` (System.Int32): Number of offset surfaces or faces
- `EntityArray` (System.Object): in-process, unmanaged C++: Pointer to an array of offset surface or face feature entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfaceOffsetFeatureData.Entities`
- `ISurfaceOffsetFeatureData.GetEntitiesCount`
- `ISurfaceOffsetFeatureData.IGetEntities`
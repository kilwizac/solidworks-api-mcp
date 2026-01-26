---
type: method
interface: ISurfacePlanarFeatureData
member: IGetBoundingEntities
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bounding entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfacePlanarFeatureData.BoundingEntities
  - ISurfacePlanarFeatureData.ISetBoundingEntities
keywords:
  - igetboundingentities
  - isurfaceplanarfeaturedata
  - surface
  - planar
  - feature
  - data
  - bounding
  - entities
  - count
  - int32
  - object
---

# ISurfacePlanarFeatureData.IGetBoundingEntities

Gets the bounding entities for this planar surface feature.

## Signature

```csharp
System.Object IGetBoundingEntities( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of bounding entities

## Return Value

in-process, unmanaged C++: Pointer to an array of bounding entities of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISurfacePlanarFeatureData::GetBoundingEntitiesCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfacePlanarFeatureData.BoundingEntities`
- `ISurfacePlanarFeatureData.ISetBoundingEntities`
---
type: method
interface: IIntersectFeatureData
member: SetIntersections
returns: void
parameters:
  -
    name: Intersections
    type: System.Object
    description: Array of booleans; true indicates to exclude the corresponding intersect region in the array of intersect regions returned by IIntersectFeatureData::GetIntersections
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setintersections
  - iintersectfeaturedata
  - intersect
  - feature
  - data
  - intersections
  - object
  - void
---

# IIntersectFeatureData.SetIntersections

Specifies which of the intersect regions to exclude from this intersect feature.

## Signature

```csharp
void SetIntersections( 
   System.Object
Intersections
)
```
## Parameters

- `Intersections` (System.Object): Array of booleans; true indicates to exclude the corresponding intersect region in the array of intersect regions returned by IIntersectFeatureData::GetIntersections

## Return Value

Unknown.
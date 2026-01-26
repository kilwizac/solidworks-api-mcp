---
type: method
interface: IIntersectFeatureData
member: GetIntersections
returns: System.Object
parameters:
  -
    name: Excluded
    type: System.Object
    description: Array of booleans; true indicates that the corresponding intersect region in the array of returned intersect regions is excluded from this intersect feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IIntersectFeatureData.GetIntersectionsCount
  - IIntersectFeatureData.SetIntersections
keywords:
  - getintersections
  - iintersectfeaturedata
  - intersect
  - feature
  - data
  - intersections
  - excluded
  - object
---

# IIntersectFeatureData.GetIntersections

Gets the intersect regions in this intersect feature.

## Signature

```csharp
System.Object GetIntersections( 
   out System.Object
Excluded
)
```
## Parameters

- `Excluded` (System.Object): Array of booleans; true indicates that the corresponding intersect region in the array of returned intersect regions is excluded from this intersect feature

## Return Value

Array of intersect regions

## See Also

- `IIntersectFeatureData.GetIntersectionsCount`
- `IIntersectFeatureData.SetIntersections`
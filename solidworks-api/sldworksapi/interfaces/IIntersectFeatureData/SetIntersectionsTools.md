---
type: method
interface: IIntersectFeatureData
member: SetIntersectionsTools
returns: void
parameters:
  -
    name: Tools
    type: System.Object
    description: Array of intersecting solids , surfaces , and planes for this intersect feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IIntersectFeatureData.GetIntersectionsTools
keywords:
  - setintersectionstools
  - iintersectfeaturedata
  - intersect
  - feature
  - data
  - intersections
  - tools
  - object
  - void
---

# IIntersectFeatureData.SetIntersectionsTools

Specifies the intersecting solids, surfaces, and planes for this intersect feature.

## Signature

```csharp
void SetIntersectionsTools( 
   System.Object
Tools
)
```
## Parameters

- `Tools` (System.Object): Array of intersecting solids , surfaces , and planes for this intersect feature

## Return Value

Unknown.

## See Also

- `IIntersectFeatureData.GetIntersectionsTools`
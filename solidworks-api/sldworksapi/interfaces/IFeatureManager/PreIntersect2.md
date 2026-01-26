---
type: method
interface: IFeatureManager
member: PreIntersect2
returns: System.Object
parameters:
  -
    name: CapPlanar
    type: System.Boolean
    description: True to cap the flat openings of surfaces to define closed volumes, false to not
  -
    name: RegionType
    type: System.Int32
    description: Type of regions to create: 0 = Intersecting regions 1 = Internal regions 2 = Intersecting and internal regions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IIntersectFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - intersect
  - preintersect2
  - ifeaturemanager
  - manager
  - pre
  - intersect2
  - cap
  - planar
  - boolean
  - region
  - type
  - int32
  - object
  - create
  - vb
  - net
  - vba
---

# IFeatureManager.PreIntersect2

Prepares an intersect feature.

## Signature

```csharp
System.Object PreIntersect2( 
   System.Boolean
CapPlanar
,
   System.Int32
RegionType
)
```
## Parameters

- `CapPlanar` (System.Boolean): True to cap the flat openings of surfaces to define closed volumes, false to not
- `RegionType` (System.Int32): Type of regions to create: 0 = Intersecting regions 1 = Internal regions 2 = Intersecting and internal regions

## Return Value

Array of intersecting bodies

## Remarks

Before calling this method, you must select the intersecting
surfaces
,
solids
, or
planes
that make up the intersect feature.
After calling this method, call
IFeatureManager::PostIntersect
to create the intersect feature.

## Examples

- Create Intersect Feature (C#) (Create_Intersect_Feature_Example_CSharp.htm)
- Create Intersect Feature (VB.NET) (Create_Intersect_Feature_Example_VBNET.htm)
- Create Intersect Feature (VBA) (Create_Intersect_Feature_Example_VB.htm)

## See Also

- `IIntersectFeatureData`
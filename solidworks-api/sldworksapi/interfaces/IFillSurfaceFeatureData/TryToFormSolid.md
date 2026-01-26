---
type: property
interface: IFillSurfaceFeatureData
member: TryToFormSolid
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - trytoformsolid
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - try
  - form
  - solid
  - boolean
readonly: null
---

# IFillSurfaceFeatureData.TryToFormSolid

Gets or sets whether to form a solid.

## Signature

```csharp
System.Boolean TryToFormSolid {get; set;}
```
## Parameters

None.

## Return Value

True if trying to form solid, false if not

## Remarks

The behavior for this option depends on the boundaries.
When all the boundaries belong to the same solid body, you can use the surface fill to patch the solid.
If at least one of the edges is an open sheet edge and you merge results, then the fill knits with the surfaces to which the edges belong. See
IFillSurfaceFeatureData::Merge
for details about merging results.
If all the boundary entities are open edges, then a solid may be created.
See
IFillSurfaceFeatureData::GetPatchBoundary
or
IFillSurfaceFeatureData::IGetPatchBoundary
and
IFillSurfaceFeatureData::SetPatchBoundary
or
IFillSurfaceFeatureData::ISetPatchBoundary
for details about boundary entities.
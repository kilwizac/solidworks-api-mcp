---
type: method
interface: IFillSurfaceFeatureData
member: SetPatchBoundary
returns: System.Boolean
parameters:
  -
    name: PatchVar
    type: System.Object
    description: Array of entities to use as the patch boundary of size count; valid entities are: Edges Sketches
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.GetAlternateFace
  - IFillSurfaceFeatureData.GetCurvatureControl
  - IFillSurfaceFeatureData.GetPatchBoundary
  - IFillSurfaceFeatureData.GetPatchBoundaryCount
  - IFillSurfaceFeatureData.IGetPatchBoundary
  - IFillSurfaceFeatureData.ToggleAlternateFace
  - IFillSurfaceFeatureData.TryToFormSolid
keywords:
  - setpatchboundary
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - patch
  - boundary
  - var
  - object
  - boolean
---

# IFillSurfaceFeatureData.SetPatchBoundary

Sets the patch boundary for this fill-surface feature.

## Signature

```csharp
System.Boolean SetPatchBoundary( 
   System.Object
PatchVar
)
```
## Parameters

- `PatchVar` (System.Object): Array of entities to use as the patch boundary of size count; valid entities are: Edges Sketches

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFillSurfaceFeatureData.GetAlternateFace`
- `IFillSurfaceFeatureData.GetCurvatureControl`
- `IFillSurfaceFeatureData.GetPatchBoundary`
- `IFillSurfaceFeatureData.GetPatchBoundaryCount`
- `IFillSurfaceFeatureData.IGetPatchBoundary`
- `IFillSurfaceFeatureData.ToggleAlternateFace`
- `IFillSurfaceFeatureData.TryToFormSolid`
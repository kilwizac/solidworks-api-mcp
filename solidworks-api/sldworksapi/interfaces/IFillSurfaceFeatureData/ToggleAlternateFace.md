---
type: method
interface: IFillSurfaceFeatureData
member: ToggleAlternateFace
returns: Face2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFillSurfaceFeatureData.GetAlternateFace
  - IFillSurfaceFeatureData.GetCurvatureControl
  - IFillSurfaceFeatureData.GetPatchBoundary
  - IFillSurfaceFeatureData.GetPatchBoundaryCount
  - IFillSurfaceFeatureData.IGetPatchBoundary
  - IFillSurfaceFeatureData.ISetPatchBoundary
  - IFillSurfaceFeatureData.SetCurvatureControl
  - IFillSurfaceFeatureData.SetPatchBoundary
keywords:
  - togglealternateface
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - toggle
  - alternate
  - face
  - face2
---

# IFillSurfaceFeatureData.ToggleAlternateFace

Switches the boundary face of the curvature control of the patch.

## Signature

```csharp
Face2 ToggleAlternateFace()
```
## Parameters

None.

## Return Value

Pointer to the new boundary face, IFace2 object

## Remarks

This method is valid only when the contact type is tangent and edges are used to define the patch boundary. Use
IFillSurfaceFeatureData::GetCurvatureControl
to determine the contact type.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFillSurfaceFeatureData.GetAlternateFace`
- `IFillSurfaceFeatureData.GetCurvatureControl`
- `IFillSurfaceFeatureData.GetPatchBoundary`
- `IFillSurfaceFeatureData.GetPatchBoundaryCount`
- `IFillSurfaceFeatureData.IGetPatchBoundary`
- `IFillSurfaceFeatureData.ISetPatchBoundary`
- `IFillSurfaceFeatureData.SetCurvatureControl`
- `IFillSurfaceFeatureData.SetPatchBoundary`
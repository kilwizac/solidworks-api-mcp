---
type: method
interface: IFillSurfaceFeatureData
member: GetCurvatureControl
returns: System.Int32
parameters:
  -
    name: EntityIn
    type: System.Object
    description: Edge or sketch boundary returned from IFillSurfaceFeatureData::GetPatchBoundary
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.GetAlternateFace
  - IFillSurfaceFeatureData.GetPatchBoundaryCount
  - IFillSurfaceFeatureData.IGetPatchBoundary
  - IFillSurfaceFeatureData.ISetPatchBoundary
  - IFillSurfaceFeatureData.SetCurvatureControl
  - IFillSurfaceFeatureData.SetPatchBoundary
  - IFillSurfaceFeatureData.ToggleAlternateFace
keywords:
  - getcurvaturecontrol
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - curvature
  - control
  - entity
  - object
  - int32
---

# IFillSurfaceFeatureData.GetCurvatureControl

Gets the contact type for the input boundary.

## Signature

```csharp
System.Int32 GetCurvatureControl( 
   System.Object
EntityIn
)
```
## Parameters

- `EntityIn` (System.Object): Edge or sketch boundary returned from IFillSurfaceFeatureData::GetPatchBoundary

## Return Value

Control type as defined in swContactType_e

## Remarks

Sketch boundaries always return a control type of swContact.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFillSurfaceFeatureData.GetAlternateFace`
- `IFillSurfaceFeatureData.GetPatchBoundaryCount`
- `IFillSurfaceFeatureData.IGetPatchBoundary`
- `IFillSurfaceFeatureData.ISetPatchBoundary`
- `IFillSurfaceFeatureData.SetCurvatureControl`
- `IFillSurfaceFeatureData.SetPatchBoundary`
- `IFillSurfaceFeatureData.ToggleAlternateFace`
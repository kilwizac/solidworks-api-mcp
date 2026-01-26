---
type: method
interface: IFillSurfaceFeatureData
member: GetPatchBoundaryCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.GetAlternateFace
  - IFillSurfaceFeatureData.GetCurvatureControl
  - IFillSurfaceFeatureData.GetPatchBoundary
  - IFillSurfaceFeatureData.ISetPatchBoundary
  - IFillSurfaceFeatureData.SetCurvatureControl
  - IFillSurfaceFeatureData.SetPatchBoundary
  - IFillSurfaceFeatureData.ToggleAlternateFace
keywords:
  - getpatchboundarycount
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - patch
  - boundary
  - count
  - int32
  - insert
  - vba
  - vb
  - net
---

# IFillSurfaceFeatureData.GetPatchBoundaryCount

Gets the number of entities used to define the patch boundary for this fill-surface feature.

## Signature

```csharp
System.Int32 GetPatchBoundaryCount()
```
## Parameters

None.

## Return Value

Number of entities used to define the patch boundary

## Remarks

Call this method before calling
IFillSurfaceFeatureData::IGetPatchBoundary
.

## Examples

- Insert Fill-surface Feature (C#) (Insert_Fill-surface_Feature_Example_CSharp.htm)
- Insert Fill-surface Feature (VBA) (Insert_Fill-surface_Feature_Example_VB.htm)
- Insert Fill-surface Feature (VB.NET) (Insert_Fill-surface_Feature_Example_VBNET.htm)

## See Also

- `IFillSurfaceFeatureData.GetAlternateFace`
- `IFillSurfaceFeatureData.GetCurvatureControl`
- `IFillSurfaceFeatureData.GetPatchBoundary`
- `IFillSurfaceFeatureData.ISetPatchBoundary`
- `IFillSurfaceFeatureData.SetCurvatureControl`
- `IFillSurfaceFeatureData.SetPatchBoundary`
- `IFillSurfaceFeatureData.ToggleAlternateFace`
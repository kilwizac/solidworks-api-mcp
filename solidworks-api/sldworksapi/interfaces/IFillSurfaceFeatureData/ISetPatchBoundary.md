---
type: method
interface: IFillSurfaceFeatureData
member: ISetPatchBoundary
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities to use for the patch boundary
  -
    name: DispArr
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of entities to use as the patch boundary of size count; valid entities are: edges sketches VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
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
  - IFillSurfaceFeatureData.SetCurvatureControl
  - IFillSurfaceFeatureData.SetPatchBoundary
  - IFillSurfaceFeatureData.ToggleAlternateFace
  - IFillSurfaceFeatureData.TryToFormSolid
keywords:
  - isetpatchboundary
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - patch
  - boundary
  - count
  - int32
  - disp
  - arr
  - object
  - boolean
---

# IFillSurfaceFeatureData.ISetPatchBoundary

Sets the patch boundary for this fill-surface feature.

## Signature

```csharp
System.Boolean ISetPatchBoundary( 
   System.Int32
Count
,
   ref System.Object
DispArr
)
```
## Parameters

- `Count` (System.Int32): Number of entities to use for the patch boundary
- `DispArr` (System.Object): in-process, unmanaged C++: Pointer to an array of entities to use as the patch boundary of size count; valid entities are: edges sketches VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the patch boundary is set, false if not

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
- `IFillSurfaceFeatureData.SetCurvatureControl`
- `IFillSurfaceFeatureData.SetPatchBoundary`
- `IFillSurfaceFeatureData.ToggleAlternateFace`
- `IFillSurfaceFeatureData.TryToFormSolid`
---
type: method
interface: IFillSurfaceFeatureData
member: IGetPatchBoundary
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities used to define the patch boundary
  -
    name: EntType
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of types of entities used to define the patch boundary as defined by swSelectType_e : edges (swSelEDGES) sketches (swSelSKETCHES) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.GetAlternateFace
  - IFillSurfaceFeatureData.GetPatchBoundary
  - IFillSurfaceFeatureData.ISetPatchBoundary
  - IFillSurfaceFeatureData.SetPatchBoundary
  - IFillSurfaceFeatureData.ToggleAlternateFace
  - IFillSurfaceFeatureData.TryToFormSolid
keywords:
  - igetpatchboundary
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - patch
  - boundary
  - count
  - int32
  - ent
  - type
  - object
---

# IFillSurfaceFeatureData.IGetPatchBoundary

Gets the entities used to define the patch boundary for this fill-surface feature.

## Signature

```csharp
System.Object IGetPatchBoundary( 
   System.Int32
Count
,
   out System.Int32
EntType
)
```
## Parameters

- `Count` (System.Int32): Number of entities used to define the patch boundary
- `EntType` (System.Int32): in-process, unmanaged C++: Pointer to an array of types of entities used to define the patch boundary as defined by swSelectType_e : edges (swSelEDGES) sketches (swSelSKETCHES) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

in-process, unmanaged C++: Pointer to an array of entities used to define the patch boundary of size Count VBA, VB.NET, C#, and C++/CLI: Not supported

## Remarks

Call
IFillSurfaceFeatureData::GetPatchBoundaryCount
before calling this method.
IFillSurfaceFeatureData::GetCurvatureControl
uses the return value as input, so call IFillSurfaceFeatureData::IGetPatchBoundary before calling IFillSurfaceFeatureData::GetCurvatureControl.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IFillSurfaceFeatureData.GetAlternateFace`
- `IFillSurfaceFeatureData.GetPatchBoundary`
- `IFillSurfaceFeatureData.ISetPatchBoundary`
- `IFillSurfaceFeatureData.SetPatchBoundary`
- `IFillSurfaceFeatureData.ToggleAlternateFace`
- `IFillSurfaceFeatureData.TryToFormSolid`
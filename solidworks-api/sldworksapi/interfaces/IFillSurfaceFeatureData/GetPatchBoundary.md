---
type: method
interface: IFillSurfaceFeatureData
member: GetPatchBoundary
returns: System.Object
parameters:
  -
    name: EntType
    type: System.Object
    description: Array of types of entities used to define the patch boundary as defined by swSelectType_e : Edges (swSelEDGES) Sketches (swSelSKETCHES)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.GetAlternateFace
  - IFillSurfaceFeatureData.GetCurvatureControl
  - IFillSurfaceFeatureData.GetPatchBoundaryCount
  - IFillSurfaceFeatureData.IGetPatchBoundary
  - IFillSurfaceFeatureData.ISetPatchBoundary
  - IFillSurfaceFeatureData.SetCurvatureControl
  - IFillSurfaceFeatureData.SetPatchBoundary
  - IFillSurfaceFeatureData.ToggleAlternateFace
  - IFillSurfaceFeatureData.TryToFormSolid
keywords:
  - getpatchboundary
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - patch
  - boundary
  - ent
  - type
  - object
  - insert
  - vb
  - net
  - vba
---

# IFillSurfaceFeatureData.GetPatchBoundary

Gets the entities used to define the patch boundary for this fill-surface feature.

## Signature

```csharp
System.Object GetPatchBoundary( 
   out System.Object
EntType
)
```
## Parameters

- `EntType` (System.Object): Array of types of entities used to define the patch boundary as defined by swSelectType_e : Edges (swSelEDGES) Sketches (swSelSKETCHES)

## Return Value

Array of entities used to define the patch boundary

## Remarks

IFillSurfaceFeatureData::GetCurvatureControl
uses the return value as input, so call IFillSurfaceFeatureData::GetPatchBoundary before calling IFillSurfaceFeatureData::GetCurvatureControl.
See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Insert Fill-surface Feature (C#) (Insert_Fill-surface_Feature_Example_CSharp.htm)
- Insert Fill-surface Feature (VB.NET) (Insert_Fill-surface_Feature_Example_VBNET.htm)
- Insert Fill-surface Feature (VBA) (Insert_Fill-surface_Feature_Example_VB.htm)

## See Also

- `IFillSurfaceFeatureData.GetAlternateFace`
- `IFillSurfaceFeatureData.GetCurvatureControl`
- `IFillSurfaceFeatureData.GetPatchBoundaryCount`
- `IFillSurfaceFeatureData.IGetPatchBoundary`
- `IFillSurfaceFeatureData.ISetPatchBoundary`
- `IFillSurfaceFeatureData.SetCurvatureControl`
- `IFillSurfaceFeatureData.SetPatchBoundary`
- `IFillSurfaceFeatureData.ToggleAlternateFace`
- `IFillSurfaceFeatureData.TryToFormSolid`
---
type: method
interface: IFillSurfaceFeatureData
member: GetConstraintCurvesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillSurfaceFeatureData.GetConstraintCurves
  - IFillSurfaceFeatureData.ISetConstraintCurves
  - IFillSurfaceFeatureData.SetConstraintCurves
keywords:
  - getconstraintcurvescount
  - ifillsurfacefeaturedata
  - fill
  - surface
  - feature
  - data
  - constraint
  - curves
  - count
  - int32
  - insert
  - vb
  - net
  - vba
---

# IFillSurfaceFeatureData.GetConstraintCurvesCount

Gets the number of entities used to create the constraint curves for this fill-surface feature.

## Signature

```csharp
System.Int32 GetConstraintCurvesCount()
```
## Parameters

None.

## Return Value

Number of entities

## Remarks

Call this method before calling
IFillSurfaceFeatureData::IGetConstraintCurves
.

## Examples

- Insert Fill-surface Feature (C#) (Insert_Fill-surface_Feature_Example_CSharp.htm)
- Insert Fill-surface Feature (VB.NET) (Insert_Fill-surface_Feature_Example_VBNET.htm)
- Insert Fill-surface Feature (VBA) (Insert_Fill-surface_Feature_Example_VB.htm)

## See Also

- `IFillSurfaceFeatureData.GetConstraintCurves`
- `IFillSurfaceFeatureData.ISetConstraintCurves`
- `IFillSurfaceFeatureData.SetConstraintCurves`
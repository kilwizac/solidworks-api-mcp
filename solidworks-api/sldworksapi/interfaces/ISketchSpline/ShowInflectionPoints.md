---
type: property
interface: ISketchSpline
member: ShowInflectionPoints
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.DeletePoint
  - ISketchSpline.GetPointCount
  - ISketchSpline.GetPoints2
  - ISketchSpline.IEnumPoints
  - ISketchSpline.InsertPoint
  - ISplineHandle.SplinePointNumber
keywords:
  - showinflectionpoints
  - isketchspline
  - sketch
  - spline
  - show
  - inflection
  - points
  - boolean
  - properties
  - vba
readonly: null
---

# ISketchSpline.ShowInflectionPoints

Gets or sets whether show the inflection points of this spline.

## Signature

```csharp
System.Boolean ShowInflectionPoints {get; set;}
```
## Parameters

None.

## Return Value

True to show the inflection points, false to not

## Remarks

Inflection points indicate where the concavity of the spline changes.

## Examples

- Get and Set Spline Properties (VBA) (Get_and_Set_Spline_Properties_Example_VB.htm)

## See Also

- `ISketchSpline.DeletePoint`
- `ISketchSpline.GetPointCount`
- `ISketchSpline.GetPoints2`
- `ISketchSpline.IEnumPoints`
- `ISketchSpline.InsertPoint`
- `ISplineHandle.SplinePointNumber`
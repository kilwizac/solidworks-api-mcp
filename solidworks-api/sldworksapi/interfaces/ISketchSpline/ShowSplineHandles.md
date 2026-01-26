---
type: property
interface: ISketchSpline
member: ShowSplineHandles
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSpline.GetSplineHandleCount
  - ISketchSpline.GetSplineHandles
  - ISketchSpline.IGetSplineHandles
  - ISketchSpline.ResetAllHandles
keywords:
  - showsplinehandles
  - isketchspline
  - sketch
  - spline
  - show
  - handles
  - boolean
  - properties
  - vba
readonly: null
---

# ISketchSpline.ShowSplineHandles

Gets or sets whether to show the handles for this spline.

## Signature

```csharp
System.Boolean ShowSplineHandles {get; set;}
```
## Parameters

None.

## Return Value

True to show spline handles, false to not EndOLEPropertyRow

## Remarks

If setting this property to True, then use
IModelDoc2::WindowRedraw
after to see the spline handles.

## Examples

- Get and Set Spline Properties (VBA) (Get_and_Set_Spline_Properties_Example_VB.htm)

## See Also

- `ISketchSpline.GetSplineHandleCount`
- `ISketchSpline.GetSplineHandles`
- `ISketchSpline.IGetSplineHandles`
- `ISketchSpline.ResetAllHandles`
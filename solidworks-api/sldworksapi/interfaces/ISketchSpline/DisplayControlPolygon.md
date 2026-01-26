---
type: property
interface: ISketchSpline
member: DisplayControlPolygon
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - displaycontrolpolygon
  - isketchspline
  - sketch
  - spline
  - display
  - control
  - polygon
  - boolean
  - properties
  - vba
readonly: null
---

# ISketchSpline.DisplayControlPolygon

Gets or sets whether to add a control polygon to this spline.

## Signature

```csharp
System.Boolean DisplayControlPolygon {get; set;}
```
## Parameters

None.

## Return Value

True to add a control polygon, false to not

## Remarks

To add a control polygon, set
ISldWorks::SetUserPreferenceToggle
swSketchShowSplineControlPolygon to True.
If the spline is not smooth after dragging a node of the control polygon, use
ISketchSpline::RelaxSpline
to smoothen its shape.

## Examples

- Get and Set Spline Properties (VBA) (Get_and_Set_Spline_Properties_Example_VB.htm)
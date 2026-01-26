---
type: property
interface: ISplineHandle
member: RadiusOfCurvature
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISplineHandle.Curvature
keywords:
  - radiusofcurvature
  - isplinehandle
  - spline
  - handle
  - radius
  - curvature
  - double
readonly: null
---

# ISplineHandle.RadiusOfCurvature

Gets or sets the radius of curvature at any spline point.

## Signature

```csharp
System.Double RadiusOfCurvature {get; set;}
```
## Parameters

None.

## Return Value

Radius of curvature

## Remarks

Curvature control must be enabled for this property to have an effect. Use
ISplineHandle::CurvatureControlled
to see if curvature control is enabled or to set curvature control for this spline handle.

## Examples

- ISplineHandle (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISplineHandle)

## See Also

- `ISplineHandle.Curvature`
---
type: property
interface: ISplineHandle
member: Curvature
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISplineHandle.RadiusOfCurvature
keywords:
  - curvature
  - isplinehandle
  - spline
  - handle
  - double
readonly: null
---

# ISplineHandle.Curvature

Gets or sets the degree of curvature at any point where curvature control was added.

## Signature

```csharp
System.Double Curvature {get; set;}
```
## Parameters

None.

## Return Value

Degree of curvature

## Remarks

Curvature control must be enabled for this property to have an effect. Use
ISplineHandle::CurvatureControlled
to see if curvature control is enabled or to set curvature control for this spline handle.

## Examples

- ISplineHandle (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISplineHandle)

## See Also

- `ISplineHandle.RadiusOfCurvature`
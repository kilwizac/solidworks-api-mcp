---
type: property
interface: ISplineHandle
member: CurvatureControlled
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - curvaturecontrolled
  - isplinehandle
  - spline
  - handle
  - curvature
  - controlled
  - boolean
readonly: null
---

# ISplineHandle.CurvatureControlled

Gets or sets whether the spline handle has curvature control.

## Signature

```csharp
System.Boolean CurvatureControlled {get; set;}
```
## Parameters

None.

## Return Value

True if the spline handle has curvature control, false if not

## Remarks

If the spline handle has curvature control, you can use:
ISplineHandle::Curvature
ISplineHandle::RadiusOfCurvature
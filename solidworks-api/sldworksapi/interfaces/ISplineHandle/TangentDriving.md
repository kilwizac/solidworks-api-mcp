---
type: property
interface: ISplineHandle
member: TangentDriving
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISplineHandle.TangentMagnitude
  - ISplineHandle.TangentPolarDirection
  - ISplineHandle.TangentRadialDirection
keywords:
  - tangentdriving
  - isplinehandle
  - spline
  - handle
  - tangent
  - driving
  - boolean
readonly: null
---

# ISplineHandle.TangentDriving

Enables or disables spline control using tangent magnitude, tangent radial direction, and tangent polar direction.

## Signature

```csharp
System.Boolean TangentDriving {get; set;}
```
## Parameters

None.

## Return Value

True to enable spline control using tangent magnitude and tangent radial, false to not

## Examples

- ISplineHandle (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISplineHandle)

## See Also

- `ISplineHandle.TangentMagnitude`
- `ISplineHandle.TangentPolarDirection`
- `ISplineHandle.TangentRadialDirection`
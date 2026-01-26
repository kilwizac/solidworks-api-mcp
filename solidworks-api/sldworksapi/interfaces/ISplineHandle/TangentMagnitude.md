---
type: property
interface: ISplineHandle
member: TangentMagnitude
returns: System.Double
parameters:
  -
    name: WhichDirection
    type: System.Int32
    description: Direction as defined in swTangentMagnitudeDirection_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISplineHandle.TangentDriving
  - ISplineHandle.TangentPolarDirection
  - ISplineHandle.TangentRadialDirection
keywords:
  - tangentmagnitude
  - isplinehandle
  - spline
  - handle
  - tangent
  - magnitude
  - which
  - direction
  - int32
  - double
readonly: null
---

# ISplineHandle.TangentMagnitude

Gets or sets the weight for the tangency magnitude in the specified direction for this spline handle.

## Signature

```csharp
System.Double TangentMagnitude( 
   System.Int32
WhichDirection
) {get; set;}
```
## Parameters

- `WhichDirection` (System.Int32): Direction as defined in swTangentMagnitudeDirection_e

## Return Value

Weight for the tangency magnitude in the specified direction

## Examples

- ISplineHandle (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISplineHandle)

## See Also

- `ISplineHandle.TangentDriving`
- `ISplineHandle.TangentPolarDirection`
- `ISplineHandle.TangentRadialDirection`
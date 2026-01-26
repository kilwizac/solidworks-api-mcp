---
type: method
interface: ISurface
member: ICreateNewCurve
returns: Curve
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.CreateTrimmedCurve2
  - ISurface.CreateNewCurve
  - ISurface.IMakeIsoCurve
  - ISurface.IMakeIsoCurves
keywords:
  - icreatenewcurve
  - isurface
  - surface
  - create
  - new
  - curve
---

# ISurface.ICreateNewCurve

Creates a new empty curve for the part.

## Signature

```csharp
Curve ICreateNewCurve()
```
## Parameters

None.

## Return Value

Newly created curve

## Remarks

The intention is that with a handle on such (initially empty) curves, appropriate construction can be called that eventually amounts to non-trivial objects.

## See Also

- `ICurve.CreateTrimmedCurve2`
- `ISurface.CreateNewCurve`
- `ISurface.IMakeIsoCurve`
- `ISurface.IMakeIsoCurves`
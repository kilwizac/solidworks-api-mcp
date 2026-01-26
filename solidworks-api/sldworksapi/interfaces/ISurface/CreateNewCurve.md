---
type: method
interface: ISurface
member: CreateNewCurve
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ICurve.CreateTrimmedCurve2
  - ISurface.ICreateNewCurve
  - ISurface.IMakeIsoCurve
  - ISurface.IMakeIsoCurves
  - ISurface.MakeIsoCurve
  - ISurface.MakeIsoCurves
keywords:
  - createnewcurve
  - isurface
  - surface
  - create
  - new
  - curve
  - object
---

# ISurface.CreateNewCurve

Creates a new empty curve for the part.

## Signature

```csharp
System.Object CreateNewCurve()
```
## Parameters

None.

## Return Value

Newly created curve

## Remarks

The intention is that with a handle on such (initially empty) curves, appropriate construction can be called that eventually amounts to non-trivial objects.

## See Also

- `ICurve.CreateTrimmedCurve2`
- `ISurface.ICreateNewCurve`
- `ISurface.IMakeIsoCurve`
- `ISurface.IMakeIsoCurves`
- `ISurface.MakeIsoCurve`
- `ISurface.MakeIsoCurves`
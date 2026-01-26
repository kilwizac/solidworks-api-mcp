---
type: method
interface: ISurface
member: ICreateTrimmedSheet4
returns: Body
parameters:
  -
    name: NCurves
    type: System.Int32
    description: Number of curves in the array of curves
  -
    name: Curves
    type: Curve
    description: Array of curves that represent the boundary of the sheet
  -
    name: PreserveAnalyticCurves
    type: System.Boolean
    description: True to preserve analytic curves, false to store all trimming curves as SP-curves
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - ISurface.CreateTrimmedSheet4
keywords:
  - icreatetrimmedsheet4
  - isurface
  - surface
  - create
  - trimmed
  - sheet4
  - curves
  - int32
  - curve
  - preserve
  - analytic
  - boolean
  - body
---

# ISurface.ICreateTrimmedSheet4

Obsolete. Superseded by ISurface::CreateTrimmedSheet5.

## Signature

```csharp
Body ICreateTrimmedSheet4( 
   System.Int32
NCurves
,
   ref Curve
Curves
,
   System.Boolean
PreserveAnalyticCurves
)
```
## Parameters

- `NCurves` (System.Int32): Number of curves in the array of curves
- `Curves` (Curve): Array of curves that represent the boundary of the sheet
- `PreserveAnalyticCurves` (System.Boolean): True to preserve analytic curves, false to store all trimming curves as SP-curves

## Return Value

Newly created sheet body

## Remarks

The array of curves represents all of the curves required to add the appropriate trimming loops to the surface. A NULL entry in the array represents the separation between loops.
The curves supplied are assumed to lie on the surface. If the curves are 2D curves, then they should be created using this surface.
If your application is creating a trimmed sheet body from an input periodical surface without trimming curves, then the curve array may be empty.
Before calling this method, trim the curves created by
IModeler::ICreateArc
and
IModeler::ICreateLine
by calling
ICurve::CreateTrimmedCurve2
. Elliptical curves created by
IModeler::ICreateEllipse
do not need to be trimmed before calling this method.

## See Also

- `ISurface.CreateTrimmedSheet4`
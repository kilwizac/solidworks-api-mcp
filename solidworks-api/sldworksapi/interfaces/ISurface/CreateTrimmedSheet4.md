---
type: method
interface: ISurface
member: CreateTrimmedSheet4
returns: System.Object
parameters:
  -
    name: Curves
    type: System.Object
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
  - ISurface.ICreateTrimmedSheet4
keywords:
  - createtrimmedsheet4
  - isurface
  - surface
  - create
  - trimmed
  - sheet4
  - curves
  - object
  - preserve
  - analytic
  - boolean
  - temporary
  - elliptical
  - extrusion
  - vba
  - vb
  - net
  - fill
  - holes
  - part
---

# ISurface.CreateTrimmedSheet4

Obsolete. Superseded by ISurface::CreateTrimmedSheet5.

## Signature

```csharp
System.Object CreateTrimmedSheet4( 
   System.Object
Curves
,
   System.Boolean
PreserveAnalyticCurves
)
```
## Parameters

- `Curves` (System.Object): Array of curves that represent the boundary of the sheet
- `PreserveAnalyticCurves` (System.Boolean): True to preserve analytic curves, false to store all trimming curves as SP-curves

## Return Value

Temporary sheet body

## Remarks

The array of curves represents all of the curves required to add the appropriate trimming loops to the surface. A null entry in the array represents the separation between loops.
The curves supplied are assumed to lie on the surface. If the curves are 2D curves, then they should be created using this surface.
If your application is creating a trimmed sheet body from a periodic surface without trimming curves, then the curve array must contain one entry: null or Nothing.
Before calling this method, trim the curves created by
IModeler::CreateArc
and
IModeler::CreateLine
by calling
ICurve::CreateTrimmedCurve2
. Elliptical curves created by
IModeler::CreateEllipse
do not need to be trimmed before calling this method.

## Examples

- Create Temporary Elliptical Extrusion (VBA) (Create_Temporary_Elliptical_Extrusion_Example_VB.htm)
- Create Temporary Elliptical Extrusion (VB.NET) (Create_Temporary_Elliptical_Extrusion_VBNET.htm)
- Create Temporary Elliptical Extrusion (C#) (Create_Temporary_Elliptical_Extrusion_CSharp.htm)
- Fill Holes in Part (C#) (Fill_Holes_in_Part_Example_CSharp.htm)
- Fill Holes in Part (VB.NET) (Fill_Holes_in_Part_Example_VBNET.htm)
- Fill Holes in Part (VBA) (Fill_Holes_in_Part_Example_VB.htm)

## See Also

- `ISurface.ICreateTrimmedSheet4`
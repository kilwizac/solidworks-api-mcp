---
type: method
interface: ISurface
member: CreateTrimmedSheet5
returns: System.Object
parameters:
  -
    name: Curves
    type: System.Object
    description: Array of curves that represent the boundary of the trimmed sheet (see Remarks )
  -
    name: PreserveAnalyticCurves
    type: System.Boolean
    description: True to preserve analytic curves, false to store all trimming curves as SP-curves
  -
    name: Tolerance
    type: System.Double
    description: Tolerance for gaps between edges (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - surface
  - see
  - also
  - isurface
  - trim
  - surfaces
  - createtrimmedsheet5
  - create
  - trimmed
  - sheet5
  - curves
  - object
  - preserve
  - analytic
  - boolean
  - tolerance
  - double
  - spherical
  - sheet
  - feature
  - body
  - vba
---

# ISurface.CreateTrimmedSheet5

Creates a trimmed sheet body from this surface.

## Signature

```csharp
System.Object CreateTrimmedSheet5( 
   System.Object
Curves
,
   System.Boolean
PreserveAnalyticCurves
,
   System.Double
Tolerance
)
```
## Parameters

- `Curves` (System.Object): Array of curves that represent the boundary of the trimmed sheet (see Remarks )
- `PreserveAnalyticCurves` (System.Boolean): True to preserve analytic curves, false to store all trimming curves as SP-curves
- `Tolerance` (System.Double): Tolerance for gaps between edges (see Remarks )

## Return Value

Temporary sheet body

## Remarks

The Curves array contains all of the curves required to add the appropriate trimming loops to the surface. A null or Nothing entry in the array represents the separation between loops.
The trimming curves supplied are assumed to lie on the surface. If the curves are 2D curves, then they should be created using this surface.
If your application is creating a trimmed sheet body from a periodic surface without trimming curves, then the Curves array should contain only one entry: null or Nothing.
Tolerance sets the edge precision in PK_SURF_make_sheet_trimmed. The default parasolid tolerance is 0.00001. This parameter allows you to specify a looser tolerance for gaps between edges.
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

- Create Spherical Surface, Trimmed Sheet, and Feature from Body (VBA) (Create_Spherical_Surface_Trimmed_Sheet_and_Feature_From_Body_Example_VB.htm)
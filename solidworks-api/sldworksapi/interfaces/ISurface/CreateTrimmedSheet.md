---
type: method
interface: ISurface
member: CreateTrimmedSheet
returns: System.Object
parameters:
  -
    name: Curves
    type: System.Object
    description: Array of curves that represent the boundary of the sheet
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - createtrimmedsheet
  - isurface
  - surface
  - create
  - trimmed
  - sheet
  - curves
  - object
  - temporary
  - extruded
  - body
  - vb
  - net
  - vba
---

# ISurface.CreateTrimmedSheet

Obsolete. Superseded by ISurface::CreateTrimmedSheet4.

## Signature

```csharp
System.Object CreateTrimmedSheet( 
   System.Object
Curves
)
```
## Parameters

- `Curves` (System.Object): Array of curves that represent the boundary of the sheet

## Return Value

Temporary sheet body

## Remarks

The array of curves represents all of the curves required to add the appropriate trimming loops to the surface. An empty entry in the array represents the separation between loops.
The curves supplied are assumed to lie on the surface. If the curves are 2D curves, then they should be created using this surface.
If your application is creating a trimmed sheet body from a periodic surface without trimming curves, then the curve array must contain one entry: null or Nothing.
If your application uses ISurface::CreateTrimmedSheet, then your application must also use
ICurve::CreateTrimmedCurve2
for the curves created by
IModeler::CreateArc
or
IModeler::ICreateArc
and
IModeler::CreateLine
or
IModeler::ICreateLine
.

## Examples

- Create Temporary Extruded Body (C#) (Create_Temporary_Extruded_Body_Example_CSharp.htm)
- Create Temporary Extruded Body (VB.NET) (Create_Temporary_Extruded_Body_Example_VBNET.htm)
- Create Temporary Extruded Body (VBA) (Create_Temporary_Extruded_Body_Example_VB.htm)
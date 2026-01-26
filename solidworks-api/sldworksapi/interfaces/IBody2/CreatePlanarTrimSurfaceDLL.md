---
type: method
interface: IBody2
member: CreatePlanarTrimSurfaceDLL
returns: System.Boolean
parameters:
  -
    name: Points
    type: System.Object
    description: Array of the points for the surface; trim curves are automatically created between each sequential vertex
  -
    name: Normal
    type: System.Object
    description: Array of normal vector for the surface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.ICreatePlanarTrimSurfaceDLL
keywords:
  - surface
  - see
  - also
  - isurface
  - bodies
  - planar
  - createplanartrimsurfacedll
  - ibody2
  - body2
  - create
  - trim
  - dll
  - points
  - object
  - normal
  - boolean
  - imported
  - solid
  - body
  - vb
  - net
  - vba
---

# IBody2.CreatePlanarTrimSurfaceDLL

Creates a planar trim surface for this body.

## Signature

```csharp
System.Boolean CreatePlanarTrimSurfaceDLL( 
   System.Object
Points
,
   System.Object
Normal
)
```
## Parameters

- `Points` (System.Object): Array of the points for the surface; trim curves are automatically created between each sequential vertex
- `Normal` (System.Object): Array of normal vector for the surface

## Return Value

True if planar trim surface is created, false if not

## Remarks

You can use this method instead of
IBody2:CreateTrimmedSurface
,
IBody2::ICreatePlanarSurface
, and
ISurface::AddTrimmingLoop2
.

## Examples

- Create Imported Solid Body (C#) (Create_Imported_Solid_Body_Example_CSharp.htm)
- Create Imported Solid Body (VB.NET) (Create_Imported_Solid_Body_Example_VBNET.htm)
- Create Imported Solid Body (VBA) (Create_Imported_Solid_Body_Example_VB.htm)

## See Also

- `IBody2.ICreatePlanarTrimSurfaceDLL`
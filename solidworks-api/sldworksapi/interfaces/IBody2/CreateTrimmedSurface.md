---
type: method
interface: IBody2
member: CreateTrimmedSurface
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - createtrimmedsurface
  - ibody2
  - body2
  - create
  - trimmed
  - surface
  - boolean
  - body
  - using
  - surfaces
  - vba
  - imported
  - sketch
---

# IBody2.CreateTrimmedSurface

Creates a trimmed surface from a base surface and a list of existing trimming curves.

## Signature

```csharp
System.Boolean CreateTrimmedSurface()
```
## Parameters

None.

## Return Value

True if trimmed surface creation is successful, false if not

## Remarks

Before you call this method, you must call one of the base-surface creation methods (such as
IBody2::CreatePlanarSurface
or
IBody2::ICreatePlanarSurface
) and the trimming-curve creation method
ISurface::AddTrimmingLoop2
or
ISurface::IAddTrimmingLoops
.
This method serves as the final call in a set of related functions that are designed to construct a trimmed surface from a base surface (possibly infinite) and a set of trimming curves.
If you want to construct a solid body from trimmed surfaces, call
IPartDoc::CreateNewBody
or
IPartDoc::ICreateNewBody2
first, which arranges for a place-holder for this trimmed surface.

## Examples

- Create Body Using Trimmed Surfaces (VBA) (Create_Body_using_Trimmed_Surfaces_Example_VB.htm)
- Create Imported Surface Body from Sketch (C#) (Create_Imported_Surface_Body_from_Sketch_Example_CSharp.htm)
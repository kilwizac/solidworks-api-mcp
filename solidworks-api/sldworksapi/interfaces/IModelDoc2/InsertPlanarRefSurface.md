---
type: method
interface: IModelDoc2
member: InsertPlanarRefSurface
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISurfacePlanarFeatureData
keywords:
  - surface
  - see
  - also
  - isurface
  - planar
  - feature
  - isurfaceplanarfeaturedata
  - ifeature
  - insertplanarrefsurface
  - imodeldoc2
  - model
  - doc2
  - insert
  - ref
  - boolean
  - create
  - vba
  - vb
  - net
---

# IModelDoc2.InsertPlanarRefSurface

Inserts a planar reference surface.

## Signature

```csharp
System.Boolean InsertPlanarRefSurface()
```
## Parameters

None.

## Return Value

True if the reference surface is created, false if not

## Remarks

Before calling this method, select the surface's boundary entities using
IModelDocExtension::SelectByID2
with Marks of 1. See the SOLIDWORKS Help for more information about what entities are valid for selection.

## Examples

- Create Planar Surface Feature (VBA) (Create_Planar_Surface_Feature_Example_VB.htm)
- Create Planar Surface Feature (VB.NET) (Create_Planar_Surface_Feature_Example_VBNET.htm)
- Create Planar Surface Feature (C#) (Create_Planar_Surface_Feature_Example_CSharp.htm)

## See Also

- `ISurfacePlanarFeatureData`
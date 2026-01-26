---
type: method
interface: IModelDoc2
member: InsertRadiateSurface
returns: void
parameters:
  -
    name: Distance
    type: System.Double
    description: Distance to extend the surface
  -
    name: FlipDir
    type: System.Boolean
    description: True to flip the direction; by default the direction is out from the center of the face
  -
    name: TangentPropagate
    type: System.Boolean
    description: True to propagate the surface along tangent faces, false limits the surface to the selected face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISurfaceRadiateFeatureData
keywords:
  - radiate
  - surface
  - see
  - isurfaceradiatefeaturedata
  - also
  - isurface
  - feature
  - ifeature
  - insertradiatesurface
  - imodeldoc2
  - model
  - doc2
  - insert
  - distance
  - double
  - flip
  - dir
  - boolean
  - tangent
  - propagate
  - void
  - create
  - vba
  - vb
  - net
---

# IModelDoc2.InsertRadiateSurface

Creates a radiate surface based on the selections.

## Signature

```csharp
void InsertRadiateSurface( 
   System.Double
Distance
,
   System.Boolean
FlipDir
,
   System.Boolean
TangentPropagate
)
```
## Parameters

- `Distance` (System.Double): Distance to extend the surface
- `FlipDir` (System.Boolean): True to flip the direction; by default the direction is out from the center of the face
- `TangentPropagate` (System.Boolean): True to propagate the surface along tangent faces, false limits the surface to the selected face

## Return Value

Unknown.

## Remarks

Before calling this method, call
IModelDocExtension::SelectByID2
to select
Reference direction using Mark = 1.
Radiate entities using Mark = 2.
S
ee the SOLIDWORKS Help for information about what entities are valid for selection.

## Examples

- Create Radiate Surface Feature (VBA) (Get_Radiate_Surface_Data_Example_VB.htm)
- Create Radiate Surface Feature (VB.NET) (Create_Radiate_Surface_Example_VBNET.htm)
- Create Radiate Surface Feature (C#) (Create_Radiate_Surface_Example_CSharp.htm)

## See Also

- `ISurfaceRadiateFeatureData`
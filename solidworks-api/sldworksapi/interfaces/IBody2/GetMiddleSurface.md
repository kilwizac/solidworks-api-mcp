---
type: method
interface: IBody2
member: GetMiddleSurface
returns: System.Int32
parameters:
  -
    name: PlacementPercentage
    type: System.Double
    description: Position where to insert the midsurface in the body; value of 50 indicates to insert the surface in the middle
  -
    name: Face1List
    type: System.Object
    description: Array of faces into which the midsurface will be or was inserted; you can provide an array of faces for this parameter and Face2List; if you do not, then the faces are determined internally
  -
    name: Face2List
    type: System.Object
    description: Array of faces into which the midsurface will be or was inserted; you can provide an array of faces for this parameter and Face1List; if you do not, then the faces are determined internally
  -
    name: Thickness
    type: System.Object
    description: Array containing minimum and maximum thickness of sheet metal for pairs of faces
  -
    name: MiddleSurfaceBody
    type: System.Object
    description: Middle surface body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IGetMiddleSurface
keywords:
  - middle
  - surface
  - body
  - bodies
  - see
  - also
  - ibody2
  - getmiddlesurface
  - body2
  - placement
  - percentage
  - double
  - face1
  - list
  - object
  - face2
  - thickness
  - int32
---

# IBody2.GetMiddleSurface

Inserts a midsurface in a body.

## Signature

```csharp
System.Int32 GetMiddleSurface( 
   System.Double
PlacementPercentage
,
   out System.Object
Face1List
,
   out System.Object
Face2List
,
   out System.Object
Thickness
,
   out System.Object
MiddleSurfaceBody
)
```
## Parameters

- `PlacementPercentage` (System.Double): Position where to insert the midsurface in the body; value of 50 indicates to insert the surface in the middle
- `Face1List` (System.Object): Array of faces into which the midsurface will be or was inserted; you can provide an array of faces for this parameter and Face2List; if you do not, then the faces are determined internally
- `Face2List` (System.Object): Array of faces into which the midsurface will be or was inserted; you can provide an array of faces for this parameter and Face1List; if you do not, then the faces are determined internally
- `Thickness` (System.Object): Array containing minimum and maximum thickness of sheet metal for pairs of faces
- `MiddleSurfaceBody` (System.Object): Middle surface body

## Return Value

0 if no errors; -1 if errors

## See Also

- `IBody2.IGetMiddleSurface`
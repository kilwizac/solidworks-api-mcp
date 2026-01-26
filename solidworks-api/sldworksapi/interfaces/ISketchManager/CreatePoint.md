---
type: method
interface: ISketchManager
member: CreatePoint
returns: SketchPoint
parameters:
  -
    name: X
    type: System.Double
    description: X location of the point
  -
    name: Y
    type: System.Double
    description: Y location of the point
  -
    name: Z
    type: System.Double
    description: Z location of the point; ignored for 2D sketches
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - points
  - 2d
  - sketch
  - entities
  - 3d
  - see
  - also
  - isketch
  - createpoint
  - isketchmanager
  - manager
  - create
  - point
  - double
  - vba
  - vb
  - net
---

# ISketchManager.CreatePoint

Creates a sketch point in the active 2D or 3D sketch.

## Signature

```csharp
SketchPoint CreatePoint( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): X location of the point
- `Y` (System.Double): Y location of the point
- `Z` (System.Double): Z location of the point; ignored for 2D sketches

## Return Value

Newly created sketch point

## Remarks

This method creates a point in the active 2D or 3D sketch. If a sketch is not active, the point is not created and NULL is returned. Use
ISketchManager::ActiveSketch
to check to see if the sketch is active.
ISketchManager::AddToDB
and
ISketchManager::DisplayWhenAdded
increase performance during entity creation by adding entities directly to the SOLIDWORKS database. ISketchManager::AddToDB also avoids inferencing.

## Examples

- Create Sketch Point (VBA) (Create_Sketch_Point_Example_VB.htm)
- Create Sketch Point (VB.NET) (Create_Sketch_Point_Example_VBNET.htm)
- Create Sketch Point (C#) (Create_Sketch_Point_Example_CSharp.htm)
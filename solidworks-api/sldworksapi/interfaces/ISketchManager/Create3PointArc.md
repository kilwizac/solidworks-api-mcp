---
type: method
interface: ISketchManager
member: Create3PointArc
returns: SketchSegment
parameters:
  -
    name: X1
    type: System.Double
    description: X coordinate of point 1
  -
    name: Y1
    type: System.Double
    description: Y coordinate of point 1
  -
    name: Z1
    type: System.Double
    description: Z coordinate of point 1
  -
    name: X2
    type: System.Double
    description: X coordinate of point 2
  -
    name: Y2
    type: System.Double
    description: Y coordinate of point 2
  -
    name: Z2
    type: System.Double
    description: Z coordinate of point 2
  -
    name: X3
    type: System.Double
    description: X coordinate of point 3
  -
    name: Y3
    type: System.Double
    description: Y coordinate of point 3
  -
    name: Z3
    type: System.Double
    description: Z coordinate of point 3
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - IModelDoc2.CreateArcByCenter
  - ISketchManager.CreateArc
  - ISketchManager.CreateTangentArc
keywords:
  - point
  - arc
  - arcs
  - sketch
  - entities
  - create
  - see
  - also
  - isketch
  - create3pointarc
  - isketchmanager
  - manager
  - create3
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - x3
  - y3
  - z3
  - segment
  - vba
  - vb
  - net
---

# ISketchManager.Create3PointArc

Creates a 3-point arc.

## Signature

```csharp
SketchSegment Create3PointArc( 
   System.Double
X1
,
   System.Double
Y1
,
   System.Double
Z1
,
   System.Double
X2
,
   System.Double
Y2
,
   System.Double
Z2
,
   System.Double
X3
,
   System.Double
Y3
,
   System.Double
Z3
)
```
## Parameters

- `X1` (System.Double): X coordinate of point 1
- `Y1` (System.Double): Y coordinate of point 1
- `Z1` (System.Double): Z coordinate of point 1
- `X2` (System.Double): X coordinate of point 2
- `Y2` (System.Double): Y coordinate of point 2
- `Z2` (System.Double): Z coordinate of point 2
- `X3` (System.Double): X coordinate of point 3
- `Y3` (System.Double): Y coordinate of point 3
- `Z3` (System.Double): Z coordinate of point 3

## Return Value

Sketch segment for the 3-point arc

## Examples

- Create 3-Point Arc (VBA) (Create_3_Point_Arc_Example_VB.htm)
- Create 3-Point Arc (VB.NET) (Create_3_Point_Arc_Example_VBNET.htm)
- Create 3-Point Arc (C#) (Create_3_Point_Arc_Example_CSharp.htm)

## See Also

- `IModelDoc2.CreateArcByCenter`
- `ISketchManager.CreateArc`
- `ISketchManager.CreateTangentArc`
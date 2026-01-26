---
type: method
interface: ISketchManager
member: CreateCornerRectangle
returns: System.Object
parameters:
  -
    name: X1
    type: System.Double
    description: Upper-left X coordinate for point 1
  -
    name: Y1
    type: System.Double
    description: Upper-left Y coordinate for point 1
  -
    name: Z1
    type: System.Double
    description: Upper-left Z coordinate for point 1
  -
    name: X2
    type: System.Double
    description: Lower-right X coordinate for point 2
  -
    name: Y2
    type: System.Double
    description: Lower-right Y coordinate for point 2
  -
    name: Z2
    type: System.Double
    description: Lower-right Z coordinate for point 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.Create3PointCenterRectangle
  - ISketchManager.Create3PointCornerRectangle
keywords:
  - rectangles
  - sketch
  - entities
  - see
  - also
  - isketch
  - rectangle
  - createcornerrectangle
  - isketchmanager
  - manager
  - create
  - corner
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - object
  - edit
  - circular
  - pattern
  - vb
  - net
  - vba
---

# ISketchManager.CreateCornerRectangle

Creates a corner rectangle.

## Signature

```csharp
System.Object CreateCornerRectangle( 
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
)
```
## Parameters

- `X1` (System.Double): Upper-left X coordinate for point 1
- `Y1` (System.Double): Upper-left Y coordinate for point 1
- `Z1` (System.Double): Upper-left Z coordinate for point 1
- `X2` (System.Double): Lower-right X coordinate for point 2
- `Y2` (System.Double): Lower-right Y coordinate for point 2
- `Z2` (System.Double): Lower-right Z coordinate for point 2

## Return Value

Array of sketch segments that represent the edges created for this corner rectangle

## Examples

- Create and Edit Circular Sketch Pattern (VB.NET) (Create_and_Edit_Circular_Sketch_Pattern_Example_VBNET.htm)
- Create and Edit Circular Sketch Pattern (VBA) (Create_and_Edit_Circular_Sketch_Pattern_Example_VB.htm)
- Create and Edit Circular Sketch Pattern (C#) (Create_and_Edit_Circular_Sketch_Pattern_Example_CSharp.htm)

## See Also

- `ISketchManager.Create3PointCenterRectangle`
- `ISketchManager.Create3PointCornerRectangle`
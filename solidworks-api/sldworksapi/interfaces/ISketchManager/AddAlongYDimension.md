---
type: method
interface: ISketchManager
member: AddAlongYDimension
returns: DisplayDimension
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate of dimension text placement
  -
    name: Y
    type: System.Double
    description: Y coordinate of dimension text placement
  -
    name: Z
    type: System.Double
    description: Z coordinate of dimension text placement
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - sketches
related:
  - ISketchManager.AddAlongXDimension
  - ISketchManager.AddAlongZDimension
  - ISketchManager.FullyDefineSketch
keywords:
  - sketch
  - see
  - also
  - isketch
  - dimensions
  - 3d
  - sketches
  - addalongydimension
  - isketchmanager
  - manager
  - add
  - along
  - dimension
  - double
  - display
  - vba
  - vb
  - net
---

# ISketchManager.AddAlongYDimension

Projects and displays along the y axis a dimension between selected points in a 3D sketch.

## Signature

```csharp
DisplayDimension AddAlongYDimension( 
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

- `X` (System.Double): X coordinate of dimension text placement
- `Y` (System.Double): Y coordinate of dimension text placement
- `Z` (System.Double): Z coordinate of dimension text placement

## Return Value

IDisplayDimension

## Remarks

This method works only for 3D sketches in edit mode, and the display dimension is visible only when the sketch is in edit mode.

## Examples

- Add Along Y Dimension to 3D Sketch (VBA) (Add_Along_Y_Dimension_To_3D_Sketch_Example_VB.htm)
- Add Along Y Dimension to 3D Sketch (VB.NET) (Add_Along_Y_Dimension_To_3D_Sketch_Example_VBNET.htm)
- Add Along Y Dimension to 3D Sketch (C#) (Add_Along_Y_Dimension_To_3D_Sketch_Example_CSharp.htm)

## See Also

- `ISketchManager.AddAlongXDimension`
- `ISketchManager.AddAlongZDimension`
- `ISketchManager.FullyDefineSketch`
---
type: method
interface: ISketchManager
member: CreateLine
returns: SketchSegment
parameters:
  -
    name: X1
    type: System.Double
    description: X coordinate of the line start point
  -
    name: Y1
    type: System.Double
    description: Y coordinate of the line start point
  -
    name: Z1
    type: System.Double
    description: Z coordinate of the line start point
  -
    name: X2
    type: System.Double
    description: X coordinate of the line end point
  -
    name: Y2
    type: System.Double
    description: Y coordinate of the line end point
  -
    name: Z2
    type: System.Double
    description: Z coordinate of the line end point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - 2d
  - lines
  - 3d
  - sketch
  - entities
  - see
  - also
  - isketch
  - createline
  - isketchmanager
  - manager
  - create
  - line
  - x1
  - double
  - y1
  - z1
  - x2
  - y2
  - z2
  - segment
  - section
  - view
  - some
  - data
  - vb
  - net
  - vba
---

# ISketchManager.CreateLine

Creates a sketch line in the currently active 2D or 3D sketch.

## Signature

```csharp
SketchSegment CreateLine( 
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

- `X1` (System.Double): X coordinate of the line start point
- `Y1` (System.Double): Y coordinate of the line start point
- `Z1` (System.Double): Z coordinate of the line start point
- `X2` (System.Double): X coordinate of the line end point
- `Y2` (System.Double): Y coordinate of the line end point
- `Z2` (System.Double): Z coordinate of the line end point

## Return Value

Sketch segment for the line

## Remarks

If a sketch is not active, then the line is not created and NULL is returned. You can check for an active sketch using the
ISketchManager::ActiveSketch
function.
ISketchManager::AddToDB
and
ISketchManager::DisplayWhenAdded
increase performance during entity creation by adding entities directly to the SOLIDWORKS database. ISketchManager::AddToDB also avoids inferencing.
When this method is used with a drawing document, this method creates the line relative to the active drawing view,
IDrawingDoc::ActiveDrawingView
or
IDrawingDoc::IActiveDrawingView
.

## Examples

- Create Section View and Get Some Data (VB.NET) (Create_Section_View_and_Get_Some_Data_Example_VBNET.htm)
- Create Section View and Get Some Data (VBA) (Create_Section_View_at_Specified_Location_Example_VB.htm)
- Create Section View and Get Some Data (C#) (Create_Section_View_and_Get_Some_Data_Example_CSharp.htm)
---
type: method
interface: IDrawingDoc
member: DrawingViewRotate
returns: System.Boolean
parameters:
  -
    name: NewAngle
    type: System.Double
    description: New angle value for the drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.AlignHorz
  - IDrawingDoc.AlignVert
  - IDrawingDoc.RestoreRotation
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - rotate
  - drawingviewrotate
  - idrawingdoc
  - doc
  - view
  - new
  - angle
  - double
  - boolean
  - 45
  - degrees
  - veiw
  - vb
  - net
  - vba
---

# IDrawingDoc.DrawingViewRotate

Rotates the selected drawing view.

## Signature

```csharp
System.Boolean DrawingViewRotate( 
   System.Double
NewAngle
)
```
## Parameters

- `NewAngle` (System.Double): New angle value for the drawing view

## Return Value

True if successfully rotated, false if not

## Examples

- Rotate Drawing View 45 Degrees (C#) (Rotate_Drawing_View_45_Degrees_Example_CSharp.htm)
- Rotate Drawing Veiw 45 Degrees (VB.NET) (Rotate_Drawing_View_45_Degrees_Example_VBNET.htm)
- Rotate Drawing View 45 Degrees (VBA) (Rotate_Drawing_View_45_Degrees_Example_VB.htm)

## See Also

- `IDrawingDoc.AlignHorz`
- `IDrawingDoc.AlignVert`
- `IDrawingDoc.RestoreRotation`
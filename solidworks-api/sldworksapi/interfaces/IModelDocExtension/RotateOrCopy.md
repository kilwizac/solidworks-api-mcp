---
type: method
interface: IModelDocExtension
member: RotateOrCopy
returns: void
parameters:
  -
    name: Copy
    type: System.Boolean
    description: True to copy sketch entities or annotations, false to not
  -
    name: NumCopies
    type: System.Int32
    description: Number of copies
  -
    name: KeepRelations
    type: System.Boolean
    description: True to keep sketch relations, false to not
  -
    name: BaseX
    type: System.Double
    description: X coordinate of the base point from which to rotate the sketch entities or annotations
  -
    name: BaseY
    type: System.Double
    description: Y coordinate of the base point from which to rotate the sketch entities or annotations
  -
    name: BaseZ
    type: System.Double
    description: Z coordinate of the base point from which to rotate the sketch entities or annotations
  -
    name: DestX
    type: System.Double
    description: X vector component of the axis of rotation parallel to the base point
  -
    name: DestY
    type: System.Double
    description: Y vector component of the axis of rotation parallel to the base point
  -
    name: DestZ
    type: System.Double
    description: Z vector component of the axis of rotation parallel to the base point
  -
    name: Angle
    type: System.Double
    description: Angle at which to rotate or move the sketch entities or annotations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.MoveOrCopy
  - IModelDocExtension.ScaleOrCopy
keywords:
  - rotate
  - annotations
  - copy
  - sketch
  - entities
  - annotation
  - see
  - also
  - iannotation
  - rotateorcopy
  - imodeldocextension
  - model
  - doc
  - extension
  - boolean
  - num
  - copies
  - int32
  - keep
  - relations
  - base
  - double
  - dest
  - angle
  - void
  - scale
  - vb
  - net
  - vba
---

# IModelDocExtension.RotateOrCopy

Rotates and optionally copies the selected sketch entities or annotations.

## Signature

```csharp
void RotateOrCopy( 
   System.Boolean
Copy
,
   System.Int32
NumCopies
,
   System.Boolean
KeepRelations
,
   System.Double
BaseX
,
   System.Double
BaseY
,
   System.Double
BaseZ
,
   System.Double
DestX
,
   System.Double
DestY
,
   System.Double
DestZ
,
   System.Double
Angle
)
```
## Parameters

- `Copy` (System.Boolean): True to copy sketch entities or annotations, false to not
- `NumCopies` (System.Int32): Number of copies
- `KeepRelations` (System.Boolean): True to keep sketch relations, false to not
- `BaseX` (System.Double): X coordinate of the base point from which to rotate the sketch entities or annotations
- `BaseY` (System.Double): Y coordinate of the base point from which to rotate the sketch entities or annotations
- `BaseZ` (System.Double): Z coordinate of the base point from which to rotate the sketch entities or annotations
- `DestX` (System.Double): X vector component of the axis of rotation parallel to the base point
- `DestY` (System.Double): Y vector component of the axis of rotation parallel to the base point
- `DestZ` (System.Double): Z vector component of the axis of rotation parallel to the base point
- `Angle` (System.Double): Angle at which to rotate or move the sketch entities or annotations

## Return Value

Unknown.

## Remarks

Typically a user will specify 0, 0, 1 for the x, y, z destination point coordinates and 0 for the baseZ argument. The baseX and baseY arguments should specify the center of rotation for the sketch entity.

## Examples

- Rotate, Scale, and Copy Sketch (C#) (Rotate_Scale_Copy_Sketch_Example_CSharp.htm)
- Rotate, Scale, and Copy Sketch (VB.NET) (Rotate_Scale_Copy_Sketch_Example_VBNET.htm)
- Rotate, Scale, and Copy Sketch (VBA) (Rotate_Scale_Copy_Sketch_Example_VB.htm)

## See Also

- `IModelDocExtension.MoveOrCopy`
- `IModelDocExtension.ScaleOrCopy`
---
type: method
interface: ISketchManager
member: RotateOrCopy3DAboutVector
returns: System.Boolean
parameters:
  -
    name: Copy
    type: System.Boolean
    description: True to copy the 3D sketch entities, false to not
  -
    name: NumCopies
    type: System.Int32
    description: True to copy the 3D sketch entities, false to not
  -
    name: KeepRelations
    type: System.Boolean
    description: Number of copies
  -
    name: BaseX
    type: System.Double
    description: True to keep sketch relations, false to not
  -
    name: BaseY
    type: System.Double
    description: X coordinate of the base point from which to rotate the 3D sketch entities
  -
    name: BaseZ
    type: System.Double
    description: Y coordinate of the base point from which to rotate the 3D sketch entities
  -
    name: VectorXCoord
    type: System.Double
    description: Z coordinate of the base point from which to rotate the 3D sketch entities
  -
    name: VectorYCoord
    type: System.Double
    description: X vector component of the axis of rotation, parallel to the base point
  -
    name: VectorZCoord
    type: System.Double
    description: Y vector component of the axis of rotation, parallel to the base point
  -
    name: AngleAboutVector
    type: System.Double
    description: Z vector component of the axis of rotation, parallel to the base point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - IModelDocExtension.RotateOrCopy
  - ISketchManager.RotateOrCopy3DAboutXYZ
keywords:
  - rotate
  - annotations
  - sketch
  - entities
  - copy
  - annotation
  - see
  - also
  - iannotation
  - 3d
  - sketches
  - rotateorcopy3daboutvector
  - isketchmanager
  - manager
  - copy3
  - about
  - vector
  - boolean
  - num
  - copies
  - int32
  - keep
  - relations
  - base
  - double
  - coord
  - angle
  - vb
  - net
  - vba
---

# ISketchManager.RotateOrCopy3DAboutVector

Rotates, and optionally copies, the selected 3D sketch entities about the specified vector.

## Signature

```csharp
System.Boolean RotateOrCopy3DAboutVector( 
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
VectorXCoord
,
   System.Double
VectorYCoord
,
   System.Double
VectorZCoord
,
   System.Double
AngleAboutVector
)
```
## Parameters

- `Copy` (System.Boolean): True to copy the 3D sketch entities, false to not
- `NumCopies` (System.Int32): True to copy the 3D sketch entities, false to not
- `KeepRelations` (System.Boolean): Number of copies
- `BaseX` (System.Double): True to keep sketch relations, false to not
- `BaseY` (System.Double): X coordinate of the base point from which to rotate the 3D sketch entities
- `BaseZ` (System.Double): Y coordinate of the base point from which to rotate the 3D sketch entities
- `VectorXCoord` (System.Double): Z coordinate of the base point from which to rotate the 3D sketch entities
- `VectorYCoord` (System.Double): X vector component of the axis of rotation, parallel to the base point
- `VectorZCoord` (System.Double): Y vector component of the axis of rotation, parallel to the base point
- `AngleAboutVector` (System.Double): Z vector component of the axis of rotation, parallel to the base point

## Return Value

True if the 3D sketch entities rotated and are optionally copied about the specified vector, false if not

## Examples

- Rotate and Copy 3D Sketch About Vector (VB.NET) (Rotate_and_Copy_3D_Sketch_About_Vector_Example_VBNET.htm)
- Rotate and Copy 3D Sketch About Vector (VBA) (Rotate_and_Copy_3D_Sketch_About_Vector_Example_VB.htm)
- Rotate and Copy 3D Sketch About Vector (C#) (Rotate_and_Copy_3D_Sketch_About_Vector_Example_CSharp.htm)

## See Also

- `IModelDocExtension.RotateOrCopy`
- `ISketchManager.RotateOrCopy3DAboutXYZ`
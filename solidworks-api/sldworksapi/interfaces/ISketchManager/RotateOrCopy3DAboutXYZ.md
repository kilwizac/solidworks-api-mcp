---
type: method
interface: ISketchManager
member: RotateOrCopy3DAboutXYZ
returns: System.Boolean
parameters:
  -
    name: Copy
    type: System.Boolean
    description: True to copy 3D sketch entities, false to not
  -
    name: NumCopies
    type: System.Int32
    description: Number of copies
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
    description: X coordinate from the base point from which to rotate the 3D sketch entities
  -
    name: BaseZ
    type: System.Double
    description: Y coordinate from the base point from which to rotate the 3D sketch entities
  -
    name: AngleAboutXDir
    type: System.Double
    description: Z coordinate from the base point from which to rotate the 3D sketch entities
  -
    name: AngleAboutYDir
    type: System.Double
    description: Angle to rotate the 3D sketch entities in the x direction
  -
    name: AngleAboutZDir
    type: System.Double
    description: Angle to rotate 3D sketch entities in the y direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - IModelDocExtension.RotateOrCopy
  - ISketchManager.RotateOrCopy3DAboutVector
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
  - rotateorcopy3daboutxyz
  - isketchmanager
  - manager
  - copy3
  - about
  - xyz
  - boolean
  - num
  - copies
  - int32
  - keep
  - relations
  - base
  - double
  - angle
  - dir
  - coordinates
  - vb
  - net
  - vba
---

# ISketchManager.RotateOrCopy3DAboutXYZ

Rotates, and optionally copies, the selected 3D sketch entities about the specified x, y, and z coordinates.

## Signature

```csharp
System.Boolean RotateOrCopy3DAboutXYZ( 
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
AngleAboutXDir
,
   System.Double
AngleAboutYDir
,
   System.Double
AngleAboutZDir
)
```
## Parameters

- `Copy` (System.Boolean): True to copy 3D sketch entities, false to not
- `NumCopies` (System.Int32): Number of copies
- `KeepRelations` (System.Boolean): Number of copies
- `BaseX` (System.Double): True to keep sketch relations, false to not
- `BaseY` (System.Double): X coordinate from the base point from which to rotate the 3D sketch entities
- `BaseZ` (System.Double): Y coordinate from the base point from which to rotate the 3D sketch entities
- `AngleAboutXDir` (System.Double): Z coordinate from the base point from which to rotate the 3D sketch entities
- `AngleAboutYDir` (System.Double): Angle to rotate the 3D sketch entities in the x direction
- `AngleAboutZDir` (System.Double): Angle to rotate 3D sketch entities in the y direction

## Return Value

True if the 3D sketch entities are rotated, and optionally copied, in the specified x, y, and z directions, false if not

## Examples

- Rotate and Copy 3D Sketch About Coordinates (C#) (Rotate_and_Copy_3D_Sketch_About_Coordinates_Example_CSharp.htm)
- Rotate and Copy 3D Sketch about Coordinates (VB.NET) (Rotate_and_Copy_3D_Sketch_About_Coordinates_Example_VBNET.htm)
- Rotate and Copy 3D Sketch About Coordinates (VBA) (Rotate_and_Copy_3D_Sketch_About_Coordinates_Example_VB.htm)

## See Also

- `IModelDocExtension.RotateOrCopy`
- `ISketchManager.RotateOrCopy3DAboutVector`
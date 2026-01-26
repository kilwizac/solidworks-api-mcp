---
type: method
interface: IFeatureManager
member: InsertMoveCopyBody2
returns: Feature
parameters:
  -
    name: TransX
    type: System.Double
    description: Value for delta X; applies to translation and valid only if Rot* parameters are null or Nothing (see Remarks )
  -
    name: TransY
    type: System.Double
    description: Value for delta Y; applies to translation and valid only if Rot* parameters are null or Nothing (see Remarks )
  -
    name: TransZ
    type: System.Double
    description: Value for delta Z; applies to translation and valid only if Rot* parameters are null or Nothing (see Remarks )
  -
    name: TransDist
    type: System.Double
    description: Distance ; applies to translation and valid only if Rot* parameters are null or Nothing (see Remarks )
  -
    name: RotPointX
    type: System.Double
    description: Value for X rotation origin; applies to rotation (see Remarks )
  -
    name: RotPointY
    type: System.Double
    description: Value for Y rotation origin; applies to rotation (see Remarks )
  -
    name: RotPointZ
    type: System.Double
    description: Value for Z rotation origin; applies to rotation (see Remarks )
  -
    name: RotAngleX
    type: System.Double
    description: Value for X rotation angle; applies to rotation (see Remarks )
  -
    name: RotAngleY
    type: System.Double
    description: Value for Y rotation angle; applies to rotation (see Remarks )
  -
    name: RotAngleZ
    type: System.Double
    description: Value for Z rotation angle; applies to rotation (see Remarks )
  -
    name: BCopy
    type: System.Boolean
    description: True if a copy operation, false if a move operation
  -
    name: NumCopies
    type: System.Int32
    description: Number of copies to create
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveCopyBodyFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - move
  - copy
  - body
  - bodies
  - ibody2
  - rotate
  - surfaces
  - surface
  - isurface
  - insertmovecopybody2
  - ifeaturemanager
  - manager
  - insert
  - body2
  - trans
  - double
  - dist
  - rot
  - point
  - angle
  - boolean
  - num
  - copies
  - int32
  - vb
  - net
  - vba
---

# IFeatureManager.InsertMoveCopyBody2

Moves or makes copies of the selected solid bodies or surfaces.

## Signature

```csharp
Feature InsertMoveCopyBody2( 
   System.Double
TransX
,
   System.Double
TransY
,
   System.Double
TransZ
,
   System.Double
TransDist
,
   System.Double
RotPointX
,
   System.Double
RotPointY
,
   System.Double
RotPointZ
,
   System.Double
RotAngleX
,
   System.Double
RotAngleY
,
   System.Double
RotAngleZ
,
   System.Boolean
BCopy
,
   System.Int32
NumCopies
)
```
## Parameters

- `TransX` (System.Double): Value for delta X; applies to translation and valid only if Rot* parameters are null or Nothing (see Remarks )
- `TransY` (System.Double): Value for delta Y; applies to translation and valid only if Rot* parameters are null or Nothing (see Remarks )
- `TransZ` (System.Double): Value for delta Z; applies to translation and valid only if Rot* parameters are null or Nothing (see Remarks )
- `TransDist` (System.Double): Distance ; applies to translation and valid only if Rot* parameters are null or Nothing (see Remarks )
- `RotPointX` (System.Double): Value for X rotation origin; applies to rotation (see Remarks )
- `RotPointY` (System.Double): Value for Y rotation origin; applies to rotation (see Remarks )
- `RotPointZ` (System.Double): Value for Z rotation origin; applies to rotation (see Remarks )
- `RotAngleX` (System.Double): Value for X rotation angle; applies to rotation (see Remarks )
- `RotAngleY` (System.Double): Value for Y rotation angle; applies to rotation (see Remarks )
- `RotAngleZ` (System.Double): Value for Z rotation angle; applies to rotation (see Remarks )
- `BCopy` (System.Boolean): True if a copy operation, false if a move operation
- `NumCopies` (System.Int32): Number of copies to create

## Return Value

Pointer to the IFeature object

## Remarks

Specify either translation or rotation parameters. Translation and rotation cannot both be applied by a single move/copy body feature. If you specify both translation and rotation parameters, only the rotation parameters are applied.
This method requires selecting the body, surface, edge, and vertex using these marks:
Selection
Mark
Body or surface
1
Rotation edge, vertex, coordinate system
2
Translation edge, vertex, coordinate system
4
Translation vertex
8
NOTE:
To add the move/copy body as a sub-feature of a derived part, you must select the move/copy body feature first.
See
IModelDocExtension::SelectByID2
for details on selecting and marking bodies, surfaces, edges, vertices, and coordinate systems.

## Examples

- Move Bodies (C#) (Move_Bodies_Example_CSharp.htm)
- Move Bodies (VB.NET) (Move_Bodies_Example_VBNET.htm)
- Move Bodies (VBA) (Move_Bodies_Example_VB.htm)

## See Also

- `IMoveCopyBodyFeatureData`
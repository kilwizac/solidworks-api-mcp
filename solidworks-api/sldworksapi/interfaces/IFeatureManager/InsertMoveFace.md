---
type: method
interface: IFeatureManager
member: InsertMoveFace
returns: Feature
parameters:
  -
    name: MoveType
    type: System.Int32
    description: Type of move: 0 = Offset 1 = Translate 2 = Rotate
  -
    name: ReverseDir
    type: System.Boolean
    description: True to reverse the direction, false to not
  -
    name: Angle
    type: System.Double
    description: If MoveType is Rotate, then specify the angle at which to draft the faces
  -
    name: Distance
    type: System.Double
    description: Distance to offset or translate the faces
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData
keywords:
  - insertmoveface
  - ifeaturemanager
  - feature
  - manager
  - insert
  - move
  - face
  - type
  - int32
  - reverse
  - dir
  - boolean
  - angle
  - double
  - distance
  - selected
  - vba
---

# IFeatureManager.InsertMoveFace

Obsolete. Superseded by IFeatureManager::InsertMoveFace2 and IFeatureManager::IInsertMoveFace2.

## Signature

```csharp
Feature InsertMoveFace( 
   System.Int32
MoveType
,
   System.Boolean
ReverseDir
,
   System.Double
Angle
,
   System.Double
Distance
)
```
## Parameters

- `MoveType` (System.Int32): Type of move: 0 = Offset 1 = Translate 2 = Rotate
- `ReverseDir` (System.Boolean): True to reverse the direction, false to not
- `Angle` (System.Double): If MoveType is Rotate, then specify the angle at which to draft the faces
- `Distance` (System.Double): Distance to offset or translate the faces

## Return Value

Pointer to the IFeature object

## Remarks

Use the following marks with
IModelDocExtension::SelectByID2
:
1 = face
2 = direction reference (plane, planar face, linear edge, or reference axis) for translate
4 = axis reference (linear edge or reference axis) for rotate

## Examples

- Move Selected Face (VBA) (Move_Selected_Face_Example_VB.htm)

## See Also

- `IMoveFaceFeatureData`
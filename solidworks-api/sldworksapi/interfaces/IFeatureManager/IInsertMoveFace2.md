---
type: method
interface: IFeatureManager
member: IInsertMoveFace2
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
  -
    name: TranslationParams
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array three doubles for delta x, delta y, and delta z direction translation VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: RotationParams
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array six doubles: first three doubles are the x, y, and z rotation origin last three doubles are the x, y, and z rotation angle VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - geometry
related:
  - IFeatureManager.InsertMoveFace2
  - IMoveFaceFeatureData
keywords:
  - iinsertmoveface2
  - ifeaturemanager
  - feature
  - manager
  - insert
  - move
  - face2
  - type
  - int32
  - reverse
  - dir
  - boolean
  - angle
  - double
  - distance
  - translation
  - params
  - rotation
---

# IFeatureManager.IInsertMoveFace2

Obsolete. Superseded by IFeatureManager::InsertMoveFace3.

## Signature

```csharp
Feature IInsertMoveFace2( 
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
,
   ref System.Double
TranslationParams
,
   ref System.Double
RotationParams
)
```
## Parameters

- `MoveType` (System.Int32): Type of move: 0 = Offset 1 = Translate 2 = Rotate
- `ReverseDir` (System.Boolean): True to reverse the direction, false to not
- `Angle` (System.Double): If MoveType is Rotate, then specify the angle at which to draft the faces
- `Distance` (System.Double): Distance to offset or translate the faces
- `TranslationParams` (System.Double): in-process, unmanaged C++: Pointer to an array three doubles for delta x, delta y, and delta z direction translation VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `RotationParams` (System.Double): in-process, unmanaged C++: Pointer to an array six doubles: first three doubles are the x, y, and z rotation origin last three doubles are the x, y, and z rotation angle VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Pointer to the IFeature object

## Remarks

Use the following marks with
IModelDocExtension::SelectByID2
:
1 = face
2 = direction reference (plane, planar face, linear edge, or reference axis) for translate
4 = axis reference (linear edge or reference axis) for rotate
If you specify a value for TranslationParms or RotationParams, then do not specify a value for Distance or Angle, respectively. The translation or rotation parameters are calculated internally when Distance or Angle is specified.

## See Also

- `IFeatureManager.InsertMoveFace2`
- `IMoveFaceFeatureData`
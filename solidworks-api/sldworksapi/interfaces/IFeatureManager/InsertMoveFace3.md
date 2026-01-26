---
type: method
interface: IFeatureManager
member: InsertMoveFace3
returns: Feature
parameters:
  -
    name: MoveType
    type: System.Int32
    description: Type of move as defined in swMoveFaceType_e
  -
    name: ReverseDir
    type: System.Boolean
    description: True to reverse the direction, false to not
  -
    name: Angle
    type: System.Double
    description: Angle at which to draft the faces; valid only if MoveType is swMoveFaceType_e.swMoveFaceTypeRotate (see Remarks )
  -
    name: Distance
    type: System.Double
    description: Distance to translate or offset the faces; valid only if MoveType is one of the following: swMoveFaceType_e.swMoveFaceTypeOffset swMoveFaceType_e.swMoveFaceTypeTranslate and EndConditionType is swEndConditions_e.swEndCondBlind (see Remarks )
  -
    name: TranslationParams
    type: System.Object
    description: Array of three doubles for the delta x, delta y, and delta z direction translation (see Remarks )
  -
    name: RotationParams
    type: System.Object
    description: Array of six doubles: First three doubles are the x, y, and z rotation origin Last three doubles are the x, y, and z rotation angle (see Remarks )
  -
    name: EndConditionType
    type: System.Int32
    description: End condition as defined in swEndConditions_e ; valid only if MoveType is swMoveFaceType_e.swMoveFaceTypeTranslate Only the following end condition types are valid: swEndConditions_e.swEndCondBlind swEndConditions_e.swEndCondUpToVertex swEndConditions_e.swEndCondUpToSurface swEndConditions_e.swEndCondOffsetFromSurface swEndConditions_e.swEndCondUpToBody
  -
    name: OffsetDistance
    type: System.Double
    description: Offset from surface; valid only if MoveType is swMoveFaceType_e.swMoveFaceTypeTranslate and EndConditionType is swEndConditions_e.swEndCondOffsetFromSurface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMoveFaceFeatureData
keywords:
  - face
  - see
  - also
  - iface2
  - move
  - feature
  - ifeature
  - mold
  - tools
  - faces
  - insertmoveface3
  - ifeaturemanager
  - manager
  - insert
  - face3
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
  - object
  - rotation
  - end
  - condition
  - offset
  - create
  - modify
  - vba
  - vb
  - net
---

# IFeatureManager.InsertMoveFace3

Moves the selected faces on a solid or surface model.

## Signature

```csharp
Feature InsertMoveFace3( 
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
   System.Object
TranslationParams
,
   System.Object
RotationParams
,
   System.Int32
EndConditionType
,
   System.Double
OffsetDistance
)
```
## Parameters

- `MoveType` (System.Int32): Type of move as defined in swMoveFaceType_e
- `ReverseDir` (System.Boolean): True to reverse the direction, false to not
- `Angle` (System.Double): Angle at which to draft the faces; valid only if MoveType is swMoveFaceType_e.swMoveFaceTypeRotate (see Remarks )
- `Distance` (System.Double): Distance to translate or offset the faces; valid only if MoveType is one of the following: swMoveFaceType_e.swMoveFaceTypeOffset swMoveFaceType_e.swMoveFaceTypeTranslate and EndConditionType is swEndConditions_e.swEndCondBlind (see Remarks )
- `TranslationParams` (System.Object): Array of three doubles for the delta x, delta y, and delta z direction translation (see Remarks )
- `RotationParams` (System.Object): Array of six doubles: First three doubles are the x, y, and z rotation origin Last three doubles are the x, y, and z rotation angle (see Remarks )
- `EndConditionType` (System.Int32): End condition as defined in swEndConditions_e ; valid only if MoveType is swMoveFaceType_e.swMoveFaceTypeTranslate Only the following end condition types are valid: swEndConditions_e.swEndCondBlind swEndConditions_e.swEndCondUpToVertex swEndConditions_e.swEndCondUpToSurface swEndConditions_e.swEndCondOffsetFromSurface swEndConditions_e.swEndCondUpToBody
- `OffsetDistance` (System.Double): Offset from surface; valid only if MoveType is swMoveFaceType_e.swMoveFaceTypeTranslate and EndConditionType is swEndConditions_e.swEndCondOffsetFromSurface

## Return Value

IFeature

## Remarks

Before calling this method, you need to select specific entities.
If MoveFaceType is swMoveFaceType_e...
And EndConditionType is swEndConditions_e...
Call
IModelDocExtension::SelectByID2
to select...
With mark...
Any option
Any option
Face to move
1
swMoveFaceTypeTranslate
Any option
Direction reference (plane, planar face, linear edge, or reference axis)
2
swMoveFaceTypeTranslate
swEndCondUpToVertex
swEndCondUpToSurface
swEndCondOffsetFromSurface
swEndCondUpToBody
Up-to vertex
Up-to surface
Offset-from surface
Up-to body
8
swMoveFaceTypeRotate
N/A
Axis reference (linear edge or reference axis)
4
If you specify a value for TranslationParms or RotationParams, then do not specify a value for Distance or Angle, respectively. The translation or rotation parameters are calculated internally when Distance or Angle is specified.

## Examples

- Create and Modify Move Face Feature (VBA) (Create_and_Modify_Move_Face_Feature_Example_VB.htm)
- Create and Modify Move Face Feature (VB.NET) (Create_and_Modify_Move_Face_Feature_Example_VBNET.htm)
- Create and Modify Move Face Feature (C#) (Create_and_Modify_Move_Face_Feature_Example_CSharp.htm)

## See Also

- `IMoveFaceFeatureData`
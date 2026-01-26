---
type: method
interface: IAssemblyDoc
member: EditMate4
returns: void
parameters:
  -
    name: MateTypeFromEnum
    type: System.Int32
    description: Type of mate as defined in swMateType_e
  -
    name: AlignFromEnum
    type: System.Int32
    description: Type of alignment as defined in swMateAlign_e
  -
    name: Flip
    type: System.Boolean
    description: True to flip the mate components, false to not
  -
    name: Distance
    type: System.Double
    description: Distance value; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE
  -
    name: DistanceAbsUpperLimit
    type: System.Double
    description: Absolute maximum distance allowed; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE
  -
    name: DistanceAbsLowerLimit
    type: System.Double
    description: Absolute minimum distance allowed; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE
  -
    name: GearRatioNumerator
    type: System.Double
    description: Gear ratio numerator value; valid only if MateTypeFromEnum is swMateType_e.swMateGEAR
  -
    name: GearRatioDenominator
    type: System.Double
    description: Gear ratio denominator value; valid only if MateTypeFromEnum is swMateType_e.swMateGEAR
  -
    name: Angle
    type: System.Double
    description: Angle value; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
  -
    name: AngleAbsUpperLimit
    type: System.Double
    description: Absolute maximum angle allowed; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
  -
    name: AngleAbsLowerLimit
    type: System.Double
    description: Absolute minimum angle allowed; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
  -
    name: ForPositioningOnly
    type: System.Boolean
    description: True to only position the components according to the mating relationship and not return a mate, false to return a mate
  -
    name: LockRotation
    type: System.Boolean
    description: True to lock component rotation, false to not
  -
    name: WidthMateOption
    type: System.Int32
    description: Width mate options as defined in swMateWidthOptions_e ; valid only if MateTypeFromEnum is swMateType_e.swMateWIDTH
  -
    name: RepairMatesWithSameMissingEntity
    type: System.Boolean
    description: True to repair all mates missing the same mate entity, false to not
  -
    name: ErrorStatus
    type: System.Int32
    description: Success or error as defined by swAddMateError_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddConcentricMateWithTolerance
  - IAssemblyDoc.AddMate5
keywords:
  - editmate4
  - iassemblydoc
  - assembly
  - doc
  - edit
  - mate4
  - mate
  - type
  - int32
  - align
  - flip
  - boolean
  - distance
  - double
  - abs
  - upper
  - limit
  - lower
  - gear
  - ratio
  - numerator
  - denominator
  - angle
  - positioning
  - only
  - lock
  - rotation
  - width
  - option
  - repair
  - mates
  - same
  - missing
  - entity
  - error
  - status
  - void
  - vb
  - net
  - vba
---

# IAssemblyDoc.EditMate4

Obsolete. See the Remarks in each standard, advanced, and mechanical mate's feature data interface.

## Signature

```csharp
void EditMate4( 
   System.Int32
MateTypeFromEnum
,
   System.Int32
AlignFromEnum
,
   System.Boolean
Flip
,
   System.Double
Distance
,
   System.Double
DistanceAbsUpperLimit
,
   System.Double
DistanceAbsLowerLimit
,
   System.Double
GearRatioNumerator
,
   System.Double
GearRatioDenominator
,
   System.Double
Angle
,
   System.Double
AngleAbsUpperLimit
,
   System.Double
AngleAbsLowerLimit
,
   System.Boolean
ForPositioningOnly
,
   System.Boolean
LockRotation
,
   System.Int32
WidthMateOption
,
   System.Boolean
RepairMatesWithSameMissingEntity
,
   out System.Int32
ErrorStatus
)
```
## Parameters

- `MateTypeFromEnum` (System.Int32): Type of mate as defined in swMateType_e
- `AlignFromEnum` (System.Int32): Type of alignment as defined in swMateAlign_e
- `Flip` (System.Boolean): True to flip the mate components, false to not
- `Distance` (System.Double): Distance value; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE
- `DistanceAbsUpperLimit` (System.Double): Absolute maximum distance allowed; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE
- `DistanceAbsLowerLimit` (System.Double): Absolute minimum distance allowed; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE
- `GearRatioNumerator` (System.Double): Gear ratio numerator value; valid only if MateTypeFromEnum is swMateType_e.swMateGEAR
- `GearRatioDenominator` (System.Double): Gear ratio denominator value; valid only if MateTypeFromEnum is swMateType_e.swMateGEAR
- `Angle` (System.Double): Angle value; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
- `AngleAbsUpperLimit` (System.Double): Absolute maximum angle allowed; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
- `AngleAbsLowerLimit` (System.Double): Absolute minimum angle allowed; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
- `ForPositioningOnly` (System.Boolean): True to only position the components according to the mating relationship and not return a mate, false to return a mate
- `LockRotation` (System.Boolean): True to lock component rotation, false to not
- `WidthMateOption` (System.Int32): Width mate options as defined in swMateWidthOptions_e ; valid only if MateTypeFromEnum is swMateType_e.swMateWIDTH
- `RepairMatesWithSameMissingEntity` (System.Boolean): True to repair all mates missing the same mate entity, false to not
- `ErrorStatus` (System.Int32): Success or error as defined by swAddMateError_e

## Return Value

Unknown.

## Remarks

To edit:
Standard, advanced, and mechanical mates created using
IAssemblyDoc::CreateMate
, follow the steps to edit the mate in the Remarks of the mate's feature data interface.
Misaligned concentric mates, use
IAssemblyDoc::EditConcentricMate
.
Distance mates, use
IAssemblyDoc::EditDistanceMate
.
If repairing all mates missing the same mate entity, then select the following items in the following order before calling this method:
Mate feature to repair.
Two model items to mate (that is, two faces, edge and face, and so on). The two model items must be selected with a selection mark of 1. See
ISelectData
or
IModelDocExtension::SelectByID2
for details on using selection marks.
If MateTypeFromEnum is swMateType_e.swMateDISTANCE or swMateType_e.swMateANGLE, and the mate is applied to the closest position that meets the mate condition specified by Distance or Angle, then setting Flip to true moves the components to the other possible mate position.
This method does not support editing
Inplace
mates.

## Examples

- Repair Mates Missing Same Mate Entity (C#) (Repair_Mates_Missing_Same_Mate_Entity_Example_CSharp.htm)
- Repair Mates Missing Same Mate Entity (VB.NET) (Repair_Mates_Missing_Same_Mate_Entity_Example_VBNET.htm)
- Repair Mates Missing Same Mate Entity (VBA) (Repair_Mates_Missing_Same_Mate_Entity_Example_VB.htm)

## See Also

- `IAssemblyDoc.AddConcentricMateWithTolerance`
- `IAssemblyDoc.AddMate5`
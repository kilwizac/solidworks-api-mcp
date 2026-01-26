---
type: method
interface: IAssemblyDoc
member: EditMate3
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
    description: True to flip the component, false to not
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
  - IAssemblyDoc.AddMate5
keywords:
  - editmate3
  - iassemblydoc
  - assembly
  - doc
  - edit
  - mate3
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
  - error
  - status
  - void
  - vba
  - vb
  - net
---

# IAssemblyDoc.EditMate3

Obsolete. Superseded by IAssemblyDoc::EditMate4.

## Signature

```csharp
void EditMate3( 
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
   out System.Int32
ErrorStatus
)
```
## Parameters

- `MateTypeFromEnum` (System.Int32): Type of mate as defined in swMateType_e
- `AlignFromEnum` (System.Int32): Type of alignment as defined in swMateAlign_e
- `Flip` (System.Boolean): True to flip the component, false to not
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
- `ErrorStatus` (System.Int32): Success or error as defined by swAddMateError_e

## Return Value

Unknown.

## Remarks

The first selections should be the two items that are mated (that is, two faces, edge and face, and so on), and the third selection should be the mate feature to be edited. The mate feature must be selected last. The two mated items must be selected with a selection mark of 1. See
ISelectData
or
IModelDocExtension::SelectByID2
for details on using selection marks.
If MateTypeFromEnum is swMateType_e.swMateDISTANCE or swMateType_e.swMateANGLE, and the mate is applied to the closest position that meets the mate condition specified by Distance or Angle, then setting Flip to true moves the assembly to the other possible mate position.
This method does not support editing
Inplace
mates.

## Examples

- Edit Mate (VBA) (Edit_Mate_Example_VB.htm)
- Edit Mate (VB.NET) (Edit_Mate_Example_VBNET.htm)
- Edit Mate (C#) (Edit_Mate_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.AddMate5`
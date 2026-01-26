---
type: method
interface: IAssemblyDoc
member: AddMate5
returns: Mate2
parameters:
  -
    name: MateTypeFromEnum
    type: System.Int32
    description: Type of mate as defined in swMateType_e (see Remarks )
  -
    name: AlignFromEnum
    type: System.Int32
    description: Type of alignment as defined in swMateAlign_e
  -
    name: Flip
    type: System.Boolean
    description: True to flip the mate entities, false to not; valid only if MateTypeFromEnum is swMatetype_e.swMateDISTANCE
  -
    name: Distance
    type: System.Double
    description: Distance value; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE
  -
    name: DistanceAbsUpperLimit
    type: System.Double
    description: Absolute maximum distance value; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE (see Remarks )
  -
    name: DistanceAbsLowerLimit
    type: System.Double
    description: Absolute minimum distance value; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE (see Remarks )
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
    description: Absolute maximum angle value; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
  -
    name: AngleAbsLowerLimit
    type: System.Double
    description: Absolute minimum angle value; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
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
  - IAssemblyDoc.EditConcentricMate
  - IAssemblyDoc.EditDistanceMate
  - IAssemblyDoc.EditMate3
keywords:
  - addmate5
  - iassemblydoc
  - assembly
  - doc
  - add
  - mate5
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
  - mate2
  - component
  - vba
  - vb
  - net
  - copy
  - profile
  - center
---

# IAssemblyDoc.AddMate5

Obsolete. Superseded by IAssemblyDoc::CreateMate.

## Signature

```csharp
Mate2 AddMate5( 
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

- `MateTypeFromEnum` (System.Int32): Type of mate as defined in swMateType_e (see Remarks )
- `AlignFromEnum` (System.Int32): Type of alignment as defined in swMateAlign_e
- `Flip` (System.Boolean): True to flip the mate entities, false to not; valid only if MateTypeFromEnum is swMatetype_e.swMateDISTANCE
- `Distance` (System.Double): Distance value; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE
- `DistanceAbsUpperLimit` (System.Double): Absolute maximum distance value; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE (see Remarks )
- `DistanceAbsLowerLimit` (System.Double): Absolute minimum distance value; valid only if MateTypeFromEnum is swMateType_e.swMateDISTANCE (see Remarks )
- `GearRatioNumerator` (System.Double): Gear ratio numerator value; valid only if MateTypeFromEnum is swMateType_e.swMateGEAR
- `GearRatioDenominator` (System.Double): Gear ratio denominator value; valid only if MateTypeFromEnum is swMateType_e.swMateGEAR
- `Angle` (System.Double): Angle value; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
- `AngleAbsUpperLimit` (System.Double): Absolute maximum angle value; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
- `AngleAbsLowerLimit` (System.Double): Absolute minimum angle value; valid only if MateTypeFromEnum is swMateType_e.swMateANGLE
- `ForPositioningOnly` (System.Boolean): True to only position the components according to the mating relationship and not return a mate, false to return a mate
- `LockRotation` (System.Boolean): True to lock component rotation, false to not
- `WidthMateOption` (System.Int32): Width mate options as defined in swMateWidthOptions_e ; valid only if MateTypeFromEnum is swMateType_e.swMateWIDTH
- `ErrorStatus` (System.Int32): Success or error as defined by swAddMateError_e

## Return Value

Mate

## Remarks

To create:
Standard, advanced, and mechanical mates, use
IAssemblyDoc::CreateMate
.
Misaligned concentric mates, use
IAssemblyDoc::AddConcentricMateWithTolerance
.
Cylindrical distance mates, use
IAssemblyDoc::AddDistanceMate
.
The difference between this method and the now obsolete IAssemblyDoc::AddMate4 is the WidthMateOption parameter.
To specify a distance mate without limits, set the DistanceAbsUpperLimit and DistanceAbsLowerLimit parameters equal to the Distance parameter.
If MateTypeFromEnum is swMateType_e.swMateDISTANCE or swMateType_e.swMateANGLE, and the mate is applied to the closest position that meets the mate condition specified by Distance or Angle, then setting Flip to true moves the components to the other possible mate position.
To add a standard or mechanical mate:
Call
IModelDoc2::ClearSelection2
before selecting entities to mate.
Call
IModelDocExtension::SelectByID2
to select each entity to mate.
If MateTypeFromEnum is...
Use selection mark...
swMateType_e.swMateCAMFOLLOWER
8
swMateType_e.swMateWIDTH
16
Other swMateType_e option
1
Call this method.
Call IModelDoc2::ClearSelection2 after the mate is created.
If entities are not preselected, then ErrorStatus is swAddMateError_e.swAddMateError_IncorrectSelections, and nothing is returned.

## Examples

- Add and Mate Component (VBA) (Add_Component_and_Mate_Example_VB.htm)
- Add and Mate Component (VB.NET) (Add_Component_and_Mate_Example_VBNET.htm)
- Add and Mate Component (C#) (Add_Component_and_Mate_Example_CSharp.htm)
- Copy Component With Profile Center Mate (C#) (Copy_Component_With_Profile_Center_Mate_Example_CSharp.htm)
- Copy Component With Profile Center Mate (VB.NET) (Copy_Component_With_Profile_Center_Mate_Example_VBNET.htm)
- Copy Component With Profile Center Mate (VBA) (Copy_Component_With_Profile_Center_Mate_Example_VB.htm)

## See Also

- `IAssemblyDoc.EditConcentricMate`
- `IAssemblyDoc.EditDistanceMate`
- `IAssemblyDoc.EditMate3`
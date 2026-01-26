---
type: method
interface: IAssemblyDoc
member: AddMate4
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
    description: True to flip the component, false otherwise
  -
    name: Distance
    type: System.Double
    description: Distance value to use with distance or limit mates
  -
    name: DistanceAbsUpperLimit
    type: System.Double
    description: Absolute maximum distance value (see Remarks )
  -
    name: DistanceAbsLowerLimit
    type: System.Double
    description: Absolute minimum distance value (see Remarks )
  -
    name: GearRatioNumerator
    type: System.Double
    description: Gear ratio numerator value for gear mates
  -
    name: GearRatioDenominator
    type: System.Double
    description: Gear ratio denominator value for gear mates
  -
    name: Angle
    type: System.Double
    description: Angle value to use with angle mates
  -
    name: AngleAbsUpperLimit
    type: System.Double
    description: Absolute maximum angle value
  -
    name: AngleAbsLowerLimit
    type: System.Double
    description: Absolute minimum angle value
  -
    name: ForPositioningOnly
    type: System.Boolean
    description: True to only position the components according to the mating relationship and not return a mate, false to return a mate
  -
    name: LockRotation
    type: System.Boolean
    description: True to lock component rotation, false to not
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
related: []
keywords:
  - addmate4
  - iassemblydoc
  - assembly
  - doc
  - add
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
  - error
  - status
  - mate2
---

# IAssemblyDoc.AddMate4

Obsolete. Superseded by IAssemblyDoc::AddMate5.

## Signature

```csharp
Mate2 AddMate4( 
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
   out System.Int32
ErrorStatus
)
```
## Parameters

- `MateTypeFromEnum` (System.Int32): Type of mate as defined in swMateType_e (see Remarks )
- `AlignFromEnum` (System.Int32): Type of alignment as defined in swMateAlign_e
- `Flip` (System.Boolean): True to flip the component, false otherwise
- `Distance` (System.Double): Distance value to use with distance or limit mates
- `DistanceAbsUpperLimit` (System.Double): Absolute maximum distance value (see Remarks )
- `DistanceAbsLowerLimit` (System.Double): Absolute minimum distance value (see Remarks )
- `GearRatioNumerator` (System.Double): Gear ratio numerator value for gear mates
- `GearRatioDenominator` (System.Double): Gear ratio denominator value for gear mates
- `Angle` (System.Double): Angle value to use with angle mates
- `AngleAbsUpperLimit` (System.Double): Absolute maximum angle value
- `AngleAbsLowerLimit` (System.Double): Absolute minimum angle value
- `ForPositioningOnly` (System.Boolean): True to only position the components according to the mating relationship and not return a mate, false to return a mate
- `LockRotation` (System.Boolean): True to lock component rotation, false to not
- `ErrorStatus` (System.Int32): Success or error as defined by swAddMateError_e

## Return Value

Unknown.

## Remarks

The difference between this method and the now obsolete IAssemblyDoc::AddMate3 is that this method's LockRotation parameter provides the option to lock the rotation of components in the mate.
To specify a distance mate without limits, set the DistanceAbsUpperLimit and DistanceAbsLowerLimit parameters equal to the Distance parameter.
If MateTypeFromEnum is swMateType_e.swMateDISTANCE or swMateType_e.swMateANGLE, and the mate is applied to the closest position that meets the mate condition specified by Distance or Angle, then setting Flip to true moves the assembly to the other possible mate position.
To add a mate:
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
If nothing is preselected, then ErrorStatus is swAddMateError_IncorrectSelections, and nothing is returned.
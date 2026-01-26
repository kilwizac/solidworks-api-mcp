---
type: method
interface: IAssemblyDoc
member: EditMate2
returns: void
parameters:
  -
    name: MateTypeFromEnum
    type: System.Int32
    description: Type of mate as defined in swMateType_e
  -
    name: AlignFromEnum
    type: System.Int32
    description: Type of alignment desired as defined in swMateAlign_e
  -
    name: Flip
    type: System.Boolean
    description: True to flip the component, false to not
  -
    name: Distance
    type: System.Double
    description: Distance value to use with distance or limit mates
  -
    name: DistanceAbsUpperLimit
    type: System.Double
    description: Absolute maximum distance allowed
  -
    name: DistanceAbsLowerLimit
    type: System.Double
    description: Absolute minimum distance allowed
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
    description: Absolute maximum angle allowed
  -
    name: AngleAbsLowerLimit
    type: System.Double
    description: Absolute minimum angle allowed
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
  - IAssemblyDoc.AddMate3
keywords:
  - editmate2
  - iassemblydoc
  - assembly
  - doc
  - edit
  - mate2
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
  - error
  - status
  - void
---

# IAssemblyDoc.EditMate2

Obsolete. Superseded by IAssemblyDoc::EditMate3.

## Signature

```csharp
void EditMate2( 
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
   out System.Int32
ErrorStatus
)
```
## Parameters

- `MateTypeFromEnum` (System.Int32): Type of mate as defined in swMateType_e
- `AlignFromEnum` (System.Int32): Type of alignment desired as defined in swMateAlign_e
- `Flip` (System.Boolean): True to flip the component, false to not
- `Distance` (System.Double): Distance value to use with distance or limit mates
- `DistanceAbsUpperLimit` (System.Double): Absolute maximum distance allowed
- `DistanceAbsLowerLimit` (System.Double): Absolute minimum distance allowed
- `GearRatioNumerator` (System.Double): Gear ratio numerator value for gear mates
- `GearRatioDenominator` (System.Double): Gear ratio denominator value for gear mates
- `Angle` (System.Double): Angle value to use with angle mates
- `AngleAbsUpperLimit` (System.Double): Absolute maximum angle allowed
- `AngleAbsLowerLimit` (System.Double): Absolute minimum angle allowed
- `ErrorStatus` (System.Int32): Success or error as defined by swAddMateError_e

## Return Value

Unknown.

## Remarks

The first selection should be the two items that are mated (that is, two faces, edge and face, and so on), and the third selection should be the mate feature to be edited. The mate feature must be selected last. The two mated items must be selected with a selection mark of 1. See
ISelectData
or
IModelDocExtension::SelectByID2
for details on using selection marks.
If mateType is swMateDISTANCE or swMateANGLE when the mate is applied to the closest position that meets the mate condition specified by distance or angle, then setting flip to True moves the assembly to the other possible mate position.
This method does not support editing
Inplace
mates.

## See Also

- `IAssemblyDoc.AddMate3`
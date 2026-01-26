---
type: method
interface: IAssemblyDoc
member: AddMate2
returns: Mate2
parameters:
  -
    name: MateTypeFromEnum
    type: System.Int32
    description: 
  -
    name: AlignFromEnum
    type: System.Int32
    description: 
  -
    name: Flip
    type: System.Boolean
    description: 
  -
    name: Distance
    type: System.Double
    description: 
  -
    name: DistanceAbsUpperLimit
    type: System.Double
    description: 
  -
    name: DistanceAbsLowerLimit
    type: System.Double
    description: 
  -
    name: GearRatioNumerator
    type: System.Double
    description: 
  -
    name: GearRatioDenominator
    type: System.Double
    description: 
  -
    name: Angle
    type: System.Double
    description: 
  -
    name: AngleAbsUpperLimit
    type: System.Double
    description: 
  -
    name: AngleAbsLowerLimit
    type: System.Double
    description: 
  -
    name: ErrorStatus
    type: System.Int32
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - addmate2
  - iassemblydoc
  - assembly
  - doc
  - add
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
---

# IAssemblyDoc.AddMate2

Obsolete. Superseded by IAssemblyDoc::AddMate3.

## Signature

```csharp
Mate2 AddMate2( 
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

- `MateTypeFromEnum` (System.Int32): 
- `AlignFromEnum` (System.Int32): 
- `Flip` (System.Boolean): 
- `Distance` (System.Double): 
- `DistanceAbsUpperLimit` (System.Double): 
- `DistanceAbsLowerLimit` (System.Double): 
- `GearRatioNumerator` (System.Double): 
- `GearRatioDenominator` (System.Double): 
- `Angle` (System.Double): 
- `AngleAbsUpperLimit` (System.Double): 
- `AngleAbsLowerLimit` (System.Double): 
- `ErrorStatus` (System.Int32): 

## Return Value

Unknown.
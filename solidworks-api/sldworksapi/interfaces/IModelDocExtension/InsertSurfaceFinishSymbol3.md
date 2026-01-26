---
type: method
interface: IModelDocExtension
member: InsertSurfaceFinishSymbol3
returns: SFSymbol
parameters:
  -
    name: SymType
    type: System.Int32
    description: Type of symbol as defined in swSFSymType_e
  -
    name: LeaderType
    type: System.Int32
    description: Type of leader as defined in swLeaderStyle_e
  -
    name: LocX
    type: System.Double
    description: x location for symbol
  -
    name: LocY
    type: System.Double
    description: y location for symbol
  -
    name: LocZ
    type: System.Double
    description: z location for symbol
  -
    name: LaySymbol
    type: System.Int32
    description: Type of lay direction as defined in swSFLaySym_e
  -
    name: ArrowType
    type: System.Int32
    description: Type of arrow head as defined in swArrowStyle_e
  -
    name: MachAllowance
    type: System.String
    description: Material removal allowance
  -
    name: OtherVals
    type: System.String
    description: Other roughness values
  -
    name: ProdMethod
    type: System.String
    description: Production method and treatment
  -
    name: SampleLen
    type: System.String
    description: Sampling length
  -
    name: MaxRoughness
    type: System.String
    description: Maximum roughness
  -
    name: MinRoughness
    type: System.String
    description: Minimum roughness
  -
    name: RoughnessSpacing
    type: System.String
    description: Roughness spacing
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - surface
  - finish
  - symbols
  - see
  - isfsymbol
  - insertsurfacefinishsymbol3
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - symbol3
  - sym
  - type
  - int32
  - leader
  - loc
  - double
  - lay
  - symbol
  - arrow
  - mach
  - allowance
  - string
  - other
  - vals
  - prod
  - sample
  - len
  - max
  - roughness
  - min
  - spacing
  - sf
  - annotations
  - arrays
  - vba
  - vb
  - net
---

# IModelDocExtension.InsertSurfaceFinishSymbol3

Creates a surface-finish symbol based on the last selection.

## Signature

```csharp
SFSymbol InsertSurfaceFinishSymbol3( 
   System.Int32
SymType
,
   System.Int32
LeaderType
,
   System.Double
LocX
,
   System.Double
LocY
,
   System.Double
LocZ
,
   System.Int32
LaySymbol
,
   System.Int32
ArrowType
,
   System.String
MachAllowance
,
   System.String
OtherVals
,
   System.String
ProdMethod
,
   System.String
SampleLen
,
   System.String
MaxRoughness
,
   System.String
MinRoughness
,
   System.String
RoughnessSpacing
)
```
## Parameters

- `SymType` (System.Int32): Type of symbol as defined in swSFSymType_e
- `LeaderType` (System.Int32): Type of leader as defined in swLeaderStyle_e
- `LocX` (System.Double): x location for symbol
- `LocY` (System.Double): y location for symbol
- `LocZ` (System.Double): z location for symbol
- `LaySymbol` (System.Int32): Type of lay direction as defined in swSFLaySym_e
- `ArrowType` (System.Int32): Type of arrow head as defined in swArrowStyle_e
- `MachAllowance` (System.String): Material removal allowance
- `OtherVals` (System.String): Other roughness values
- `ProdMethod` (System.String): Production method and treatment
- `SampleLen` (System.String): Sampling length
- `MaxRoughness` (System.String): Maximum roughness
- `MinRoughness` (System.String): Minimum roughness
- `RoughnessSpacing` (System.String): Roughness spacing

## Return Value

Newly inserted surface finish symbol

## Remarks

The SOLIDWORKS Design software uses the location parameters for this method only if the surface finish symbol has a leader
leaderType != swNO_LEADER.

## Examples

- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
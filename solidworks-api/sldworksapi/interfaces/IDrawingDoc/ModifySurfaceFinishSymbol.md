---
type: method
interface: IDrawingDoc
member: ModifySurfaceFinishSymbol
returns: System.Boolean
parameters:
  -
    name: SymType
    type: System.Int32
    description: Symbol type as defined in swSFSymType_e
  -
    name: LeaderType
    type: System.Int32
    description: Leader type as defined in swLeaderStyle_e
  -
    name: LocX
    type: System.Double
    description: X location for symbol
  -
    name: LocY
    type: System.Double
    description: Y location for symbol
  -
    name: LocZ
    type: System.Double
    description: Z location for symbol
  -
    name: LaySymbol
    type: System.Int32
    description: Direction of lay as defined in swSFLaySym_e
  -
    name: ArrowType
    type: System.Int32
    description: Arrowhead type as defined in swArrowStyle_e
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
    description: Production method/treatment
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
  - drawings
  - ui
related:
  - IModelDocExtension.InsertSurfaceFinishSymbol3
  - ISFSymbol
keywords:
  - surface
  - finish
  - symbols
  - see
  - isfsymbol
  - modifysurfacefinishsymbol
  - idrawingdoc
  - drawing
  - doc
  - modify
  - symbol
  - sym
  - type
  - int32
  - leader
  - loc
  - double
  - lay
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
  - boolean
---

# IDrawingDoc.ModifySurfaceFinishSymbol

Modifies the selected surface finish symbol.

## Signature

```csharp
System.Boolean ModifySurfaceFinishSymbol( 
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

- `SymType` (System.Int32): Symbol type as defined in swSFSymType_e
- `LeaderType` (System.Int32): Leader type as defined in swLeaderStyle_e
- `LocX` (System.Double): X location for symbol
- `LocY` (System.Double): Y location for symbol
- `LocZ` (System.Double): Z location for symbol
- `LaySymbol` (System.Int32): Direction of lay as defined in swSFLaySym_e
- `ArrowType` (System.Int32): Arrowhead type as defined in swArrowStyle_e
- `MachAllowance` (System.String): Material removal allowance
- `OtherVals` (System.String): Other roughness values
- `ProdMethod` (System.String): Production method/treatment
- `SampleLen` (System.String): Sampling length
- `MaxRoughness` (System.String): Maximum roughness
- `MinRoughness` (System.String): Minimum roughness
- `RoughnessSpacing` (System.String): Roughness spacing

## Return Value

Unknown.

## See Also

- `IModelDocExtension.InsertSurfaceFinishSymbol3`
- `ISFSymbol`
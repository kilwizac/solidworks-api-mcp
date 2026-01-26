---
type: method
interface: IModelDocExtension
member: InsertDatumTargetSymbol2
returns: DatumTargetSym
parameters:
  -
    name: Datum1
    type: System.String
    description: Datum reference string 1
  -
    name: Datum2
    type: System.String
    description: Datum reference string 2
  -
    name: Datum3
    type: System.String
    description: Datum reference string 3
  -
    name: AreaStyle
    type: System.Int16
    description: 0 = point 1 = circle 2 = rectangle
  -
    name: AreaOutside
    type: System.Boolean
    description: True to display the target area outside, false to not
  -
    name: Value1
    type: System.Double
    description: Numeric datum target area diameter or width
  -
    name: Value2
    type: System.Double
    description: Numeric datum target area height
  -
    name: ValueStr1
    type: System.String
    description: Value for datum target area diameter or width
  -
    name: ValueStr2
    type: System.String
    description: Value for datum target area height
  -
    name: ArrowsSmart
    type: System.Boolean
    description: True to use smart arrows, false to not
  -
    name: ArrowStyle
    type: System.Int16
    description: Arrowhead style as defined by swArrowStyle_e
  -
    name: LeaderLineStyle
    type: System.Int16
    description: Leaderline style as defined by swLeaderStyle_e
  -
    name: LeaderBent
    type: System.Boolean
    description: True to create a bent leader line, false to not
  -
    name: ShowArea
    type: System.Boolean
    description: True to show the target area, false to not
  -
    name: ShowSymbol
    type: System.Boolean
    description: True to display the target symbol, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - insertdatumtargetsymbol2
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - datum
  - target
  - symbol2
  - datum1
  - string
  - datum2
  - datum3
  - area
  - style
  - int16
  - outside
  - boolean
  - value1
  - double
  - value2
  - value
  - str1
  - str2
  - arrows
  - smart
  - arrow
  - leader
  - line
  - bent
  - show
  - symbol
  - sym
---

# IModelDocExtension.InsertDatumTargetSymbol2

Obsolete. Superseded by IModelDocExtension::InsertDatumTargetSymbol3.

## Signature

```csharp
DatumTargetSym InsertDatumTargetSymbol2( 
   System.String
Datum1
,
   System.String
Datum2
,
   System.String
Datum3
,
   System.Int16
AreaStyle
,
   System.Boolean
AreaOutside
,
   System.Double
Value1
,
   System.Double
Value2
,
   System.String
ValueStr1
,
   System.String
ValueStr2
,
   System.Boolean
ArrowsSmart
,
   System.Int16
ArrowStyle
,
   System.Int16
LeaderLineStyle
,
   System.Boolean
LeaderBent
,
   System.Boolean
ShowArea
,
   System.Boolean
ShowSymbol
)
```
## Parameters

- `Datum1` (System.String): Datum reference string 1
- `Datum2` (System.String): Datum reference string 2
- `Datum3` (System.String): Datum reference string 3
- `AreaStyle` (System.Int16): 0 = point 1 = circle 2 = rectangle
- `AreaOutside` (System.Boolean): True to display the target area outside, false to not
- `Value1` (System.Double): Numeric datum target area diameter or width
- `Value2` (System.Double): Numeric datum target area height
- `ValueStr1` (System.String): Value for datum target area diameter or width
- `ValueStr2` (System.String): Value for datum target area height
- `ArrowsSmart` (System.Boolean): True to use smart arrows, false to not
- `ArrowStyle` (System.Int16): Arrowhead style as defined by swArrowStyle_e
- `LeaderLineStyle` (System.Int16): Leaderline style as defined by swLeaderStyle_e
- `LeaderBent` (System.Boolean): True to create a bent leader line, false to not
- `ShowArea` (System.Boolean): True to show the target area, false to not
- `ShowSymbol` (System.Boolean): True to display the target symbol, false to not

## Return Value

Datum target symbol
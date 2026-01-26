---
type: method
interface: IModelDoc2
member: EditDatumTargetSymbol
returns: System.Boolean
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
    description: 0 = point, 1 = circle, 2 = rectangle
  -
    name: AreaOutside
    type: System.Boolean
    description: True to display target area dimensions size outside, false otherwise
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
    description: True if you want smart arrows, false otherwise
  -
    name: ArrowStyle
    type: System.Int16
    description: Arrow head style (for example, open, closed, and so on) as defined in swArrowStyle_e
  -
    name: LeaderLineStyle
    type: System.Int16
    description: Leaderline type as defined in swLeaderStyle_e
  -
    name: LeaderBent
    type: System.Boolean
    description: True if you want a bent leader line, false otherwise
  -
    name: ShowArea
    type: System.Boolean
    description: True if you want to show the target area, false otherwise
  -
    name: ShowSymbol
    type: System.Boolean
    description: True if you want to display the target symbol, false otherwise
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IDatumTargetSym
  - IModelDocExtension.InsertDatumTargetSymbol2
keywords:
  - edit
  - datum
  - targets
  - idatumtargetsym
  - editdatumtargetsymbol
  - imodeldoc2
  - model
  - doc2
  - target
  - symbol
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
---

# IModelDoc2.EditDatumTargetSymbol

Edits a datum target symbol.

## Signature

```csharp
System.Boolean EditDatumTargetSymbol( 
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
- `AreaStyle` (System.Int16): 0 = point, 1 = circle, 2 = rectangle
- `AreaOutside` (System.Boolean): True to display target area dimensions size outside, false otherwise
- `Value1` (System.Double): Numeric datum target area diameter or width
- `Value2` (System.Double): Numeric datum target area height
- `ValueStr1` (System.String): Value for datum target area diameter or width
- `ValueStr2` (System.String): Value for datum target area height
- `ArrowsSmart` (System.Boolean): True if you want smart arrows, false otherwise
- `ArrowStyle` (System.Int16): Arrow head style (for example, open, closed, and so on) as defined in swArrowStyle_e
- `LeaderLineStyle` (System.Int16): Leaderline type as defined in swLeaderStyle_e
- `LeaderBent` (System.Boolean): True if you want a bent leader line, false otherwise
- `ShowArea` (System.Boolean): True if you want to show the target area, false otherwise
- `ShowSymbol` (System.Boolean): True if you want to display the target symbol, false otherwise

## Return Value

True if datum target symbol is modified, false if not

## See Also

- `IDatumTargetSym`
- `IModelDocExtension.InsertDatumTargetSymbol2`
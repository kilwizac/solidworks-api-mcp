---
type: method
interface: IDrawingDoc
member: InsertMultiJogLeader3
returns: System.Object
parameters:
  -
    name: Points
    type: System.Object
    description: Array of points of size PointsCount
  -
    name: StartPointArrowStyle
    type: System.Int32
    description: Starting point's arrowhead style as defined in swArrowStyle_e
  -
    name: EndPointArrowStyle
    type: System.Int32
    description: Ending point's arrowhead style as defined in swArrowStyle_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.IInsertMultiJogLeader3
keywords:
  - multi
  - jog
  - leaders
  - see
  - also
  - imultijogleader
  - insert
  - drawings
  - idrawingdoc
  - insertmultijogleader3
  - drawing
  - doc
  - leader3
  - points
  - object
  - start
  - point
  - arrow
  - style
  - int32
  - end
---

# IDrawingDoc.InsertMultiJogLeader3

Inserts a multi-jog leader.

## Signature

```csharp
System.Object InsertMultiJogLeader3( 
   System.Object
Points
,
   System.Int32
StartPointArrowStyle
,
   System.Int32
EndPointArrowStyle
)
```
## Parameters

- `Points` (System.Object): Array of points of size PointsCount
- `StartPointArrowStyle` (System.Int32): Starting point's arrowhead style as defined in swArrowStyle_e
- `EndPointArrowStyle` (System.Int32): Ending point's arrowhead style as defined in swArrowStyle_e

## Return Value

Newly created multi-jog leader

## See Also

- `IDrawingDoc.IInsertMultiJogLeader3`
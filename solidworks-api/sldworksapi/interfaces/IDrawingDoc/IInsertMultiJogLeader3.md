---
type: method
interface: IDrawingDoc
member: IInsertMultiJogLeader3
returns: MultiJogLeader
parameters:
  -
    name: PointsCount
    type: System.Int32
    description: Number of points
  -
    name: Points
    type: MathPoint
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
  - IDrawingDoc.InsertMultiJogLeader3
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
  - iinsertmultijogleader3
  - drawing
  - doc
  - leader3
  - points
  - count
  - int32
  - math
  - point
  - start
  - arrow
  - style
  - end
  - leader
---

# IDrawingDoc.IInsertMultiJogLeader3

Inserts a multi-jog leader.

## Signature

```csharp
MultiJogLeader IInsertMultiJogLeader3( 
   System.Int32
PointsCount
,
   ref MathPoint
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

- `PointsCount` (System.Int32): Number of points
- `Points` (MathPoint): Array of points of size PointsCount
- `StartPointArrowStyle` (System.Int32): Starting point's arrowhead style as defined in swArrowStyle_e
- `EndPointArrowStyle` (System.Int32): Ending point's arrowhead style as defined in swArrowStyle_e

## Return Value

Pointer to the newly created multi-jog leader

## See Also

- `IDrawingDoc.InsertMultiJogLeader3`
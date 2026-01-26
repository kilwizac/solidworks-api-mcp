---
type: method
interface: IModelDoc2
member: InsertNewNote3
returns: void
parameters:
  -
    name: UpperText
    type: System.String
    description: Upper-text string to be put in the note
  -
    name: NoLeader
    type: System.Boolean
    description: True for no leaderline, false if not
  -
    name: BentLeader
    type: System.Boolean
    description: True for a bent leaderline, false if not
  -
    name: ArrowStyle
    type: System.Int16
    description: Arrowhead type as defined in swArrowStyle_e
  -
    name: LeaderSide
    type: System.Int16
    description: Leaderline side as defined in swLeaderSide_e
  -
    name: Angle
    type: System.Double
    description: Text angle
  -
    name: BalloonStyle
    type: System.Int16
    description: Balloon style type as defined in swBalloonStyle_e
  -
    name: BalloonFit
    type: System.Int16
    description: Balloon fit type as defined in swBalloonFit_e
  -
    name: SmartArrow
    type: System.Boolean
    description: If true then the arrow style specified in Options > Detailing is used for the arrows, if false then the ArrowStyle argument is used
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IDrawingDoc.InsertNewNote2
  - IModelDoc2.IInsertNote
  - IModelDoc2.InsertNote
  - INote
keywords:
  - note
  - see
  - also
  - inote
  - insert
  - insertnewnote3
  - imodeldoc2
  - model
  - doc2
  - new
  - note3
  - upper
  - text
  - string
  - no
  - leader
  - boolean
  - bent
  - arrow
  - style
  - int16
  - side
  - angle
  - double
  - balloon
  - fit
  - smart
  - void
---

# IModelDoc2.InsertNewNote3

Creates a new note.

## Signature

```csharp
void InsertNewNote3( 
   System.String
UpperText
,
   System.Boolean
NoLeader
,
   System.Boolean
BentLeader
,
   System.Int16
ArrowStyle
,
   System.Int16
LeaderSide
,
   System.Double
Angle
,
   System.Int16
BalloonStyle
,
   System.Int16
BalloonFit
,
   System.Boolean
SmartArrow
)
```
## Parameters

- `UpperText` (System.String): Upper-text string to be put in the note
- `NoLeader` (System.Boolean): True for no leaderline, false if not
- `BentLeader` (System.Boolean): True for a bent leaderline, false if not
- `ArrowStyle` (System.Int16): Arrowhead type as defined in swArrowStyle_e
- `LeaderSide` (System.Int16): Leaderline side as defined in swLeaderSide_e
- `Angle` (System.Double): Text angle
- `BalloonStyle` (System.Int16): Balloon style type as defined in swBalloonStyle_e
- `BalloonFit` (System.Int16): Balloon fit type as defined in swBalloonFit_e
- `SmartArrow` (System.Boolean): If true then the arrow style specified in Options > Detailing is used for the arrows, if false then the ArrowStyle argument is used

## Return Value

Unknown.

## See Also

- `IDrawingDoc.InsertNewNote2`
- `IModelDoc2.IInsertNote`
- `IModelDoc2.InsertNote`
- `INote`
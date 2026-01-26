---
type: method
interface: IDrawingDoc
member: InsertNewNote2
returns: void
parameters:
  -
    name: UpperText
    type: System.String
    description: Upper text string to be put in the note
  -
    name: LowerText
    type: System.String
    description: Unused; pass an empty string
  -
    name: NoLeader
    type: System.Boolean
    description: True does not add a leader line, false does
  -
    name: BentLeader
    type: System.Boolean
    description: True adds a bent leader line, false does not
  -
    name: ArrowStyle
    type: System.Int16
    description: Arrowhead type as defined in swArrowStyle_e
  -
    name: LeaderSide
    type: System.Int16
    description: Leader line side as defined in swLeaderSide_e
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
    name: UpperNoteContent
    type: System.Int16
    description: Unused; set to 0
  -
    name: LowerNoteContent
    type: System.Int16
    description: Unused; set to 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.CreateCompoundNote
  - IDrawingDoc.CreateText2
  - IDrawingDoc.ICreateCompoundNote
  - IDrawingDoc.ICreateText2
  - IDrawingDoc.InsertCircularNotePattern
  - IDrawingDoc.InsertLinearNotePattern
  - IDrawingDoc.InsertRevisionSymbol
  - IDrawingDoc.NewNote
keywords:
  - note
  - see
  - also
  - inote
  - new
  - drawings
  - idrawingdoc
  - notes
  - insertnewnote2
  - drawing
  - doc
  - insert
  - note2
  - upper
  - text
  - string
  - lower
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
  - content
  - void
---

# IDrawingDoc.InsertNewNote2

Creates a new note in this drawing.

## Signature

```csharp
void InsertNewNote2( 
   System.String
UpperText
,
   System.String
LowerText
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
   System.Int16
UpperNoteContent
,
   System.Int16
LowerNoteContent
)
```
## Parameters

- `UpperText` (System.String): Upper text string to be put in the note
- `LowerText` (System.String): Unused; pass an empty string
- `NoLeader` (System.Boolean): True does not add a leader line, false does
- `BentLeader` (System.Boolean): True adds a bent leader line, false does not
- `ArrowStyle` (System.Int16): Arrowhead type as defined in swArrowStyle_e
- `LeaderSide` (System.Int16): Leader line side as defined in swLeaderSide_e
- `Angle` (System.Double): Text angle
- `BalloonStyle` (System.Int16): Balloon style type as defined in swBalloonStyle_e
- `BalloonFit` (System.Int16): Balloon fit type as defined in swBalloonFit_e
- `UpperNoteContent` (System.Int16): Unused; set to 0
- `LowerNoteContent` (System.Int16): Unused; set to 0

## Return Value

Unknown.

## See Also

- `IDrawingDoc.CreateCompoundNote`
- `IDrawingDoc.CreateText2`
- `IDrawingDoc.ICreateCompoundNote`
- `IDrawingDoc.ICreateText2`
- `IDrawingDoc.InsertCircularNotePattern`
- `IDrawingDoc.InsertLinearNotePattern`
- `IDrawingDoc.InsertRevisionSymbol`
- `IDrawingDoc.NewNote`
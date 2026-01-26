---
type: method
interface: IModelDoc2
member: InsertStackedBalloon
returns: Note
parameters:
  -
    name: Style
    type: System.Int32
    description: Balloon style as defined in swBalloonStyle_e
  -
    name: Size
    type: System.Int32
    description: Balloon size as defined in swBalloonFit_e
  -
    name: UpperTextStyle
    type: System.Int32
    description: Text style for the upper text of the balloon as defined in swBalloonTextContent_e
  -
    name: UpperText
    type: System.String
    description: Text in the balloon
  -
    name: LowerTextStyle
    type: System.Int32
    description: Text style for the lower text of the balloon as defined in swBalloonTextContent_e
  -
    name: LowerText
    type: System.String
    description: Text in the lower part of the balloon when Style = swBS_SplitCirc
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - INote.IsStackedBalloon
  - INote.IsStackedBalloonMaster
keywords:
  - insertstackedballoon
  - imodeldoc2
  - model
  - doc2
  - insert
  - stacked
  - balloon
  - style
  - int32
  - size
  - upper
  - text
  - string
  - lower
  - note
---

# IModelDoc2.InsertStackedBalloon

Obsolete. Superseded by IModelDocExtension::InsertStackedBalloon.

## Signature

```csharp
Note InsertStackedBalloon( 
   System.Int32
Style
,
   System.Int32
Size
,
   System.Int32
UpperTextStyle
,
   System.String
UpperText
,
   System.Int32
LowerTextStyle
,
   System.String
LowerText
)
```
## Parameters

- `Style` (System.Int32): Balloon style as defined in swBalloonStyle_e
- `Size` (System.Int32): Balloon size as defined in swBalloonFit_e
- `UpperTextStyle` (System.Int32): Text style for the upper text of the balloon as defined in swBalloonTextContent_e
- `UpperText` (System.String): Text in the balloon
- `LowerTextStyle` (System.Int32): Text style for the lower text of the balloon as defined in swBalloonTextContent_e
- `LowerText` (System.String): Text in the lower part of the balloon when Style = swBS_SplitCirc

## Return Value

Newly created note

## Remarks

This method adds a single balloon note attached to the pre-selected entity. The note is located near the pre-selection.
This method returns a Note object, which you can then use to access the note; for example, setting the font of the note text or setting the position of the Note. You can stack notes on the Note object returned by this method.
Use
INote::GetBalloonStack
with this note to get the
IBalloonStack
object. You can control various properties of the stack, such as the direction and size. You can also use the BalloonStack to stack more balloons on this first balloon.
If the balloon style is split circle, both the lower- and upper-text arguments are used. If the balloon style is anything other than split circle, the upper-text arguments are used and the lower-text arguments are ignored.
If the text style is item number or quantity, the note text is determined through the pres-selected entity to which this note is attached and the corresponding text argument is ignored. If the pre-selection is just a location on the drawing, not an entity, then the text style should be custom and you must specify the text to use.

## See Also

- `INote.IsStackedBalloon`
- `INote.IsStackedBalloonMaster`
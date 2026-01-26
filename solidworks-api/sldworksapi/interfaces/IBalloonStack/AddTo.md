---
type: method
interface: IBalloonStack
member: AddTo
returns: Note
parameters:
  -
    name: UpperTextStyle
    type: System.Int32
    description: Text style for the text of the balloon as defined in swBalloonTextContent_e
  -
    name: UpperText
    type: System.String
    description: Text in the balloon
  -
    name: LowerTextStyle
    type: System.Int32
    description: Text style for the text of the balloon as defined in swBalloonTextContent_e
  -
    name: LowerText
    type: System.String
    description: Text in the lower part of the balloon (when Style = swBS_SplitCirc)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.MakeStackedBalloon
keywords:
  - addto
  - iballoonstack
  - balloon
  - stack
  - add
  - upper
  - text
  - style
  - int32
  - string
  - lower
  - note
  - stacked
  - vb
  - net
  - vba
---

# IBalloonStack.AddTo

Adds a balloon note to this balloon stack.

## Signature

```csharp
Note AddTo( 
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

- `UpperTextStyle` (System.Int32): Text style for the text of the balloon as defined in swBalloonTextContent_e
- `UpperText` (System.String): Text in the balloon
- `LowerTextStyle` (System.Int32): Text style for the text of the balloon as defined in swBalloonTextContent_e
- `LowerText` (System.String): Text in the lower part of the balloon (when Style = swBS_SplitCirc)

## Return Value

INote

## Remarks

This method adds a balloon note that is attached to the preselected entity to this stack. It returns an INote object, which you can then use to access the note (for example, to set the font of the note text). The balloon style and size are the same as the initial balloon in this stack.
If the balloon style is split circle, this method uses both the lower and upper text arguments. If the balloon style is anything other than split circle, this method uses the upper text arguments and ignores the lower text arguments.
If the text style is item number or quantity, SOLIDWORKS uses the note text to determine the preselected entity that this note is attached to, and ignores the corresponding text argument. If the preselection is a location on the drawing instead of an entity, you must specify the text style and text.
Use
INote::GetBalloonStack
to get a balloon stack interface from an existing note.

## Examples

- Add Balloon to Stacked Balloon (C#) (Add_Balloon_to_Stacked_Balloon_Example_CSharp.htm)
- Add Balloon to Stacked Balloon (VB.NET) (Add_Balloon_to_Stacked_Balloon_Example_VBNET.htm)
- Add Balloon to Stacked Balloon (VBA) (Add_Balloon_to_Stacked_Balloon_Example_VB.htm)

## See Also

- `INote.MakeStackedBalloon`
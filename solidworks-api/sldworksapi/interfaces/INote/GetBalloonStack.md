---
type: method
interface: INote
member: GetBalloonStack
returns: BalloonStack
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetBalloonInfo
  - INote.GetBalloonOptions
  - INote.GetBalloonSize
  - INote.GetBalloonStyle
  - INote.GetBomBalloonText
  - INote.GetBomBalloonTextStyle
  - INote.HasBalloon
  - INote.IGetBalloonInfo
  - INote.IsBomBalloon
  - INote.IsStackedBalloon
  - INote.MakeStackedBalloon
  - INote.SetBalloon
  - INote.SetBomBalloonText
keywords:
  - balloons
  - see
  - also
  - iballoonstack
  - notes
  - note
  - inote
  - getballoonstack
  - balloon
  - stack
  - add
  - stacked
  - vb
  - net
  - vba
---

# INote.GetBalloonStack

Gets the balloon stack for this balloon note.

## Signature

```csharp
BalloonStack GetBalloonStack()
```
## Parameters

None.

## Return Value

Balloon stack for this balloon note

## Remarks

If this note is not part of a balloon stack, then this method returns null or nothing. To determine if a note is part of a balloon stack, use
INote::IsStackedBalloon
.

## Examples

- Add Balloon to Stacked Balloon (C#) (Add_Balloon_to_Stacked_Balloon_Example_CSharp.htm)
- Add Balloon to Stacked Balloon (VB.NET) (Add_Balloon_to_Stacked_Balloon_Example_VBNET.htm)
- Add Balloon to Stacked Balloon (VBA) (Add_Balloon_to_Stacked_Balloon_Example_VB.htm)

## See Also

- `INote.GetBalloonInfo`
- `INote.GetBalloonOptions`
- `INote.GetBalloonSize`
- `INote.GetBalloonStyle`
- `INote.GetBomBalloonText`
- `INote.GetBomBalloonTextStyle`
- `INote.HasBalloon`
- `INote.IGetBalloonInfo`
- `INote.IsBomBalloon`
- `INote.IsStackedBalloon`
- `INote.MakeStackedBalloon`
- `INote.SetBalloon`
- `INote.SetBomBalloonText`
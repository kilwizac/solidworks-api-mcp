---
type: method
interface: INote
member: GetBalloonInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetBalloonOptions
  - INote.GetBalloonSize
  - INote.GetBalloonStack
  - INote.GetBalloonStyle
  - INote.GetBomBalloonText
  - INote.GetBomBalloonTextStyle
  - INote.HasBalloon
  - INote.IGetBalloonInfo
  - INote.IsBomBalloon
  - INote.IsStackedBalloon
  - INote.IsStackedBalloonMaster
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
  - getballooninfo
  - balloon
  - info
  - object
---

# INote.GetBalloonInfo

Gets information describing the geometry of the balloon, if any, that encloses the note text.

## Signature

```csharp
System.Object GetBalloonInfo()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

This consists of two points: center point and a point on the balloon circle.
Format of return information is the following array of doubles:
return value
[0] = x coordinate of balloon center point
return value
[1] = y coordinate of balloon center point
return value
[2] = z coordinate of balloon center point
return value
[3] = x coordinate of balloon arc point
return value
[4] = y coordinate of balloon arc point
return value
[5] = z coordinate of balloon arc point
return value
[6] = radius

## See Also

- `INote.GetBalloonOptions`
- `INote.GetBalloonSize`
- `INote.GetBalloonStack`
- `INote.GetBalloonStyle`
- `INote.GetBomBalloonText`
- `INote.GetBomBalloonTextStyle`
- `INote.HasBalloon`
- `INote.IGetBalloonInfo`
- `INote.IsBomBalloon`
- `INote.IsStackedBalloon`
- `INote.IsStackedBalloonMaster`
- `INote.SetBalloon`
- `INote.SetBomBalloonText`
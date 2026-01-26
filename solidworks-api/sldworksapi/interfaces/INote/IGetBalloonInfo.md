---
type: method
interface: INote
member: IGetBalloonInfo
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetBalloonInfo
  - INote.GetBalloonSize
  - INote.GetBalloonStack
  - INote.GetBalloonStyle
  - INote.GetBomBalloonText
  - INote.GetBomBalloonTextStyle
  - INote.HasBalloon
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
  - igetballooninfo
  - balloon
  - info
  - double
---

# INote.IGetBalloonInfo

Gets information describing the geometry of the balloon, if any, that encloses the note text.

## Signature

```csharp
System.Double IGetBalloonInfo()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- `INote.GetBalloonInfo`
- `INote.GetBalloonSize`
- `INote.GetBalloonStack`
- `INote.GetBalloonStyle`
- `INote.GetBomBalloonText`
- `INote.GetBomBalloonTextStyle`
- `INote.HasBalloon`
- `INote.IsBomBalloon`
- `INote.IsStackedBalloon`
- `INote.IsStackedBalloonMaster`
- `INote.SetBalloon`
- `INote.SetBomBalloonText`
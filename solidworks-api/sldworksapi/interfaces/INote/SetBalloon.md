---
type: method
interface: INote
member: SetBalloon
returns: System.Boolean
parameters:
  -
    name: Style
    type: System.Int32
    description: Balloon style as defined in swBalloonStyle_e
  -
    name: Size
    type: System.Int32
    description: Balloon size or fit as defined in swBalloonFit_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetBalloonInfo
  - INote.GetBalloonOptions
  - INote.GetBalloonSize
  - INote.GetBalloonStack
  - INote.GetBomBalloonText
  - INote.GetBomBalloonTextStyle
  - INote.HasBalloon
  - INote.IGetBalloonInfo
  - INote.IsBomBalloon
  - INote.IsStackedBalloon
  - INote.IsStackedBalloonMaster
  - INote.SetBomBalloonText
keywords:
  - balloons
  - see
  - also
  - iballoonstack
  - notes
  - note
  - inote
  - setballoon
  - balloon
  - style
  - int32
  - size
  - boolean
  - insert
  - vba
  - create
  - block
  - definition
  - instance
  - vb
  - net
---

# INote.SetBalloon

Sets the balloon style, size, and fit for this note.

## Signature

```csharp
System.Boolean SetBalloon( 
   System.Int32
Style
,
   System.Int32
Size
)
```
## Parameters

- `Style` (System.Int32): Balloon style as defined in swBalloonStyle_e
- `Size` (System.Int32): Balloon size or fit as defined in swBalloonFit_e

## Return Value

True if the style and size are successfully set, false if not

## Remarks

If the style is specified as swBS_None, the size value is ignored.
The swBS_SplitCirc style is not valid for use with this method. If it is used, then the style is set to swBS_None instead.
If an invalid style or size is specified (one that is not in the enumeration), this method returns false and no action is taken.

## Examples

- Insert Note (VBA) (Insert_a_Note_Example_VB.htm)
- Create Block Definition and Insert Block Instance (VBA) (Create_Block_Definition_and_Insert_Block_Instance_Example_VB.htm)
- Create Block Definition and Insert Block Instance (C#) (Create_Block_Definition_and_Insert_Block_Instance_Example_CSharp.htm)
- Create Block Definition and Insert Block Instance (VB.NET) (Create_Block_Definition_and_Insert_Block_Instance_Example_VBNET.htm)

## See Also

- `INote.GetBalloonInfo`
- `INote.GetBalloonOptions`
- `INote.GetBalloonSize`
- `INote.GetBalloonStack`
- `INote.GetBomBalloonText`
- `INote.GetBomBalloonTextStyle`
- `INote.HasBalloon`
- `INote.IGetBalloonInfo`
- `INote.IsBomBalloon`
- `INote.IsStackedBalloon`
- `INote.IsStackedBalloonMaster`
- `INote.SetBomBalloonText`
---
type: method
interface: IFrame
member: GetModelWindowCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.GetHWnd
  - IFrame.GetHWndx64
  - IFrame.ModelWindows
  - IFrame.RemoveMenu
  - IFrame.RenameMenu
  - IFrame.ShowModelWindow
keywords:
  - getmodelwindowcount
  - iframe
  - frame
  - model
  - window
  - count
  - int32
---

# IFrame.GetModelWindowCount

Gets the number of child model windows for this frame.

## Signature

```csharp
System.Int32 GetModelWindowCount()
```
## Parameters

None.

## Return Value

Number of child model windows for this frame

## Remarks

Call this method before calling
IFrame::IGetModelWindows
to get the size of the array.

## See Also

- `IFrame.GetHWnd`
- `IFrame.GetHWndx64`
- `IFrame.ModelWindows`
- `IFrame.RemoveMenu`
- `IFrame.RenameMenu`
- `IFrame.ShowModelWindow`
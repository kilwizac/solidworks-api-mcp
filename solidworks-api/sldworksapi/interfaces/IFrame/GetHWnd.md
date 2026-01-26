---
type: method
interface: IFrame
member: GetHWnd
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.GetModelWindowCount
  - IFrame.IGetModelWindows
  - IFrame.ModelWindows
  - IFrame.ShowModelWindow
keywords:
  - gethwnd
  - iframe
  - frame
  - wnd
  - int32
---

# IFrame.GetHWnd

Gets the window handle for the main frame.

## Signature

```csharp
System.Int32 GetHWnd()
```
## Parameters

None.

## Return Value

Window handle

## Remarks

If your application must be x64 compatible, then
use IFrame::GetHWndx64
.

## See Also

- `IFrame.GetModelWindowCount`
- `IFrame.IGetModelWindows`
- `IFrame.ModelWindows`
- `IFrame.ShowModelWindow`
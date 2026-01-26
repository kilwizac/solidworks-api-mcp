---
type: method
interface: IFrame
member: GetMenu
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.GetHWnd
keywords:
  - getmenu
  - iframe
  - frame
  - menu
  - int32
---

# IFrame.GetMenu

Gets the menu handle for the main frame.

## Signature

```csharp
System.Int32 GetMenu()
```
## Parameters

None.

## Return Value

Menu handle for the main frame

## Remarks

If your application must be x64 compatible, then use
IFrame::GetMenux64
.

## See Also

- `IFrame.GetHWnd`
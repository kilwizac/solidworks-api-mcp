---
type: method
interface: IFrame
member: IGetModelWindows
returns: ModelWindow
parameters:
  -
    name: ModelWindowCount
    type: System.Int32
    description: Number of child windows for this frame
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.GetHWnd
  - IFrame.GetHWndx64
  - IFrame.ModelWindows
  - IFrame.ShowModelWindow
keywords:
  - igetmodelwindows
  - iframe
  - frame
  - model
  - windows
  - window
  - count
  - int32
---

# IFrame.IGetModelWindows

Gets the child model windows for this frame.

## Signature

```csharp
ModelWindow IGetModelWindows( 
   System.Int32
ModelWindowCount
)
```
## Parameters

- `ModelWindowCount` (System.Int32): Number of child windows for this frame

## Return Value

in-process, unmanaged C++: Pointer to an array of model windows VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IFrame::GetModelWindowCount
before calling this method to get the size of the array.

## See Also

- `IFrame.GetHWnd`
- `IFrame.GetHWndx64`
- `IFrame.ModelWindows`
- `IFrame.ShowModelWindow`
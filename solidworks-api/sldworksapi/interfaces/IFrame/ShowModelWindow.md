---
type: method
interface: IFrame
member: ShowModelWindow
returns: void
parameters:
  -
    name: LpModelWindow
    type: ModelWindow
    description: Model window
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFrame.GetHWnd
  - IFrame.GetHWndx64
  - IFrame.GetModelWindowCount
  - IFrame.IGetModelWindows
  - IFrame.ModelWindows
keywords:
  - showmodelwindow
  - iframe
  - frame
  - show
  - model
  - window
  - lp
  - void
  - switch
  - documents
  - vb
  - net
  - vba
---

# IFrame.ShowModelWindow

Shows a client model window.

## Signature

```csharp
void ShowModelWindow( 
   ModelWindow
LpModelWindow
)
```
## Parameters

- `LpModelWindow` (ModelWindow): Model window

## Return Value

Unknown.

## Examples

- Switch Documents (C#) (Switch_Documents_Example_CSharp.htm)
- Switch Documents (VB.NET) (Switch_Documents_Example_VBNET.htm)
- Switch Documents (VBA) (Switch_Documents_Example_VB.htm)

## See Also

- `IFrame.GetHWnd`
- `IFrame.GetHWndx64`
- `IFrame.GetModelWindowCount`
- `IFrame.IGetModelWindows`
- `IFrame.ModelWindows`
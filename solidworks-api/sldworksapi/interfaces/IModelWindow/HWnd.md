---
type: property
interface: IModelWindow
member: HWnd
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - hwnd
  - imodelwindow
  - model
  - window
  - wnd
  - int32
  - switch
  - documents
  - vb
  - net
  - vba
readonly: true
---

# IModelWindow.HWnd

Gets the handle to this model window.

## Signature

```csharp
System.Int32 HWnd {get;}
```
## Parameters

None.

## Return Value

Handle for this model window

## Remarks

If your application must be x64 compatible, then use
IModelWindow::HWndx64
.

## Examples

- Switch Documents (C#) (Switch_Documents_Example_CSharp.htm)
- Switch Documents (VB.NET) (Switch_Documents_Example_VBNET.htm)
- Switch Documents (VBA) (Switch_Documents_Example_VB.htm)
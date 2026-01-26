---
type: method
interface: IModelView
member: GetViewHWndx64
returns: System.Int64
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelWindow.HWnd
keywords:
  - microsoft
  - window
  - handle
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - getviewhwndx64
  - view
  - wndx64
  - int64
  - names
  - components
  - handles
  - dibsections
  - vb
  - net
  - vba
---

# IModelView.GetViewHWndx64

Gets the Microsoft window handle for this model view in 64-bit applications.

## Signature

```csharp
System.Int64 GetViewHWndx64()
```
## Parameters

None.

## Return Value

Microsoft window handle

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.
Window handles are not unique across computers.

## Examples

- Get Names of Components, Window Handles, and DIBSECTIONs (C#) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_CSharp.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VB.NET) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VBNET.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VBA) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VB.htm)

## See Also

- `IModelWindow.HWnd`
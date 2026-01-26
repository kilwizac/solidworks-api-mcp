---
type: method
interface: IModelDocExtension
member: Capture3DView
returns: View3D
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.Get3DView
  - IModelDocExtension.Get3DViewCount
  - IModelDocExtension.Get3DViewNames
  - IModelDocExtension.Get3DViews
  - IModelDocExtension.Refresh3DViews
keywords:
  - capture3dview
  - imodeldocextension
  - model
  - doc
  - extension
  - capture3
  - view
  - view3
  - capture
  - 3d
  - vba
  - vb
  - net
---

# IModelDocExtension.Capture3DView

Captures the 3D View of this part or assembly.

## Signature

```csharp
View3D Capture3DView()
```
## Parameters

None.

## Return Value

IView3D

## Remarks

This method requires that the SOLDWORKS MBD add-in be loaded. (
ISldWorks::LoadAddIn
)

## Examples

- Capture 3D View (VBA) (Capture_3DView_Example_VB.htm)
- Capture 3D View (VB.NET) (Capture_3DView_Example_VBNET.htm)
- Capture 3D View (C#) (Capture_3DView_Example_CSharp.htm)

## See Also

- `IModelDocExtension.Get3DView`
- `IModelDocExtension.Get3DViewCount`
- `IModelDocExtension.Get3DViewNames`
- `IModelDocExtension.Get3DViews`
- `IModelDocExtension.Refresh3DViews`
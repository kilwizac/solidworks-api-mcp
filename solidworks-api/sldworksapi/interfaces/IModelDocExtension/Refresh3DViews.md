---
type: method
interface: IModelDocExtension
member: Refresh3DViews
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.Capture3DView
  - IModelDocExtension.Get3DView
  - IModelDocExtension.Get3DViewCount
  - IModelDocExtension.Get3DViewNames
  - IModelDocExtension.Get3DViews
  - IView3D
keywords:
  - 3d
  - views
  - refresh3dviews
  - imodeldocextension
  - model
  - doc
  - extension
  - refresh3
  - void
  - capture
  - view
  - vba
  - vb
  - net
---

# IModelDocExtension.Refresh3DViews

Updates the 3D Views of this part or assembly.

## Signature

```csharp
void Refresh3DViews()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

This method requires that the SOLDWORKS MBD add-in be loaded. (
ISldWorks::LoadAddIn
)

## Examples

- Capture 3D View (VBA) (Capture_3DView_Example_VB.htm)
- Capture 3D View (VB.NET) (Capture_3DView_Example_VBNET.htm)
- Capture 3D View (C#) (Capture_3DView_Example_CSharp.htm)

## See Also

- `IModelDocExtension.Capture3DView`
- `IModelDocExtension.Get3DView`
- `IModelDocExtension.Get3DViewCount`
- `IModelDocExtension.Get3DViewNames`
- `IModelDocExtension.Get3DViews`
- `IView3D`
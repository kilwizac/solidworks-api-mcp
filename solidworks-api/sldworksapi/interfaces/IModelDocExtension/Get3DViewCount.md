---
type: method
interface: IModelDocExtension
member: Get3DViewCount
returns: System.Int32
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
  - IModelDocExtension.Get3DViewNames
  - IModelDocExtension.Get3DViews
  - IModelDocExtension.Refresh3DViews
keywords:
  - 3d
  - views
  - get3dviewcount
  - imodeldocextension
  - model
  - doc
  - extension
  - get3
  - view
  - count
  - int32
  - capture
  - vba
  - vb
  - net
---

# IModelDocExtension.Get3DViewCount

Gets the number of 3D Views in this part or assembly.

## Signature

```csharp
System.Int32 Get3DViewCount()
```
## Parameters

None.

## Return Value

Number of 3D Views

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
- `IModelDocExtension.Get3DViewNames`
- `IModelDocExtension.Get3DViews`
- `IModelDocExtension.Refresh3DViews`
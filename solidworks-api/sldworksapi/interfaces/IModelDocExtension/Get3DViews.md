---
type: method
interface: IModelDocExtension
member: Get3DViews
returns: System.Object
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
  - IModelDocExtension.Refresh3DViews
keywords:
  - 3d
  - views
  - get3dviews
  - imodeldocextension
  - model
  - doc
  - extension
  - get3
  - object
---

# IModelDocExtension.Get3DViews

Gets the 3D Views for this part or assembly.

## Signature

```csharp
System.Object Get3DViews()
```
## Parameters

None.

## Return Value

Array of IView3D s

## Remarks

This method requires that the SOLDWORKS MBD add-in be loaded. (
ISldWorks::LoadAddIn
)

## See Also

- `IModelDocExtension.Capture3DView`
- `IModelDocExtension.Get3DView`
- `IModelDocExtension.Get3DViewCount`
- `IModelDocExtension.Get3DViewNames`
- `IModelDocExtension.Refresh3DViews`
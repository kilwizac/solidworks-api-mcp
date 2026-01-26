---
type: method
interface: IModelDocExtension
member: Get3DView
returns: View3D
parameters:
  -
    name: Name
    type: System.String
    description: Name of 3D View to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.Capture3DView
  - IModelDocExtension.Get3DViewCount
  - IModelDocExtension.Get3DViewNames
  - IModelDocExtension.Get3DViews
  - IModelDocExtension.Refresh3DViews
keywords:
  - 3d
  - views
  - get3dview
  - imodeldocextension
  - model
  - doc
  - extension
  - get3
  - view
  - name
  - string
  - view3
---

# IModelDocExtension.Get3DView

Gets the 3D View with the specified name for this part or assembly.

## Signature

```csharp
View3D Get3DView( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of 3D View to get

## Return Value

IView3D

## Remarks

This method requires that the SOLDWORKS MBD add-in be loaded. (
ISldWorks::LoadAddIn
)

## See Also

- `IModelDocExtension.Capture3DView`
- `IModelDocExtension.Get3DViewCount`
- `IModelDocExtension.Get3DViewNames`
- `IModelDocExtension.Get3DViews`
- `IModelDocExtension.Refresh3DViews`
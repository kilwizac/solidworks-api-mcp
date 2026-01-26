---
type: method
interface: IModelDocExtension
member: InsertScene
returns: System.Boolean
parameters:
  -
    name: SceneDefinitionFile
    type: System.String
    description: Fully qualified path and filename for the scene
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IConfiguration.GetScene
  - IModelDocExtension.DeleteScene
  - IModelDocExtension.GetRenderCustomReferences
  - IModelDocExtension.GetRenderStockReferences
keywords:
  - realview
  - graphics
  - scenes
  - scene
  - insertscene
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - definition
  - file
  - string
  - boolean
  - render
  - references
  - vb
  - net
  - vba
---

# IModelDocExtension.InsertScene

Applies the specified scene to the model.

## Signature

```csharp
System.Boolean InsertScene( 
   System.String
SceneDefinitionFile
)
```
## Parameters

- `SceneDefinitionFile` (System.String): Fully qualified path and filename for the scene

## Return Value

True if the specified scene is displayed, false if not

## Remarks

RealView graphics must be enabled
to apply and view scenes.
Call
IModelView::GraphicsRedraw
or
IModelView::IGraphicsRedraw
to repaint the graphics area.

## Examples

- Get Render References (C#) (Get_Render_References_Example_CSharp.htm)
- Get Render References (VB.NET) (Get_Render_References_Example_VBNET.htm)
- Get Render References (VBA) (Get_Render_References_Example_VB.htm)

## See Also

- `IConfiguration.GetScene`
- `IModelDocExtension.DeleteScene`
- `IModelDocExtension.GetRenderCustomReferences`
- `IModelDocExtension.GetRenderStockReferences`
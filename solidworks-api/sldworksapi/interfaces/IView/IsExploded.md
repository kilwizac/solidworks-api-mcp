---
type: method
interface: IView
member: IsExploded
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IAssemblyDoc.AutoExplode
  - IAssemblyDoc.CreateExplodedView
  - IAssemblyDoc.GetExplodedViewConfigurationName
  - IAssemblyDoc.GetExplodedViewCount2
  - IAssemblyDoc.GetExplodedViewNames2
  - IAssemblyDoc.ShowExploded2
  - IAssemblyDoc.ViewCollapseAssembly
  - IAssemblyDoc.ViewExplodeAssembly
  - IModelDocExtension.IsExploded
  - IView.ShowExploded
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - exploded
  - view
  - isexploded
  - boolean
---

# IView.IsExploded

Gets whether the drawing view is currently showing the assembly as exploded or collasped.

## Signature

```csharp
System.Boolean IsExploded()
```
## Parameters

None.

## Return Value

True if this drawing view is showing an exploded assembly view, false if collapsed

## See Also

- `IAssemblyDoc.AutoExplode`
- `IAssemblyDoc.CreateExplodedView`
- `IAssemblyDoc.GetExplodedViewConfigurationName`
- `IAssemblyDoc.GetExplodedViewCount2`
- `IAssemblyDoc.GetExplodedViewNames2`
- `IAssemblyDoc.ShowExploded2`
- `IAssemblyDoc.ViewCollapseAssembly`
- `IAssemblyDoc.ViewExplodeAssembly`
- `IModelDocExtension.IsExploded`
- `IView.ShowExploded`
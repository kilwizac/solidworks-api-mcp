---
type: method
interface: IView
member: ShowExploded
returns: System.Boolean
parameters:
  -
    name: ShowIt
    type: System.Boolean
    description: True if you want this drawing view to display the exploded state of the current assembly configuration, false if you want this drawing view to display the collapsed state
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
  - IView.IsExploded
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - exploded
  - view
  - showexploded
  - show
  - it
  - boolean
---

# IView.ShowExploded

Shows an exploded assembly in this drawing view.

## Signature

```csharp
System.Boolean ShowExploded( 
   System.Boolean
ShowIt
)
```
## Parameters

- `ShowIt` (System.Boolean): True if you want this drawing view to display the exploded state of the current assembly configuration, false if you want this drawing view to display the collapsed state

## Return Value

True if successful in displaying the exploded assembly state, false if not

## Remarks

The explode state that is displayed is based on the current assembly configuration used by this drawing view

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
- `IView.IsExploded`
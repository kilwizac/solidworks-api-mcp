---
type: method
interface: IAssemblyDoc
member: ShowExploded2
returns: System.Boolean
parameters:
  -
    name: ShowIt
    type: System.Boolean
    description: True if you want to show ExplodeViewName in its exploded state, false if you want to show it in its collapsed state
  -
    name: ExplodeViewName
    type: System.String
    description: Name of the exploded view to show
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AutoExplode
  - IAssemblyDoc.CreateExplodedView
  - IAssemblyDoc.GetExplodedViewConfigurationName
  - IAssemblyDoc.GetExplodedViewCount2
  - IAssemblyDoc.GetExplodedViewNames2
  - IAssemblyDoc.ViewCollapseAssembly
  - IAssemblyDoc.ViewExplodeAssembly
  - IModelDocExtension.IsExploded
  - IView.IsExploded
  - IView.ShowExploded
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - exploded
  - views
  - showexploded2
  - assembly
  - doc
  - show
  - exploded2
  - it
  - boolean
  - explode
  - view
  - name
  - string
  - create
  - vba
  - vb
  - net
---

# IAssemblyDoc.ShowExploded2

Displays the specified exploded view for the current assembly configuration.

## Signature

```csharp
System.Boolean ShowExploded2( 
   System.Boolean
ShowIt
,
   System.String
ExplodeViewName
)
```
## Parameters

- `ShowIt` (System.Boolean): True if you want to show ExplodeViewName in its exploded state, false if you want to show it in its collapsed state
- `ExplodeViewName` (System.String): Name of the exploded view to show

## Return Value

True if the exploded view displays, false if not

## Examples

- Create Exploded Views of an Assembly (VBA) (Create_Exploded_Views_Example_VB.htm)
- Create Exploded Views of an Assembly (VB.NET) (Create_Exploded_Views_Example_VBNET.htm)
- Create Exploded Views of an Assembly (C#) (Create_Exploded_Views_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.AutoExplode`
- `IAssemblyDoc.CreateExplodedView`
- `IAssemblyDoc.GetExplodedViewConfigurationName`
- `IAssemblyDoc.GetExplodedViewCount2`
- `IAssemblyDoc.GetExplodedViewNames2`
- `IAssemblyDoc.ViewCollapseAssembly`
- `IAssemblyDoc.ViewExplodeAssembly`
- `IModelDocExtension.IsExploded`
- `IView.IsExploded`
- `IView.ShowExploded`
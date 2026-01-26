---
type: method
interface: IAssemblyDoc
member: ViewCollapseAssembly
returns: void
parameters: []
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
  - IAssemblyDoc.ShowExploded2
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
  - collapse
  - viewcollapseassembly
  - assembly
  - doc
  - view
  - void
  - access
  - create
  - vba
  - vb
  - net
---

# IAssemblyDoc.ViewCollapseAssembly

Collapses the selected exploded view on the Configuration tab of the FeatureManager design tree.

## Signature

```csharp
void ViewCollapseAssembly()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Use this method with
IAssemblyDoc::ViewExplodeAssembly
to toggle the display of the exploded assembly view.

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Create Exploded Views of an Assembly (VBA) (Create_Exploded_Views_Example_VB.htm)
- Create Exploded Views of an Assembly (VB.NET) (Create_Exploded_Views_Example_VBNET.htm)
- Create Exploded Views of an Assembly (C#) (Create_Exploded_Views_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.AutoExplode`
- `IAssemblyDoc.CreateExplodedView`
- `IAssemblyDoc.GetExplodedViewConfigurationName`
- `IAssemblyDoc.GetExplodedViewCount2`
- `IAssemblyDoc.GetExplodedViewNames2`
- `IAssemblyDoc.ShowExploded2`
- `IModelDocExtension.IsExploded`
- `IView.IsExploded`
- `IView.ShowExploded`
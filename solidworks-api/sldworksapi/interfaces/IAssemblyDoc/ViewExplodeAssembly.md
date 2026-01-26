---
type: method
interface: IAssemblyDoc
member: ViewExplodeAssembly
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
  - explode
  - exploded
  - views
  - viewexplodeassembly
  - assembly
  - doc
  - view
  - void
  - create
  - vba
  - vb
  - net
---

# IAssemblyDoc.ViewExplodeAssembly

Explodes the selected exploded view on the Configuration tab of the FeatureManager design tree.

## Signature

```csharp
void ViewExplodeAssembly()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Use this method with
IAssemblyDoc::ViewCollapseAssembly
to toggle the display of the exploded assembly view.

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
- `IAssemblyDoc.ShowExploded2`
- `IModelDocExtension.IsExploded`
- `IView.IsExploded`
- `IView.ShowExploded`
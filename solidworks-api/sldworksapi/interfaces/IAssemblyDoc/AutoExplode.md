---
type: method
interface: IAssemblyDoc
member: AutoExplode
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetExplodedViewConfigurationName
  - IAssemblyDoc.GetExplodedViewCount2
  - IAssemblyDoc.GetExplodedViewNames2
  - IAssemblyDoc.ShowExploded2
  - IAssemblyDoc.ViewCollapseAssembly
  - IAssemblyDoc.ViewExplodeAssembly
  - IConfiguration.AddExplodeStep2
  - IConfiguration.AddRadialExplodeStep
  - IModelDocExtension.IsExploded
  - ISketchManager.InsertExplodeLineSketch
  - IView.IsExploded
  - IView.ShowExploded
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - auto
  - explode
  - views
  - autoexplode
  - assembly
  - doc
  - boolean
  - iexplodestep
---

# IAssemblyDoc.AutoExplode

Automatically generates an exploded view of the current assembly configuration.

## Signature

```csharp
System.Boolean AutoExplode()
```
## Parameters

None.

## Return Value

True if the exploded view is automatically generated, false if not

## Remarks

This method creates only one exploded view per assembly configuration. To create multiple exploded views, use
IAssemblyDoc::CreateExplodedView
.
It is difficult to get the exploded view perfect without some user interaction. However, this method makes an attempt based on the current mate conditions.

## Examples

- IExplodeStep (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IExplodeStep)

## See Also

- `IAssemblyDoc.GetExplodedViewConfigurationName`
- `IAssemblyDoc.GetExplodedViewCount2`
- `IAssemblyDoc.GetExplodedViewNames2`
- `IAssemblyDoc.ShowExploded2`
- `IAssemblyDoc.ViewCollapseAssembly`
- `IAssemblyDoc.ViewExplodeAssembly`
- `IConfiguration.AddExplodeStep2`
- `IConfiguration.AddRadialExplodeStep`
- `IModelDocExtension.IsExploded`
- `ISketchManager.InsertExplodeLineSketch`
- `IView.IsExploded`
- `IView.ShowExploded`
---
type: method
interface: IAssemblyDoc
member: GetExplodedViewConfigurationName
returns: System.String
parameters:
  -
    name: ExplodedViewName
    type: System.String
    description: Name of the exploded view
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
  - IAssemblyDoc.GetExplodedViewCount2
  - IAssemblyDoc.GetExplodedViewNames2
  - IAssemblyDoc.ShowExploded2
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
  - getexplodedviewconfigurationname
  - assembly
  - doc
  - view
  - configuration
  - name
  - string
  - vb
  - net
  - vba
---

# IAssemblyDoc.GetExplodedViewConfigurationName

Gets the name of the configuration for the specified exploded view.

## Signature

```csharp
System.String GetExplodedViewConfigurationName( 
   System.String
ExplodedViewName
)
```
## Parameters

- `ExplodedViewName` (System.String): Name of the exploded view

## Return Value

Name of the configuration for the specified exploded view

## Examples

- Get Exploded Views for Configuration (C#) (Get_Exploded_Views_for_Configuration_Example_CSharp.htm)
- Get Exploded Views for Configuration (VB.NET) (Get_Exploded_Views_for_Configuration_Example_VBNET.htm)
- Get Exploded Views for Configuration (VBA) (Get_Exploded_Views_for_Configuration_Example_VB.htm)

## See Also

- `IAssemblyDoc.AutoExplode`
- `IAssemblyDoc.CreateExplodedView`
- `IAssemblyDoc.GetExplodedViewCount2`
- `IAssemblyDoc.GetExplodedViewNames2`
- `IAssemblyDoc.ShowExploded2`
- `IAssemblyDoc.ViewCollapseAssembly`
- `IAssemblyDoc.ViewExplodeAssembly`
- `IModelDocExtension.IsExploded`
- `IView.IsExploded`
- `IView.ShowExploded`
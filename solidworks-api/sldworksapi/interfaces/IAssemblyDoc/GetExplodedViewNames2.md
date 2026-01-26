---
type: method
interface: IAssemblyDoc
member: GetExplodedViewNames2
returns: System.Object
parameters:
  -
    name: ConfigurationName
    type: System.String
    description: Name of the configuration
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
  - getexplodedviewnames2
  - assembly
  - doc
  - view
  - names2
  - configuration
  - name
  - string
  - object
  - vb
  - net
  - vba
---

# IAssemblyDoc.GetExplodedViewNames2

Gets the names of the exploded views in the specified configuration.

## Signature

```csharp
System.Object GetExplodedViewNames2( 
   System.String
ConfigurationName
)
```
## Parameters

- `ConfigurationName` (System.String): Name of the configuration

## Return Value

Array of strings of the names of the exploded views in the specified configuration

## Examples

- Get Exploded Views for Configuration (C#) (Get_Exploded_Views_for_Configuration_Example_CSharp.htm)
- Get Exploded Views for Configuration (VB.NET) (Get_Exploded_Views_for_Configuration_Example_VBNET.htm)
- Get Exploded Views for Configuration (VBA) (Get_Exploded_Views_for_Configuration_Example_VB.htm)

## See Also

- `IAssemblyDoc.AutoExplode`
- `IAssemblyDoc.CreateExplodedView`
- `IAssemblyDoc.GetExplodedViewConfigurationName`
- `IAssemblyDoc.GetExplodedViewCount2`
- `IAssemblyDoc.ShowExploded2`
- `IAssemblyDoc.ViewCollapseAssembly`
- `IAssemblyDoc.ViewExplodeAssembly`
- `IModelDocExtension.IsExploded`
- `IView.IsExploded`
- `IView.ShowExploded`
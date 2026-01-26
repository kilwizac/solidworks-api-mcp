---
type: method
interface: IAssemblyDoc
member: GetExplodedViewCount2
returns: System.Int32
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
  - getexplodedviewcount2
  - assembly
  - doc
  - view
  - count2
  - configuration
  - name
  - string
  - int32
  - vb
  - net
  - vba
---

# IAssemblyDoc.GetExplodedViewCount2

Gets the number of exploded views in the specified configuration.

## Signature

```csharp
System.Int32 GetExplodedViewCount2( 
   System.String
ConfigurationName
)
```
## Parameters

- `ConfigurationName` (System.String): Name of the configuration

## Return Value

Number of exploded views in the specified configuration

## Examples

- Get Exploded Views for Configuration (C#) (Get_Exploded_Views_for_Configuration_Example_CSharp.htm)
- Get Exploded Views for Configuration (VB.NET) (Get_Exploded_Views_for_Configuration_Example_VBNET.htm)
- Get Exploded Views for Configuration (VBA) (Get_Exploded_Views_for_Configuration_Example_VB.htm)

## See Also

- `IAssemblyDoc.AutoExplode`
- `IAssemblyDoc.CreateExplodedView`
- `IAssemblyDoc.GetExplodedViewConfigurationName`
- `IAssemblyDoc.GetExplodedViewNames2`
- `IAssemblyDoc.ShowExploded2`
- `IAssemblyDoc.ViewCollapseAssembly`
- `IAssemblyDoc.ViewExplodeAssembly`
- `IModelDocExtension.IsExploded`
- `IView.IsExploded`
- `IView.ShowExploded`
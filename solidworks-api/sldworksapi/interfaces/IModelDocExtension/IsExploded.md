---
type: method
interface: IModelDocExtension
member: IsExploded
returns: System.Boolean
parameters:
  -
    name: ViewName
    type: System.String
    description: Name of the exploded view currently shown in the model or an empty string if the model is collapsed
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
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
  - IView.IsExploded
  - IView.ShowExploded
keywords:
  - exploded
  - views
  - models
  - model
  - documents
  - see
  - also
  - imodeldoc2
  - imodeldocextension
  - interfaces
  - collapse
  - isexploded
  - doc
  - extension
  - view
  - name
  - string
  - boolean
  - configuration
  - vb
  - net
  - vba
---

# IModelDocExtension.IsExploded

Gets the name of the exploded view currently shown in the model.

## Signature

```csharp
System.Boolean IsExploded( 
   out System.String
ViewName
)
```
## Parameters

- `ViewName` (System.String): Name of the exploded view currently shown in the model or an empty string if the model is collapsed

## Return Value

True if the specified exploded view is currently shown in the model, false if the model is currently collapsed

## Examples

- Get Exploded Views for Configuration (C#) (Get_Exploded_Views_for_Configuration_Example_CSharp.htm)
- Get Exploded Views for Configuration (VB.NET) (Get_Exploded_Views_for_Configuration_Example_VBNET.htm)
- Get Exploded Views for Configuration (VBA) (Get_Exploded_Views_for_Configuration_Example_VB.htm)

## See Also

- `IAssemblyDoc.AutoExplode`
- `IAssemblyDoc.CreateExplodedView`
- `IAssemblyDoc.GetExplodedViewConfigurationName`
- `IAssemblyDoc.GetExplodedViewCount2`
- `IAssemblyDoc.GetExplodedViewNames2`
- `IAssemblyDoc.ShowExploded2`
- `IAssemblyDoc.ViewCollapseAssembly`
- `IAssemblyDoc.ViewExplodeAssembly`
- `IView.IsExploded`
- `IView.ShowExploded`
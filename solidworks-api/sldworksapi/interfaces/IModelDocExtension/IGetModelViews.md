---
type: method
interface: IModelDocExtension
member: IGetModelViews
returns: ModelView
parameters:
  -
    name: NumModelViews
    type: System.Int32
    description: Number of model views in this document
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.GetFirstModelView
  - IModelDoc2.IGetFirstModelView
  - IModelDocExtension.GetModelViews
  - IModelView.GetNext
  - IModelView.IGetNext
keywords:
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - igetmodelviews
  - imodeldocextension
  - doc
  - extension
  - num
  - int32
  - view
---

# IModelDocExtension.IGetModelViews

Gets the model views in this document.

## Signature

```csharp
ModelView IGetModelViews( 
   System.Int32
NumModelViews
)
```
## Parameters

- `NumModelViews` (System.Int32): Number of model views in this document

## Return Value

in-process, unmanaged C++: Pointer to an array of model views VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IModelDocExtension::GetModelViewCount
to get NumModelViews.

## See Also

- `IModelDoc2.GetFirstModelView`
- `IModelDoc2.IGetFirstModelView`
- `IModelDocExtension.GetModelViews`
- `IModelView.GetNext`
- `IModelView.IGetNext`
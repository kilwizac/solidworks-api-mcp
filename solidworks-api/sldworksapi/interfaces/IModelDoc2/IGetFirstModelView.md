---
type: method
interface: IModelDoc2
member: IGetFirstModelView
returns: ModelView
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.ActiveView
  - IModelDoc2.EnumModelViews
  - IModelDoc2.GetFirstModelView
  - IModelDoc2.GetModelViewCount
  - IModelDoc2.GetModelViewNames
  - IModelDoc2.IActiveView
  - IModelDoc2.IGetModelViewNames
  - IModelDoc2.ModelViewManager
  - IModelDocExtension.GetModelViewCount
  - IModelDocExtension.GetModelViews
  - IModelDocExtension.IGetModelViews
keywords:
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - first
  - igetfirstmodelview
  - imodeldoc2
  - doc2
  - view
---

# IModelDoc2.IGetFirstModelView

Gets the first view in a model document.

## Signature

```csharp
ModelView IGetFirstModelView()
```
## Parameters

None.

## Return Value

First model view in the document

## Remarks

You can traverse through the model views in a document by using this method to get the initial view and
IModelView::IGetNext
to get each of the following views. You have reached the end of the list when IModelView::GetNext returns NULL, .
See
IModelDoc2::EnumModelViews
for traversing the model views on a document.

## See Also

- `IModelDoc2.ActiveView`
- `IModelDoc2.EnumModelViews`
- `IModelDoc2.GetFirstModelView`
- `IModelDoc2.GetModelViewCount`
- `IModelDoc2.GetModelViewNames`
- `IModelDoc2.IActiveView`
- `IModelDoc2.IGetModelViewNames`
- `IModelDoc2.ModelViewManager`
- `IModelDocExtension.GetModelViewCount`
- `IModelDocExtension.GetModelViews`
- `IModelDocExtension.IGetModelViews`
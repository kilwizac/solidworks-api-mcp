---
type: method
interface: IModelView
member: IGetNext
returns: ModelView
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IEnumModelViews.Next
  - IModelDoc2.ActiveView
  - IModelDoc2.GetFirstModelView
  - IModelDoc2.IActiveView
  - IModelDoc2.IGetFirstModelView
  - IModelView.GetNext
keywords:
  - model
  - views
  - see
  - also
  - imodelview
  - imodelviewmanager
  - interfaces
  - traverse
  - igetnext
  - view
  - next
---

# IModelView.IGetNext

Gets the next model view after this model view.

## Signature

```csharp
ModelView IGetNext()
```
## Parameters

None.

## Return Value

Next model view or NULLif no more model views exist

## Remarks

You can traverse through the model views in a document by using this method to get the initial view and each of the following views. When this method returns Nothing, you have reached the end of the list.
See
IModelDoc2::EnumModelViews
for a method for traversing the model views on a document.

## See Also

- `IEnumModelViews.Next`
- `IModelDoc2.ActiveView`
- `IModelDoc2.GetFirstModelView`
- `IModelDoc2.IActiveView`
- `IModelDoc2.IGetFirstModelView`
- `IModelView.GetNext`
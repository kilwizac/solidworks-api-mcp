---
type: property
interface: IModelDoc2
member: IActiveView
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
  - IModelDoc2.IGetFirstModelView
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
  - active
  - view
  - iview
  - iactiveview
  - imodeldoc2
  - doc2
  - access
  - assembly
  - dynamic
  - rotation
readonly: true
---

# IModelDoc2.IActiveView

Gets the current active model view in read-only mode.

## Signature

```csharp
ModelView IActiveView {get;}
```
## Parameters

None.

## Return Value

Current active model view in this document

## Examples

- Access Assembly (C++) (Access_Assembly_Example_CPlusPlus_COM.htm)
- Dynamic View Rotation (C++) (Dynamic_View_Rotation_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDoc2.ActiveView`
- `IModelDoc2.EnumModelViews`
- `IModelDoc2.GetFirstModelView`
- `IModelDoc2.IGetFirstModelView`
- `IModelView.GetNext`
- `IModelView.IGetNext`
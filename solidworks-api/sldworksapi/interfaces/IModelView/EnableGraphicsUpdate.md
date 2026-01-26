---
type: property
interface: IModelView
member: EnableGraphicsUpdate
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - redraw
  - graphics
  - refresh
  - screen
  - enable
  - update
  - enablegraphicsupdate
  - imodelview
  - model
  - view
  - boolean
readonly: null
---

# IModelView.EnableGraphicsUpdate

Gets or sets whether or not to refresh the model view.

## Signature

```csharp
System.Boolean EnableGraphicsUpdate {get; set;}
```
## Parameters

None.

## Return Value

True to refresh the model view, false to not

## Remarks

This property affects whether to refresh the model view during a selection, such as
IEntity::Select4
or
IFeature::Select2
.
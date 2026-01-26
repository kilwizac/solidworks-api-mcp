---
type: method
interface: IModelDoc2
member: IsExploded
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - isexploded
  - imodeldoc2
  - model
  - doc2
  - exploded
  - boolean
---

# IModelDoc2.IsExploded

Obsolete. Superseded by IModelDocExtension::IsExploded.

## Signature

```csharp
System.Boolean IsExploded()
```
## Parameters

None.

## Return Value

True if the model is currently exploded, false if the model is collapsed

## Remarks

To take advantage of the explode mechanism, see
IAssemblyDoc::ShowExploded2
,
IAssemblyDoc::CreateExplodedView
,
IAssemblyDoc::GetExplodedViewNames
,
IAssemblyDoc::IGetExplodedViewNames
,
IAssemblyDoc::GetExplodedViewCount
,
IAssemblyDoc::AutoExplode
,
IAssemblyDoc::ViewExplodeAssembly
,
IAssemblyDoc::ViewCollapseAssembly
,
IView::ShowExploded
, and
IView::IsExploded
.
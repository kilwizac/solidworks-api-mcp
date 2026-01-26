---
type: method
interface: IAssemblyDoc
member: GetExplodedViewNames
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - getexplodedviewnames
  - iassemblydoc
  - assembly
  - doc
  - exploded
  - view
  - names
  - object
  - create
  - views
  - vba
  - vb
  - net
---

# IAssemblyDoc.GetExplodedViewNames

Obsolete. Superseded by IAssemblyDoc::GetExplodedViewNames2.

## Signature

```csharp
System.Object GetExplodedViewNames()
```
## Parameters

None.

## Return Value

Array of strings of the names of the exploded views in the active configuration

## Remarks

To take advantage of the explode mechanism, see
IAssemblyDoc::CreateExplodedView
,
IAssemblyDoc::IGetExplodedViewNames
,
IAssemblyDoc::GetExplodedViewCount
,
IAssemblyDoc::AutoExplode
,
IAssemblyDoc::ShowExploded2
,
IAssemblyDoc::ViewExplodeAssembly
,
IAssemblyDoc::ViewCollapseAssembly
,
IView::ShowExploded
,
IView::IsExploded
, and
IModelDoc2::IsExploded
.

## Examples

- Create Exploded Views of an Assembly (VBA) (Create_Exploded_Views_Example_VB.htm)
- Create Exploded Views of an Assembly (VB.NET) (Create_Exploded_Views_Example_VBNET.htm)
- Create Exploded Views of an Assembly (C#) (Create_Exploded_Views_Example_CSharp.htm)
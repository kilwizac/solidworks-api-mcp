---
type: method
interface: IAssemblyDoc
member: GetExplodedViewCount
returns: System.Int32
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
  - getexplodedviewcount
  - iassemblydoc
  - assembly
  - doc
  - exploded
  - view
  - count
  - int32
  - create
  - views
  - vba
  - vb
  - net
---

# IAssemblyDoc.GetExplodedViewCount

Obsolete. Superseded by IAssemblyDoc::GetExplodedViewCount2.

## Signature

```csharp
System.Int32 GetExplodedViewCount()
```
## Parameters

None.

## Return Value

Number of exploded views

## Remarks

To take advantage of the explode mechanism, see
IAssemblyDoc::CreateExplodedView
,
IAssemblyDoc::GetExplodedViewNames
,
IAssemblyDoc::IGetExplodedViewNames
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
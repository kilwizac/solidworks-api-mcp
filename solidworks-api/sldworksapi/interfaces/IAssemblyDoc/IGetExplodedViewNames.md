---
type: method
interface: IAssemblyDoc
member: IGetExplodedViewNames
returns: System.String
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of exploded views in the active configuration (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - igetexplodedviewnames
  - iassemblydoc
  - assembly
  - doc
  - exploded
  - view
  - names
  - count
  - int32
  - string
---

# IAssemblyDoc.IGetExplodedViewNames

Obsolete. Superseded by IAssemblyDoc::GetExplodedViewNames2.

## Signature

```csharp
System.String IGetExplodedViewNames( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of exploded views in the active configuration (see Remarks )

## Return Value

in-process, unmanaged C++: Pointer to an array of strings of the names of the exploded views in the active configuration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IAssemblyDoc::GetExplodedViewCount
to get the value of Count.
To take advantage of the explode mechanism, see
IAssemblyDoc::CreateExplodedView
,
IAssemblyDoc::GetExplodedViewNames
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
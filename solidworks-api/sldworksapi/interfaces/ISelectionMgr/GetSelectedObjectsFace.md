---
type: method
interface: ISelectionMgr
member: GetSelectedObjectsFace
returns: Face2
parameters:
  -
    name: AtIndex
    type: System.Int32
    description: Index position within the current list of selected items, where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2
  -
    name: Mark
    type: System.Int32
    description: 1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
  - selections
related: []
keywords:
  - getselectedobjectsface
  - iselectionmgr
  - selection
  - mgr
  - selected
  - objects
  - face
  - index
  - int32
  - mark
  - face2
---

# ISelectionMgr.GetSelectedObjectsFace

Gets the face of the specified selection if the specified selection is a silhouette edge.

## Signature

```csharp
Face2 GetSelectedObjectsFace( 
   System.Int32
AtIndex
,
   System.Int32
Mark
)
```
## Parameters

- `AtIndex` (System.Int32): Index position within the current list of selected items, where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2
- `Mark` (System.Int32): 1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object

## Return Value

Face
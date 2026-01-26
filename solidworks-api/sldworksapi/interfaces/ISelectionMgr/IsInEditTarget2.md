---
type: method
interface: ISelectionMgr
member: IsInEditTarget2
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index position with in the current list of selected items, where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
  -
    name: Mark
    type: System.Int32
    description: -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related: []
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - edit
  - target
  - context
  - selection
  - iselectionmgr
  - select
  - objects
  - isinedittarget2
  - mgr
  - target2
  - index
  - int32
  - mark
  - boolean
---

# ISelectionMgr.IsInEditTarget2

Gets whether the selected object is in the edit target.

## Signature

```csharp
System.Boolean IsInEditTarget2( 
   System.Int32
Index
,
   System.Int32
Mark
)
```
## Parameters

- `Index` (System.Int32): Index position with in the current list of selected items, where AtIndex ranges from 1 to ISelectionMgr::GetSelectedObjectCount2 (see Remarks )
- `Mark` (System.Int32): -1 = All selections regardless of marks 0 = only the selections without marks Any other value = Value that was used to mark and select an object

## Return Value

True if the selected item specified by AtIndex belongs to a model that is the current edit target, false if not

## Remarks

Calling this method is necessary in assemblies when the end-user performs in-context editing of a part. This method allows you to determine if a selected item belongs to the model that is the current edit target.
The index starts at 1, even when using C++. However, if you specify -1 for the Index argument, then the Mark argument is ignored and the dynamically highlighted view is selected if dynamic highlighting is turned on. See also IAssemblyDoc event
DynamicHighlightNotify
, IDrawingDoc event
DynamicHighlightNotify
, and IPartDoc event
DynamicHighlightNotify
.
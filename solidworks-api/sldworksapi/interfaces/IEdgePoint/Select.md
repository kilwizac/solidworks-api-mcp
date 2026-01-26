---
type: method
interface: IEdgePoint
member: Select
returns: System.Boolean
parameters:
  -
    name: BAppend
    type: System.Boolean
    description: True to add this selection to the current selection, false to replace the current selection list with this selection
  -
    name: SelMark
    type: System.Int32
    description: Selection mark to assign to this midpoint or endpoint
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
  - selections
related: []
keywords:
  - select
  - iedgepoint
  - edge
  - point
  - append
  - boolean
  - sel
  - mark
  - int32
---

# IEdgePoint.Select

Selects a midpoint on an edge or an endpoint or midpoint on a reference curve.

## Signature

```csharp
System.Boolean Select( 
   System.Boolean
BAppend
,
   System.Int32
SelMark
)
```
## Parameters

- `BAppend` (System.Boolean): True to add this selection to the current selection, false to replace the current selection list with this selection
- `SelMark` (System.Int32): Selection mark to assign to this midpoint or endpoint

## Return Value

True if an endpoint or midpoint is selected, false if not
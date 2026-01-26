---
type: method
interface: IView
member: GetKeepLinkedToBOM
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetBomTable
  - IView.GetKeepLinkedToBOMName
  - IView.IGetBomTable
  - IView.IInsertBomTable
  - IView.InsertBomTable
  - IView.InsertBomTable2
  - IView.InsertWeldmentTable
  - IView.SetKeepLinkedToBOM
keywords:
  - bill
  - materials
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - table
  - weldment
  - cut
  - list
  - tables
  - lists
  - iweldmentcutlistfeature
  - getkeeplinkedtobom
  - keep
  - linked
  - bom
  - boolean
---

# IView.GetKeepLinkedToBOM

Gets whether this drawing view is linked to a BOM or weldment cut-list table.

## Signature

```csharp
System.Boolean GetKeepLinkedToBOM()
```
## Parameters

None.

## Return Value

True if this drawing view is linked to a BOM or weldment cut-list table, false if not

## See Also

- `IView.GetBomTable`
- `IView.GetKeepLinkedToBOMName`
- `IView.IGetBomTable`
- `IView.IInsertBomTable`
- `IView.InsertBomTable`
- `IView.InsertBomTable2`
- `IView.InsertWeldmentTable`
- `IView.SetKeepLinkedToBOM`
---
type: method
interface: IView
member: IGetBomTable
returns: BomTable
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetBomTable
  - IView.GetKeepLinkedToBOM
  - IView.GetKeepLinkedToBOMName
  - IView.IInsertBomTable
  - IView.InsertBomTable
  - IView.InsertBomTable2
keywords:
  - bill
  - materials
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - igetbomtable
  - bom
  - table
---

# IView.IGetBomTable

Gets the BOM table found in this drawing view.

## Signature

```csharp
BomTable IGetBomTable()
```
## Parameters

None.

## Return Value

BOM table

## Remarks

This method only returns a BOM table if there is a Microsoft Excel-based BOM for the drawing view.

## See Also

- `IView.GetBomTable`
- `IView.GetKeepLinkedToBOM`
- `IView.GetKeepLinkedToBOMName`
- `IView.IInsertBomTable`
- `IView.InsertBomTable`
- `IView.InsertBomTable2`
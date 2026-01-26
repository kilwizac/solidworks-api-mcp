---
type: method
interface: IView
member: GetBomTable
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetKeepLinkedToBOM
  - IView.GetKeepLinkedToBOMName
  - IView.IGetBomTable
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
  - getbomtable
  - bom
  - table
  - object
---

# IView.GetBomTable

Gets the BOM table found in this drawing view.

## Signature

```csharp
System.Object GetBomTable()
```
## Parameters

None.

## Return Value

BOM table

## Remarks

This method only returns a BOM table if there is a Microsoft Excel-based BOM for the drawing view.

## See Also

- `IView.GetKeepLinkedToBOM`
- `IView.GetKeepLinkedToBOMName`
- `IView.IGetBomTable`
- `IView.IInsertBomTable`
- `IView.InsertBomTable`
- `IView.InsertBomTable2`
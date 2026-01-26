---
type: method
interface: IDesignTable
member: SetRowChanged
returns: void
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: Number of row that changed
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.AddRow
  - IDesignTable.GetRowCount
  - IDesignTable.GetStartRowNumber
  - IDesignTable.GetTotalRowCount
  - IDesignTable.GetVisibleRowCount
  - IDesignTable.GetVisibleTopRowNumber
  - IDesignTable.RowHidden
keywords:
  - setrowchanged
  - idesigntable
  - design
  - table
  - row
  - changed
  - index
  - int32
  - void
---

# IDesignTable.SetRowChanged

Sets the number of the row that was changed.

## Signature

```csharp
void SetRowChanged( 
   System.Int32
RowIndex
)
```
## Parameters

- `RowIndex` (System.Int32): Number of row that changed

## Return Value

Unknown.

## Remarks

Setting the number of the row that changed provides significant performance gains for products like CD Catalog Viewer, a component of 3D PartStream.NET.

## See Also

- `IDesignTable.AddRow`
- `IDesignTable.GetRowCount`
- `IDesignTable.GetStartRowNumber`
- `IDesignTable.GetTotalRowCount`
- `IDesignTable.GetVisibleRowCount`
- `IDesignTable.GetVisibleTopRowNumber`
- `IDesignTable.RowHidden`
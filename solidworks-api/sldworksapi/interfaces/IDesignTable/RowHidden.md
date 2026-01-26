---
type: property
interface: IDesignTable
member: RowHidden
returns: System.Boolean
parameters:
  -
    name: Row
    type: System.Int32
    description: Row for which to get its visibility state; 1 is the first row
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.AddRow
  - IDesignTable.ColumnHidden
  - IDesignTable.GetRowCount
  - IDesignTable.GetStartColumnNumber
  - IDesignTable.GetStartRowNumber
  - IDesignTable.GetVisibleRowCount
  - IDesignTable.GetVisibleTopRowNumber
keywords:
  - rowhidden
  - idesigntable
  - design
  - table
  - row
  - hidden
  - int32
  - boolean
readonly: true
---

# IDesignTable.RowHidden

Gets the visibility state of the specified row.

## Signature

```csharp
System.Boolean RowHidden( 
   System.Int32
Row
) {get;}
```
## Parameters

- `Row` (System.Int32): Row for which to get its visibility state; 1 is the first row

## Return Value

True if hidden, false if visible

## See Also

- `IDesignTable.AddRow`
- `IDesignTable.ColumnHidden`
- `IDesignTable.GetRowCount`
- `IDesignTable.GetStartColumnNumber`
- `IDesignTable.GetStartRowNumber`
- `IDesignTable.GetVisibleRowCount`
- `IDesignTable.GetVisibleTopRowNumber`
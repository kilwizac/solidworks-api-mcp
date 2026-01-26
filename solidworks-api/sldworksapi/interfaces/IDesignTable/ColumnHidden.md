---
type: property
interface: IDesignTable
member: ColumnHidden
returns: System.Boolean
parameters:
  -
    name: Col
    type: System.Int32
    description: Column for which to get its visibility state; 1 is the first column
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.GetColumnCount
  - IDesignTable.GetStartColumnNumber
  - IDesignTable.GetTotalColumnCount
  - IDesignTable.GetVisibleColumnCount
  - IDesignTable.GetVisibleLeftColumnNumber
  - IDesignTable.RowHidden
keywords:
  - columnhidden
  - idesigntable
  - design
  - table
  - column
  - hidden
  - col
  - int32
  - boolean
readonly: true
---

# IDesignTable.ColumnHidden

Gets the visibility state of the specified column.

## Signature

```csharp
System.Boolean ColumnHidden( 
   System.Int32
Col
) {get;}
```
## Parameters

- `Col` (System.Int32): Column for which to get its visibility state; 1 is the first column

## Return Value

True if hidden, false if visible

## See Also

- `IDesignTable.GetColumnCount`
- `IDesignTable.GetStartColumnNumber`
- `IDesignTable.GetTotalColumnCount`
- `IDesignTable.GetVisibleColumnCount`
- `IDesignTable.GetVisibleLeftColumnNumber`
- `IDesignTable.RowHidden`
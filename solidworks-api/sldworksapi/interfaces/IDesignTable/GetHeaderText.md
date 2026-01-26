---
type: method
interface: IDesignTable
member: GetHeaderText
returns: System.String
parameters:
  -
    name: Col
    type: System.Int32
    description: 0-based column number with the header text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.ColumnHidden
  - IDesignTable.GetColumnCount
  - IDesignTable.GetStartColumnNumber
  - IDesignTable.GetTotalColumnCount
  - IDesignTable.GetVisibleColumnCount
  - IDesignTable.GetVisibleLeftColumnNumber
keywords:
  - getheadertext
  - idesigntable
  - design
  - table
  - header
  - text
  - col
  - int32
  - string
---

# IDesignTable.GetHeaderText

Gets the header text for the specified column.

## Signature

```csharp
System.String GetHeaderText( 
   System.Int32
Col
)
```
## Parameters

- `Col` (System.Int32): 0-based column number with the header text

## Return Value

Text string from the column header

## Remarks

Before you use any of the design table methods, you must first activate the design table using
IDesignTable::Attach
. After you are finished getting design table data, you can deactivate the table using
IDesignTable::Detach
.

## See Also

- `IDesignTable.ColumnHidden`
- `IDesignTable.GetColumnCount`
- `IDesignTable.GetStartColumnNumber`
- `IDesignTable.GetTotalColumnCount`
- `IDesignTable.GetVisibleColumnCount`
- `IDesignTable.GetVisibleLeftColumnNumber`
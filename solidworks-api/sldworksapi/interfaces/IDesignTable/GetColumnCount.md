---
type: method
interface: IDesignTable
member: GetColumnCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.ColumnHidden
  - IDesignTable.GetHeaderText
  - IDesignTable.GetStartColumnNumber
  - IDesignTable.GetVisibleColumnCount
  - IDesignTable.GetVisibleLeftColumnNumber
keywords:
  - getcolumncount
  - idesigntable
  - design
  - table
  - column
  - count
  - int32
  - vba
  - vb
  - net
---

# IDesignTable.GetColumnCount

Gets the number of columns in the design table that are currently visible in the model view.

## Signature

```csharp
System.Int32 GetColumnCount()
```
## Parameters

None.

## Return Value

Number of columns in the design table

## Remarks

Before using any of the
IDesignTable
methods, you must use
IDesignTable::Attach
to activate the design table. After you finish getting design table data, use
IDesignTable::Detach
to deactivate the table.
Use
IDesignTable::GetTotalColumnCount
to get the total number of columns in the design table.
To obtain information outside the visible region of the design table, get the Microsoft Excel worksheet that
IDesignTable::Attach
activated. You can then use the Microsoft Excel API to make additional queries.

## Examples

- Get Design Table (VBA) (Get_Design_Table_Example_VB.htm)
- Get Design Table (VB.NET) (Get_Design_Table_Example_VBNET.htm)
- Get Design Table (C#) (Get_Design_Table_Example_CSharp.htm)

## See Also

- `IDesignTable.ColumnHidden`
- `IDesignTable.GetHeaderText`
- `IDesignTable.GetStartColumnNumber`
- `IDesignTable.GetVisibleColumnCount`
- `IDesignTable.GetVisibleLeftColumnNumber`
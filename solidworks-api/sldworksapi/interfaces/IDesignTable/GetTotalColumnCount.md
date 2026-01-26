---
type: method
interface: IDesignTable
member: GetTotalColumnCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.ColumnHidden
  - IDesignTable.GetColumnCount
  - IDesignTable.GetStartColumnNumber
  - IDesignTable.GetVisibleColumnCount
  - IDesignTable.GetVisibleLeftColumnNumber
keywords:
  - gettotalcolumncount
  - idesigntable
  - design
  - table
  - total
  - column
  - count
  - int32
  - microsoft
  - excel
  - worksheet
  - vba
  - vb
  - net
---

# IDesignTable.GetTotalColumnCount

Gets the number of columns in the design table.

## Signature

```csharp
System.Int32 GetTotalColumnCount()
```
## Parameters

None.

## Return Value

Number of columns in the design table

## Remarks

The column index ranges from 1 to the return value.
Before you use any of the
IDesignTable
methods, use
IDesignTable::Attach
to activate the IDesignTable. After you finish getting IDesignTable data, use
IDesignTable::Detach
to deactivate the table.
This method differs from
IDesignTable::GetColumnCount
in that it counts all the columns in the design table. IDesignTable::GetColumnCount counts only the columns that are currently visible in the
IModelView
.
To get information outside of the visible region of the design table, get the Microsoft Excel worksheet activated by IDesignTable::Attach. Then, you can use the Microsoft Excel API to make additional queries.

## Examples

- Get Microsoft Excel Design Table Worksheet (VBA) (Get_Excel_Design_Table_Worksheet_Example_VB.htm)
- Get Design Table (C#) (Get_Design_Table_Example_CSharp.htm)
- Get Design Table (VB.NET) (Get_Design_Table_Example_VBNET.htm)
- Get Design Table (VBA) (Get_Design_Table_Example_VB.htm)

## See Also

- `IDesignTable.ColumnHidden`
- `IDesignTable.GetColumnCount`
- `IDesignTable.GetStartColumnNumber`
- `IDesignTable.GetVisibleColumnCount`
- `IDesignTable.GetVisibleLeftColumnNumber`
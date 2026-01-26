---
type: method
interface: IDesignTable
member: GetTotalRowCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.AddRow
  - IDesignTable.GetRowCount
  - IDesignTable.GetStartRowNumber
  - IDesignTable.GetVisibleRowCount
  - IDesignTable.GetVisibleTopRowNumber
  - IDesignTable.RowHidden
keywords:
  - gettotalrowcount
  - idesigntable
  - design
  - table
  - total
  - row
  - count
  - int32
  - vb
  - net
  - vba
---

# IDesignTable.GetTotalRowCount

Gets the number of rows in the design table.

## Signature

```csharp
System.Int32 GetTotalRowCount()
```
## Parameters

None.

## Return Value

Total number of rows in this design table

## Remarks

The row index ranges from 1 to the return value.
Before you use any of the
IDesignTable
methods, use
IDesignTable::Attach
to activate the IDesignTable. After you finish getting IDesignTable data, use
IDesignTable::Detach
to deactivate the table.
This method differs from
IDesignTable::GetRowCount
in that it counts all the rows in the design table. IDesignTable::GetRowCount counts only the rows that are currently visible in the
IModelView
.
To get information outside of the visible region of the design table, get the Microsoft Excel worksheet activated by IDesignTable::Attach. Then, you can use the Microsoft Excel API to make additional queries.

## Examples

- Get Design Table (C#) (Get_Design_Table_Example_CSharp.htm)
- Get Design Table (VB.NET) (Get_Design_Table_Example_VBNET.htm)
- Get Design Table (VBA) (Get_Design_Table_Example_VB.htm)

## See Also

- `IDesignTable.AddRow`
- `IDesignTable.GetRowCount`
- `IDesignTable.GetStartRowNumber`
- `IDesignTable.GetVisibleRowCount`
- `IDesignTable.GetVisibleTopRowNumber`
- `IDesignTable.RowHidden`
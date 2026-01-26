---
type: method
interface: IDesignTable
member: GetRowCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.AddRow
  - IDesignTable.GetStartRowNumber
  - IDesignTable.GetVisibleRowCount
  - IDesignTable.GetVisibleTopRowNumber
  - IDesignTable.RowHidden
  - IDesignTable.SetRowChanged
keywords:
  - getrowcount
  - idesigntable
  - design
  - table
  - row
  - count
  - int32
  - vba
  - vb
  - net
---

# IDesignTable.GetRowCount

Gets the number of rows in the design table that are currently visible in the model view.

## Signature

```csharp
System.Int32 GetRowCount()
```
## Parameters

None.

## Return Value

Number of rows currently visible in the model view

## Remarks

Before you use any of the
IDesignTable
methods, you must first activate the IDesignTable using
IDesignTable::Attach
. Once you are finished getting IDesignTable data, you can deactivate the table using
IDesignTable::Detach
.
Use
IDesignTable::GetTotalRowCount
to get the total number of rows in the design table.
To get information outside the visible region of the IDesignTable, get the Microsoft Excel worksheet activated by IDesignTable::Attach. Then, you can use the Microsoft Excel API to make additional queries.

## Examples

- Get Design Table (VBA) (Get_Design_Table_Example_VB.htm)
- Get Design Table (VB.NET) (Get_Design_Table_Example_VBNET.htm)
- Get Design Table (C#) (Get_Design_Table_Example_CSharp.htm)

## See Also

- `IDesignTable.AddRow`
- `IDesignTable.GetStartRowNumber`
- `IDesignTable.GetVisibleRowCount`
- `IDesignTable.GetVisibleTopRowNumber`
- `IDesignTable.RowHidden`
- `IDesignTable.SetRowChanged`
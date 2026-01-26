---
type: method
interface: IDesignTable
member: GetEntryText
returns: System.String
parameters:
  -
    name: Row
    type: System.Int32
    description: 0-based row number of the cell
  -
    name: Col
    type: System.Int32
    description: 0-based column number of the cell
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.GetEntryValue
  - IDesignTable.SetEntryText
  - IDesignTable.SetEntryValue
keywords:
  - getentrytext
  - idesigntable
  - design
  - table
  - entry
  - text
  - row
  - int32
  - col
  - string
  - vba
  - vb
  - net
---

# IDesignTable.GetEntryText

Gets the contents of the specified cell as a string regardless of the cell's data type.

## Signature

```csharp
System.String GetEntryText( 
   System.Int32
Row
,
   System.Int32
Col
)
```
## Parameters

- `Row` (System.Int32): 0-based row number of the cell
- `Col` (System.Int32): 0-based column number of the cell

## Return Value

Text string in the specified cell

## Remarks

For example, if the cell is of type double, it is returned as a string.
Use
IDesignTable::GetEntryValue
to get typed return values.
Before using any of the
IDesignTable
methods, use
IDesignTable::Attach
to activate the design table. After you are finish getting design table data, use
IDesignTable::Detach
to deactivate the table.

## Examples

- Get Design Table (VBA) (Get_Design_Table_Example_VB.htm)
- Get Design Table (VB.NET) (Get_Design_Table_Example_VBNET.htm)
- Get Design Table (C#) (Get_Design_Table_Example_CSharp.htm)

## See Also

- `IDesignTable.GetEntryValue`
- `IDesignTable.SetEntryText`
- `IDesignTable.SetEntryValue`
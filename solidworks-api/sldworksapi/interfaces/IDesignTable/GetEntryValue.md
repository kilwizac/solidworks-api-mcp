---
type: method
interface: IDesignTable
member: GetEntryValue
returns: System.Object
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
  - IDesignTable.GetEntryText
  - IDesignTable.SetEntryText
  - IDesignTable.SetEntryValue
keywords:
  - getentryvalue
  - idesigntable
  - design
  - table
  - entry
  - value
  - row
  - int32
  - col
  - object
---

# IDesignTable.GetEntryValue

Gets the contents of the specified cell.

## Signature

```csharp
System.Object GetEntryValue( 
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

Object containing the information from the specified cell

## Remarks

After you receive a valid return value from this method, you can evaluate the the data type of the object (for example, double, long, or string).
Use
IDesignTable::GetEntryText
to return the cell contents as a string.
Before you use any of the design table methods, you must first activate the design table using
IDesignTable::Attach
. After you are finished getting design table data, you can deactivate the table using
IDesignTable::Detach
.

## See Also

- `IDesignTable.GetEntryText`
- `IDesignTable.SetEntryText`
- `IDesignTable.SetEntryValue`
---
type: method
interface: IBomTable
member: GetRowHeight
returns: System.Double
parameters:
  -
    name: Row
    type: System.Int32
    description: Row number; this is a 0-based index
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IBomTable.GetTotalRowCount
keywords:
  - getrowheight
  - ibomtable
  - bom
  - table
  - row
  - height
  - int32
  - double
---

# IBomTable.GetRowHeight

Gets the specified row height in meters.

## Signature

```csharp
System.Double GetRowHeight( 
   System.Int32
Row
)
```
## Parameters

- `Row` (System.Int32): Row number; this is a 0-based index

## Return Value

Height of the specified row in meters

## Remarks

Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.

## See Also

- `IBomTable.GetTotalRowCount`
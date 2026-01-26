---
type: method
interface: IBomTable
member: GetColumnWidth
returns: System.Double
parameters:
  -
    name: Col
    type: System.Int32
    description: Column number; this is a 0-based index
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IBomTable.GetTotalColumnCount
keywords:
  - getcolumnwidth
  - ibomtable
  - bom
  - table
  - column
  - width
  - col
  - int32
  - double
---

# IBomTable.GetColumnWidth

Gets the specified column width in meters.

## Signature

```csharp
System.Double GetColumnWidth( 
   System.Int32
Col
)
```
## Parameters

- `Col` (System.Int32): Column number; this is a 0-based index

## Return Value

Width of the specified column in meters

## Remarks

Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.

## See Also

- `IBomTable.GetTotalColumnCount`
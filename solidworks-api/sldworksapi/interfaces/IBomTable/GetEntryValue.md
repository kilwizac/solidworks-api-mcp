---
type: method
interface: IBomTable
member: GetEntryValue
returns: System.Object
parameters:
  -
    name: Row
    type: System.Int32
    description: Row number of the desired cell; this is a 0-based index
  -
    name: Col
    type: System.Int32
    description: Column number of the desired cell; this is a 0-based index
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - getentryvalue
  - ibomtable
  - bom
  - table
  - entry
  - value
  - row
  - int32
  - col
  - object
---

# IBomTable.GetEntryValue

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

- `Row` (System.Int32): Row number of the desired cell; this is a 0-based index
- `Col` (System.Int32): Column number of the desired cell; this is a 0-based index

## Return Value

Object containing the information from the specified cell

## Remarks

After you receive a valid return value, you can evaluate the for the object's data type.
To return the cell contents as a string, use
IBomTable::GetEntryText
.
Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.
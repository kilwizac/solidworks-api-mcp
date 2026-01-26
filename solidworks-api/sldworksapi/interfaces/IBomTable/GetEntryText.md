---
type: method
interface: IBomTable
member: GetEntryText
returns: System.String
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
  - getentrytext
  - ibomtable
  - bom
  - table
  - entry
  - text
  - row
  - int32
  - col
  - string
---

# IBomTable.GetEntryText

Retrieves the contents of the specified cell as a string regardless of the cell's data type.

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

- `Row` (System.Int32): Row number of the desired cell; this is a 0-based index
- `Col` (System.Int32): Column number of the desired cell; this is a 0-based index

## Return Value

Text string from the specified cell

## Remarks

Use
IBomTable::GetEntryValue
for typed return values.
Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.
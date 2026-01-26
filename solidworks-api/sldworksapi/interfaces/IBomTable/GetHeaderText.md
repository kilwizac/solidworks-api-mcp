---
type: method
interface: IBomTable
member: GetHeaderText
returns: System.String
parameters:
  -
    name: Col
    type: System.Int32
    description: Column number with the desired header text; this is a 0-based index
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - getheadertext
  - ibomtable
  - bom
  - table
  - header
  - text
  - col
  - int32
  - string
---

# IBomTable.GetHeaderText

Gets the header text for the specified column.

## Signature

```csharp
System.String GetHeaderText( 
   System.Int32
Col
)
```
## Parameters

- `Col` (System.Int32): Column number with the desired header text; this is a 0-based index

## Return Value

Text string from the column header

## Remarks

Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.
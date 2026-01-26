---
type: method
interface: IBomTable
member: Select
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True appends the selection list, false replaces the selection list
  -
    name: Mark
    type: System.Int32
    description: Value you want to use as a mark
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - selections
related:
  - IBomTable.DeSelect
keywords:
  - select
  - ibomtable
  - bom
  - table
  - append
  - boolean
  - mark
  - int32
---

# IBomTable.Select

Selects this BOM table and marks it.

## Signature

```csharp
System.Boolean Select( 
   System.Boolean
Append
,
   System.Int32
Mark
)
```
## Parameters

- `Append` (System.Boolean): True appends the selection list, false replaces the selection list
- `Mark` (System.Int32): Value you want to use as a mark

## Return Value

True if the BOM table is selected, false if not

## Remarks

Before you use any of the IBomTable methods, activate the BOM table using
IBomTable::Attach3
. After you finish getting BOM data, use
IBomTable::Detach
to deactivate the table.

## See Also

- `IBomTable.DeSelect`
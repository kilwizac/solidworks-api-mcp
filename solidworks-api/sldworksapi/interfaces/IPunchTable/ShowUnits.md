---
type: property
interface: IPunchTable
member: ShowUnits
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - showunits
  - ipunchtable
  - punch
  - table
  - show
  - units
  - boolean
  - insert
  - vba
  - vb
  - net
readonly: null
---

# IPunchTable.ShowUnits

Gets or sets whether to show dual dimension units in this punch table.

## Signature

```csharp
System.Boolean ShowUnits {get; set;}
```
## Parameters

None.

## Return Value

True to display dual dimension units in the punch table, false to not; valid only if IPunchTable::DualDimensions is true

## Examples

- Insert Punch Table (VBA) (Insert_Punch_Table_Example_VB.htm)
- Insert Punch Table (VB.NET) (Insert_Punch_Table_Example_VBNET.htm)
- Insert Punch Table (C#) (Insert_Punch_Table_Example_CSharp.htm)
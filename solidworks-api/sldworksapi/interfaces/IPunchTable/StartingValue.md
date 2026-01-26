---
type: property
interface: IPunchTable
member: StartingValue
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - punch
  - tables
  - see
  - also
  - ipunchtable
  - tags
  - startingvalue
  - table
  - starting
  - value
  - string
  - insert
  - vb
  - net
  - vba
readonly: null
---

# IPunchTable.StartingValue

Gets or sets the starting value for the datum tags of this punch table.

## Signature

```csharp
System.String StartingValue {get; set;}
```
## Parameters

None.

## Return Value

Letter from A to Z, if the template of this punch table uses letter tags; a positive integer, if it uses number tags (see Remarks )

## Remarks

See
IView::InsertPunchTable
for more information about punch table templates.

## Examples

- Insert Punch Table (C#) (Insert_Punch_Table_Example_CSharp.htm)
- Insert Punch Table (VB.NET) (Insert_Punch_Table_Example_VBNET.htm)
- Insert Punch Table (VBA) (Insert_Punch_Table_Example_VB.htm)
---
type: property
interface: IBendTable
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
  - startingvalue
  - ibendtable
  - bend
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

# IBendTable.StartingValue

Gets and sets the starting datum tag for this bend table.

## Signature

```csharp
System.String StartingValue {get; set;}
```
## Parameters

None.

## Return Value

Starting datum tag (see Remarks )

## Remarks

This property returns:
Letter from A to Z, if
IBendTable::TagStyle
is set to
swBendTableTagStyle_e
.swBendTable_AlphaNumericTags.
Positive integer, if
IBendTable::TagStyle
is set to
swBendTableTagStyle_e
.swBendTable_NumericTags.

## Examples

- Insert Bend Table (C#) (Insert_Bend_Table_Example_CSharp.htm)
- Insert Bend Table (VB.NET) (Insert_Bend_Table_Example_VBNET.htm)
- Insert Bend Table (VBA) (Insert_Bend_Table_Example_VB.htm)
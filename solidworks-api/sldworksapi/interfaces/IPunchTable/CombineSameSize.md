---
type: property
interface: IPunchTable
member: CombineSameSize
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - combinesamesize
  - ipunchtable
  - punch
  - table
  - combine
  - same
  - size
  - boolean
  - insert
  - vb
  - net
  - vba
readonly: null
---

# IPunchTable.CombineSameSize

Gets or sets whether to merge Punch ID column cells that have the same contents.

## Signature

```csharp
System.Boolean CombineSameSize {get; set;}
```
## Parameters

None.

## Return Value

True to merge Punch ID column cells that have the same contents, false to not; only valid if IPunchTable::CombineTags is false (see Remarks )

## Remarks

Set this property to true to create a punch table with a PUNCH ID column that contains column cells that have been merged because they contain the same value within each tag group (e.g., A1, A2, A3).
If this property is set to false, the punch table looks like this:
TAG
PUNCH ID
X LOCATION
Y LOCATION
ANGLE
QUANTITY
A1
135
107
300
90
1
A2
135
200
150
90
1
A3
135
300
200
90
1
If this property is set to true, the punch table looks like this:
TAG
PUNCH ID
X LOCATION
Y LOCATION
ANGLE
QUANTITY
A1
135
107
300
90
1
A2
200
150
90
1
A3
300
200
90
1

## Examples

- Insert Punch Table (C#) (Insert_Punch_Table_Example_CSharp.htm)
- Insert Punch Table (VB.NET) (Insert_Punch_Table_Example_VBNET.htm)
- Insert Punch Table (VBA) (Insert_Punch_Table_Example_VB.htm)
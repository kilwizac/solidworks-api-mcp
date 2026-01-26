---
type: method
interface: IPunchTable
member: GetTableAnnotationCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
related:
  - IPunchTable.GetTableAnnotations
keywords:
  - split
  - table
  - gettableannotationcount
  - ipunchtable
  - punch
  - annotation
  - count
  - int32
  - insert
  - vb
  - net
  - vba
---

# IPunchTable.GetTableAnnotationCount

Gets the number of punch table annotations for this punch table.

## Signature

```csharp
System.Int32 GetTableAnnotationCount()
```
## Parameters

None.

## Return Value

Number of punch table annotations for this punch table (see Remarks )

## Remarks

Normally there is one punch table annotation per punch table feature. Split tables have two separate table annotations.
Call this method before calling
IPunchTable::IGetTableAnnotations
to get the total number of table annotations in the punch table, including split table annotations.

## Examples

- Insert Punch Table (C#) (Insert_Punch_Table_Example_CSharp.htm)
- Insert Punch Table (VB.NET) (Insert_Punch_Table_Example_VBNET.htm)
- Insert Punch Table (VBA) (Insert_Punch_Table_Example_VB.htm)

## See Also

- `IPunchTable.GetTableAnnotations`
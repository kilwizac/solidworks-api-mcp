---
type: method
interface: IPunchTable
member: GetTableAnnotations
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
related:
  - IPunchTable.IGetTableAnnotations
keywords:
  - split
  - table
  - gettableannotations
  - ipunchtable
  - punch
  - annotations
  - object
  - insert
  - vba
  - vb
  - net
---

# IPunchTable.GetTableAnnotations

Gets the punch table annotations for this punch table feature.

## Signature

```csharp
System.Object GetTableAnnotations()
```
## Parameters

None.

## Return Value

Array of IPunchTableAnnotation objects for this punch table feature

## Remarks

This method gets all of the table annotations of a split table. Many of the
ITableAnnotation
methods and properties get table annotation information that is common to all table annotations. You should apply these
ITableAnnotation
methods and properties to only one of the split table annotations returned by this method. Otherwise, you will get redundant data.

## Examples

- Insert Punch Table (VBA) (Insert_Punch_Table_Example_VB.htm)
- Insert Punch Table (VB.NET) (Insert_Punch_Table_Example_VBNET.htm)
- Insert Punch Table (C#) (Insert_Punch_Table_Example_CSharp.htm)

## See Also

- `IPunchTable.IGetTableAnnotations`
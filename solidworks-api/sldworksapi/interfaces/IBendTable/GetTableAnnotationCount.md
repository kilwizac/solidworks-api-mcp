---
type: method
interface: IBendTable
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
  - IBendTable.GetTableAnnotations
  - IBendTable.IGetTableAnnotations
keywords:
  - gettableannotationcount
  - ibendtable
  - bend
  - table
  - annotation
  - count
  - int32
  - insert
  - vba
  - vb
  - net
---

# IBendTable.GetTableAnnotationCount

Gets the number of bend table annotations.

## Signature

```csharp
System.Int32 GetTableAnnotationCount()
```
## Parameters

None.

## Return Value

Number of bend table annotations (see Remarks )

## Remarks

There is usually only one annotation for each bend table. If a bend table is split, there are two annotations associated with it.

## Examples

- Insert Bend Table (VBA) (Insert_Bend_Table_Example_VB.htm)
- Insert Bend Table (VB.NET) (Insert_Bend_Table_Example_VBNET.htm)
- Insert Bend Table (C#) (Insert_Bend_Table_Example_CSharp.htm)

## See Also

- `IBendTable.GetTableAnnotations`
- `IBendTable.IGetTableAnnotations`
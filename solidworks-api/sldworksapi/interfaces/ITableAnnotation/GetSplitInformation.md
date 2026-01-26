---
type: method
interface: ITableAnnotation
member: GetSplitInformation
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: Piece of the table that this is
  -
    name: Count
    type: System.Int32
    description: Piece of the table that this is
  -
    name: RangeStart
    type: System.Int32
    description: Beginning row for this piece of the table
  -
    name: RangeEnd
    type: System.Int32
    description: Ending row for this piece of the table
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.HorizontalAutoSplit
  - ITableAnnotation.Split
  - ITableAnnotation.StopAutoSplitting
keywords:
  - split
  - table
  - getsplitinformation
  - itableannotation
  - annotation
  - information
  - index
  - int32
  - count
  - range
  - start
  - end
  - export
  - boms
  - xml
  - vb
  - net
  - vba
---

# ITableAnnotation.GetSplitInformation

Gets information about any splits in this table.

## Signature

```csharp
System.Int32 GetSplitInformation( 
   out System.Int32
Index
,
   out System.Int32
Count
,
   out System.Int32
RangeStart
,
   out System.Int32
RangeEnd
)
```
## Parameters

- `Index` (System.Int32): Piece of the table that this is
- `Count` (System.Int32): Piece of the table that this is
- `RangeStart` (System.Int32): Beginning row for this piece of the table
- `RangeEnd` (System.Int32): Ending row for this piece of the table

## Return Value

Direction in which the table was split as defined by swTableSplitDirection_e

## Remarks

A table split is a table divided into multiple tables, also called pieces.

## Examples

- Export BOMs to XML (C#) (Export_BOMs_to_XML_Example_CSharp.htm)
- Export BOMs to XML (VB.NET) (Export_BOMs_to_XML_Example_VBNET.htm)
- Export BOMs to XML (VBA) (Export_BOMs_to_XML_Example_VB.htm)

## See Also

- `ITableAnnotation.HorizontalAutoSplit`
- `ITableAnnotation.Split`
- `ITableAnnotation.StopAutoSplitting`
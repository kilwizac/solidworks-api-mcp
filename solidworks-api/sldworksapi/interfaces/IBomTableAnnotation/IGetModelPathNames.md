---
type: method
interface: IBomTableAnnotation
member: IGetModelPathNames
returns: System.String
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: Row in the BOM table; 0-based index
  -
    name: Count
    type: System.Int32
    description: Number of model pathnames
  -
    name: ItemNumber
    type: System.String
    description: Item number for the specified BOM table row
  -
    name: PartNumber
    type: System.String
    description: Part number for the specified BOM table row
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.GetModelPathNames
keywords:
  - bill
  - materials
  - models
  - igetmodelpathnames
  - ibomtableannotation
  - bom
  - table
  - annotation
  - model
  - path
  - names
  - row
  - index
  - int32
  - count
  - item
  - number
  - string
  - part
---

# IBomTableAnnotation.IGetModelPathNames

Gets the full pathnames of all documents in the specified row of this BOM table annotation. Also gets the item and part numbers associated with the specified row.

## Signature

```csharp
System.String IGetModelPathNames( 
   System.Int32
RowIndex
,
   System.Int32
Count
,
   out System.String
ItemNumber
,
   out System.String
PartNumber
)
```
## Parameters

- `RowIndex` (System.Int32): Row in the BOM table; 0-based index
- `Count` (System.Int32): Number of model pathnames
- `ItemNumber` (System.String): Item number for the specified BOM table row
- `PartNumber` (System.String): Part number for the specified BOM table row

## Return Value

in-process, unmanaged C++: Pointer to an array of model pathnames in the specified row VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IBomTableAnnotation::GetModelPathNamesCount
to get the value of Count.

## See Also

- `IBomTableAnnotation.GetModelPathNames`
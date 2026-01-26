---
type: method
interface: IBomTableAnnotation
member: GetModelPathNames
returns: System.Object
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: Row in the BOM table; 0-based index
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
  - IBomTableAnnotation.GetModelPathNamesCount
  - IBomTableAnnotation.IGetModelPathNames
keywords:
  - bill
  - materials
  - models
  - getmodelpathnames
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
  - item
  - number
  - string
  - part
  - object
  - pathnames
  - vb
  - net
  - vba
---

# IBomTableAnnotation.GetModelPathNames

Gets the full pathnames of all documents in the specified row of this BOM table annotation. Also gets the item and part numbers associated with the specified row.

## Signature

```csharp
System.Object GetModelPathNames( 
   System.Int32
RowIndex
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
- `ItemNumber` (System.String): Item number for the specified BOM table row
- `PartNumber` (System.String): Part number for the specified BOM table row

## Return Value

Array of full pathnames of the models in the specified BOM table row

## Examples

- Get Model Pathnames in BOM Table (C#) (Get_Model_Path_Names_in_BOM_Table_Example_CSharp.htm)
- Get Model Pathnames in BOM Table (VB.NET) (Get_Model_Path_Names_in_BOM_Table_Example_VBNET.htm)
- Get Model Pathnames in BOM Table (VBA) (Get_Model_Path_Names_in_BOM_Table_Example_VB.htm)

## See Also

- `IBomTableAnnotation.GetModelPathNamesCount`
- `IBomTableAnnotation.IGetModelPathNames`
---
type: method
interface: IMBD3DPdfData
member: SetBomTable
returns: System.Int32
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the BOM Table Area in the theme (see Remarks )
  -
    name: BomTableName
    type: System.String
    description: Name of the BOM table to map to the BOM Table Area specified by Index (see Remarks )
  -
    name: Columns
    type: System.Object
    description: Array of strings of the names of the columns to export from the BOM table specified in BomTableName (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IMBD3DPdfData.ExcludeFromAnnotationView
keywords:
  - setbomtable
  - imbd3dpdfdata
  - imbd3
  - pdf
  - data
  - bom
  - table
  - index
  - int32
  - name
  - string
  - columns
  - object
  - export
  - second
  - column
  - area
  - vb
  - net
  - vba
---

# IMBD3DPdfData.SetBomTable

Maps a BOM Table Area in the theme with a BOM table in the model and sets the columns in the BOM table to export to the BOM Table Area in a SOLIDWORKS MBD 3D PDF.

## Signature

```csharp
System.Int32 SetBomTable( 
   System.Int32
Index
,
   System.String
BomTableName
,
   System.Object
Columns
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the BOM Table Area in the theme (see Remarks )
- `BomTableName` (System.String): Name of the BOM table to map to the BOM Table Area specified by Index (see Remarks )
- `Columns` (System.Object): Array of strings of the names of the columns to export from the BOM table specified in BomTableName (see Remarks )

## Return Value

0 = success; BOM table mapped 1 = failure; specified BomTableName not found in model

## Remarks

To get...
Call...
Index
IMBD3PdfData::GetBomAreaCount
to find out the number of BOM Table Areas in the theme
BOMTableName
IBomFeature::Name
Columns
ITableAnnotation::ColumnCount
to get the number of columns in the BOM table
ITableAnnotation::GetColumnTitle
for each column you want to export after getting the
table annotation
for the
BOM table annotation

## Examples

- Export BOM's Second Column to BOM Table Area (C#) (Export_BOM's_Second_Column_to_BOM_Table_Area_Example_CSharp.htm)
- Export BOM's Second Column to BOM Table Area (VB.NET) (Export_BOM's_Second_Column_to_BOM_Table_Area_Example_VBNET.htm)
- Export BOM's Second Column to BOM Table Area (VBA) (Export_BOM's_Second_Column_to_BOM_Table_Area_Example_VB.htm)

## See Also

- `IMBD3DPdfData.ExcludeFromAnnotationView`
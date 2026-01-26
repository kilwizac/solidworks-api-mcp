---
type: method
interface: IModelDocExtension
member: GetGeneralTableAnnotation
returns: TableAnnotation
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: True to anchor the table by AnchorType and ignore any coordinates specified by X and Y, false to use the coordinates specified by X and Y
  -
    name: X
    type: System.Double
    description: X coordinate of this table annotation; valid only if UseAnchorPoint is false
  -
    name: Y
    type: System.Double
    description: Y coordinate of this table annotation; valid only if UseAnchorPoint is false
  -
    name: AnchorType
    type: System.Int32
    description: Type of anchor as defined in swBOMConfigurationAnchorType_e ; valid only if UseAnchorPoint is true, and TableTemplate is empty (see Remarks )
  -
    name: TableTemplate
    type: System.String
    description: Path and file name of the general table template to use (see Remarks )
  -
    name: Rows
    type: System.Int32
    description: Number of rows in the table annotation; valid only if TableTemplate is empty (see Remarks )
  -
    name: Columns
    type: System.Int32
    description: Number of columns in the table annotation; valid only if TableTemplate is empty (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IMBD3DPdfData
keywords:
  - table
  - annotations
  - see
  - also
  - itableannotation
  - general
  - tables
  - solidworks
  - mbd
  - 3d
  - pdf
  - getgeneraltableannotation
  - imodeldocextension
  - model
  - doc
  - extension
  - annotation
  - use
  - anchor
  - point
  - boolean
  - double
  - type
  - int32
  - template
  - string
  - rows
  - columns
  - create
  - vb
  - net
  - vba
---

# IModelDocExtension.GetGeneralTableAnnotation

Creates a general table annotation for SOLIDWORKS MBD 3D PDF.

## Signature

```csharp
TableAnnotation GetGeneralTableAnnotation( 
   System.Boolean
UseAnchorPoint
,
   System.Double
X
,
   System.Double
Y
,
   System.Int32
AnchorType
,
   System.String
TableTemplate
,
   System.Int32
Rows
,
   System.Int32
Columns
)
```
## Parameters

- `UseAnchorPoint` (System.Boolean): True to anchor the table by AnchorType and ignore any coordinates specified by X and Y, false to use the coordinates specified by X and Y
- `X` (System.Double): X coordinate of this table annotation; valid only if UseAnchorPoint is false
- `Y` (System.Double): Y coordinate of this table annotation; valid only if UseAnchorPoint is false
- `AnchorType` (System.Int32): Type of anchor as defined in swBOMConfigurationAnchorType_e ; valid only if UseAnchorPoint is true, and TableTemplate is empty (see Remarks )
- `TableTemplate` (System.String): Path and file name of the general table template to use (see Remarks )
- `Rows` (System.Int32): Number of rows in the table annotation; valid only if TableTemplate is empty (see Remarks )
- `Columns` (System.Int32): Number of columns in the table annotation; valid only if TableTemplate is empty (see Remarks )

## Return Value

ITableAnnotation

## Remarks

If TableTemplate is...
Then this method..
A valid path and file name
Ignores AnchorType, Rows, and Columns and creates a general table annotation based on TableTemplate.
Empty
Creates a general table annotation using the specified parameters except TableTemplate.
This method creates an object for the specified table annotation, but it does not insert the table annotation in the model.
Use
IModelDocExtension::InsertGeneralTableAnnotation
to create and insert a table annotation in the model.

## Examples

- Create General Table Annotation for SOLIDWORKS MBD 3D PDF (C#) (Create_General_Table_for_SOLIDWORKS_3D_PDF_Example_CSharp.htm)
- Create General Table Annotation for SOLIDWORKS MBD 3D PDF (VB.NET) (Create_General_Table_for_SOLIDWORKS_3D_PDF_Example_VBNET.htm)
- Create General Table Annotation for SOLIDWORKS MBD 3D PDF (VBA) (Create_General_Table_for_SOLIDWORKS_3D_PDF_Example_VB.htm)

## See Also

- `IMBD3DPdfData`
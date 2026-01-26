---
type: method
interface: IModelDocExtension
member: InsertGeneralTableAnnotation
returns: TableAnnotation
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: True to anchor the table by AnchorType and ignore any coordinates specified by X and Y, false to use the coordinates specified by X and Y
  -
    name: X
    type: System.Double
    description: X coordinate of this table annotation
  -
    name: Y
    type: System.Double
    description: Y coordinate of this table annotation
  -
    name: AnchorType
    type: System.Int32
    description: Type of anchor as defined in swBOMConfigurationAnchorType_e ; valid only if UseAnchorPoint is true and TableTemplate is empty (see Remarks )
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
  - IDrawingDoc.InsertTableAnnotation2
  - IModelDocExtension.GetGeneralTableAnnotation
  - IModelDocExtension.InsertBomTable3
  - IModelDocExtension.InsertTitleBlockTable
keywords:
  - table
  - annotations
  - see
  - also
  - itableannotation
  - general
  - tables
  - insertgeneraltableannotation
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
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
  - part
  - vba
  - vb
  - net
---

# IModelDocExtension.InsertGeneralTableAnnotation

Inserts the a general table annotation in this model document.

## Signature

```csharp
TableAnnotation InsertGeneralTableAnnotation( 
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
- `X` (System.Double): X coordinate of this table annotation
- `Y` (System.Double): Y coordinate of this table annotation
- `AnchorType` (System.Int32): Type of anchor as defined in swBOMConfigurationAnchorType_e ; valid only if UseAnchorPoint is true and TableTemplate is empty (see Remarks )
- `TableTemplate` (System.String): Path and file name of the general table template to use (see Remarks )
- `Rows` (System.Int32): Number of rows in the table annotation; valid only if TableTemplate is empty (see Remarks )
- `Columns` (System.Int32): Number of columns in the table annotation; valid only if TableTemplate is empty (see Remarks )

## Return Value

ITableAnnotation

## Remarks

If TableTemplate is...
Then..
A valid path and file name
AnchorType, Rows, and Columns are ignored, and a general table based on TableTemplate is inserted
Empty
General table based only on all of the specified parameters, except TableTemplate, is inserted

## Examples

- Insert General Table in Part (VBA) (Insert_General_Table_in_Part_Example_VB.htm)
- Insert General Table in Part (VB.NET) (Insert_General_Table_in_Part_Example_VBNET.htm)
- Insert General Table in Part (C#) (Insert_General_Table_in_Part_Example_CSharp.htm)

## See Also

- `IDrawingDoc.InsertTableAnnotation2`
- `IModelDocExtension.GetGeneralTableAnnotation`
- `IModelDocExtension.InsertBomTable3`
- `IModelDocExtension.InsertTitleBlockTable`
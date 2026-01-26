---
type: method
interface: ISheet
member: InsertRevisionTable2
returns: RevisionTableAnnotation
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: True to insert the revision table at the existing revision table anchor point, false to anchor the table at the point specified by X and Y
  -
    name: X
    type: System.Double
    description: X coordinate for the placement of the revision table annotation
  -
    name: Y
    type: System.Double
    description: Y coordinate for the placement of this revision table annotation
  -
    name: AnchorType
    type: System.Int32
    description: Anchor type as defined by swBOMConfigurationAnchorType_e
  -
    name: TableTemplate
    type: System.String
    description: Path and filename of the template that corresponds to this type of table (see Remarks )
  -
    name: Shape
    type: System.Int32
    description: Revision symbol shape as defined in swRevisionTableSymbolShape_e
  -
    name: AutoUpdateZoomCells
    type: System.Boolean
    description: True to automatically update zone cells, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.RevisionTable
keywords:
  - revision
  - tables
  - see
  - also
  - irevisiontableannotation
  - irevisiontablefeature
  - interfaces
  - sheets
  - sheet
  - isheet
  - table
  - annotation
  - insertrevisiontable2
  - insert
  - table2
  - use
  - anchor
  - point
  - boolean
  - double
  - type
  - int32
  - template
  - string
  - shape
  - auto
  - update
  - zoom
  - cells
  - create
  - drawing
  - zones
  - vba
  - vb
  - net
---

# ISheet.InsertRevisionTable2

Inserts a revision table in this drawing sheet.

## Signature

```csharp
RevisionTableAnnotation InsertRevisionTable2( 
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
Shape
,
   System.Boolean
AutoUpdateZoomCells
)
```
## Parameters

- `UseAnchorPoint` (System.Boolean): True to insert the revision table at the existing revision table anchor point, false to anchor the table at the point specified by X and Y
- `X` (System.Double): X coordinate for the placement of the revision table annotation
- `Y` (System.Double): Y coordinate for the placement of this revision table annotation
- `AnchorType` (System.Int32): Anchor type as defined by swBOMConfigurationAnchorType_e
- `TableTemplate` (System.String): Path and filename of the template that corresponds to this type of table (see Remarks )
- `Shape` (System.Int32): Revision symbol shape as defined in swRevisionTableSymbolShape_e
- `AutoUpdateZoomCells` (System.Boolean): True to automatically update zone cells, false to not

## Return Value

Revision table or null if a revision table already exists

## Remarks

By default, the revision table templates are in
install_dir
\
lang
\
language
and have a filename extension of
.sldrevtbt
. The template and table must be of the same type. For example, you must specify TableTemplate with
install_dir
\lang\English\standard revision block.sldrevtbt
if you want to insert the English version of a revision block table.

## Examples

- Create Drawing Sheet Zones (VBA) (Create_Drawing_Sheet_Zones_Example_VB.htm)
- Create Drawing Sheet Zones (VB.NET) (Create_Drawing_Sheet_Zones_Example_VBNET.htm)
- Create Drawing Sheet Zones (C#) (Create_Drawing_Sheet_Zones_Example_CSharp.htm)

## See Also

- `ISheet.RevisionTable`
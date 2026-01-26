---
type: method
interface: IView
member: InsertHoleTable2
returns: HoleTableAnnotation
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: If true, and the sheet format anchor point exists, then insert table at the anchor point; if false, then insert the table at the location specified by the X and Y parameters
  -
    name: X
    type: System.Double
    description: X coordinate in meters for the anchor of this hole table
  -
    name: Y
    type: System.Double
    description: Y coordinate in meters for the anchor of this hole table
  -
    name: AnchorType
    type: System.Int32
    description: Anchor type as defined by swBomConfigurationAnchorType_e
  -
    name: StartValue
    type: System.String
    description: Starting value for datum tags; a letter from A to Z, if TableTemplate uses letter tags; a positive integer, if TableTemplate uses number tags (see Remarks )
  -
    name: TableTemplate
    type: System.String
    description: Path and filename of the table template that corresponds to the table you want to use (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - insertholetable2
  - iview
  - view
  - insert
  - hole
  - table2
  - use
  - anchor
  - point
  - boolean
  - double
  - type
  - int32
  - start
  - value
  - string
  - table
  - template
  - annotation
  - labels
  - datum
  - origin
  - vb
  - net
  - vba
---

# IView.InsertHoleTable2

Obsolete. Superseded by IView::InsertHoleTable3.

## Signature

```csharp
HoleTableAnnotation InsertHoleTable2( 
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
StartValue
,
   System.String
TableTemplate
)
```
## Parameters

- `UseAnchorPoint` (System.Boolean): If true, and the sheet format anchor point exists, then insert table at the anchor point; if false, then insert the table at the location specified by the X and Y parameters
- `X` (System.Double): X coordinate in meters for the anchor of this hole table
- `Y` (System.Double): Y coordinate in meters for the anchor of this hole table
- `AnchorType` (System.Int32): Anchor type as defined by swBomConfigurationAnchorType_e
- `StartValue` (System.String): Starting value for datum tags; a letter from A to Z, if TableTemplate uses letter tags; a positive integer, if TableTemplate uses number tags (see Remarks )
- `TableTemplate` (System.String): Path and filename of the table template that corresponds to the table you want to use (see Remarks )

## Return Value

Hole table annotation

## Remarks

This method inserts a table with the following information for selected holes:
Datum tag
X-location of hole center
Y-location of hole center
Size
This method displays datum tags next to holes that have been pre-selected in the view. The location of the datum tags is relative to a datum origin that is also pre-selected in the view.
Before calling this method, call
IModelDocExtension::SelectByID2
to select the datum origin, hole edges, and faces (for multiple holes) as follows:
Selection
Mark
Datum origin vertex
1
Hole edges and faces
2
Datum origin x axis direction reference
4
Datum origin y axis direction reference
8
Specify TableTemplate using a hole table template (
*.sldholtbt
) in
install_dir
\
lang
\
l
anguage
.
Specify a TableTemplate and StartValue that matches the table you want to create. For example, to insert a hole table with letter tags, specify TableTemplate using
install_dir
\
lang\English\standard hole table--letters.sldholtbt
and specify StartValue using a letter from A to Z.

## Examples

- Get Labels of Datum Origin (C#) (Get_Labels_of_Datum_Origin_Example_CSharp.htm)
- Get Labels of Datum Origin (VB.NET) (Get_Labels_of_Datum_Origin_Example_VBNET.htm)
- Get Labels of Datum Origin (VBA) (Get_Labels_of_Datum_Origin_Example_VB.htm)
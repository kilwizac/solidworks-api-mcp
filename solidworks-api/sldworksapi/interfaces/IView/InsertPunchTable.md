---
type: method
interface: IView
member: InsertPunchTable
returns: PunchTableAnnotation
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: If true, and the sheet format anchor point exists, then insert table at the anchor point; if false, then insert the table at the location specified by the X and Y parameters
  -
    name: X
    type: System.Double
    description: X coordinate for the anchor of this punch table
  -
    name: Y
    type: System.Double
    description: Y coordinate for the anchor of this punch table
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
    description: Path and filename of the table template that corresponds to the type of table you want to use (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IFeatureManager.CreateFormTool
  - ILibraryFormToolFeatureData
  - IPunchTable
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - punch
  - tables
  - ipunchtable
  - view
  - table
  - insertpunchtable
  - insert
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
  - template
  - annotation
  - vba
  - vb
  - net
---

# IView.InsertPunchTable

Inserts a punch table in the flat pattern drawing view of a sheet metal part.

## Signature

```csharp
PunchTableAnnotation InsertPunchTable( 
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
- `X` (System.Double): X coordinate for the anchor of this punch table
- `Y` (System.Double): Y coordinate for the anchor of this punch table
- `AnchorType` (System.Int32): Anchor type as defined by swBomConfigurationAnchorType_e
- `StartValue` (System.String): Starting value for datum tags; a letter from A to Z, if TableTemplate uses letter tags; a positive integer, if TableTemplate uses number tags (see Remarks )
- `TableTemplate` (System.String): Path and filename of the table template that corresponds to the type of table you want to use (see Remarks )

## Return Value

IPunchTableAnnotation

## Remarks

Punch tables contain information about the punches that are created by forming tools in sheet metal parts. This method inserts a punch table with the following information for pre-selected punches:
Column
Description
TAG
Datum tag added to each punch in the flat pattern view
PUNCH ID
Property of the forming tool or library feature
X Location
Distance from the x-axis to the point of insertion of the forming tool in the flat pattern view
Y Location
Distance from the y-axis to the point of insertion of the forming tool in the flat pattern view
ANGLE
Angle between the x-axis and the forming tool
QUANTITY
Number of times that the punch occurs in the flat pattern view
The locations of the datum tags are relative to a datum origin that is pre-selected in the view.
Before calling this method, call
IModelDocExtension::SelectByID2
to select the datum origin, punch edges, and punch faces (for multiple punches) as follows:
Selection
Mark
Datum origin vertex
1
Punch edges and faces
2
Datum origin x-axis direction reference
4
Datum origin y-axis direction reference
8
Specify TableTemplate using a punch table template (
*.sldpuntbt
) in
install_dir
\
lang
\
l
anguage
.
Specify a StartValue that matches the table you want to create. For example, to insert a punch table with letter tags, specify a StartValue with a letter from A to Z.

## Examples

- Insert Punch Table (VBA) (Insert_Punch_Table_Example_VB.htm)
- Insert Punch Table (VB.NET) (Insert_Punch_Table_Example_VBNET.htm)
- Insert Punch Table (C#) (Insert_Punch_Table_Example_CSharp.htm)

## See Also

- `IFeatureManager.CreateFormTool`
- `ILibraryFormToolFeatureData`
- `IPunchTable`
---
type: method
interface: IView
member: InsertHoleTable3
returns: System.Object
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
    description: Starting value for the specified TagType
  -
    name: Template
    type: System.String
    description: Path and filename of the hole table template that corresponds to the hole table you want to create (see Remarks )
  -
    name: TagOrder
    type: System.Int32
    description: Tag numbering as defined in swHoleTableTagOrder_e
  -
    name: TagType
    type: System.Int32
    description: Tag type as defined in swHoleTableTagStyle_e
  -
    name: ManualTags
    type: System.Object
    description: Array of custom tags; valid only if TagType is swHoleTableTagStyle_e.swHoleTable_ManualTags
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - hole
  - tables
  - iholetable
  - table
  - view
  - insertholetable3
  - insert
  - table3
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
  - tag
  - order
  - manual
  - tags
  - object
  - vba
  - vb
  - net
---

# IView.InsertHoleTable3

Inserts a hole table in this drawing view.

## Signature

```csharp
System.Object InsertHoleTable3( 
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
Template
,
   System.Int32
TagOrder
,
   System.Int32
TagType
,
   System.Object
ManualTags
)
```
## Parameters

- `UseAnchorPoint` (System.Boolean): If true, and the sheet format anchor point exists, then insert table at the anchor point; if false, then insert the table at the location specified by the X and Y parameters
- `X` (System.Double): X coordinate in meters for the anchor of this hole table
- `Y` (System.Double): Y coordinate in meters for the anchor of this hole table
- `AnchorType` (System.Int32): Anchor type as defined by swBomConfigurationAnchorType_e
- `StartValue` (System.String): Starting value for the specified TagType
- `Template` (System.String): Path and filename of the hole table template that corresponds to the hole table you want to create (see Remarks )
- `TagOrder` (System.Int32): Tag numbering as defined in swHoleTableTagOrder_e
- `TagType` (System.Int32): Tag type as defined in swHoleTableTagStyle_e
- `ManualTags` (System.Object): Array of custom tags; valid only if TagType is swHoleTableTagStyle_e.swHoleTable_ManualTags

## Return Value

Hole table annotation

## Remarks

This method inserts a hole table with the following information for selected holes:
Datum tag
X-location of hole center
Y-location of hole center
Size of the hole
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
Specify Template using a hole table template (
*.sldholtbt
):
in
install_dir
\
lang
\
l
anguage
.
that matches the table you want to create. For example, to insert a hole table with letter tags, specify Template using
install_dir
\
lang\English\standard hole table--letters.sldholtbt
.

## Examples

- Insert Hole Table (VBA) (Insert_Hole_Table_Example_VB.htm)
- Insert Hole Table (VB.NET) (Insert_Hole_Table_Example_VBNET.htm)
- Insert Hole Table (C#) (Insert_Hole_Table_Example_CSharp.htm)
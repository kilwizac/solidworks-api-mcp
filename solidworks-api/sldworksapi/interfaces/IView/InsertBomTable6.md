---
type: method
interface: IView
member: InsertBomTable6
returns: System.Object
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: If true and the appropriate sheet format anchor point exists, then insert table at this point; if false, then use the values specified for the X and Y arguments as the insertion point
  -
    name: X
    type: System.Double
    description: X coordinate for the placement of the BOM table
  -
    name: Y
    type: System.Double
    description: Y coordinate for the placement of the BOM table
  -
    name: AnchorType
    type: System.Int32
    description: Anchor type as defined by swBomConfigurationAnchorType_e
  -
    name: BomType
    type: System.Int32
    description: Type of BOM table as defined by swBomType_e
  -
    name: Configuration
    type: System.String
    description: Name of the configuration for this BOM table (see Remarks )
  -
    name: TableTemplate
    type: System.String
    description: Path and filename of the template that you want to use that corresponds to this type of table (see Remarks )
  -
    name: Hidden
    type: System.Boolean
    description: True to hide the BOM table, false to show it
  -
    name: IndentedNumberingType
    type: System.Int32
    description: Type of numbering as defined by swNumberingType_e ; valid only for BomType = swBomType_e.swBomType_Indented
  -
    name: DetailedCutList
    type: System.Boolean
    description: True to show the detailed cut list, false to not
  -
    name: DissolvePartLevelRows
    type: System.Boolean
    description: True to dissolve part level rows, false to not; valid only when DetailedCutList is true
  -
    name: DisplayAsOneItem
    type: System.Boolean
    description: True to group into one item number, false to display separately
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IBomFeature.DissolvePartLevelRows
  - IBomFeature.NumberingTypeOnIndentedBOM
  - IModelDocExtension.InsertBomTable4
  - IView.GetKeepLinkedToBOM
  - IView.GetKeepLinkedToBOMName
  - IView.SetKeepLinkedToBOM
keywords:
  - anchors
  - see
  - also
  - itableanchor
  - bill
  - materials
  - drawing
  - views
  - insert
  - templates
  - iview
  - table
  - bom
  - view
  - insertbomtable6
  - table6
  - use
  - anchor
  - point
  - boolean
  - double
  - type
  - int32
  - configuration
  - string
  - template
  - hidden
  - indented
  - numbering
  - detailed
  - cut
  - list
  - dissolve
  - part
  - level
  - rows
  - display
  - one
  - item
  - object
  - subassembly
  - vba
  - vb
  - net
  - show
  - balloon
---

# IView.InsertBomTable6

Inserts a bill of materials (BOM) table for this drawing view using SOLIDWORKS table functionality.

## Signature

```csharp
System.Object InsertBomTable6( 
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
   System.Int32
BomType
,
   System.String
Configuration
,
   System.String
TableTemplate
,
   System.Boolean
Hidden
,
   System.Int32
IndentedNumberingType
,
   System.Boolean
DetailedCutList
,
   System.Boolean
DissolvePartLevelRows
,
   System.Boolean
DisplayAsOneItem
)
```
## Parameters

- `UseAnchorPoint` (System.Boolean): If true and the appropriate sheet format anchor point exists, then insert table at this point; if false, then use the values specified for the X and Y arguments as the insertion point
- `X` (System.Double): X coordinate for the placement of the BOM table
- `Y` (System.Double): Y coordinate for the placement of the BOM table
- `AnchorType` (System.Int32): Anchor type as defined by swBomConfigurationAnchorType_e
- `BomType` (System.Int32): Type of BOM table as defined by swBomType_e
- `Configuration` (System.String): Name of the configuration for this BOM table (see Remarks )
- `TableTemplate` (System.String): Path and filename of the template that you want to use that corresponds to this type of table (see Remarks )
- `Hidden` (System.Boolean): True to hide the BOM table, false to show it
- `IndentedNumberingType` (System.Int32): Type of numbering as defined by swNumberingType_e ; valid only for BomType = swBomType_e.swBomType_Indented
- `DetailedCutList` (System.Boolean): True to show the detailed cut list, false to not
- `DissolvePartLevelRows` (System.Boolean): True to dissolve part level rows, false to not; valid only when DetailedCutList is true
- `DisplayAsOneItem` (System.Boolean): True to group into one item number, false to display separately

## Return Value

BOM table annotation

## Remarks

If BomType is swBomType_TopLevelOnly, then do not specify Configuration. Instead, use
IBomFeature::GetConfigurations
and
IBomFeature::SetConfigurations
to work with configurations in BOM tables.
If the drawing was created using a configuration other than the Default configuration, then the configuration active at the time the drawing was created is the configuration used in the BOM table when an empty string is specified for the Configuration parameter.
BOM table templates are in the
install_dir
\
lang
\<
language
> folder and have a filename extension of
.sldbomtbt
. The template and table must be of the same type. For example, you could specify
C:\Program Files\SOLIDWORKS\lang\English\bom-standard.sldbomtbt
for TableTemplate if you wanted to insert an English-version of the standard BOM table template.
If the BOM table is a parts-only or indented-style BOM and the Configuration specified is invalid, then the BOM is not created.
If the
Restrict top-level only BOMs to one configuration
option on the
Document Properties > Tables > Bill of Materials
dialog or
IModelDocExtension::GetUserPreferenceToggle
(
swUserPreferenceToggle_e
.swOneConfigOnlyTopLevelBom) returns true, then only the active or default configuration of the drawing view is inserted in the BOM.
NOTE:
Use
IView::InsertBomTable
to insert a BOM using Microsoft Excel.

## Examples

- Dissolve Subassembly in a BOM Table (VBA) (Dissolve_Subassembly_in_a_BOM_Table_Example_VB.htm)
- Dissolve Subassembly in a BOM Table (VB.NET) (Dissolve_Subassembly_in_a_BOM_Table_Example_VBNET.htm)
- Dissolve Subassembly in a BOM Table (C#) (Dissolve_Subassembly_in_a_BOM_Table_Example_CSharp.htm)
- Insert and Show BOM Table and BOM Balloon (VBA) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_VB.htm)
- Insert and Show BOM Table and BOM Balloon (VB.NET) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_VBNET.htm)
- Insert and Show BOM Table and BOM Balloon (C#) (Insert_and_Show_BOM_Table_and_BOM_Balloon_Example_CSharp.htm)

## See Also

- `IBomFeature.DissolvePartLevelRows`
- `IBomFeature.NumberingTypeOnIndentedBOM`
- `IModelDocExtension.InsertBomTable4`
- `IView.GetKeepLinkedToBOM`
- `IView.GetKeepLinkedToBOMName`
- `IView.SetKeepLinkedToBOM`
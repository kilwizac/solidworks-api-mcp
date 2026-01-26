---
type: method
interface: IView
member: InsertBomTable4
returns: BomTableAnnotation
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
    description: True to show the detailed cut list, false to not; valid only for BomType = swBomType_e.swBomType_Indented
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IBomFeature.NumberingTypeOnIndentedBOM
  - IModelDocExtension.InsertBomTable3
  - IView.GetKeepLinkedToBOM
  - IView.GetKeepLinkedToBOMName
  - IView.SetKeepLinkedToBOM
keywords:
  - insertbomtable4
  - iview
  - view
  - insert
  - bom
  - table4
  - use
  - anchor
  - point
  - boolean
  - double
  - type
  - int32
  - configuration
  - string
  - table
  - template
  - hidden
  - indented
  - numbering
  - detailed
  - cut
  - list
  - annotation
---

# IView.InsertBomTable4

Obsolete. Superseded by IView::InsertBomTable5.

## Signature

```csharp
BomTableAnnotation InsertBomTable4( 
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
- `DetailedCutList` (System.Boolean): True to show the detailed cut list, false to not; valid only for BomType = swBomType_e.swBomType_Indented

## Return Value

BOM table annotation

## Remarks

If BomType is swBomType_TopLevelOnly, then do not specify Configuration. Instead, use
IBomFeature::GetConfigurations
or
IBomFeature::IGetConfigurations
and
IBomFeature::SetConfigurations
or
IBomFeature::ISetConfigurations
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
or
IView::IInsertBomTable
to insert a BOM using Microsoft Excel.

## See Also

- `IBomFeature.NumberingTypeOnIndentedBOM`
- `IModelDocExtension.InsertBomTable3`
- `IView.GetKeepLinkedToBOM`
- `IView.GetKeepLinkedToBOMName`
- `IView.SetKeepLinkedToBOM`
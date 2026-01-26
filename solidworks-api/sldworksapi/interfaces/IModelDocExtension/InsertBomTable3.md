---
type: method
interface: IModelDocExtension
member: InsertBomTable3
returns: BomTableAnnotation
parameters:
  -
    name: TemplateName
    type: System.String
    description: Path and name of BOM table template (see Remarks )
  -
    name: X
    type: System.Int32
    description: X coordinate for the placement of the BOM table
  -
    name: Y
    type: System.Int32
    description: Y coordinate for the placement of the BOM table
  -
    name: BomType
    type: System.Int32
    description: Type of BOM table as defined by swBomType_e
  -
    name: ConfigurationName
    type: System.String
    description: Name of the configuration for this BOM table (see Remarks )
  -
    name: Hidden
    type: System.Boolean
    description: True to hide the BOM table, false to show it
  -
    name: IndentedNumberingType
    type: System.Int32
    description: Type of numbering as defined by swNumberingType_e ; valid only if BomType = swBomType_e.swBomType_Indented
  -
    name: DetailedCutList
    type: System.Boolean
    description: True to show the detailed cut list, false to not; valid only if BomType = swBomType_e.swBomType_Indented
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.InsertGeneralTableAnnotation
  - IView.InsertBomTable4
keywords:
  - insertbomtable3
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - bom
  - table3
  - template
  - name
  - string
  - int32
  - type
  - configuration
  - hidden
  - boolean
  - indented
  - numbering
  - detailed
  - cut
  - list
  - table
  - annotation
---

# IModelDocExtension.InsertBomTable3

Obsolete. Superseded by IModelDocExtension::InsertBomTable4.

## Signature

```csharp
BomTableAnnotation InsertBomTable3( 
   System.String
TemplateName
,
   System.Int32
X
,
   System.Int32
Y
,
   System.Int32
BomType
,
   System.String
ConfigurationName
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

- `TemplateName` (System.String): Path and name of BOM table template (see Remarks )
- `X` (System.Int32): X coordinate for the placement of the BOM table
- `Y` (System.Int32): Y coordinate for the placement of the BOM table
- `BomType` (System.Int32): Type of BOM table as defined by swBomType_e
- `ConfigurationName` (System.String): Name of the configuration for this BOM table (see Remarks )
- `Hidden` (System.Boolean): True to hide the BOM table, false to show it
- `IndentedNumberingType` (System.Int32): Type of numbering as defined by swNumberingType_e ; valid only if BomType = swBomType_e.swBomType_Indented
- `DetailedCutList` (System.Boolean): True to show the detailed cut list, false to not; valid only if BomType = swBomType_e.swBomType_Indented

## Return Value

BOM table annotation

## Remarks

The system does not default to the Default configuration when you specify an empty string for Configuration. You must specify the configuration.
BOM table templates are in the <
SOLIDWORKS_
install_dir
>\
lang
\<
language
> folder and have a filename extension of
.sldbomtbt
. The template and table must be of the same type. For example, you could specify
C:\Program Files\SOLIDWORKS\lang\English\bom-standard.sldbomtbt
for TemplateName if you wanted to insert an English-version of the standard BOM table template.
If the BOM table is a parts-only or indented-style BOM and ConfigurationName is invalid, then the BOM is not created.

## See Also

- `IModelDocExtension.InsertGeneralTableAnnotation`
- `IView.InsertBomTable4`
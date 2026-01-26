---
type: method
interface: IModelDocExtension
member: InsertBomTable
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
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IView.InsertBomTable2
keywords:
  - insertbomtable
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - bom
  - table
  - template
  - name
  - string
  - int32
  - type
  - configuration
  - annotation
  - stacked
  - balloon
  - vb
  - net
  - vba
---

# IModelDocExtension.InsertBomTable

Obsolete. Superseded by IModelDocExtension::InsertBomTable2.

## Signature

```csharp
BomTableAnnotation InsertBomTable( 
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
)
```
## Parameters

- `TemplateName` (System.String): Path and name of BOM table template (see Remarks )
- `X` (System.Int32): X coordinate for the placement of the BOM table
- `Y` (System.Int32): Y coordinate for the placement of the BOM table
- `BomType` (System.Int32): Type of BOM table as defined by swBomType_e
- `ConfigurationName` (System.String): Name of the configuration for this BOM table (see Remarks )

## Return Value

BOM table annotation

## Remarks

The system will not default to the default configuration when you specify an empty string for Configuration. You must specify the configuration.
By default, the BOM table templates are in the <
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

## Examples

- Insert BOM Table and Stacked Balloon (VB.NET) (Insert_BOM_Table_and_Stacked_Balloon_Example_VBNET.htm)
- Insert BOM Table and Stacked Balloon (VBA) (Insert_BOM_Table_and_Stacked_Balloon_Example_VB.htm)

## See Also

- `IView.InsertBomTable2`
---
type: method
interface: IModelDocExtension
member: InsertBomTable2
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
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IView.InsertBomTable3
keywords:
  - insertbomtable2
  - imodeldocextension
  - model
  - doc
  - extension
  - insert
  - bom
  - table2
  - template
  - name
  - string
  - int32
  - type
  - configuration
  - hidden
  - boolean
  - table
  - annotation
---

# IModelDocExtension.InsertBomTable2

Obsolete. Superseded by IModelDocExtension::InsertBomTable3.

## Signature

```csharp
BomTableAnnotation InsertBomTable2( 
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
)
```
## Parameters

- `TemplateName` (System.String): Path and name of BOM table template (see Remarks )
- `X` (System.Int32): X coordinate for the placement of the BOM table
- `Y` (System.Int32): Y coordinate for the placement of the BOM table
- `BomType` (System.Int32): Type of BOM table as defined by swBomType_e
- `ConfigurationName` (System.String): Name of the configuration for this BOM table (see Remarks )
- `Hidden` (System.Boolean): True to hide the BOM table, false to show it

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

- `IView.InsertBomTable3`
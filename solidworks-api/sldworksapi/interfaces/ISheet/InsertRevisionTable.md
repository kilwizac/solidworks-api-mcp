---
type: method
interface: ISheet
member: InsertRevisionTable
returns: RevisionTableAnnotation
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: If true and the appropriate sheet format anchor point exists, then insert table at this point; if false, then use the values specified for the X and Y arguments as the insertion point
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
    description: Path and filename of the template that you want to use that corresponds to this type of table (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
related:
  - ISheet.RevisionTable
keywords:
  - insertrevisiontable
  - isheet
  - sheet
  - insert
  - revision
  - table
  - use
  - anchor
  - point
  - boolean
  - double
  - type
  - int32
  - template
  - string
  - annotation
---

# ISheet.InsertRevisionTable

Obsolete. Superseded by ISheet::InsertRevisionTable2.

## Signature

```csharp
RevisionTableAnnotation InsertRevisionTable( 
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
)
```
## Parameters

- `UseAnchorPoint` (System.Boolean): If true and the appropriate sheet format anchor point exists, then insert table at this point; if false, then use the values specified for the X and Y arguments as the insertion point
- `X` (System.Double): X coordinate for the placement of the revision table annotation
- `Y` (System.Double): Y coordinate for the placement of this revision table annotation
- `AnchorType` (System.Int32): Anchor type as defined by swBOMConfigurationAnchorType_e
- `TableTemplate` (System.String): Path and filename of the template that you want to use that corresponds to this type of table (see Remarks )

## Return Value

Revision table or null if a revision table on the sheet already exists

## Remarks

By default, the revision table templates are in the <
install_dir
>\
lang
\<
language
> folder and have a filename extension of
.sldrevtbt
. The template and table must be of the same type. For example, you would specify
C:\Program Files\SOLIDWORKS\lang\English\standard revision block.sldrevtbt
for TableTemplate if you wanted to insert an English-version of the revision block table template.

## See Also

- `ISheet.RevisionTable`
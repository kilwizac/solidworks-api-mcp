---
type: method
interface: IView
member: InsertHoleTable
returns: HoleTableAnnotation
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: If True and the appropriate sheet format anchor point exists, then insert table at this point; if false, then use the values specified for the X and Y arguments as the insertion point
  -
    name: X
    type: System.Double
    description: X coordinate for the placement of this hole table
  -
    name: Y
    type: System.Double
    description: Y coordinate for the placement of this hole table
  -
    name: AnchorType
    type: System.Int32
    description: Anchor type as defined by swBomConfigurationAnchorType_e
  -
    name: TableTemplate
    type: System.String
    description: Path and filename of the template that you want to use that corresponds to this type of table (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - insertholetable
  - iview
  - view
  - insert
  - hole
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

# IView.InsertHoleTable

Obsolete. Superseded by IView::InsertHoleTable2.

## Signature

```csharp
HoleTableAnnotation InsertHoleTable( 
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

- `UseAnchorPoint` (System.Boolean): If True and the appropriate sheet format anchor point exists, then insert table at this point; if false, then use the values specified for the X and Y arguments as the insertion point
- `X` (System.Double): X coordinate for the placement of this hole table
- `Y` (System.Double): Y coordinate for the placement of this hole table
- `AnchorType` (System.Int32): Anchor type as defined by swBomConfigurationAnchorType_e
- `TableTemplate` (System.String): Path and filename of the template that you want to use that corresponds to this type of table (see Remarks )

## Return Value

Hole table annotation

## Remarks

This method requires ordered preselection of various entities:
datum = 1
hole = 2
x axis = 4
y axis = 8
See
IModelDocExtension::SelectByID2
for details.
By default, the hole table templates are in the <
install_dir
>\
lang
\<
language
> folder and have a filename extension of
.sldholtbt
. The template and table must be of the same type. For example, you could specify
C:\Program Files\SOLIDWORKS\lang\English\standard hole table--letters.sldholetbt
for TableTemplate if you wanted to insert an English-version of the standard hole letters table template.
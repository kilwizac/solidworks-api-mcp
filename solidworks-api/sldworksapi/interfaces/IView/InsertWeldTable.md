---
type: method
interface: IView
member: InsertWeldTable
returns: System.Boolean
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: If true and the appropriate sheet format anchor point exists, then insert the table at the anchor point; if false, then use the values specified for the X and Y arguments as the insertion point
  -
    name: IncludeAnnotations
    type: System.Boolean
    description: True to include weld symbols not attached to cosmetic weld features, false to not
  -
    name: CombineSameType
    type: System.Boolean
    description: True to group welds having the same weld symbol and weld size, false to not
  -
    name: X
    type: System.Double
    description: X coordinate in meters for the placement of the weld table; valid only if UseAnchorPoint = False
  -
    name: Y
    type: System.Double
    description: Y coordinate in meters for the placement of the weld table; valid only if UseAnchorPoint = False
  -
    name: AnchorType
    type: System.Int32
    description: Anchor type as defined by swBomConfigurationAnchorType_e
  -
    name: Configuration
    type: System.String
    description: Name of the part configuration for which to insert the weld table
  -
    name: TableTemplate
    type: System.String
    description: Path and filename of the template that corresponds to this type of table (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - table
  - weld
  - drawing
  - views
  - see
  - also
  - iview
  - tables
  - view
  - insertweldtable
  - insert
  - use
  - anchor
  - point
  - boolean
  - include
  - annotations
  - combine
  - same
  - type
  - double
  - int32
  - configuration
  - string
  - template
  - vba
  - vb
  - net
---

# IView.InsertWeldTable

Inserts a weld table into this drawing view.

## Signature

```csharp
System.Boolean InsertWeldTable( 
   System.Boolean
UseAnchorPoint
,
   System.Boolean
IncludeAnnotations
,
   System.Boolean
CombineSameType
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
Configuration
,
   System.String
TableTemplate
)
```
## Parameters

- `UseAnchorPoint` (System.Boolean): If true and the appropriate sheet format anchor point exists, then insert the table at the anchor point; if false, then use the values specified for the X and Y arguments as the insertion point
- `IncludeAnnotations` (System.Boolean): True to include weld symbols not attached to cosmetic weld features, false to not
- `CombineSameType` (System.Boolean): True to group welds having the same weld symbol and weld size, false to not
- `X` (System.Double): X coordinate in meters for the placement of the weld table; valid only if UseAnchorPoint = False
- `Y` (System.Double): Y coordinate in meters for the placement of the weld table; valid only if UseAnchorPoint = False
- `AnchorType` (System.Int32): Anchor type as defined by swBomConfigurationAnchorType_e
- `Configuration` (System.String): Name of the part configuration for which to insert the weld table
- `TableTemplate` (System.String): Path and filename of the template that corresponds to this type of table (see Remarks )

## Return Value

True if successful, false if not

## Remarks

The weld table template installed with SOLIDWORKS is <
SOLIDWORKS_
install_dir
>\
lang
\<
language
>\
weldtable-standard.sldwldtbt
.

## Examples

- Insert Weld Table (VBA) (Insert_Weld_Table_Example_VB.htm)
- Insert Weld Table (VB.NET) (Insert_Weld_Table_Example_VBNET.htm)
- Insert Weld Table (C#) (Insert_Weld_Table_Example_CSharp.htm)
---
type: method
interface: IView
member: InsertWeldmentTable
returns: WeldmentCutListAnnotation
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: If true and the appropriate sheet format anchor point exists, then insert table at this point; if false, then use the values specified for the X and Y arguments as the insertion point
  -
    name: X
    type: System.Double
    description: X coordinate for the placement of the weldment cut-list table; valid only if UserAnchorPoint = False
  -
    name: Y
    type: System.Double
    description: Y coordinate for the placement of the weldment cut-list table; valid only if UseAnchorPoint = False
  -
    name: AnchorType
    type: System.Int32
    description: Anchor type as defined by swBomConfigurationAnchorType_e
  -
    name: Configuration
    type: System.String
    description: Name of the "As Welded" configuration for the weldment cut-list table
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
related:
  - IView.GetKeepLinkedToBOM
  - IView.GetKeepLinkedToBOMName
  - IView.SetKeepLinkedToBOM
keywords:
  - table
  - weldment
  - cut
  - list
  - drawing
  - views
  - see
  - also
  - iview
  - tables
  - view
  - lists
  - iweldmentcutlistfeature
  - insertweldmenttable
  - insert
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
  - annotation
  - vba
  - vb
  - net
---

# IView.InsertWeldmentTable

Inserts a weldment cut-list table into this drawing view.

## Signature

```csharp
WeldmentCutListAnnotation InsertWeldmentTable( 
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
Configuration
,
   System.String
TableTemplate
)
```
## Parameters

- `UseAnchorPoint` (System.Boolean): If true and the appropriate sheet format anchor point exists, then insert table at this point; if false, then use the values specified for the X and Y arguments as the insertion point
- `X` (System.Double): X coordinate for the placement of the weldment cut-list table; valid only if UserAnchorPoint = False
- `Y` (System.Double): Y coordinate for the placement of the weldment cut-list table; valid only if UseAnchorPoint = False
- `AnchorType` (System.Int32): Anchor type as defined by swBomConfigurationAnchorType_e
- `Configuration` (System.String): Name of the "As Welded" configuration for the weldment cut-list table
- `TableTemplate` (System.String): Path and filename of the template that corresponds to this type of table (see Remarks )

## Return Value

Weldment cut-list annotation

## Remarks

The weldment cut-list table template installed with SOLIDWORKS is <
SOLIDWORKS_
install_dir
>\
lang
\<
language
>\
cut list.sldwldtbt
.

## Examples

- Insert Weldment Cut List Table (VBA) (Insert_Weldment_Cut_List_Table_Example_VB.htm)
- Insert Weldment Cut List Table (VB.NET) (Insert_Weldment_Cut_List_Table_Example_VBNET.htm)
- Insert Weldment Cut List Table (C#) (Insert_Weldment_Cut_List_Table_Example_CSharp.htm)

## See Also

- `IView.GetKeepLinkedToBOM`
- `IView.GetKeepLinkedToBOMName`
- `IView.SetKeepLinkedToBOM`
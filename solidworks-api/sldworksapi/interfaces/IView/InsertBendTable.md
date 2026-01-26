---
type: method
interface: IView
member: InsertBendTable
returns: BendTableAnnotation
parameters:
  -
    name: UseAnchorPoint
    type: System.Boolean
    description: True to insert the bend table at the sheet format anchor point, false to insert it at the point specified by the X and Y parameters of this method
  -
    name: X
    type: System.Double
    description: X-coordinate for placement of the bend table; valid only when UseAnchorPoint is false
  -
    name: Y
    type: System.Double
    description: Y-coordinate for placement of the bend table; valid only when UseAnchorPoint is false
  -
    name: AnchorType
    type: System.Int32
    description: Anchor type as defined in swBomConfigurationAnchorType_e
  -
    name: StartValue
    type: System.String
    description: Starting datum tag; a value from A to Z for letter tags; a positive integer for number tags
  -
    name: TableTemplate
    type: System.String
    description: Full pathname of the template (e.g., install_dir \ lang\ language \ bendtable-standard.sldbndtbt )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IBendTable
  - IPartDoc.InsertBendTable
keywords:
  - table
  - bend
  - view
  - see
  - also
  - iview
  - tables
  - insertbendtable
  - insert
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
  - annotation
  - vba
  - vb
  - net
---

# IView.InsertBendTable

Inserts a bend table for this drawing view.

## Signature

```csharp
BendTableAnnotation InsertBendTable( 
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
TableTemplate
)
```
## Parameters

- `UseAnchorPoint` (System.Boolean): True to insert the bend table at the sheet format anchor point, false to insert it at the point specified by the X and Y parameters of this method
- `X` (System.Double): X-coordinate for placement of the bend table; valid only when UseAnchorPoint is false
- `Y` (System.Double): Y-coordinate for placement of the bend table; valid only when UseAnchorPoint is false
- `AnchorType` (System.Int32): Anchor type as defined in swBomConfigurationAnchorType_e
- `StartValue` (System.String): Starting datum tag; a value from A to Z for letter tags; a positive integer for number tags
- `TableTemplate` (System.String): Full pathname of the template (e.g., install_dir \ lang\ language \ bendtable-standard.sldbndtbt )

## Return Value

IBendTableAnnotation

## Examples

- Insert Bend Table (VBA) (Insert_Bend_Table_Example_VB.htm)
- Insert Bend Table (VB.NET) (Insert_Bend_Table_Example_VBNET.htm)
- Insert Bend Table (C#) (Insert_Bend_Table_Example_CSharp.htm)

## See Also

- `IBendTable`
- `IPartDoc.InsertBendTable`
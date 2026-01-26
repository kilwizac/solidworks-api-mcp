---
type: property
interface: ITableAnnotation
member: Anchored
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.SetPosition
  - ITableAnnotation.AnchorType
keywords:
  - anchors
  - see
  - also
  - itableanchor
  - tables
  - table
  - anchored
  - itableannotation
  - annotation
  - boolean
  - anchor
  - hole
  - vb
  - net
  - vba
readonly: null
---

# ITableAnnotation.Anchored

Gets or sets whether this table is attached to its anchor.

## Signature

```csharp
System.Boolean Anchored {get; set;}
```
## Parameters

None.

## Return Value

True if the table is attached to the anchor, false if not

## Remarks

If setting this property to TRUE, then the table origin is snapped to the anchor point, according to the anchor type of this table. Use:
ITableAnnotation::AnchorType
to determine where the origin is on the table.
IAnnotation::GetPosition
to determine the position of the table.
If the drawing sheet format does not contain an anchor point for this type of table, then attempting to attach the table to the anchor point has no effect.

## Examples

- Get and Set Table Anchor of Hole Table (C#) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_CSharp.htm)
- Get and Set Table Anchor of Hole Table (VB.NET) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_VBNET.htm)
- Get and Set Table Anchor of Hole Table (VBA) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_VB.htm)

## See Also

- `IAnnotation.SetPosition`
- `ITableAnnotation.AnchorType`
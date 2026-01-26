---
type: method
interface: IBomTableAnnotation
member: Collapse
returns: void
parameters:
  -
    name: CollapseType
    type: System.Int32
    description: Type of item to collapse as defined in swBOMTableObjectType_e (see Remarks )
  -
    name: Index
    type: System.Int32
    description: Row index; valid only if CollapseType is swBOMTableObjectType_e.swBOMTableObjectType_RowIndex
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.Dissolve
  - IBomTableAnnotation.Expand
keywords:
  - bill
  - materials
  - collapse
  - ibomtableannotation
  - bom
  - table
  - annotation
  - type
  - int32
  - index
  - void
  - expand
  - dissolve
  - subassembly
  - vba
  - vb
  - net
---

# IBomTableAnnotation.Collapse

Collapses the specified item.

## Signature

```csharp
void Collapse( 
   System.Int32
CollapseType
,
   System.Int32
Index
)
```
## Parameters

- `CollapseType` (System.Int32): Type of item to collapse as defined in swBOMTableObjectType_e (see Remarks )
- `Index` (System.Int32): Row index; valid only if CollapseType is swBOMTableObjectType_e.swBOMTableObjectType_RowIndex

## Return Value

Unknown.

## Remarks

If CollapseType is swBOMTableObjectType_e.swBOMTableObjectType_CutList, then all cut lists in the table collapse.

## Examples

- Expand, Collapse, and Dissolve a Subassembly in a BOM Table (VBA) (Dissolve_Subassembly_in_a_BOM_Table_Example_VB.htm)
- Expand, Collapse, and Dissolve a Subassembly in a BOM Table (VB.NET) (Dissolve_Subassembly_in_a_BOM_Table_Example_VBNET.htm)
- Expand, Collapse, and Dissolve a Subassembly in a BOM Table (C#) (Dissolve_Subassembly_in_a_BOM_Table_Example_CSharp.htm)

## See Also

- `IBomTableAnnotation.Dissolve`
- `IBomTableAnnotation.Expand`
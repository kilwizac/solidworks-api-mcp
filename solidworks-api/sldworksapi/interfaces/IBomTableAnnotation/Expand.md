---
type: method
interface: IBomTableAnnotation
member: Expand
returns: void
parameters:
  -
    name: ExpandType
    type: System.Int32
    description: Type of item to expand as defined in swBOMTableObjectType_e
  -
    name: Index
    type: System.Int32
    description: Row index; valid only if ExpandType is swBOMTableObjectType_e.swBOMTableObjectType_RowIndex
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.Collapse
  - IBomTableAnnotation.Dissolve
keywords:
  - bill
  - materials
  - expand
  - ibomtableannotation
  - bom
  - table
  - annotation
  - type
  - int32
  - index
  - void
  - collapse
  - dissolve
  - subassembly
  - example
  - vba
  - vb
  - net
---

# IBomTableAnnotation.Expand

Expands the specified item.

## Signature

```csharp
void Expand( 
   System.Int32
ExpandType
,
   System.Int32
Index
)
```
## Parameters

- `ExpandType` (System.Int32): Type of item to expand as defined in swBOMTableObjectType_e
- `Index` (System.Int32): Row index; valid only if ExpandType is swBOMTableObjectType_e.swBOMTableObjectType_RowIndex

## Return Value

Unknown.

## Remarks

If ExpandType is swBOMTableObjectType_e.swBOMTableObjectType_CutList, then all cut lists in the table expand.

## Examples

- Expand, Collapse, and Dissolve Subassembly in a BOM Table Example (VBA) (Dissolve_Subassembly_in_a_BOM_Table_Example_VB.htm)
- Expand, Collapse, and Dissolve Subassembly in a BOM Table Example (VB.NET) (Dissolve_Subassembly_in_a_BOM_Table_Example_VBNET.htm)
- Expand, Collapse, and Dissolve Subassembly in a BOM Table Example (C#) (Dissolve_Subassembly_in_a_BOM_Table_Example_CSharp.htm)

## See Also

- `IBomTableAnnotation.Collapse`
- `IBomTableAnnotation.Dissolve`
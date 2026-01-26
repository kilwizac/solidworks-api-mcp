---
type: method
interface: IBomTableAnnotation
member: Dissolve
returns: System.Boolean
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: 1-based row index of the subassembly or weldment to dissolve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.Collapse
  - IBomTableAnnotation.Expand
  - IBomTableAnnotation.RestoreRestructuredComponents
keywords:
  - bill
  - materials
  - dissolve
  - ibomtableannotation
  - bom
  - table
  - annotation
  - row
  - index
  - int32
  - boolean
  - subassembly
  - vba
  - vb
  - net
---

# IBomTableAnnotation.Dissolve

Dissolves into individual components the subassembly or weldment at the specified row index of this BOM table annotation.

## Signature

```csharp
System.Boolean Dissolve( 
   System.Int32
RowIndex
)
```
## Parameters

- `RowIndex` (System.Int32): 1-based row index of the subassembly or weldment to dissolve

## Return Value

True if the subassembly or weldment is dissolved, false if not

## Examples

- Dissolve Subassembly in a BOM Table (VBA) (Dissolve_Subassembly_in_a_BOM_Table_Example_VB.htm)
- Dissolve Subassembly in a BOM Table (VB.NET) (Dissolve_Subassembly_in_a_BOM_Table_Example_VBNET.htm)
- Dissolve Subassembly in a BOM Table (C#) (Dissolve_Subassembly_in_a_BOM_Table_Example_CSharp.htm)

## See Also

- `IBomTableAnnotation.Collapse`
- `IBomTableAnnotation.Expand`
- `IBomTableAnnotation.RestoreRestructuredComponents`
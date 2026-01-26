---
type: method
interface: IBomTableAnnotation
member: RestoreRestructuredComponents
returns: System.Boolean
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: 1-based row index, if more than one subassembly or weldment are dissolved; 0, if only one subassembly or weldment is dissolved
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.Dissolve
keywords:
  - bill
  - materials
  - restore
  - dissolved
  - restorerestructuredcomponents
  - ibomtableannotation
  - bom
  - table
  - annotation
  - restructured
  - components
  - row
  - index
  - int32
  - boolean
  - dissolve
  - subassembly
  - vba
  - vb
  - net
---

# IBomTableAnnotation.RestoreRestructuredComponents

Restores the previously dissolved subassembly or weldment at the specified row index of this BOM table annotation.

## Signature

```csharp
System.Boolean RestoreRestructuredComponents( 
   System.Int32
RowIndex
)
```
## Parameters

- `RowIndex` (System.Int32): 1-based row index, if more than one subassembly or weldment are dissolved; 0, if only one subassembly or weldment is dissolved

## Return Value

True if the subassembly or weldment is restored, false if not

## Examples

- Dissolve Subassembly in a BOM Table (VBA) (Dissolve_Subassembly_in_a_BOM_Table_Example_VB.htm)
- Dissolve Subassembly in a BOM Table (VB.NET) (Dissolve_Subassembly_in_a_BOM_Table_Example_VBNET.htm)
- Dissolve Subassembly in a BOM Table (C#) (Dissolve_Subassembly_in_a_BOM_Table_Example_CSharp.htm)

## See Also

- `IBomTableAnnotation.Dissolve`
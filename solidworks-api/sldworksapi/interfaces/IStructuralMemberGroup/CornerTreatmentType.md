---
type: property
interface: IStructuralMemberGroup
member: CornerTreatmentType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberGroup.MiterMergeCondition
keywords:
  - cornertreatmenttype
  - istructuralmembergroup
  - structural
  - member
  - group
  - corner
  - treatment
  - type
  - int32
  - insert
  - weldment
  - vb
  - net
  - vba
readonly: null
---

# IStructuralMemberGroup.CornerTreatmentType

Gets and sets the type of corner treatment for this structural-member group.

## Signature

```csharp
System.Int32 CornerTreatmentType {get; set;}
```
## Parameters

None.

## Return Value

Type of corner treatment as defined in swSolidworksWeldmentEndCondOptions_e

## Remarks

This property is only available when
IStructuralMemberGroup::ApplyCornerTreatment
is true.

## Examples

- Insert Structural Weldment (C#) (Insert_Structural_Weldment_Example_CSharp.htm)
- Insert Structural Weldment (VB.NET) (Insert_Structural_Weldment_Example_VBNET.htm)
- Insert Structural Weldment (VBA) (Insert_Structural_Weldment_Example_VB.htm)

## See Also

- `IStructuralMemberGroup.MiterMergeCondition`
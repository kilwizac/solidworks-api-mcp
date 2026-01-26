---
type: property
interface: IStructuralMemberGroup
member: MiterMergeCondition
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IStructuralMemberGroup.ApplyCornerTreatment
keywords:
  - mitermergecondition
  - istructuralmembergroup
  - structural
  - member
  - group
  - miter
  - merge
  - condition
  - boolean
  - trimmed
  - bodies
  - vb
  - net
  - vba
readonly: null
---

# IStructuralMemberGroup.MiterMergeCondition

Get or set whether to merge miter trimmed bodies in this structural-member group.

## Signature

```csharp
System.Boolean MiterMergeCondition {get; set;}
```
## Parameters

None.

## Return Value

True to merge miter trimmed bodies, false to not

## Remarks

This property is only available when
IStructuralMemberGroup::CornerTreatmentType
is
swSolidworksWeldmentEndCondOptions_e
.swEndConditionMiter.

## Examples

- Merge Miter Trimmed Bodies (C#) (Merge_Miter_Trimmed_Bodies_Example_CSharp.htm)
- Merge Miter Trimmed Bodies (VB.NET) (Merge_Miter_Trimmed_Bodies_Example_VBNET.htm)
- Merge Miter Trimmed Bodies (VBA) (Merge_Miter_Trimmed_Bodies_Example_VB.htm)

## See Also

- `IStructuralMemberGroup.ApplyCornerTreatment`
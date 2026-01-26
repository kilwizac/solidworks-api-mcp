---
type: property
interface: IStructuralMemberGroup
member: MergeArcSegmentBodies
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - mergearcsegmentbodies
  - istructuralmembergroup
  - structural
  - member
  - group
  - merge
  - arc
  - segment
  - bodies
  - boolean
  - adjacent
  - vb
  - net
  - vba
readonly: null
---

# IStructuralMemberGroup.MergeArcSegmentBodies

Gets or sets whether to merge arc segment bodies with adjacent bodies in this structural-member group.

## Signature

```csharp
System.Boolean MergeArcSegmentBodies {get; set;}
```
## Parameters

None.

## Return Value

True to merge arc segment bodies with adjacent bodies, false to not

## Remarks

This property is valid for curved entities only. The arc segment and adjacent bodies must be tangent to merge.

## Examples

- Merge Arc Segment Bodies With Adjacent Bodies (C#) (Merge_Arc_Segment_Bodies_With_Adjacent_Bodies_Example_CSharp.htm)
- Merge Arc Segment Bodies With Adjacent Bodies (VB.NET) (Merge_Arc_Segment_Bodies_With_Adjacent_Bodies_Example_VBNET.htm)
- Merge Arc Segment Bodies With Adjacent Bodies (VBA) (Merge_Arc_Segment_Bodies_With_Adjacent_Bodies_Example_VB.htm)
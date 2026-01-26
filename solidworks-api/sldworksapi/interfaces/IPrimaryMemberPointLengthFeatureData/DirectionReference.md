---
type: property
interface: IPrimaryMemberPointLengthFeatureData
member: DirectionReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - directionreference
  - iprimarymemberpointlengthfeaturedata
  - primary
  - member
  - point
  - length
  - feature
  - data
  - direction
  - reference
  - object
readonly: null
---

# IPrimaryMemberPointLengthFeatureData.DirectionReference

Gets and sets the reference indicating the direction of this member.

## Signature

```csharp
System.Object DirectionReference {get; set;}
```
## Parameters

None.

## Return Value

IEdge or ISketchSegment

## Remarks

This property is:
required for 3D sketches.
valid only when
IPrimaryMemberPointLengthFeatureData::EndCondition
is
swPrimaryMemberPointLengthEndCondition_e
:
swPrimaryMemberPointLengthEndCondition_UpToPlane
swPrimaryMemberPointLengthEndCondition_Length
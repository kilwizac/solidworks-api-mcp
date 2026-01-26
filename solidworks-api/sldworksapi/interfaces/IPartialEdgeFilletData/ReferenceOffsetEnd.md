---
type: property
interface: IPartialEdgeFilletData
member: ReferenceOffsetEnd
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - parts
related: []
keywords:
  - referenceoffsetend
  - ipartialedgefilletdata
  - partial
  - edge
  - fillet
  - data
  - reference
  - offset
  - end
  - object
readonly: true
---

# IPartialEdgeFilletData.ReferenceOffsetEnd

Gets the offset reference for the end condition for this partial edge fillet.

## Signature

```csharp
System.Object ReferenceOffsetEnd {get;}
```
## Parameters

None.

## Return Value

Offset reference (2D/3D sketch point , reference point , planar face )

## Remarks

This property is valid only if
IPartialEdgeFilletData::EndCondition
is swSimpleFilletPartialEdgeCondition_e.PartialEdgeReferenceOffset.
Use
IPartialEdgeFilletData::ReferenceOffsetEndType
to get the type of object returned by this property.
To modify the reference offset for the end condition of the fillet after creation, you must call
IPartialEdgeFilletData::SetPartialFilletParameters
.
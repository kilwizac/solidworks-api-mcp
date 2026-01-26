---
type: property
interface: IPartialEdgeFilletData
member: ReferenceOffsetStart
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
  - referenceoffsetstart
  - ipartialedgefilletdata
  - partial
  - edge
  - fillet
  - data
  - reference
  - offset
  - start
  - object
readonly: true
---

# IPartialEdgeFilletData.ReferenceOffsetStart

Gets the offset reference for the start condition for this partial edge fillet.

## Signature

```csharp
System.Object ReferenceOffsetStart {get;}
```
## Parameters

None.

## Return Value

Offset reference (2D/3D sketch point , reference point , planar face )

## Remarks

This property is valid only if
IPartialEdgeFilletData::StartCondition
is  swSimpleFilletPartialEdgeCondition_e.PartialEdgeReferenceOffset.
Use
IPartialEdgeFilletData::ReferenceOffsetStartType
to get the type of object returned by this property.
To modify reference offset for the start condition of the fillet after creation, you must call
IPartialEdgeFilletData::SetPartialFilletParameters
.
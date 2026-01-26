---
type: property
interface: IDatumTag
member: LeaderOrientation
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - leaderorientation
  - idatumtag
  - datum
  - tag
  - leader
  - orientation
  - int32
readonly: null
---

# IDatumTag.LeaderOrientation

Gets or sets the orientation of the leader for a round datum tag.

## Signature

```csharp
System.Int32 LeaderOrientation {get; set;}
```
## Parameters

None.

## Return Value

Orientation as defined in swDatumGbLeaderStyle_e

## Remarks

Although you get or set this property at any time, this property only applies to round datum tags. If you use it when a square datum tag is shown, you will not see a value for the current display.
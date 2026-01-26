---
type: property
interface: IDatumTag
member: ForcedShoulder
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.Shoulder
keywords:
  - forcedshoulder
  - idatumtag
  - datum
  - tag
  - forced
  - shoulder
  - boolean
readonly: true
---

# IDatumTag.ForcedShoulder

Gets whether this datum tag has a forced shoulder on its leader.

## Signature

```csharp
System.Boolean ForcedShoulder {get;}
```
## Parameters

None.

## Return Value

True if the datum tag has a forced shoulder on its leader, false if not

## Remarks

If a square tag is attached to an edge that is not at a 0
or 90
angle, then the leader will always have a shoulder (bent leader). The user cannot remove the shoulder.

## See Also

- `IDatumTag.Shoulder`
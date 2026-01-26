---
type: property
interface: IDatumTag
member: Shoulder
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.ForcedShoulder
keywords:
  - shoulder
  - idatumtag
  - datum
  - tag
  - boolean
readonly: null
---

# IDatumTag.Shoulder

Gets whether there is a shoulder (or bend) in the leader for this datum tag.

## Signature

```csharp
System.Boolean Shoulder {get; set;}
```
## Parameters

None.

## Return Value

True if this datum tag has a shoulder, false if not

## Remarks

Although you get or set this property at any time, this property only applies to square datum tags. If you use it when a round datum tag is shown, you will not see a value for the current display.

## See Also

- `IDatumTag.ForcedShoulder`
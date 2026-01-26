---
type: method
interface: IMate2
member: RemoveMisalignment
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IMate2.ForceMisalignment
keywords:
  - removemisalignment
  - imate2
  - mate2
  - remove
  - misalignment
  - boolean
---

# IMate2.RemoveMisalignment

Removes the misaligned mate condition of this concentric mate.

## Signature

```csharp
System.Boolean RemoveMisalignment()
```
## Parameters

None.

## Return Value

True if the misaligned mate condition is successfully removed, false if not

## Remarks

After calling this method, one of the concentric mates may be unsolvable.

## See Also

- `IMate2.ForceMisalignment`
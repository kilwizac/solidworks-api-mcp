---
type: method
interface: IDatumOrigin
member: Reattach
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - reattach
  - idatumorigin
  - datum
  - origin
  - boolean
---

# IDatumOrigin.Reattach

Attaches the datum origin to a different entity.

## Signature

```csharp
System.Boolean Reattach()
```
## Parameters

None.

## Return Value

True if the datum origin is attached to a different entity, false if not

## Remarks

This method:
Lets you manipulate the datum origin. It attaches the datum origin to the currently selected entity.
Expects that only one entity (vertex, edge, or sketch point) is selected. That selected entity must be in the same view as the original entity to which the datum origin was attached.
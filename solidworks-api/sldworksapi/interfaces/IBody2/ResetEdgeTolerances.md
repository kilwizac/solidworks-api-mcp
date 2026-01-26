---
type: method
interface: IBody2
member: ResetEdgeTolerances
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - resetedgetolerances
  - ibody2
  - body2
  - reset
  - edge
  - tolerances
  - void
---

# IBody2.ResetEdgeTolerances

Resets the tolerance on all edges of this body.

## Signature

```csharp
void ResetEdgeTolerances()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Use this method if
IBody2::Operations2
or
IBody2::IOperations2
returns a non-manifold error. Then use IBody2::Operations2 or IBody2::IOperations2 again after using this method.
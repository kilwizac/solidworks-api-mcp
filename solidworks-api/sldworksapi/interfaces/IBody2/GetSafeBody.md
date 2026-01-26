---
type: method
interface: IBody2
member: GetSafeBody
returns: Body2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getsafebody
  - ibody2
  - body2
  - safe
  - body
---

# IBody2.GetSafeBody

Not implemented.

## Signature

```csharp
Body2 GetSafeBody()
```
## Parameters

None.

## Return Value

Pointer to the IBody2 object NOTE: This method is not yet implemented; thus, it will currently always return NULL.

## Remarks

To determine if a body is safe, use the
IBody2::IsSafe
property. This property is read-only and does not persist from session to session.
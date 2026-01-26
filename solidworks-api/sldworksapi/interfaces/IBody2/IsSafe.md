---
type: property
interface: IBody2
member: IsSafe
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - issafe
  - ibody2
  - body2
  - safe
  - boolean
readonly: true
---

# IBody2.IsSafe

Not implemented.

## Signature

```csharp
System.Boolean IsSafe {get;}
```
## Parameters

None.

## Return Value

True if the IBody2 object survived the rebuild, false if not NOTE: This property is not implemented; thus, it will always return false.

## Remarks

This property is read-only and does not persist from session to session.
To make a body safe, use
IBody2::GetSafeBody
.
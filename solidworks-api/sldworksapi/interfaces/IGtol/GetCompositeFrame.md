---
type: method
interface: IGtol
member: GetCompositeFrame
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getcompositeframe
  - igtol
  - gtol
  - composite
  - frame
  - boolean
---

# IGtol.GetCompositeFrame

Obsolete. Superseded by IGtol::GetCompositeFrame2.

## Signature

```csharp
System.Boolean GetCompositeFrame()
```
## Parameters

None.

## Return Value

True if the first two frames of this Gtol are in a composite frame, false if not

## Remarks

Gets whether the first two frames of this Gtol are in a composite frame. Use
IGtol::SetCompositeFrame
to set this value.
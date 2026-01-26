---
type: method
interface: IGtol
member: GetAttachPos
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.IGetAttachPos
keywords:
  - getattachpos
  - igtol
  - gtol
  - attach
  - pos
  - object
---

# IGtol.GetAttachPos

Gets the attachment point of the GTol.

## Signature

```csharp
System.Object GetAttachPos()
```
## Parameters

None.

## Return Value

Array (see Remarks )

## Remarks

This method is meaningful only if this GTol is attached.
Format of return value is the following array of doubles:
retval
[0] = X-coordinate of attachment point
retval
[1] = Y-coordinate of attachment point
retval
[2] = Z-coordinate of attachment point

## See Also

- `IGtol.IGetAttachPos`
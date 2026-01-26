---
type: method
interface: IGtol
member: IGetAttachPos
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetAttachPos
keywords:
  - igetattachpos
  - igtol
  - gtol
  - attach
  - pos
  - double
---

# IGtol.IGetAttachPos

Gets the attachment point of the GTol.

## Signature

```csharp
System.Double IGetAttachPos()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

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

- `IGtol.GetAttachPos`
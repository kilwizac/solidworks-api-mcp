---
type: method
interface: IGtol
member: GetPTZHeight
returns: System.String
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.SetPTZHeight
keywords:
  - getptzheight
  - igtol
  - gtol
  - ptz
  - height
  - string
---

# IGtol.GetPTZHeight

Obsolete. Superseded by IGtol::GetPTZHeight2.

## Signature

```csharp
System.String GetPTZHeight()
```
## Parameters

None.

## Return Value

Height of the projected tolerance zone (see Remarks )

## Remarks

This method returns the height of the projected tolerance zone as a string because it is a user-specified parameter that can be textual, numeric, or both types of data.

## See Also

- `IGtol.SetPTZHeight`
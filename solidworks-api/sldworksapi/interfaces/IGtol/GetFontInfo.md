---
type: method
interface: IGtol
member: GetFontInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.IGetFontInfo
keywords:
  - getfontinfo
  - igtol
  - gtol
  - font
  - info
  - object
---

# IGtol.GetFontInfo

Gets with the font information for this GTol.

## Signature

```csharp
System.Object GetFontInfo()
```
## Parameters

None.

## Return Value

Object containing the font information (see Remarks )

## Remarks

Format of return value is an array of doubles. Currently this consists only of a
line type index
.

## See Also

- `IGtol.IGetFontInfo`
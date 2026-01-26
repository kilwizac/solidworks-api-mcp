---
type: method
interface: IGtol
member: IGetFontInfo
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetFontInfo
keywords:
  - igetfontinfo
  - igtol
  - gtol
  - font
  - info
  - double
---

# IGtol.IGetFontInfo

Gets with the font information for this GTol.

## Signature

```csharp
System.Double IGetFontInfo()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Format of return value is an array of doubles. Currently this consists only of a
line type index
.

## See Also

- `IGtol.GetFontInfo`
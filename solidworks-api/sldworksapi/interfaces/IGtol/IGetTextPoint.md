---
type: method
interface: IGtol
member: IGetTextPoint
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetTextAngleAtIndex
  - IGtol.GetTextAtIndex
  - IGtol.GetTextCount
  - IGtol.GetTextFont
  - IGtol.GetTextHeightAtIndex
  - IGtol.GetTextInvertAtIndex
  - IGtol.GetTextPositionAtIndex
  - IGtol.GetTextRefPositionAtIndex
  - IGtol.IGetTextPositionAtIndex
keywords:
  - text
  - geometric
  - tolerancing
  - igettextpoint
  - igtol
  - gtol
  - point
  - double
---

# IGtol.IGetTextPoint

Gets the GTol text reference point, which is the upper-left corner of the bounding rectangle.

## Signature

```csharp
System.Double IGetTextPoint()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Format of return information is the following array of doubles:
retval
[0] = X-coordinate of text reference point
retval
[1] = Y-coordinate of text reference point
retval
[2] = Z-coordinate of text reference point

## See Also

- `IGtol.GetTextAngleAtIndex`
- `IGtol.GetTextAtIndex`
- `IGtol.GetTextCount`
- `IGtol.GetTextFont`
- `IGtol.GetTextHeightAtIndex`
- `IGtol.GetTextInvertAtIndex`
- `IGtol.GetTextPositionAtIndex`
- `IGtol.GetTextRefPositionAtIndex`
- `IGtol.IGetTextPositionAtIndex`
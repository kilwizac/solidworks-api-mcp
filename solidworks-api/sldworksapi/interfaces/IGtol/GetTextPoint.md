---
type: method
interface: IGtol
member: GetTextPoint
returns: System.Object
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
  - IGtol.IGetTextPoint
  - IGtol.IGetTextPositionAtIndex
keywords:
  - gettextpoint
  - igtol
  - gtol
  - text
  - point
  - object
---

# IGtol.GetTextPoint

Gets the GTol text reference point, which is the upper-left corner of the bounding rectangle.

## Signature

```csharp
System.Object GetTextPoint()
```
## Parameters

None.

## Return Value

Array (see Remarks )

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
- `IGtol.IGetTextPoint`
- `IGtol.IGetTextPositionAtIndex`
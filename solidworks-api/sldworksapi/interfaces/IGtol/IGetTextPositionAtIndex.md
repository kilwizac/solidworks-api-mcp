---
type: method
interface: IGtol
member: IGetTextPositionAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the piece of text
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
  - IGtol.GetTextPoint
  - IGtol.GetTextRefPositionAtIndex
  - IGtol.IGetTextPoint
keywords:
  - text
  - geometric
  - tolerancing
  - igettextpositionatindex
  - igtol
  - gtol
  - position
  - index
  - int32
  - double
---

# IGtol.IGetTextPositionAtIndex

Gets the reference position for the specified text item in this GTol (for example, upper-left, lower-left, center).

## Signature

```csharp
System.Double IGetTextPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the piece of text

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of doubles:
[
textPtX, textPtY, textPtZ
]
where the text position values are offset values from the origin of this
IGTol
object.

## See Also

- `IGtol.GetTextAngleAtIndex`
- `IGtol.GetTextAtIndex`
- `IGtol.GetTextCount`
- `IGtol.GetTextFont`
- `IGtol.GetTextHeightAtIndex`
- `IGtol.GetTextInvertAtIndex`
- `IGtol.GetTextPoint`
- `IGtol.GetTextRefPositionAtIndex`
- `IGtol.IGetTextPoint`
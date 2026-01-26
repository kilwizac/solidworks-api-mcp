---
type: method
interface: IDatumTag
member: GetTextAngleAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the text; index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.GetTextAtIndex
  - IDatumTag.GetTextCount
  - IDatumTag.GetTextHeightAtIndex
  - IDatumTag.GetTextInvertAtIndex
  - IDatumTag.GetTextPositionAtIndex
  - IDatumTag.GetTextRefPositionAtIndex
  - IDatumTag.IGetTextPositionAtIndex
keywords:
  - gettextangleatindex
  - idatumtag
  - datum
  - tag
  - text
  - angle
  - index
  - int32
  - double
---

# IDatumTag.GetTextAngleAtIndex

Gets the text angle for the specified text in this datum tag.

## Signature

```csharp
System.Double GetTextAngleAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text; index begins at 0

## Return Value

Text angle for the specified piece of text in radians measured CCW from the X-axis

## See Also

- `IDatumTag.GetTextAtIndex`
- `IDatumTag.GetTextCount`
- `IDatumTag.GetTextHeightAtIndex`
- `IDatumTag.GetTextInvertAtIndex`
- `IDatumTag.GetTextPositionAtIndex`
- `IDatumTag.GetTextRefPositionAtIndex`
- `IDatumTag.IGetTextPositionAtIndex`
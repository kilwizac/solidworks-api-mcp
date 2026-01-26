---
type: method
interface: IDatumTag
member: GetTextInvertAtIndex
returns: System.Int32
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
  - IDatumTag.GetTextAngleAtIndex
  - IDatumTag.GetTextAtIndex
  - IDatumTag.GetTextCount
  - IDatumTag.GetTextHeightAtIndex
  - IDatumTag.GetTextPositionAtIndex
  - IDatumTag.GetTextRefPositionAtIndex
  - IDatumTag.IGetTextPositionAtIndex
keywords:
  - gettextinvertatindex
  - idatumtag
  - datum
  - tag
  - text
  - invert
  - index
  - int32
---

# IDatumTag.GetTextInvertAtIndex

Gets the specified text item's invert flag.

## Signature

```csharp
System.Int32 GetTextInvertAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text; index begins at 0

## Return Value

Text item's invert flag

## Remarks

The invert flag specifies whether the text was mirrored (reflected) about the X axis. Any reflection is applied after text rotation.

## See Also

- `IDatumTag.GetTextAngleAtIndex`
- `IDatumTag.GetTextAtIndex`
- `IDatumTag.GetTextCount`
- `IDatumTag.GetTextHeightAtIndex`
- `IDatumTag.GetTextPositionAtIndex`
- `IDatumTag.GetTextRefPositionAtIndex`
- `IDatumTag.IGetTextPositionAtIndex`
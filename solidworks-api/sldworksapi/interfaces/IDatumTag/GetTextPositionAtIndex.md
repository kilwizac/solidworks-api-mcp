---
type: method
interface: IDatumTag
member: GetTextPositionAtIndex
returns: System.Object
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
  - IDatumTag.GetTextInvertAtIndex
  - IDatumTag.GetTextRefPositionAtIndex
  - IDatumTag.IGetTextPositionAtIndex
keywords:
  - gettextpositionatindex
  - idatumtag
  - datum
  - tag
  - text
  - position
  - index
  - int32
  - object
---

# IDatumTag.GetTextPositionAtIndex

Gets the text item's offset relative to note's text point.

## Signature

```csharp
System.Object GetTextPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text; index begins at 0

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles :
[
textPtX, textPtY, textPtZ
]
where these text position values are offset values from the origin of this datum tag object.

## See Also

- `IDatumTag.GetTextAngleAtIndex`
- `IDatumTag.GetTextAtIndex`
- `IDatumTag.GetTextCount`
- `IDatumTag.GetTextHeightAtIndex`
- `IDatumTag.GetTextInvertAtIndex`
- `IDatumTag.GetTextRefPositionAtIndex`
- `IDatumTag.IGetTextPositionAtIndex`
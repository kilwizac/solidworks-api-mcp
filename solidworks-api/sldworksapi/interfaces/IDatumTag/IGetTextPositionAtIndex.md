---
type: method
interface: IDatumTag
member: IGetTextPositionAtIndex
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
  - IDatumTag.GetTextAngleAtIndex
  - IDatumTag.GetTextAtIndex
  - IDatumTag.GetTextCount
  - IDatumTag.GetTextHeightAtIndex
  - IDatumTag.GetTextInvertAtIndex
  - IDatumTag.GetTextPositionAtIndex
keywords:
  - igettextpositionatindex
  - idatumtag
  - datum
  - tag
  - text
  - position
  - index
  - int32
  - double
---

# IDatumTag.IGetTextPositionAtIndex

Gets the text item's offset relative to note's text point.

## Signature

```csharp
System.Double IGetTextPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text; index begins at 0

## Return Value

Pointer to an array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles :
[
textPtX, textPtY, textPtZ
]
where these text position values are offset values from the origin of this datum tag object.
Call
IDatumTag::GetTextCount
before calling this method.

## See Also

- `IDatumTag.GetTextAngleAtIndex`
- `IDatumTag.GetTextAtIndex`
- `IDatumTag.GetTextCount`
- `IDatumTag.GetTextHeightAtIndex`
- `IDatumTag.GetTextInvertAtIndex`
- `IDatumTag.GetTextPositionAtIndex`
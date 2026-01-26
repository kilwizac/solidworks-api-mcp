---
type: method
interface: IDatumTargetSym
member: GetTextPositionAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the text index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTargetSym.GetTextAngleAtIndex
  - IDatumTargetSym.GetTextAtIndex
  - IDatumTargetSym.GetTextCount
  - IDatumTargetSym.GetTextHeightAtIndex
  - IDatumTargetSym.GetTextInvertAtIndex
  - IDatumTargetSym.GetTextRefPositionAtIndex
  - IDatumTargetSym.IGetTextPositionAtIndex
keywords:
  - gettextpositionatindex
  - idatumtargetsym
  - datum
  - target
  - sym
  - text
  - position
  - index
  - int32
  - object
---

# IDatumTargetSym.GetTextPositionAtIndex

Gets the offset for the text item relative to the text point of the note.

## Signature

```csharp
System.Object GetTextPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text index begins at 0

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
textPtX, textPtY, textPtZ
]
where these text position values are actually offset values from the origin of this datum target symbol.

## See Also

- `IDatumTargetSym.GetTextAngleAtIndex`
- `IDatumTargetSym.GetTextAtIndex`
- `IDatumTargetSym.GetTextCount`
- `IDatumTargetSym.GetTextHeightAtIndex`
- `IDatumTargetSym.GetTextInvertAtIndex`
- `IDatumTargetSym.GetTextRefPositionAtIndex`
- `IDatumTargetSym.IGetTextPositionAtIndex`
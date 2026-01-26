---
type: method
interface: IDatumTag
member: GetTextRefPositionAtIndex
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
  - IDatumTag.GetTextInvertAtIndex
  - IDatumTag.GetTextPositionAtIndex
  - IDatumTag.IGetTextPositionAtIndex
keywords:
  - gettextrefpositionatindex
  - idatumtag
  - datum
  - tag
  - text
  - ref
  - position
  - index
  - int32
---

# IDatumTag.GetTextRefPositionAtIndex

Gets the reference position of the specified text item in this datum tag.

## Signature

```csharp
System.Int32 GetTextRefPositionAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text; index begins at 0

## Return Value

Reference position of the specified text item as defined in swTextPosition_e

## See Also

- `IDatumTag.GetTextAngleAtIndex`
- `IDatumTag.GetTextAtIndex`
- `IDatumTag.GetTextCount`
- `IDatumTag.GetTextHeightAtIndex`
- `IDatumTag.GetTextInvertAtIndex`
- `IDatumTag.GetTextPositionAtIndex`
- `IDatumTag.IGetTextPositionAtIndex`
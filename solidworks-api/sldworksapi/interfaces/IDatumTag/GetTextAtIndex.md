---
type: method
interface: IDatumTag
member: GetTextAtIndex
returns: System.String
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
  - IDatumTag.GetTextCount
  - IDatumTag.GetTextHeightAtIndex
  - IDatumTag.GetTextInvertAtIndex
  - IDatumTag.GetTextPositionAtIndex
  - IDatumTag.GetTextRefPositionAtIndex
  - IDatumTag.IGetTextPositionAtIndex
keywords:
  - gettextatindex
  - idatumtag
  - datum
  - tag
  - text
  - index
  - int32
  - string
---

# IDatumTag.GetTextAtIndex

Gets the specified text from this datum tag.

## Signature

```csharp
System.String GetTextAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text; index begins at 0

## Return Value

Text string for the specified piece of text

## See Also

- `IDatumTag.GetTextAngleAtIndex`
- `IDatumTag.GetTextCount`
- `IDatumTag.GetTextHeightAtIndex`
- `IDatumTag.GetTextInvertAtIndex`
- `IDatumTag.GetTextPositionAtIndex`
- `IDatumTag.GetTextRefPositionAtIndex`
- `IDatumTag.IGetTextPositionAtIndex`
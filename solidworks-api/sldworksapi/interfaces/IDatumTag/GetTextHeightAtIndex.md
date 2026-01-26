---
type: method
interface: IDatumTag
member: GetTextHeightAtIndex
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
  - IDatumTag.GetTextInvertAtIndex
  - IDatumTag.GetTextPositionAtIndex
  - IDatumTag.GetTextRefPositionAtIndex
  - IDatumTag.IGetTextPositionAtIndex
keywords:
  - gettextheightatindex
  - idatumtag
  - datum
  - tag
  - text
  - height
  - index
  - int32
  - double
---

# IDatumTag.GetTextHeightAtIndex

Gets the height of the specified text in this datum tag.

## Signature

```csharp
System.Double GetTextHeightAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the text; index begins at 0

## Return Value

Height of the specified text in meters

## See Also

- `IDatumTag.GetTextAngleAtIndex`
- `IDatumTag.GetTextAtIndex`
- `IDatumTag.GetTextCount`
- `IDatumTag.GetTextInvertAtIndex`
- `IDatumTag.GetTextPositionAtIndex`
- `IDatumTag.GetTextRefPositionAtIndex`
- `IDatumTag.IGetTextPositionAtIndex`
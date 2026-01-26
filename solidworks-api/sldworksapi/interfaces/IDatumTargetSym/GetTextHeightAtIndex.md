---
type: method
interface: IDatumTargetSym
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
  - IDatumTargetSym.GetTextAngleAtIndex
  - IDatumTargetSym.GetTextAtIndex
  - IDatumTargetSym.GetTextCount
  - IDatumTargetSym.GetTextInvertAtIndex
  - IDatumTargetSym.GetTextPositionAtIndex
  - IDatumTargetSym.GetTextRefPositionAtIndex
  - IDatumTargetSym.IGetTextPositionAtIndex
keywords:
  - gettextheightatindex
  - idatumtargetsym
  - datum
  - target
  - sym
  - text
  - height
  - index
  - int32
  - double
---

# IDatumTargetSym.GetTextHeightAtIndex

Gets the height of the text for the specified text in this datum target symbol.

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

Height of the text for the specified text in meters

## See Also

- `IDatumTargetSym.GetTextAngleAtIndex`
- `IDatumTargetSym.GetTextAtIndex`
- `IDatumTargetSym.GetTextCount`
- `IDatumTargetSym.GetTextInvertAtIndex`
- `IDatumTargetSym.GetTextPositionAtIndex`
- `IDatumTargetSym.GetTextRefPositionAtIndex`
- `IDatumTargetSym.IGetTextPositionAtIndex`
---
type: method
interface: IDatumTargetSym
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
  - IDatumTargetSym.GetTextCount
  - IDatumTargetSym.GetTextHeightAtIndex
  - IDatumTargetSym.GetTextInvertAtIndex
  - IDatumTargetSym.GetTextPositionAtIndex
  - IDatumTargetSym.GetTextRefPositionAtIndex
  - IDatumTargetSym.IGetTextPositionAtIndex
keywords:
  - gettextangleatindex
  - idatumtargetsym
  - datum
  - target
  - sym
  - text
  - angle
  - index
  - int32
  - double
---

# IDatumTargetSym.GetTextAngleAtIndex

Gets the text angle for the specified text in this datum target symbol.

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

Text angle for the specified text in radians measured CCW from the X axis

## See Also

- `IDatumTargetSym.GetTextCount`
- `IDatumTargetSym.GetTextHeightAtIndex`
- `IDatumTargetSym.GetTextInvertAtIndex`
- `IDatumTargetSym.GetTextPositionAtIndex`
- `IDatumTargetSym.GetTextRefPositionAtIndex`
- `IDatumTargetSym.IGetTextPositionAtIndex`
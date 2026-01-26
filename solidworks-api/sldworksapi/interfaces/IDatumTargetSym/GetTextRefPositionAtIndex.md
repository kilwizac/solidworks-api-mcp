---
type: method
interface: IDatumTargetSym
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
  - IDatumTargetSym.GetTextAngleAtIndex
  - IDatumTargetSym.GetTextAtIndex
  - IDatumTargetSym.GetTextCount
  - IDatumTargetSym.GetTextHeightAtIndex
  - IDatumTargetSym.GetTextInvertAtIndex
  - IDatumTargetSym.GetTextPositionAtIndex
  - IDatumTargetSym.IGetTextPositionAtIndex
keywords:
  - gettextrefpositionatindex
  - idatumtargetsym
  - datum
  - target
  - sym
  - text
  - ref
  - position
  - index
  - int32
---

# IDatumTargetSym.GetTextRefPositionAtIndex

Gets the reference position of the specified text item in this datum target symbol.

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

Reference position as defined in swTextPosition_e

## See Also

- `IDatumTargetSym.GetTextAngleAtIndex`
- `IDatumTargetSym.GetTextAtIndex`
- `IDatumTargetSym.GetTextCount`
- `IDatumTargetSym.GetTextHeightAtIndex`
- `IDatumTargetSym.GetTextInvertAtIndex`
- `IDatumTargetSym.GetTextPositionAtIndex`
- `IDatumTargetSym.IGetTextPositionAtIndex`
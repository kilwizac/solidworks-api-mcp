---
type: method
interface: IDatumTargetSym
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
  - IDatumTargetSym.GetTextAngleAtIndex
  - IDatumTargetSym.GetTextAtIndex
  - IDatumTargetSym.GetTextCount
  - IDatumTargetSym.GetTextHeightAtIndex
  - IDatumTargetSym.GetTextPositionAtIndex
  - IDatumTargetSym.GetTextRefPositionAtIndex
  - IDatumTargetSym.IGetTextPositionAtIndex
keywords:
  - gettextinvertatindex
  - idatumtargetsym
  - datum
  - target
  - sym
  - text
  - invert
  - index
  - int32
---

# IDatumTargetSym.GetTextInvertAtIndex

Gets the invert flag for the specified text item.

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

Invert flag

## Remarks

The invert flag specifies whether the text is mirrored (reflected) about the X axis. SOLIDWORKS Design applies reflection after text rotation.

## See Also

- `IDatumTargetSym.GetTextAngleAtIndex`
- `IDatumTargetSym.GetTextAtIndex`
- `IDatumTargetSym.GetTextCount`
- `IDatumTargetSym.GetTextHeightAtIndex`
- `IDatumTargetSym.GetTextPositionAtIndex`
- `IDatumTargetSym.GetTextRefPositionAtIndex`
- `IDatumTargetSym.IGetTextPositionAtIndex`
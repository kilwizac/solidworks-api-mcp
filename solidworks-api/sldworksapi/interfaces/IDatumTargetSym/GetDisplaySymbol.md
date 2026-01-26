---
type: method
interface: IDatumTargetSym
member: GetDisplaySymbol
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTargetSym.GetDisplaySizeOutside
  - IDatumTargetSym.SetDisplay
keywords:
  - getdisplaysymbol
  - idatumtargetsym
  - datum
  - target
  - sym
  - display
  - symbol
  - boolean
---

# IDatumTargetSym.GetDisplaySymbol

Gets whether the datum target symbol is displayed.

## Signature

```csharp
System.Boolean GetDisplaySymbol()
```
## Parameters

None.

## Return Value

True if the datum target symbol is displayed, false if it is not

## Remarks

Use:
IDatumTargetSym::GetDisplayTargetArea
to determine whether the datum target area part of this annotation is displayed.
IDatumTargetSym::SetDisplay
to enable or disable the display of the target area or symbol.

## See Also

- `IDatumTargetSym.GetDisplaySizeOutside`
- `IDatumTargetSym.SetDisplay`
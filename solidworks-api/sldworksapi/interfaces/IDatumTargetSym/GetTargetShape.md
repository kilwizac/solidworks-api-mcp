---
type: method
interface: IDatumTargetSym
member: GetTargetShape
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTargetSym.GetDisplayTargetArea
  - IDatumTargetSym.GetTargetAreaSize
  - IDatumTargetSym.SetTargetArea
keywords:
  - gettargetshape
  - idatumtargetsym
  - datum
  - target
  - sym
  - shape
  - int32
---

# IDatumTargetSym.GetTargetShape

Gets the shape or style of the datum target area.

## Signature

```csharp
System.Int32 GetTargetShape()
```
## Parameters

None.

## Return Value

Target area shape or style as defined in swDatumTargetAreaShape_e

## Remarks

Use
IDatumTargetSym::SetTargetArea
to set the shape of the target area.

## See Also

- `IDatumTargetSym.GetDisplayTargetArea`
- `IDatumTargetSym.GetTargetAreaSize`
- `IDatumTargetSym.SetTargetArea`
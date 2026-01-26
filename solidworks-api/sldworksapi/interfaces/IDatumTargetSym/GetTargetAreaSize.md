---
type: method
interface: IDatumTargetSym
member: GetTargetAreaSize
returns: System.String
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: 0-based index indicating which size value to get (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTargetSym.GetDisplayTargetArea
  - IDatumTargetSym.SetTargetArea
keywords:
  - gettargetareasize
  - idatumtargetsym
  - datum
  - target
  - sym
  - area
  - size
  - which
  - one
  - int32
  - string
---

# IDatumTargetSym.GetTargetAreaSize

Gets the size of the datum target symbol area.

## Signature

```csharp
System.String GetTargetAreaSize( 
   System.Int32
WhichOne
)
```
## Parameters

- `WhichOne` (System.Int32): 0-based index indicating which size value to get (see Remarks )

## Return Value

Target area size (see Remarks )

## Remarks

Use
IDatumTargetSym::GetTargetShape
to get the style for the target area.
If the target area style for this symbol is a ...
Then...
Point
There is one size value, which might be empty. Retrieve the text using an index value of 0. SOLIDWORKS displays the text in the upper half of the symbol, preceded by a diameter character.
Circle
There is one size value. Retrieve the text using an index value of 0. SOLIDWORKS displays the text in the upper half of the symbol, preceded by a diameter character.
Rectangle
There are two size values. Retrieve the text using an index value of 0 and 1. SOLIDWORKS displays the texts in the upper half of the symbol, separated by an x character.
Use
IDatumTargetSym::SetTargetArea
to set the target area size.

## See Also

- `IDatumTargetSym.GetDisplayTargetArea`
- `IDatumTargetSym.SetTargetArea`
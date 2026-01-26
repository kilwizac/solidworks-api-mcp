---
type: method
interface: IDatumTargetSym
member: SetTargetArea
returns: System.Boolean
parameters:
  -
    name: Shape
    type: System.Int32
    description: Target area shape or style as defined in swDatumTargetAreaShape_e
  -
    name: Size1
    type: System.String
    description: Target area diameter or width (see Remarks )
  -
    name: Size2
    type: System.String
    description: Target area height (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - settargetarea
  - idatumtargetsym
  - datum
  - target
  - sym
  - area
  - shape
  - int32
  - size1
  - string
  - size2
  - boolean
---

# IDatumTargetSym.SetTargetArea

Sets the datum target area style and size.

## Signature

```csharp
System.Boolean SetTargetArea( 
   System.Int32
Shape
,
   System.String
Size1
,
   System.String
Size2
)
```
## Parameters

- `Shape` (System.Int32): Target area shape or style as defined in swDatumTargetAreaShape_e
- `Size1` (System.String): Target area diameter or width (see Remarks )
- `Size2` (System.String): Target area height (see Remarks )

## Return Value

True if the target area parameters were set successfully, false if they were not

## Remarks

If the target area style for this symbol is...
Then...
Point
There is one size value, which might be empty. Retrieve the text using an index value of 0. SOLIDWORKS displays the text in the upper half of the symbol, preceded by a diameter character.
Circle
There is one size value. Retrieve the text using an index value of 0. SOLIDWORKS displays the text in the upper half of the symbol, preceded by a diameter character.
Rectangle
There are two size values. Retrieve the text using an index value of 0 and 1. SOLIDWORKS displays the texts in the upper half of the symbol, separated by an x character.
If the specified target area style is not one of the values in swDatumTargetAreaShape_e, SOLIDWORKS does not modify the symbol, and the returns false.
Use
IDatumTargetSym::GetTargetShape
to get the target area style. Use
IDatumTargetSym::GetTargetAreaSize
to get the target area size.
To see the model or drawing changes, use
IModelDoc2::GraphicsRedraw2
to redraw your window.
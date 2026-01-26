---
type: method
interface: IDatumTargetSym
member: SetDisplay
returns: System.Boolean
parameters:
  -
    name: Symbol
    type: System.Boolean
    description: True displays the datum target symbol part of the annotation, false hides it
  -
    name: TargetArea
    type: System.Boolean
    description: True displays the datum target area part of the annotation, false hides it
  -
    name: SizeOutside
    type: System.Boolean
    description: True displays the datum target area size outside of the symbol, false displays it inside
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setdisplay
  - idatumtargetsym
  - datum
  - target
  - sym
  - display
  - symbol
  - boolean
  - area
  - size
  - outside
---

# IDatumTargetSym.SetDisplay

Sets the display characteristics of the datum target symbol.

## Signature

```csharp
System.Boolean SetDisplay( 
   System.Boolean
Symbol
,
   System.Boolean
TargetArea
,
   System.Boolean
SizeOutside
)
```
## Parameters

- `Symbol` (System.Boolean): True displays the datum target symbol part of the annotation, false hides it
- `TargetArea` (System.Boolean): True displays the datum target area part of the annotation, false hides it
- `SizeOutside` (System.Boolean): True displays the datum target area size outside of the symbol, false displays it inside

## Return Value

True if the display characteristics were set successfully, false if not

## Remarks

Use:
IDatumTargetSym::GetDisplaySymbol
to determine if the datum target symbol part of the annotation is displayed.
IDatumTargetSym::GetDisplayTargetArea
to determine if the datum target area part of the annotation is displayed.
IDatumTargetSym::GetDisplaySizeOutside
to determine whether the target area size is displayed inside or outside of the symbol.
To see the model or drawing changes caused by running this method, use
IModelDoc2::GraphicsRedraw2
to redraw your window.
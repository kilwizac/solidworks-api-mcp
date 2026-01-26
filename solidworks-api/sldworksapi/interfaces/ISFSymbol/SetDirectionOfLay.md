---
type: method
interface: ISFSymbol
member: SetDirectionOfLay
returns: System.Boolean
parameters:
  -
    name: Direction
    type: System.Int32
    description: Direction of lay value as defined in swSFLaySym_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - setdirectionoflay
  - isfsymbol
  - isf
  - symbol
  - direction
  - lay
  - int32
  - boolean
---

# ISFSymbol.SetDirectionOfLay

Sets the direction of lay value for this surface finish symbol.

## Signature

```csharp
System.Boolean SetDirectionOfLay( 
   System.Int32
Direction
)
```
## Parameters

- `Direction` (System.Int32): Direction of lay value as defined in swSFLaySym_e

## Return Value

True if the direction of lay value is set, false if not

## Remarks

If an invalid direction of lay value is specified, the symbol is not changed, and false is returned.
To see the model or drawing changes caused by running this method, you must redraw your window. See
IModelDoc2::GraphicsRedraw2
for details.
To get the direction of lay value, use
ISFSymbol::GetDirectionOfLay
.
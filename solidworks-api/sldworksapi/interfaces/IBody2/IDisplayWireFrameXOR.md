---
type: method
interface: IBody2
member: IDisplayWireFrameXOR
returns: void
parameters:
  -
    name: Part
    type: PartDoc
    description: Pointer to the part
  -
    name: Color
    type: System.Int32
    description: Color of part
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.DisplayWireFrameXOR
keywords:
  - temporary
  - bodies
  - idisplaywireframexor
  - ibody2
  - body2
  - display
  - wire
  - frame
  - xor
  - part
  - doc
  - color
  - int32
  - void
---

# IBody2.IDisplayWireFrameXOR

Displays a temporary body in the given part's context in XOR mode.

## Signature

```csharp
void IDisplayWireFrameXOR( 
   PartDoc
Part
,
   System.Int32
Color
)
```
## Parameters

- `Part` (PartDoc): Pointer to the part
- `Color` (System.Int32): Color of part

## Return Value

Unknown.

## See Also

- `IBody2.DisplayWireFrameXOR`
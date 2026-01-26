---
type: method
interface: IModelDoc2
member: LBDownAt
returns: void
parameters:
  -
    name: Flags
    type: System.Int32
    description: Any combination of: MK_CONTROL MK_LBUTTON MK_MBUTTON MK_RBUTTON MK_SHIFT
  -
    name: X
    type: System.Double
    description: X coordinate of position of cursor
  -
    name: Y
    type: System.Double
    description: Y coordinate of position of cursor
  -
    name: Z
    type: System.Double
    description: Z coordinate of position of cursor
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.DragTo
  - IModelDoc2.LBUpAt
  - IMouse
keywords:
  - left
  - mouse
  - button
  - see
  - also
  - imouse
  - buttons
  - lbdownat
  - imodeldoc2
  - model
  - doc2
  - lb
  - down
  - flags
  - int32
  - double
  - void
---

# IModelDoc2.LBDownAt

Generates a left mouse button press (down) event.

## Signature

```csharp
void LBDownAt( 
   System.Int32
Flags
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `Flags` (System.Int32): Any combination of: MK_CONTROL MK_LBUTTON MK_MBUTTON MK_RBUTTON MK_SHIFT
- `X` (System.Double): X coordinate of position of cursor
- `Y` (System.Double): Y coordinate of position of cursor
- `Z` (System.Double): Z coordinate of position of cursor

## Return Value

Unknown.

## See Also

- `IModelDoc2.DragTo`
- `IModelDoc2.LBUpAt`
- `IMouse`
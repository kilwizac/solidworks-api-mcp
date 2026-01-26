---
type: method
interface: IModelDoc2
member: LBUpAt
returns: void
parameters:
  -
    name: Flags
    type: System.Int32
    description: A ny combination of: MK_CONTROL MK_LBUTTON MK_MBUTTON MK_RBUTTON MK_SHIFT
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
  - IModelDoc2.LBDownAt
  - IMouse
keywords:
  - left
  - mouse
  - button
  - see
  - also
  - imouse
  - buttons
  - lbupat
  - imodeldoc2
  - model
  - doc2
  - lb
  - up
  - flags
  - int32
  - double
  - void
---

# IModelDoc2.LBUpAt

Generates a left-mouse button release (up) event.

## Signature

```csharp
void LBUpAt( 
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

- `Flags` (System.Int32): A ny combination of: MK_CONTROL MK_LBUTTON MK_MBUTTON MK_RBUTTON MK_SHIFT
- `X` (System.Double): X coordinate of position of cursor
- `Y` (System.Double): Y coordinate of position of cursor
- `Z` (System.Double): Z coordinate of position of cursor

## Return Value

Unknown.

## See Also

- `IModelDoc2.DragTo`
- `IModelDoc2.LBDownAt`
- `IMouse`
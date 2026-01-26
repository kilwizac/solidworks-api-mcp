---
type: method
interface: IModelDoc2
member: DragTo
returns: void
parameters:
  -
    name: Flags
    type: System.Int32
    description: Mouse-event flags as defined by the operating system. They can be combined to indicate the selection state. For example: Left-mouse button is pressed: 0x0001 Right-mouse button is pressed: 0x0002 Shift key is pressed: 0x0004 Ctrl key is pressed: 0x0008 Middle-mouse button is pressed: 0x0010
  -
    name: X
    type: System.Double
    description: X coordinate of end point
  -
    name: Y
    type: System.Double
    description: Y coordinate of end point
  -
    name: Z
    type: System.Double
    description: Z coordinate of end point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - points
  - end
  - drag
  - dragto
  - imodeldoc2
  - model
  - doc2
  - flags
  - int32
  - double
  - void
---

# IModelDoc2.DragTo

Drags the specified end point.

## Signature

```csharp
void DragTo( 
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

- `Flags` (System.Int32): Mouse-event flags as defined by the operating system. They can be combined to indicate the selection state. For example: Left-mouse button is pressed: 0x0001 Right-mouse button is pressed: 0x0002 Shift key is pressed: 0x0004 Ctrl key is pressed: 0x0008 Middle-mouse button is pressed: 0x0010
- `X` (System.Double): X coordinate of end point
- `Y` (System.Double): Y coordinate of end point
- `Z` (System.Double): Z coordinate of end point

## Return Value

Unknown.

## Remarks

This method is only valid for assemblies.
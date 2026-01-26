---
type: method
interface: IModelView
member: MoveMagnifyingGlass
returns: void
parameters:
  -
    name: Ptx
    type: System.Double
    description: x coordinate
  -
    name: Pty
    type: System.Double
    description: y coordinate
  -
    name: Ptz
    type: System.Double
    description: z coordinate
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.HideMagnifyingGlass
  - IModelView.ShowMagnifyingGlass
keywords:
  - magnifying
  - glass
  - movemagnifyingglass
  - imodelview
  - model
  - view
  - move
  - ptx
  - double
  - pty
  - ptz
  - void
---

# IModelView.MoveMagnifyingGlass

Moves Magnifying Glass tool to the specified coordinates.

## Signature

```csharp
void MoveMagnifyingGlass( 
   System.Double
Ptx
,
   System.Double
Pty
,
   System.Double
Ptz
)
```
## Parameters

- `Ptx` (System.Double): x coordinate
- `Pty` (System.Double): y coordinate
- `Ptz` (System.Double): z coordinate

## Return Value

Unknown.

## See Also

- `IModelView.HideMagnifyingGlass`
- `IModelView.ShowMagnifyingGlass`
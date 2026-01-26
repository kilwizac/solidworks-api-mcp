---
type: method
interface: IComponent2
member: GetDrawingComponent
returns: DrawingComponent
parameters:
  -
    name: ViewIn
    type: View
    description: Pointer to view from which to get the drawing component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - drawings
related: []
keywords:
  - components
  - see
  - also
  - icomponent2
  - drawings
  - getdrawingcomponent
  - component2
  - drawing
  - component
  - view
---

# IComponent2.GetDrawingComponent

Gets the drawing component for this component.

## Signature

```csharp
DrawingComponent GetDrawingComponent( 
   View
ViewIn
)
```
## Parameters

- `ViewIn` (View): Pointer to view from which to get the drawing component

## Return Value

Pointer to the IDrawingComponent object
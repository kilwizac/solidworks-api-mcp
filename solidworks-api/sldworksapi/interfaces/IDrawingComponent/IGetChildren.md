---
type: method
interface: IDrawingComponent
member: IGetChildren
returns: DrawingComponent
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of drawing component objects that are child components of this drawing component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingComponent.GetChildren
keywords:
  - children
  - drawing
  - components
  - igetchildren
  - idrawingcomponent
  - component
  - count
  - int32
---

# IDrawingComponent.IGetChildren

Gets the child components for this drawing component.

## Signature

```csharp
DrawingComponent IGetChildren( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of drawing component objects that are child components of this drawing component

## Return Value

Array of IDrawingComponent objects that are child components of the drawing component

## Remarks

This method traverses the referenced component tree in a given view. Use
IDrawingComponent::Visible
to get or set the visibility of individual components in the given view.
Before calling this method, call
IDrawingComponent::GetChildrenCount
to determine the size of the array.

## See Also

- `IDrawingComponent.GetChildren`
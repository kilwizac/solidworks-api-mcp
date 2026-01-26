---
type: method
interface: IView
member: GetVisibleDrawingComponents
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetVisibleComponents
  - IView.GetVisibleEntities2
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - components
  - view
  - getvisibledrawingcomponents
  - visible
  - object
---

# IView.GetVisibleDrawingComponents

Gets all of the unobscured drawing components in this drawing view of an assembly drawing.

## Signature

```csharp
System.Object GetVisibleDrawingComponents()
```
## Parameters

None.

## Return Value

Visible IDrawingComponent s in this drawing view

## Remarks

Visible components are components not completely obscured by other components in the view.
After calling this method to retrieve the visible drawing components, use
IDrawingComponent::Component
to get a component object that fully supports all of the
IComponent2
methods and properties.

## See Also

- `IView.GetVisibleComponents`
- `IView.GetVisibleEntities2`
---
type: method
interface: IView
member: GetVisibleComponents
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.EnumHiddenComponents2
  - IView.GetHiddenComponents
  - IView.GetVisibleComponentCount
  - IView.GetVisibleEntities
  - IView.GetVisibleEntityCount
  - IView.IGetVisibleComponents
  - IView.IGetVisibleEntities
keywords:
  - components
  - see
  - also
  - icomponent2
  - drawing
  - views
  - iview
  - view
  - getvisiblecomponents
  - visible
  - object
  - all
  - edges
  - component
  - vba
  - entities
---

# IView.GetVisibleComponents

Gets the visible components in this drawing view.

## Signature

```csharp
System.Object GetVisibleComponents()
```
## Parameters

None.

## Return Value

Visible components in this drawing view

## Remarks

Visible components are components not completely obscured by other components in the view.
NOTE: This method does not retrieve a complete component object. For example, the component returned by this method does not support
IComponent2::GetBodies3
(returns null). To retrieve a visible component that fully supports
IComponent2
methods and properties, call:
IView::GetVisibleDrawingComponents
IDrawingComponent::Component

## Examples

- Get All Edges in Visible Component in Drawing View (VBA) (Get_All_Edges_in_Visible_Component_in_Drawing_View_Example_VB.htm)
- Get All Visible Components in Drawing View (VBA) (Get_All_Visible_Components_in_Drawing_View_Example_VB.htm)
- Get Visible Components and Entities in Drawing View (VBA) (Get_Visible_Components_and_Entities_in_Drawing_View_Example_VB.htm)

## See Also

- `IView.EnumHiddenComponents2`
- `IView.GetHiddenComponents`
- `IView.GetVisibleComponentCount`
- `IView.GetVisibleEntities`
- `IView.GetVisibleEntityCount`
- `IView.IGetVisibleComponents`
- `IView.IGetVisibleEntities`
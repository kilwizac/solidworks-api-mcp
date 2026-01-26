---
type: method
interface: IView
member: IGetVisibleComponents
returns: Component2
parameters:
  -
    name: ViewComponentCount
    type: System.Int32
    description: Number of visible components
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.EnumHiddenComponents2
  - IView.GetHiddenComponents
  - IView.GetVisibleComponents
  - IView.GetVisibleEntities
  - IView.GetVisibleEntityCount
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
  - igetvisiblecomponents
  - visible
  - component
  - count
  - int32
  - component2
---

# IView.IGetVisibleComponents

Gets the visible components in this drawing view.

## Signature

```csharp
Component2 IGetVisibleComponents( 
   System.Int32
ViewComponentCount
)
```
## Parameters

- `ViewComponentCount` (System.Int32): Number of visible components

## Return Value

Visible components in this drawing view

## Remarks

Visible components are only those components not completely obscured by other components in the view.
Call
IView::GetVisibleComponentCount
before calling this method to get the value of ViewComponentCount.

## See Also

- `IView.EnumHiddenComponents2`
- `IView.GetHiddenComponents`
- `IView.GetVisibleComponents`
- `IView.GetVisibleEntities`
- `IView.GetVisibleEntityCount`
- `IView.IGetVisibleEntities`
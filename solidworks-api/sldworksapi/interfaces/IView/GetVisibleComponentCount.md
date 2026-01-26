---
type: method
interface: IView
member: GetVisibleComponentCount
returns: System.Int32
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
  - getvisiblecomponentcount
  - visible
  - component
  - count
  - int32
  - entities
  - vba
---

# IView.GetVisibleComponentCount

Gets the number of visible components in this drawing view.

## Signature

```csharp
System.Int32 GetVisibleComponentCount()
```
## Parameters

None.

## Return Value

Number of visible components

## Remarks

Visible components are components not completely obscured by other components in the view.
Call this method before calling
IView::IGetVisibleComponents
to get the size of the array for that method.

## Examples

- Get Visible Components and Entities in Drawing View (VBA) (Get_Visible_Components_and_Entities_in_Drawing_View_Example_VB.htm)

## See Also

- `IView.EnumHiddenComponents2`
- `IView.GetHiddenComponents`
- `IView.GetVisibleComponents`
- `IView.GetVisibleEntities`
- `IView.GetVisibleEntityCount`
- `IView.IGetVisibleEntities`
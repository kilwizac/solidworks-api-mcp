---
type: method
interface: IView
member: GetVisibleEntities
returns: System.Object
parameters:
  -
    name: LpViewComponent
    type: Component2
    description: Component from which to get EntityType
  -
    name: EntityType
    type: System.Int32
    description: Type of entity as defined in swViewEntityType_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.EnumHiddenComponents2
  - IView.GetHiddenComponents
  - IView.GetVisibleComponentCount
  - IView.GetVisibleComponents
  - IView.GetVisibleEntityCount
  - IView.IGetVisibleComponents
  - IView.IGetVisibleEntities
keywords:
  - getvisibleentities
  - iview
  - view
  - visible
  - entities
  - lp
  - component
  - component2
  - entity
  - type
  - int32
  - object
---

# IView.GetVisibleEntities

Obsolete. Superseded by IView::GetVisibleEntities2.

## Signature

```csharp
System.Object GetVisibleEntities( 
   Component2
LpViewComponent
,
   System.Int32
EntityType
)
```
## Parameters

- `LpViewComponent` (Component2): Component from which to get EntityType
- `EntityType` (System.Int32): Type of entity as defined in swViewEntityType_e

## Return Value

Array of the specified visible entities

## Remarks

Visible entities are only those entities not completely obscured by other entities in the view.

## See Also

- `IView.EnumHiddenComponents2`
- `IView.GetHiddenComponents`
- `IView.GetVisibleComponentCount`
- `IView.GetVisibleComponents`
- `IView.GetVisibleEntityCount`
- `IView.IGetVisibleComponents`
- `IView.IGetVisibleEntities`
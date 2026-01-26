---
type: method
interface: IView
member: IGetVisibleEntities
returns: Entity
parameters:
  -
    name: LpViewComponent
    type: Component2
    description: Component from which to get EntityType
  -
    name: EntityType
    type: System.Int32
    description: Type of entity as defined in swViewEntityType_e
  -
    name: ViewEntityCount
    type: System.Int32
    description: Number of specified visible entities
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
  - IView.GetVisibleEntities
  - IView.IGetVisibleComponents
keywords:
  - igetvisibleentities
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
  - count
---

# IView.IGetVisibleEntities

Obsolete. Superseded by IView::IGetVisibleEntities2.

## Signature

```csharp
Entity IGetVisibleEntities( 
   Component2
LpViewComponent
,
   System.Int32
EntityType
,
   System.Int32
ViewEntityCount
)
```
## Parameters

- `LpViewComponent` (Component2): Component from which to get EntityType
- `EntityType` (System.Int32): Type of entity as defined in swViewEntityType_e
- `ViewEntityCount` (System.Int32): Number of specified visible entities

## Return Value

Array of the specified visible entities

## Remarks

Visible entities are only those entities not completely obscured by other entities in the view.
Call
IView::GetVisibleEntityCount
before calling this method to get the value of ViewEntityCount.

## See Also

- `IView.EnumHiddenComponents2`
- `IView.GetHiddenComponents`
- `IView.GetVisibleComponentCount`
- `IView.GetVisibleComponents`
- `IView.GetVisibleEntities`
- `IView.IGetVisibleComponents`
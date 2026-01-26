---
type: method
interface: IView
member: GetVisibleEntityCount
returns: System.Int32
parameters:
  -
    name: LpViewComponent
    type: Component2
    description: Component from which to get the visible EntityType
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
  - IView.GetVisibleEntities
  - IView.IGetVisibleComponents
keywords:
  - getvisibleentitycount
  - iview
  - view
  - visible
  - entity
  - count
  - lp
  - component
  - component2
  - type
  - int32
---

# IView.GetVisibleEntityCount

Obsolete. Superseded by IView::GetVisibleEntityCount2.

## Signature

```csharp
System.Int32 GetVisibleEntityCount( 
   Component2
LpViewComponent
,
   System.Int32
EntityType
)
```
## Parameters

- `LpViewComponent` (Component2): Component from which to get the visible EntityType
- `EntityType` (System.Int32): Type of entity as defined in swViewEntityType_e

## Return Value

Number of specified entities in LpViewComponent

## Remarks

Visible entities are only those entities not completely obscured by other entities in the view.
Call this method before calling
IView::IGetVisibleEntities
to get the size of the array for that method.

## See Also

- `IView.EnumHiddenComponents2`
- `IView.GetHiddenComponents`
- `IView.GetVisibleComponentCount`
- `IView.GetVisibleComponents`
- `IView.GetVisibleEntities`
- `IView.IGetVisibleComponents`
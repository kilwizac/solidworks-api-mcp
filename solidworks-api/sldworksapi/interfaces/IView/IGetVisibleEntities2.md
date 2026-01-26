---
type: method
interface: IView
member: IGetVisibleEntities2
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
    description: Number of visible entities of EntityType in LpViewComponent
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
  - IView.GetVisibleComponents
  - IView.GetVisibleEntities2
  - IView.IGetVisibleComponents
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - entities
  - entity
  - ientity
  - view
  - igetvisibleentities2
  - visible
  - entities2
  - lp
  - component
  - component2
  - type
  - int32
  - count
---

# IView.IGetVisibleEntities2

Gets the visible entities of the specified type for the specified component in this drawing view.

## Signature

```csharp
Entity IGetVisibleEntities2( 
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
- `ViewEntityCount` (System.Int32): Number of visible entities of EntityType in LpViewComponent

## Return Value

In-process, unmanaged C++: Pointer to an array of visible entities VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Visible entities are entities that are not completely obscured by other entities in the view.
Call
IView::GetVisibleEntityCount2
before calling this method to get the value of ViewEntityCount.
The difference between this method and the now obsolete IView::IGetVisibleEntities method is that this method supports silhouette edges (EntityType = swViewEntityType_e.swViewEntityType_SilhouetteEdge).

## See Also

- `IView.EnumHiddenComponents2`
- `IView.GetHiddenComponents`
- `IView.GetVisibleComponentCount`
- `IView.GetVisibleComponents`
- `IView.GetVisibleEntities2`
- `IView.IGetVisibleComponents`
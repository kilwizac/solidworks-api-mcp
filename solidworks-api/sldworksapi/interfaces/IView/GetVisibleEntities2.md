---
type: method
interface: IView
member: GetVisibleEntities2
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
  - IView.GetVisibleDrawingComponents
  - IView.GetVisibleEntityCount2
  - IView.IGetVisibleComponents
  - IView.IGetVisibleEntities2
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
  - getvisibleentities2
  - visible
  - entities2
  - lp
  - component
  - component2
  - type
  - int32
  - object
  - components
  - vba
  - vb
  - net
---

# IView.GetVisibleEntities2

Gets the visible entities of the specified type for the specified component in this drawing view.

## Signature

```csharp
System.Object GetVisibleEntities2( 
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

Array of the visible entities of EntityType in LpViewComponent

## Remarks

Visible entities are entities that are not completely obscured by other entities in the view.
The difference between this method and the now obsolete IView::GetVisibleEntities method is that this method supports silhouette edges (EntityType = swViewEntityType_e.swViewEntityType_SilhouetteEdge).

## Examples

- Get Visible Components and Entities in Drawing View (VBA) (Get_Visible_Components_and_Entities_in_Drawing_View_Example_VB.htm)
- Get Visible Components and Entities in Drawing View (VB.NET) (Get_Visible_Components_and_Entites_in_a_Drawing_View_Example_VBNET.htm)
- Get Visible Components and Entities in Drawing View (C#) (Get_Visible_Components_and_Entites_in_a_Drawing_View_Example_CSharp.htm)

## See Also

- `IView.EnumHiddenComponents2`
- `IView.GetHiddenComponents`
- `IView.GetVisibleComponentCount`
- `IView.GetVisibleComponents`
- `IView.GetVisibleDrawingComponents`
- `IView.GetVisibleEntityCount2`
- `IView.IGetVisibleComponents`
- `IView.IGetVisibleEntities2`
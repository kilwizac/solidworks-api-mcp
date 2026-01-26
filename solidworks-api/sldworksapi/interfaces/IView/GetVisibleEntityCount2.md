---
type: method
interface: IView
member: GetVisibleEntityCount2
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
  - getvisibleentitycount2
  - visible
  - count2
  - lp
  - component
  - component2
  - type
  - int32
  - hide
  - show
  - all
  - edges
  - vb
  - net
  - vba
---

# IView.GetVisibleEntityCount2

Gets the number of visible entities of the specified type for the specified component in this drawing view.

## Signature

```csharp
System.Int32 GetVisibleEntityCount2( 
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

Number of visible entities of EntityType in LpViewComponent

## Remarks

Visible entities are entities that are not completely obscured by other entities in the view.
Call this method to get the size of the array returned by
IView::IGetVisibleEntities2
.
The difference between this method and the now obsolete IView::GetVisibleEntityCount method is that this method gets the correct number of silhouette edges (EntityType = swViewEntityType_e.swViewEntityType_SilhouetteEdge).

## Examples

- Hide and Show All Edges in Drawing View (C#) (Hide_and_Show_All_Ediges_in_Drawing_View_Example_CSharp.htm)
- Hide and Show All Edges in Drawing View (VB.NET) (Hide_and_Show_All_Ediges_in_Drawing_View_Example_VBNET.htm)
- Hide and Show All Edges in Drawing View (VBA) (Hide_and_Show_All_Edges_in_Drawing_View_Example_VB.htm)

## See Also

- `IView.EnumHiddenComponents2`
- `IView.GetHiddenComponents`
- `IView.GetVisibleComponentCount`
- `IView.GetVisibleComponents`
- `IView.GetVisibleEntities2`
- `IView.IGetVisibleComponents`
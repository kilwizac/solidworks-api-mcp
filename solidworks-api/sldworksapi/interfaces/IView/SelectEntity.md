---
type: method
interface: IView
member: SelectEntity
returns: System.Boolean
parameters:
  -
    name: Entity
    type: System.Object
    description: Entity
  -
    name: AppendFlag
    type: System.Boolean
    description: True appends the entity to the selection list, false replaces the selection list with the entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - selections
  - ui
related:
  - IModelDocExtension.SelectAll
  - IView.ISelectEntity
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - entities
  - view
  - entity
  - ientity
  - selectentity
  - select
  - object
  - append
  - flag
  - boolean
  - create
  - layer
  - selected
  - vba
  - dimension
  - edge
---

# IView.SelectEntity

Selects an entity in this drawing view.

## Signature

```csharp
System.Boolean SelectEntity( 
   System.Object
Entity
,
   System.Boolean
AppendFlag
)
```
## Parameters

- `Entity` (System.Object): Entity
- `AppendFlag` (System.Boolean): True appends the entity to the selection list, false replaces the selection list with the entity

## Return Value

Unknown.

## Examples

- Create Layer for Selected View (VBA) (Create_Layer_for_Selected_View_Example_VB.htm)
- Dimension Edge in Drawing (VBA) (Dimension_Edge_in_Drawing_Example_VB.htm)
- Select Entity in Drawing View (VBA) (Select_Entity_in_Drawing_View_Example_VB.htm)

## See Also

- `IModelDocExtension.SelectAll`
- `IView.ISelectEntity`
---
type: method
interface: IView
member: ISelectEntity
returns: System.Boolean
parameters:
  -
    name: Entity
    type: Entity
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
  - IView.SelectEntity
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
  - iselectentity
  - select
  - append
  - flag
  - boolean
---

# IView.ISelectEntity

Selects an entity in this drawing view.

## Signature

```csharp
System.Boolean ISelectEntity( 
   Entity
Entity
,
   System.Boolean
AppendFlag
)
```
## Parameters

- `Entity` (Entity): Entity
- `AppendFlag` (System.Boolean): True appends the entity to the selection list, false replaces the selection list with the entity

## Return Value

True if the entity was selected, false if not

## See Also

- `IModelDocExtension.SelectAll`
- `IView.SelectEntity`
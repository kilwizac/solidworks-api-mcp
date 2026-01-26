---
type: method
interface: IEntity
member: GetDrawingComponent
returns: DrawingComponent
parameters:
  -
    name: View
    type: View
    description: Name of the drawing view in which the entity resides
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - drawings
related: []
keywords:
  - getdrawingcomponent
  - ientity
  - entity
  - drawing
  - component
  - view
---

# IEntity.GetDrawingComponent

Gets the drawing component that owns this entity, if the entity is in a drawing view.

## Signature

```csharp
DrawingComponent GetDrawingComponent( 
   View
View
)
```
## Parameters

- `View` (View): Name of the drawing view in which the entity resides

## Return Value

IDrawingComponent object that owns the entity

## Remarks

If the drawing component is a child component of the referenced assembly, then the drawing component should be a child drawing component in the drawing component
c
onfiguration
i
n
t
he FeatureManager
design tree.
If the entity is in the view, then the drawing component is returned. If the entity is not in the view, then NULL is returned.
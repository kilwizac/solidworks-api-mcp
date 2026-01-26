---
type: method
interface: IRenderMaterial
member: AddEntity
returns: System.Boolean
parameters:
  -
    name: Entity
    type: System.Object
    description: Entity to which to add the appearance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRenderMaterial.GetEntities
  - IRenderMaterial.GetEntitiesCount
  - IRenderMaterial.IGetEntities
  - IRenderMaterial.RemoveAllEntities
keywords:
  - addentity
  - irendermaterial
  - render
  - material
  - add
  - entity
  - object
  - boolean
---

# IRenderMaterial.AddEntity

Adds the appearance to the specified entity.

## Signature

```csharp
System.Boolean AddEntity( 
   System.Object
Entity
)
```
## Parameters

- `Entity` (System.Object): Entity to which to add the appearance

## Return Value

True if the appearance is added to Entity, false if not

## Examples

- IRenderMaterial (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRenderMaterial)

## See Also

- `IRenderMaterial.GetEntities`
- `IRenderMaterial.GetEntitiesCount`
- `IRenderMaterial.IGetEntities`
- `IRenderMaterial.RemoveAllEntities`
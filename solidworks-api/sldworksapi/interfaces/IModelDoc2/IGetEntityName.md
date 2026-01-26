---
type: method
interface: IModelDoc2
member: IGetEntityName
returns: System.String
parameters:
  -
    name: Entity
    type: Entity
    description: Entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetEntityName
keywords:
  - edge
  - see
  - also
  - iedge
  - name
  - face
  - iface2
  - vertex
  - ivertex
  - entity
  - ientity
  - igetentityname
  - imodeldoc2
  - model
  - doc2
  - string
  - named
  - entities
---

# IModelDoc2.IGetEntityName

Gets the name of the specified face, edge, or vertex.

## Signature

```csharp
System.String IGetEntityName( 
   Entity
Entity
)
```
## Parameters

- `Entity` (Entity): Entity

## Return Value

Name of the entity

## Examples

- Get Entity Name (C++) (Get_Entity_Name_Example_CPlusPlus_COM.htm)
- Get Named Entities (C++) (Get_Named_Entities_Example_CPlusPlus_COM.htm)

## See Also

- `IModelDoc2.GetEntityName`
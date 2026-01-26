---
type: method
interface: IModelDoc2
member: GetEntityName
returns: System.String
parameters:
  -
    name: Entity
    type: System.Object
    description: Entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.IGetEntityName
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
  - getentityname
  - imodeldoc2
  - model
  - doc2
  - object
  - string
  - select
  - component
  - vba
---

# IModelDoc2.GetEntityName

Gets the name of the specified face, edge, or vertex.

## Signature

```csharp
System.String GetEntityName( 
   System.Object
Entity
)
```
## Parameters

- `Entity` (System.Object): Entity

## Return Value

Name of the entity

## Examples

- Select Component Face By Name (VBA) (Get_Component_Face_By_Name_Example_VB.htm)

## See Also

- `IModelDoc2.IGetEntityName`
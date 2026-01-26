---
type: method
interface: IPartDoc
member: IGetNamedEntities
returns: Entity
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of named entities
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IPartDoc.DeleteEntityName
  - IPartDoc.GetEntityByName
  - IPartDoc.GetEntityName
  - IPartDoc.GetNamedEntities
  - IPartDoc.GetNamedEntitiesCount
  - IPartDoc.IDeleteEntityName
  - IPartDoc.IGetEntityByName
  - IPartDoc.IGetEntityName
  - IPartDoc.SetEntityName
keywords:
  - parts
  - see
  - also
  - ipartdoc
  - entities
  - name
  - entity
  - ientity
  - igetnamedentities
  - part
  - doc
  - named
  - count
  - int32
---

# IPartDoc.IGetNamedEntities

Gets an array of names of named entities (face, edge, vertex, and so on) in this part.

## Signature

```csharp
Entity IGetNamedEntities( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of named entities

## Return Value

in-process, unmanaged C++: Pointer to an array of named entities VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IPartDoc::GetNamedEntitiesCount
before calling this method to get Count.

## Examples

- Get Named Entities (C++) (Get_Named_Entities_Example_CPlusPlus_COM.htm)

## See Also

- `IPartDoc.DeleteEntityName`
- `IPartDoc.GetEntityByName`
- `IPartDoc.GetEntityName`
- `IPartDoc.GetNamedEntities`
- `IPartDoc.GetNamedEntitiesCount`
- `IPartDoc.IDeleteEntityName`
- `IPartDoc.IGetEntityByName`
- `IPartDoc.IGetEntityName`
- `IPartDoc.SetEntityName`
---
type: method
interface: IPartDoc
member: GetNamedEntitiesCount
returns: System.Int32
parameters: []
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
  - getnamedentitiescount
  - part
  - doc
  - named
  - count
  - int32
  - vba
---

# IPartDoc.GetNamedEntitiesCount

Gets the number of named entities (face, edge, vertex, and so on) in this part.

## Signature

```csharp
System.Int32 GetNamedEntitiesCount()
```
## Parameters

None.

## Return Value

Number of named entities

## Remarks

Call this method before calling
IPartDoc::IGetNamedEntities
to determine the size of that method's array.

## Examples

- Get Named Entities (C++) (Get_Named_Entities_Example_CPlusPlus_COM.htm)
- Get Named Entities (VBA) (Get_Named_Entities_Example_VB.htm)

## See Also

- `IPartDoc.DeleteEntityName`
- `IPartDoc.GetEntityByName`
- `IPartDoc.GetEntityName`
- `IPartDoc.GetNamedEntities`
- `IPartDoc.IDeleteEntityName`
- `IPartDoc.IGetEntityByName`
- `IPartDoc.IGetEntityName`
- `IPartDoc.SetEntityName`
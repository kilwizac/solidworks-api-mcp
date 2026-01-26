---
type: method
interface: IPartDoc
member: SetEntityName
returns: System.Boolean
parameters:
  -
    name: Entity
    type: System.Object
    description: Entity
  -
    name: StringValue
    type: System.String
    description: Name of the entity
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
  - IPartDoc.IGetNamedEntities
  - IPartDoc.ISetEntityName
keywords:
  - entity
  - see
  - also
  - ientity
  - name
  - setentityname
  - ipartdoc
  - part
  - doc
  - object
  - string
  - value
  - boolean
  - select
  - rename
  - vba
  - cross
  - break
  - feature
  - data
  - sheet
  - metal
  - vb
  - net
---

# IPartDoc.SetEntityName

Sets the name of the entity if the entity does not have a name and the name is unique to the part.

## Signature

```csharp
System.Boolean SetEntityName( 
   System.Object
Entity
,
   System.String
StringValue
)
```
## Parameters

- `Entity` (System.Object): Entity
- `StringValue` (System.String): Name of the entity

## Return Value

True if name is set successfully, false if not

## Remarks

If the entity already has a name or the specified name is not unique to the part, then this method does not change the name and returns false.
This behavior is intended to prevent a program from accidentally renaming an entity that is referenced in some other location. For example, if an assembly contains a mate to a face on a part, then a name is automatically assigned to that face. If you were to change that name, then there is no guarantee that the mate is still valid. Therefore, when using entity names, you should first check to see if the entity is already named, and, if so, use the existing name. If no name exists for the entity, then you can name the entity.
You can explicitly delete an entity name using the
IPartDoc::DeleteEntityName
or
IPartDoc::IDeleteEntityName
method. You then have the option of renaming the item or using that name elsewhere. The method was provided because the action is already available in the core SOLIDWORKS Design software. However, you should recognize the possibility of reference failures as described.

## Examples

- Select and Rename Object (VBA) (Create_and_Rename_Objects_Example_VB.htm)
- Get Entity By Name (VBA) (Get_Entity_By_Name_Example.htm)
- Get Cross Break Feature Data in Sheet Metal Part (C#) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_CSharp.htm)
- Get Cross Break Feature Data in Sheet Metal Part (VB.NET) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_VBNET.htm)
- Get Cross Break Feature Data in Sheet Metal Part (VBA) (Get_Cross_Break_Feature_Data_in_Sheet_Metal_Part_Example_VB.htm)

## See Also

- `IPartDoc.DeleteEntityName`
- `IPartDoc.GetEntityByName`
- `IPartDoc.GetEntityName`
- `IPartDoc.GetNamedEntities`
- `IPartDoc.GetNamedEntitiesCount`
- `IPartDoc.IDeleteEntityName`
- `IPartDoc.IGetEntityByName`
- `IPartDoc.IGetEntityName`
- `IPartDoc.IGetNamedEntities`
- `IPartDoc.ISetEntityName`
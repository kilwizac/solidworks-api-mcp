---
type: method
interface: IEntity
member: FindAttribute
returns: System.Object
parameters:
  -
    name: AttributeDef
    type: System.Object
    description: Attribute definition you want to find
  -
    name: WhichOne
    type: System.Int32
    description: Instance of this type on this entity (0,1,2,3, and so on)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAttribute.GetDefinition
  - IAttributeDef.CreateInstance5
  - IBody2.FindAttribute
  - IComponent2.FindAttribute
  - IEntity.IFindAttribute
  - ISldWorks.DefineAttribute
keywords:
  - attribute
  - see
  - also
  - iattribute
  - find
  - findattribute
  - ientity
  - entity
  - def
  - object
  - which
  - one
  - int32
  - create
  - vba
  - delete
  - blended
  - faces
  - vb
  - net
---

# IEntity.FindAttribute

Finds an attribute on an entity.

## Signature

```csharp
System.Object FindAttribute( 
   System.Object
AttributeDef
,
   System.Int32
WhichOne
)
```
## Parameters

- `AttributeDef` (System.Object): Attribute definition you want to find
- `WhichOne` (System.Int32): Instance of this type on this entity (0,1,2,3, and so on)

## Return Value

Attribute instance

## Remarks

After you add an attribute instance to a face, edge, vertex, loop, feature, or document, you can retrieve the attribute for query or modification in several ways:
Because an attribute instance is a feature:
You can use any of the standard feature traversal functions (
IPartDoc::FeatureByName
,
IModelDoc2::FirstFeature
, and
IFeature::GetNextFeature
) to get the feature representation of the attribute. You can then use the Feature object that represents the attribute instance with
IFeature::GetSpecificFeature2
to get the underlying Attribute object.
It can be suppressed. Check its state by using
IAttribute::GetEntityState
(swIsEntitySuppressed).
If the user selected the attribute in the FeatureManager design tree, you can use standard selection control to get the Feature object for the attribute instance (
ISelectionMgr::GetSelectedObject6
) and call Feature::GetSpecificFeature2 to get the underlying attribute object.
If you traverse body topology, you can locate any Attribute object with a call to Entity::FindAttribute from the Entity object (for example, the face or edge). If the attribute instance was placed on the document, then you must use Feature::GetSpecificFeature2 to get back to it.
Always call
IAttribute::GetEntityState
to check if the attribute instance is valid and unambiguous.

## Examples

- Create Attribute (VBA) (Create_Attribute_Example_VB.htm)
- Delete Blended Faces (VBA) (Delete_Blended_Faces_Example_VB.htm)
- Delete Faces (VBA) (Delete_Faces_Example_VB.htm)
- Find Attribute (C#) (Find_Attribute_Example_CSharp.htm)
- Find Attribute (VB.NET) (Find_Attribute_Example_VBNET.htm)
- Find Attribute (VBA) (Find_Attribute_Example_VB.htm)

## See Also

- `IAttribute.GetDefinition`
- `IAttributeDef.CreateInstance5`
- `IBody2.FindAttribute`
- `IComponent2.FindAttribute`
- `IEntity.IFindAttribute`
- `ISldWorks.DefineAttribute`
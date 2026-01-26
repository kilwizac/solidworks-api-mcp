---
type: method
interface: IEntity
member: GetType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAnnotation.GetAttachedEntities2
  - IAttribute.GetEntity
  - IAttribute.GetEntityState
  - IAttribute.IGetEntity2
  - IComponent2.GetCorrespondingEntity
  - IComponent2.IGetCorrespondingEntity
keywords:
  - gettype
  - ientity
  - entity
  - type
  - int32
  - knit
  - surface
  - data
  - vba
  - mirror
  - solid
  - component
  - feature
  - vb
  - net
---

# IEntity.GetType

Gets the type of the entity.

## Signature

```csharp
System.Int32 GetType()
```
## Parameters

None.

## Return Value

Type of entity as defined in swSelectType_e

## Remarks

You can use this method to determine the entity type and the appropriate function calls allowed for the specific type. For example, if this entity is a face, you can call
IFace2::GetArea
. However, you cannot call
IEdge::GetCurve
or
IEdge::IGetCurve
because it is on
IEdge
object. COM implementations can also use QueryInterface to determine the underlying interface supported by this
IEntity
object.

## Examples

- Get Knit Surface Data (VBA) (Get_Knit_Surface_Data_Example_VB.htm)
- Get Mirror Solid Data (VBA) (Get_Mirror_Solid_Data_Example_VB.htm)
- Get Component from Feature (VBA) (Get_Component_from_Feature_Example_VB.htm)
- Get Component from Feature (VB.NET) (Get_Component_from_Feature_Example_VBNET.htm)
- Get Component from Feature (C#) (Get_Component_from_Feature_Example_CSharp.htm)

## See Also

- `IAnnotation.GetAttachedEntities2`
- `IAttribute.GetEntity`
- `IAttribute.GetEntityState`
- `IAttribute.IGetEntity2`
- `IComponent2.GetCorrespondingEntity`
- `IComponent2.IGetCorrespondingEntity`
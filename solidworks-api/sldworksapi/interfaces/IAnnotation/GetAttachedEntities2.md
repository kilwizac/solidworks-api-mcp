---
type: method
interface: IAnnotation
member: GetAttachedEntities2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetAttachedEntityCount2
  - IAnnotation.GetAttachedEntityTypes
  - IAnnotation.GetNext3
  - IAnnotation.GetType
  - IAnnotation.ISetAttachedEntities
  - IAnnotation.SetAttachedEntities
  - IAttribute.GetEntity
  - IAttribute.GetEntityState
  - IAttribute.IGetEntity2
  - IEntity
  - IEntity.GetSafeEntity
  - IFaultEntity.Entity2
  - IModelDocExtension.GetCorrespondingEntity
  - IPartDoc.GetEntityName
  - IPartDoc.GetNamedEntities
  - IView.GetVisibleEntities
keywords:
  - getattachedentities2
  - iannotation
  - annotation
  - attached
  - entities2
  - object
  - types
  - entities
  - selected
  - dimension
  - vba
  - bom
  - balloon
  - properties
  - vb
  - net
---

# IAnnotation.GetAttachedEntities2

Obsolete. Superseded by IAnnotation::GetAttachedEntities3.

## Signature

```csharp
System.Object GetAttachedEntities2()
```
## Parameters

None.

## Return Value

Array of objects

## Remarks

This method now supports all annotation types. See
IAnnotation::GetType
to determine the type of annotation.
The array returned by this function may contain one or more objects of varying type. To determine the corresponding object type in the IAnnotation::GetAttachedEntites2 array, see
IAnnotation::GetAttachedEntityTypes
. COM applications can use QueryInterface to obtain the specific object from the LPUNKNOWN pointer.
Object Type
Object Returned
swSelFACES
IFace2
swSelEDGES
IEdge
swSelVERTICES
IVertex
swSelSKETCHSEGS
ISketchSegment
swSelSKETCHPOINTS
ISketchPoint
swSelNOTHING
NULL (annotation is dangling or unsupported)
You can associate annotations with some items not listed in the previous table (for example, origins). If this annotation is attached to one or more of those entities, then SOLIDWORKS returns a corresponding NULL in one of the array positions and IAnnotation::GetAttachedEntityTypes indicates the unsupported entity by returning a corresponding swSelNOTHING value. COM applications that call
IAnnotation::GetAttachedEntityCount2
include the NULL value in the total count of associated entities.
Likewise, if an annotation has become disassociated from its geometry, then SOLIDWORKS returns a corresponding NULL in one of the array positions and
IAnnotation::GetAttachedEntityTypes
indicates the dangling item by returning a corresponding swSelNOTHING value.
If this annotation is not associated with any geometry (for example, a note without a leaderline), then SOLIDWORKS returns an empty array.

## Examples

- Get Types of Entities for Selected Dimension (VBA) (Get_Types_of_Entities_for_Selected_Dimension_Example_VB.htm)
- Get BOM Balloon Properties (C#) (Get_BOM_Balloon_Properties_Example_CSharp.htm)
- Get BOM Balloon Properties (VB.NET) (Get_BOM_Balloon_Properties_Example_VBNET.htm)
- Get BOM Balloon Properties (VBA) (Get_BOM_Balloon_Properties_Example_VB.htm)

## See Also

- `IAnnotation.GetAttachedEntityCount2`
- `IAnnotation.GetAttachedEntityTypes`
- `IAnnotation.GetNext3`
- `IAnnotation.GetType`
- `IAnnotation.ISetAttachedEntities`
- `IAnnotation.SetAttachedEntities`
- `IAttribute.GetEntity`
- `IAttribute.GetEntityState`
- `IAttribute.IGetEntity2`
- `IEntity`
- `IEntity.GetSafeEntity`
- `IFaultEntity.Entity2`
- `IModelDocExtension.GetCorrespondingEntity`
- `IPartDoc.GetEntityName`
- `IPartDoc.GetNamedEntities`
- `IView.GetVisibleEntities`
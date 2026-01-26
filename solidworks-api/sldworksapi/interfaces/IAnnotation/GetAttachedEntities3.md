---
type: method
interface: IAnnotation
member: GetAttachedEntities3
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetNext3
  - IAnnotation.ISetAttachedEntities
  - IAnnotation.SetAttachedEntities
keywords:
  - annotation
  - see
  - also
  - iannotation
  - entities
  - entity
  - ientity
  - annotations
  - getattachedentities3
  - attached
  - entities3
  - object
  - types
  - selected
  - vba
  - vb
  - net
  - select
  - silhouette
  - edge
  - note
  - attach
---

# IAnnotation.GetAttachedEntities3

Gets the entities to which this annotation is attached.

## Signature

```csharp
System.Object GetAttachedEntities3()
```
## Parameters

None.

## Return Value

Array of objects

## Remarks

This method now supports all annotation types. See
IAnnotation::GetType
to determine the type of annotation.
The array returned by this function may contain one or more objects of varying type. To determine the corresponding object type in the IAnnotation::GetAttachedEntites3 array, see
IAnnotation::GetAttachedEntityTypes
or
IAnnotation::IGetAttachedEntityTypes
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
swSelSilhouettes
ISilhouetteEdge
swSelNOTHING
NULL (annotation is dangling or unsupported)
You can associate annotations with some items not listed in the previous table (for example, origins). If this annotation is attached to one or more of those entities, then SOLIDWORKS returns a corresponding NULL in one of the array positions and IAnnotation::GetAttachedEntityTypes indicates the unsupported entity by returning a corresponding swSelNOTHING value. COM applications that call
IAnnotation::GetAttachedEntityCount3
include the NULL value in the total count of associated entities.
Likewise, if an annotation has become disassociated from its geometry, then SOLIDWORKS returns a corresponding NULL in one of the array positions and
IAnnotation::GetAttachedEntityTypes
indicates the dangling item by returning a corresponding swSelNOTHING value.
If this annotation is not associated with any geometry (for example, a note without a leaderline), then SOLIDWORKS returns an empty array.

## Examples

- Get Types of Entities Attached to Selected Annotation (VBA) (Get_Types_of_Entities_for_Selected_Dimension_Example_VB.htm)
- Get Types of Entities Attached to Selected Annotation (VB.NET) (Get_Types_of_Entities_for_Selected_Dimension_Example_VBNET.htm)
- Get Types of Entities Attached to Selected Annotation (C#) (Get_Types_of_Entities_for_Selected_Dimension_Example_CSharp.htm)
- Select Silhouette Edge Attached to Note (C#) (Select_Silhouette_Edge_Attached_to_Note_Example_CSharp.htm)
- Select Silhouette Edge Attached to Note (VB.NET) (Select_Silhouette_Edge_Attached_to_Note_Example_VBNET.htm)
- Select Silhouette Edge Attached to Note (VBA) (Select_Silhouette_Edge_Attached_to_Note_Example_VB.htm)
- Attach Annotation to Entity (C#) (Attach_Annotation_to_Entity_Example_CSharp.htm)
- Attach Annotation to Entity (VB.NET) (Attach_Annotation_to_Entity_Example_VBNET.htm)
- Attach Annotation to Entity (VBA) (Attach_Annotation_to_Entity_Example_VB.htm)

## See Also

- `IAnnotation.GetNext3`
- `IAnnotation.ISetAttachedEntities`
- `IAnnotation.SetAttachedEntities`
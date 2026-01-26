---
type: method
interface: IAnnotation
member: GetAttachedEntityTypes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.SetAttachedEntities
keywords:
  - getattachedentitytypes
  - iannotation
  - annotation
  - attached
  - entity
  - types
  - object
  - attach
  - vb
  - net
  - vba
---

# IAnnotation.GetAttachedEntityTypes

Gets the types of entities attached to this annotation.

## Signature

```csharp
System.Object GetAttachedEntityTypes()
```
## Parameters

None.

## Return Value

Array of longs or integers (see Long vs. Integer ) that indicate the attached entity types as defined in swSelectType_e

## Remarks

This method supports all annotation types. Use
IAnnotation::GetType
to determine the annotation type.
This method returns an array of longs or integers
indicating object types. The list of object types corresponds to the list of objects returned by
IAnnotation::GetAttachedEntities3
.
You can associate annotations with additional items not listed in
swSelectType_e
. If this annotation is attached to one or more entities not listed in swSelectType_e, then this method and
IAnnotation::IGetAttachedEntityTypes
return swSelNOTHING in a position in the array corresponding to the unlisted item.
IAnnotation::GetAttachedEntities3 indicates an unsupported entity by returning a null value in the position in the array corresponding to the unsupported entity. COM applications that call
IAnnotation::GetAttachedEntityCount3
include the null value in the total count of associated entities.
If an annotation is disassociated from its geometry (i.e., dangling), then IAnnotation::GetAttachedEntities3 returns a null value in the position in the array corresponding to the dangling item, and this method returns swSelNOTHING in the position in the array corresponding to the dangling item.
NOTE:
If this annotation is not associated with any geometry, then this method and IAnnotation::GetAttachedEntities3 return empty arrays.

## Examples

- Attach Annotation to Entity (C#) (Attach_Annotation_to_Entity_Example_CSharp.htm)
- Attach Annotation to Entity (VB.NET) (Attach_Annotation_to_Entity_Example_VBNET.htm)
- Attach Annotation to Entity (VBA) (Attach_Annotation_to_Entity_Example_VB.htm)

## See Also

- `IAnnotation.SetAttachedEntities`
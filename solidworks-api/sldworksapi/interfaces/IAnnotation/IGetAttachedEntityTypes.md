---
type: method
interface: IAnnotation
member: IGetAttachedEntityTypes
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - igetattachedentitytypes
  - iannotation
  - annotation
  - attached
  - entity
  - types
  - int32
---

# IAnnotation.IGetAttachedEntityTypes

Gets the types of all entities attached to this annotation.

## Signature

```csharp
System.Int32 IGetAttachedEntityTypes()
```
## Parameters

None.

## Return Value

in-process, in-process, unmanaged C++: Pointer to an array of longs that indicate the types of all entities attached to this annotation as defined in swSelectType_e VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

This method supports all annotation types. Use
IAnnotation::GetType
to determine the annotation type.
This method returns an array of longs or integers
indicating object types. The list of object types corresponds to the list of objects returned by
IAnnotation::IGetAttachedEntities
.
You can associate annotations with additional items not listed in
swSelectType_e
. If this annotation is attached to one or more entities not listed in swSelectType_e, then this method and
IAnnotation::GetAttachedEntityTypes
return swSelNOTHING in a position in the array corresponding to the unlisted item.
IAnnotation::IGetAttachedEntities indicates an unsupported entity by returning a null value in the position in the array corresponding to the unsupported entity. COM applications that call
IAnnotation::GetAttachedEntityCount3
include the null value in the total count of associated entities.
If an annotation is disassociated from its geometry (i.e., dangling), then IAnnotation::IGetAttachedEntities returns a null value in the position in the array corresponding to the dangling item, and this method returns swSelNOTHING in the position in the array corresponding to the dangling item.
NOTE:
If this annotation is not associated with any geometry, then this method and IAnnotation::IGetAttachedEntities return empty arrays.
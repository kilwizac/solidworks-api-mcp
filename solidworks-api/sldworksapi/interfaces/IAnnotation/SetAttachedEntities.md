---
type: method
interface: IAnnotation
member: SetAttachedEntities
returns: System.Boolean
parameters:
  -
    name: AttachedEnts
    type: System.Object
    description: Array of entities to attach this annotation to (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetAttachedEntities2
  - IAnnotation.ISetAttachedEntities
keywords:
  - setattachedentities
  - iannotation
  - annotation
  - attached
  - entities
  - ents
  - object
  - boolean
  - attach
  - entity
  - vb
  - net
  - vba
---

# IAnnotation.SetAttachedEntities

Attaches this annotation to the specified entities.

## Signature

```csharp
System.Boolean SetAttachedEntities( 
   System.Object
AttachedEnts
)
```
## Parameters

- `AttachedEnts` (System.Object): Array of entities to attach this annotation to (see Remarks )

## Return Value

True if the annotation is attached to the entities, false if not

## Remarks

Not all annotations can be attached to a different entity (i.e., face, edge, or vertex). Experiment with this method to determine which annotations can be attached to which entities.

## Examples

- Attach Annotation to Entity (C#) (Attach_Annotation_to_Entity_Example_CSharp.htm)
- Attach Annotation to Entity (VB.NET) (Attach_Annotation_to_Entity_Example_VBNET.htm)
- Attach Annotation to Entity (VBA) (Attach_Annotation_to_Entity_Example_VB.htm)

## See Also

- `IAnnotation.GetAttachedEntities2`
- `IAnnotation.ISetAttachedEntities`
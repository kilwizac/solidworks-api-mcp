---
type: method
interface: IAnnotation
member: ISetAttachedEntities
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of entities to which to attach this annotation
  -
    name: LpArr
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of entities to attach this annotation to (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetAttachedEntities2
  - IAnnotation.SetAttachedEntities
keywords:
  - isetattachedentities
  - iannotation
  - annotation
  - attached
  - entities
  - count
  - int32
  - lp
  - arr
  - object
  - boolean
---

# IAnnotation.ISetAttachedEntities

Attaches this annotation to the specified entities.

## Signature

```csharp
System.Boolean ISetAttachedEntities( 
   System.Int32
Count
,
   ref System.Object
LpArr
)
```
## Parameters

- `Count` (System.Int32): Number of entities to which to attach this annotation
- `LpArr` (System.Object): in-process, unmanaged C++: Pointer to an array of entities to attach this annotation to (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the annotation is attached to the entities, false if not

## Remarks

Not all annotations can be attached to a different entity (i.e., face, edge, or vertex). Experiment with this method to determine which annotations can be attached to which entities.

## See Also

- `IAnnotation.GetAttachedEntities2`
- `IAnnotation.SetAttachedEntities`
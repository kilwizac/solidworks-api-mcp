---
type: method
interface: IAnnotation
member: GetAttachedEntityCount2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetAttachedEntities2
  - IAnnotation.GetAttachedEntityTypes
  - IAnnotation.GetNext3
  - IAnnotation.GetType
  - IAnnotation.IGetAttachedEntityTypes
  - IAnnotation.ISetAttachedEntities
  - IAnnotation.SetAttachedEntities
keywords:
  - getattachedentitycount2
  - iannotation
  - annotation
  - attached
  - entity
  - count2
  - int32
---

# IAnnotation.GetAttachedEntityCount2

Obsolete. Superseded by IAnnotation::GetAtatchedEntityCount3.

## Signature

```csharp
System.Int32 GetAttachedEntityCount2()
```
## Parameters

None.

## Return Value

Number of entities to which this annotation is attached

## Remarks

This method supports all annotation types. See
IAnnotation::GetType
to determine the type of annotation.

## See Also

- `IAnnotation.GetAttachedEntities2`
- `IAnnotation.GetAttachedEntityTypes`
- `IAnnotation.GetNext3`
- `IAnnotation.GetType`
- `IAnnotation.IGetAttachedEntityTypes`
- `IAnnotation.ISetAttachedEntities`
- `IAnnotation.SetAttachedEntities`
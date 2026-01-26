---
type: method
interface: IAnnotation
member: GetAttachedEntityCount3
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetAttachedEntities3
  - IAnnotation.GetAttachedEntityTypes
  - IAnnotation.GetNext3
  - IAnnotation.GetType
  - IAnnotation.IGetAttachedEntityTypes
  - IAnnotation.ISetAttachedEntities
  - IAnnotation.SetAttachedEntities
keywords:
  - getattachedentitycount3
  - iannotation
  - annotation
  - attached
  - entity
  - count3
  - int32
---

# IAnnotation.GetAttachedEntityCount3

Gets the number of entities to which this annotation is attached.

## Signature

```csharp
System.Int32 GetAttachedEntityCount3()
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

- `IAnnotation.GetAttachedEntities3`
- `IAnnotation.GetAttachedEntityTypes`
- `IAnnotation.GetNext3`
- `IAnnotation.GetType`
- `IAnnotation.IGetAttachedEntityTypes`
- `IAnnotation.ISetAttachedEntities`
- `IAnnotation.SetAttachedEntities`
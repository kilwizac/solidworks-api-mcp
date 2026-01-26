---
type: property
interface: IAnnotation
member: OwnerType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - ownertype
  - iannotation
  - annotation
  - owner
  - type
  - int32
readonly: null
---

# IAnnotation.OwnerType

Gets the type of owner of this annotation.

## Signature

```csharp
System.Int32 OwnerType {get; set;}
```
## Parameters

None.

## Return Value

Type of owner of this annotation as defined in swAnnotationOwner_e

## Remarks

Use this property to determine if an annotation is located on drawing view, drawing sheet, drawing template, assembly, or part. Use
IAnnotation::Owner
to gain access to the owner of the annotation.
---
type: property
interface: IAnnotation
member: Owner
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - owner
  - iannotation
  - annotation
  - object
readonly: null
---

# IAnnotation.Owner

Gets the owner of this annotation.

## Signature

```csharp
System.Object Owner {get; set;}
```
## Parameters

None.

## Return Value

Object for the view, sheet, or model document

## Remarks

Use
IAnnotation::OwnerType
to determine if the annotation is located on a drawing view, drawing sheet, drawing template, assembly, or part.
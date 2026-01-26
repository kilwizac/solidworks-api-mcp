---
type: method
interface: IView
member: GetAnnotationsByType
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: Annotation type as defined by swAnnotationType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetAnnotations
  - IView.GetFirstAnnotation3
keywords:
  - view
  - see
  - also
  - iview
  - annotations
  - getannotationsbytype
  - type
  - int32
  - object
---

# IView.GetAnnotationsByType

Gets the annotations of the specified type in this view.

## Signature

```csharp
System.Object GetAnnotationsByType( 
   System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Annotation type as defined by swAnnotationType_e

## Return Value

Array of annotations

## See Also

- `IView.GetAnnotations`
- `IView.GetFirstAnnotation3`
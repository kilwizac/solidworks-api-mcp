---
type: method
interface: IModelDocExtension
member: GetAnnotationsByType
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: Annotation type as defined by swAnnotationType_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IModelDocExtension.GetAnnotationCount
  - IModelDocExtension.GetAnnotations
  - IView.GetAnnotationsByType
keywords:
  - annotation
  - see
  - also
  - iannotation
  - getannotationsbytype
  - imodeldocextension
  - model
  - doc
  - extension
  - annotations
  - type
  - int32
  - object
---

# IModelDocExtension.GetAnnotationsByType

Gets the annotations of the specified type in this document.

## Signature

```csharp
System.Object GetAnnotationsByType( 
   System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Annotation type as defined by swAnnotationType_e (see Remarks )

## Return Value

Array of annotations

## Remarks

This method does not support swAnnotationType_e.swCThread for parts and assemblies, because in those models cosmetic threads are added as sub-features of holes, not annotations.

## See Also

- `IModelDocExtension.GetAnnotationCount`
- `IModelDocExtension.GetAnnotations`
- `IView.GetAnnotationsByType`
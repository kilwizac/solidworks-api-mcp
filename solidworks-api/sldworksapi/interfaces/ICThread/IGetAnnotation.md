---
type: method
interface: ICThread
member: IGetAnnotation
returns: Annotation
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetNext3
  - ICThread.GetAnnotation
  - IModelDocExtension.GetAnnotations
  - IView.GetAnnotations
  - IView.GetFirstAnnotation3
  - IView.IGetAnnotations
keywords:
  - annotation
  - see
  - also
  - iannotation
  - cosmetic
  - threads
  - igetannotation
  - icthread
  - ic
  - thread
---

# ICThread.IGetAnnotation

Gets the annotation for this cosmetic thread.

## Signature

```csharp
Annotation IGetAnnotation()
```
## Parameters

None.

## Return Value

Pointer to the IAnnotation object

## Remarks

This method gets the owning IAnnotation object for this cosmetic thread. The IAnnotation object is a higher-level object that contains methods and properties that apply to all types of annotations.

## See Also

- `IAnnotation.GetNext3`
- `ICThread.GetAnnotation`
- `IModelDocExtension.GetAnnotations`
- `IView.GetAnnotations`
- `IView.GetFirstAnnotation3`
- `IView.IGetAnnotations`
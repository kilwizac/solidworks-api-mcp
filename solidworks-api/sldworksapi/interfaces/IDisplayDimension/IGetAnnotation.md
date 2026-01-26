---
type: method
interface: IDisplayDimension
member: IGetAnnotation
returns: Annotation
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetAnnotation
keywords:
  - igetannotation
  - idisplaydimension
  - display
  - dimension
  - annotation
---

# IDisplayDimension.IGetAnnotation

Gets the IAnnotation object for this specific annotation.

## Signature

```csharp
Annotation IGetAnnotation()
```
## Parameters

None.

## Return Value

Pointer to the IAnnotation object

## Remarks

The
IAnnotation
object is a higher-level object that contains methods that are general to all types of annotations.

## See Also

- `IDisplayDimension.GetAnnotation`
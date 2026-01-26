---
type: method
interface: ISFSymbol
member: IGetAnnotation
returns: Annotation
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ISFSymbol.GetAnnotation
keywords:
  - igetannotation
  - isfsymbol
  - isf
  - symbol
  - annotation
---

# ISFSymbol.IGetAnnotation

Gets the annotation for this surface finish symbol.

## Signature

```csharp
Annotation IGetAnnotation()
```
## Parameters

None.

## Return Value

Annotation

## Remarks

This method gets the owning
IAnnotation
object, which is a higher-level object that contains methods that are general to all types of annotations.

## See Also

- `ISFSymbol.GetAnnotation`
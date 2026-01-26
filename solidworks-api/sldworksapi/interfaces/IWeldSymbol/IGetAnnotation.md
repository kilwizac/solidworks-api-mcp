---
type: method
interface: IWeldSymbol
member: IGetAnnotation
returns: Annotation
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.GetAnnotation
keywords:
  - igetannotation
  - iweldsymbol
  - weld
  - symbol
  - annotation
---

# IWeldSymbol.IGetAnnotation

Gets the annotation for this weld symbol.

## Signature

```csharp
Annotation IGetAnnotation()
```
## Parameters

None.

## Return Value

Annotation

## Remarks

This method obtains the owning
IAnnotation
object, which is a higher-level object that contains methods that are general to all types of annotations.

## See Also

- `IWeldSymbol.GetAnnotation`
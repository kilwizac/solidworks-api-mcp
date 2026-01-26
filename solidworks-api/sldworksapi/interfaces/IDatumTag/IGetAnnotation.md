---
type: method
interface: IDatumTag
member: IGetAnnotation
returns: Annotation
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.GetAnnotation
keywords:
  - annotation
  - see
  - also
  - iannotation
  - datum
  - feature
  - symbols
  - igetannotation
  - idatumtag
  - tag
---

# IDatumTag.IGetAnnotation

Gets the IAnnotation object for this datum feature symbol annotation.

## Signature

```csharp
Annotation IGetAnnotation()
```
## Parameters

None.

## Return Value

Pointer to the IAnnotation object

## Remarks

The IAnnotation object is a higher-level object that contains methods that apply to all types of annotations.

## See Also

- `IDatumTag.GetAnnotation`
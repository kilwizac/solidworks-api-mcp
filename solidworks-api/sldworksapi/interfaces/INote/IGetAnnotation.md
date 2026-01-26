---
type: method
interface: INote
member: IGetAnnotation
returns: Annotation
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - INote.GetAnnotation
keywords:
  - annotation
  - see
  - also
  - iannotation
  - notes
  - note
  - inote
  - igetannotation
---

# INote.IGetAnnotation

Gets the annotation for this specific note.

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
object for this
INote
object. The IAnnotation object is a higher-level object that contains methods that are general to all types of annotations.

## See Also

- `INote.GetAnnotation`
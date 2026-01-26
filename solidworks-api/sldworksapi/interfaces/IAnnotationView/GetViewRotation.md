---
type: method
interface: IAnnotationView
member: GetViewRotation
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
  - ui
related:
  - IAnnotation.GetPlane
  - IAnnotationView.IGetViewRotation
keywords:
  - rotation
  - matrix
  - getviewrotation
  - iannotationview
  - annotation
  - view
  - object
---

# IAnnotationView.GetViewRotation

Gets the rotation matrix of the annotation view relative to the X-Y plane of the model.

## Signature

```csharp
System.Object GetViewRotation()
```
## Parameters

None.

## Return Value

Array of 9 doubles of the rotation matrix of the annotation view relative to the X-Y plane of the model

## See Also

- `IAnnotation.GetPlane`
- `IAnnotationView.IGetViewRotation`
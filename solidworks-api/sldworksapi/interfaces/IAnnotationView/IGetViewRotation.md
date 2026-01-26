---
type: method
interface: IAnnotationView
member: IGetViewRotation
returns: System.Double
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
  - IAnnotationView.GetViewRotation
keywords:
  - rotation
  - matrix
  - igetviewrotation
  - iannotationview
  - annotation
  - view
  - double
---

# IAnnotationView.IGetViewRotation

Gets the rotation matrix of the annotation view relative to the X-Y plane of the model.

## Signature

```csharp
System.Double IGetViewRotation()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of 9 doubles of the rotation matrix of the annotation view relative to the X-Y plane of the model VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `IAnnotation.GetPlane`
- `IAnnotationView.GetViewRotation`
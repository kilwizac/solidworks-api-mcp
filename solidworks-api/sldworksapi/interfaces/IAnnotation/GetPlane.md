---
type: method
interface: IAnnotation
member: GetPlane
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotationView.GetViewRotation
  - IAnnotationView.IGetViewRotation
  - IDisplayData.GetTextPlaneAtIndex
keywords:
  - rotation
  - matrix
  - getplane
  - iannotation
  - annotation
  - plane
  - object
  - move
  - annotations
  - notes
  - area
  - view
  - vb
  - net
  - vba
---

# IAnnotation.GetPlane

Gets the rotation matrix of the annotation relative to the X-Y plane of the model.

## Signature

```csharp
System.Object GetPlane()
```
## Parameters

None.

## Return Value

Array of 9 doubles of the rotation matrix of the annotation relative to the X-Y plane of the model

## Examples

- Move Annotations to Notes Area Annotation View (C#) (Move_Annotations_to_First_Annotation_View_Example_CSharp.htm)
- Move Annotations to Notes Area Annotation View (VB.NET) (Move_Annotations_to_First_Annotation_View_Example_VBNET.htm)
- Move Annotations to Notes Area Annotation View (VBA) (Move_Annotations_to_First_Annotation_View_Example_VB.htm)

## See Also

- `IAnnotationView.GetViewRotation`
- `IAnnotationView.IGetViewRotation`
- `IDisplayData.GetTextPlaneAtIndex`
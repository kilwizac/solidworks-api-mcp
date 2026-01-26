---
type: property
interface: IAnnotation
member: FrameLineStyle
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.FrameThickness
  - IAnnotation.FrameThicknessCustom
keywords:
  - annotation
  - see
  - also
  - iannotation
  - frames
  - frame
  - iframe
  - annotations
  - framelinestyle
  - line
  - style
  - int32
readonly: null
---

# IAnnotation.FrameLineStyle

Gets or sets the frame's line style for this annotation.

## Signature

```csharp
System.Int32 FrameLineStyle {get; set;}
```
## Parameters

None.

## Return Value

Frame's line style as defined by swLineStyles_e

## Remarks

IAnnotation::UseDocDispFrame
must be false for this property to have any effect.

## See Also

- `IAnnotation.FrameThickness`
- `IAnnotation.FrameThicknessCustom`
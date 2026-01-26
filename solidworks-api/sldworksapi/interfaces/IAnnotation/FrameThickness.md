---
type: property
interface: IAnnotation
member: FrameThickness
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.FrameLineStyle
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
  - framethickness
  - thickness
  - int32
readonly: null
---

# IAnnotation.FrameThickness

Gets or sets the frame's line thickness for this annotation.

## Signature

```csharp
System.Int32 FrameThickness {get; set;}
```
## Parameters

None.

## Return Value

Frame's line thickness as defined by swLineWeights_e

## Remarks

IAnnotation::UseDocDispFrame
must be false for this property to have any effect.

## See Also

- `IAnnotation.FrameLineStyle`
- `IAnnotation.FrameThicknessCustom`
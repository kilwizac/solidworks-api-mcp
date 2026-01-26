---
type: method
interface: ISketchEllipse
member: GetRotationDir
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - getrotationdir
  - isketchellipse
  - sketch
  - ellipse
  - rotation
  - dir
  - int32
---

# ISketchEllipse.GetRotationDir

Gets the rotation direction for this sketch ellipse segment.

## Signature

```csharp
System.Int32 GetRotationDir()
```
## Parameters

None.

## Return Value

Rotation direction (counterclockwise = 1, clockwise = -1)

## Remarks

This method determines the direction (counterclockwise or clockwise) that the sketch entity proceeds around the ellipse, beginning at its start point and ending at its ending point if the sketch entity is not a complete ellipse.
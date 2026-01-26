---
type: method
interface: ISketchArc
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
  - arcs
  - rotation
  - direction
  - getrotationdir
  - isketcharc
  - sketch
  - arc
  - dir
  - int32
---

# ISketchArc.GetRotationDir

Gets the rotation direction of this sketch arc.

## Signature

```csharp
System.Int32 GetRotationDir()
```
## Parameters

None.

## Return Value

Rotation direction with respect to the normal of the arc's sketch plane (counterclockwise = 1, clockwise = -1) (see Remarks )

## Remarks

This method determines the direction that the sketch proceeds around this arc, beginning at the arc's start point and ending at the arc's end point. The direction is with respect to the normal of the arc's sketch plane and not with respect to the viewer.
If the normal to the arc's sketch plane is...
And the normal to the arc is...
And this method returns...
It means that...
(0, 0, -1)
(0, 0, 1)
1 (counterclockwise)
With respect to its sketch plane's normal (from behind the screen), the arc travels counterclockwise from its start point to its end point.
Note that from the perspective of the viewer (in front of the screen), the arc travels clockwise from its start point to its end point.

## Examples

- ISketchArc (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchArc)
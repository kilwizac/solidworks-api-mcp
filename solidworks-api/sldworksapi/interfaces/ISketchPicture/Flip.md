---
type: method
interface: ISketchPicture
member: Flip
returns: System.Boolean
parameters:
  -
    name: SideToSide
    type: System.Boolean
    description: True to flip the picture side to side, false to flip the picture top to bottom (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - flip
  - isketchpicture
  - sketch
  - picture
  - side
  - boolean
---

# ISketchPicture.Flip

Flips the picture, in its same position, either side to side or top to bottom.

## Signature

```csharp
System.Boolean Flip( 
   System.Boolean
SideToSide
)
```
## Parameters

- `SideToSide` (System.Boolean): True to flip the picture side to side, false to flip the picture top to bottom (see Remarks )

## Return Value

True if the picture is flipped, false if not

## Remarks

If you flip the picture...
Then the
angle
...
side to side
remains the same and the
ISketchPicture::Flipped
property returns true.
top to bottom
increments by 180
and the ISketchPicture::Flipped property returns true.
side to side and top to bottom
rotates 180
and ISketchPicture::Flipped
returns false.

## Examples

- ISketchPicture (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPicture)
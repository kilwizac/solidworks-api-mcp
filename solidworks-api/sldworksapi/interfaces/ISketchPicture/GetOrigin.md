---
type: method
interface: ISketchPicture
member: GetOrigin
returns: void
parameters:
  -
    name: X
    type: System.Double
    description: x coordinate
  -
    name: Y
    type: System.Double
    description: y coordinate
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - ISketchPicture.SetOrigin
keywords:
  - getorigin
  - isketchpicture
  - sketch
  - picture
  - origin
  - double
  - void
---

# ISketchPicture.GetOrigin

Gets the origin of the picture on the sketch.

## Signature

```csharp
void GetOrigin( 
   out System.Double
X
,
   out System.Double
Y
)
```
## Parameters

- `X` (System.Double): x coordinate
- `Y` (System.Double): y coordinate

## Return Value

Unknown.

## Remarks

The coordinates in meters indicate the position of the lower-left corner of the picture in sketch space.

## See Also

- `ISketchPicture.SetOrigin`
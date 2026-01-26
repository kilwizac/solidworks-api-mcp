---
type: method
interface: ISketchPicture
member: SetOrigin
returns: System.Boolean
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
  - ISketchPicture.GetOrigin
keywords:
  - setorigin
  - isketchpicture
  - sketch
  - picture
  - origin
  - double
  - boolean
---

# ISketchPicture.SetOrigin

Sets the origin of the picture of the sketch.

## Signature

```csharp
System.Boolean SetOrigin( 
   System.Double
X
,
   System.Double
Y
)
```
## Parameters

- `X` (System.Double): x coordinate
- `Y` (System.Double): y coordinate

## Return Value

True if the origin is set, false if not

## Remarks

The coordinates in meters indicate the position of the lower-left corner of the picture in sketch space.

## See Also

- `ISketchPicture.GetOrigin`
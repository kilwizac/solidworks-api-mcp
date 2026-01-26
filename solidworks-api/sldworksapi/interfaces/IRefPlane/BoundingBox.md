---
type: property
interface: IRefPlane
member: BoundingBox
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRefPlane.IGetBoundingBox
keywords:
  - bounding
  - box
  - planes
  - boundingbox
  - irefplane
  - ref
  - plane
  - object
  - coordinates
  - vb
  - net
  - vba
readonly: true
---

# IRefPlane.BoundingBox

Gets the bounding box of the reference plane, the top-left and bottom-right points.

## Signature

```csharp
System.Object BoundingBox {get;}
```
## Parameters

None.

## Return Value

Array containing bounding box, always two (2) IMathpoint objects

## Examples

- Get Coordinates of the Plane's Bounding Box (C#) (Get_Coordinates_of_the_Plane's_Bounding_Box_Example_CSharp.htm)
- Get Coordinates of the Plane's Bounding Box (VB.NET) (Get_Coordinates_of_the_Plane's_Bounding_Box_Example_VBNET.htm)
- Get Coordinates of the Plane's Bounding Box (VBA) (Get_Coordinates_of_the_Plane's_Bounding_Box_Example_VB.htm)

## See Also

- `IRefPlane.IGetBoundingBox`
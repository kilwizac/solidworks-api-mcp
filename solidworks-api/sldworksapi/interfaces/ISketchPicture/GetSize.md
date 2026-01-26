---
type: method
interface: ISketchPicture
member: GetSize
returns: void
parameters:
  -
    name: Width
    type: System.Double
    description: Width of the picture in meters
  -
    name: Height
    type: System.Double
    description: Height of the picture in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - ISketchPicture.SetSize
keywords:
  - getsize
  - isketchpicture
  - sketch
  - picture
  - size
  - width
  - double
  - height
  - void
---

# ISketchPicture.GetSize

Gets the size of the picture on the sketch.

## Signature

```csharp
void GetSize( 
   out System.Double
Width
,
   out System.Double
Height
)
```
## Parameters

- `Width` (System.Double): Width of the picture in meters
- `Height` (System.Double): Height of the picture in meters

## Return Value

Unknown.

## Examples

- ISketchPicture (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPicture)

## See Also

- `ISketchPicture.SetSize`
---
type: method
interface: IView
member: GetSketchPictureCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - sketches
  - ui
related:
  - IView.GetSketchPictures
  - IView.IGetSketchPictures
keywords:
  - view
  - see
  - also
  - iview
  - sketch
  - pictures
  - drawing
  - views
  - isketch
  - getsketchpicturecount
  - picture
  - count
  - int32
---

# IView.GetSketchPictureCount

Gets the number of sketch pictures imported to this view when a drawing is created from a part.

## Signature

```csharp
System.Int32 GetSketchPictureCount()
```
## Parameters

None.

## Return Value

Number of sketch pictures in the view

## Remarks

Only sketch pictures orthogonal to this view are counted.

## See Also

- `IView.GetSketchPictures`
- `IView.IGetSketchPictures`
---
type: method
interface: IView
member: GetSketchPictures
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - sketches
  - ui
related:
  - IView.GetSketchPictureCount
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
  - getsketchpictures
  - object
---

# IView.GetSketchPictures

Gets all of the sketch pictures imported to this view when a drawing is created from a part.

## Signature

```csharp
System.Object GetSketchPictures()
```
## Parameters

None.

## Return Value

Array of ISketchPictures

## Remarks

Only sketch pictures orthogonal to this view are returned.

## See Also

- `IView.GetSketchPictureCount`
- `IView.IGetSketchPictures`
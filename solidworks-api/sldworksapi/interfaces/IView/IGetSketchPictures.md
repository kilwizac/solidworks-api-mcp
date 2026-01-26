---
type: method
interface: IView
member: IGetSketchPictures
returns: SketchPicture
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch pictures in this view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - sketches
  - ui
related:
  - IView.GetSketchPictures
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - sketch
  - pictures
  - view
  - isketch
  - igetsketchpictures
  - count
  - int32
  - picture
---

# IView.IGetSketchPictures

Gets all of the sketch pictures imported to this view when a drawing is created from a part.

## Signature

```csharp
SketchPicture IGetSketchPictures( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch pictures in this view

## Return Value

in-process, unmanaged C++: Pointer to an array of ISketchPicture s VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use
IView::GetSketchPictureCount
to populate the Count parameter before calling this method. Only sketch pictures orthogonal to this view are returned.

## See Also

- `IView.GetSketchPictures`
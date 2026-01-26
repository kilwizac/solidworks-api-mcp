---
type: property
interface: IView
member: CropViewJaggedShapeIntensity
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.Crop2
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - crop
  - view
  - cropviewjaggedshapeintensity
  - jagged
  - shape
  - intensity
  - int32
  - using
  - outline
  - vb
  - net
  - vba
readonly: null
---

# IView.CropViewJaggedShapeIntensity

Gets or sets the shape intensity of the jagged outline in this cropped drawing view.

## Signature

```csharp
System.Int32 CropViewJaggedShapeIntensity {get; set;}
```
## Parameters

None.

## Return Value

Shape intensity of the jagged outline; valid range is 1 (most) to 5 (least) (see Remarks )

## Remarks

Call
IView::IsCropped
to find out if this drawing view is cropped.
IView::CropViewJaggedShapeIntensity is only available when
IView::CropViewJaggedOutline
is true and
IView::CropViewNoOutline
is false.

## Examples

- Crop Drawing View Using Jagged Outline (C#) (Crop_Drawing_View_Using_Jagged_Outline_Example_CSharp.htm)
- Crop Drawing View Using Jagged Outline (VB.NET) (Crop_Drawing_View_Using_Jagged_Outline_Example_VBNET.htm)
- Crop Drawing View Using Jagged Outline (VBA) (Crop_Drawing_View_Using_Jagged_Outline_Example_VB.htm)

## See Also

- `IView.Crop2`
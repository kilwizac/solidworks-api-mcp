---
type: property
interface: IView
member: CropViewJaggedOutline
returns: System.Boolean
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
  - cropviewjaggedoutline
  - jagged
  - outline
  - boolean
  - using
  - vb
  - net
  - vba
readonly: null
---

# IView.CropViewJaggedOutline

Gets or sets whether to use a jagged outline in this cropped drawing view.

## Signature

```csharp
System.Boolean CropViewJaggedOutline {get; set;}
```
## Parameters

None.

## Return Value

True to use a jagged outline, false to not (see Remarks )

## Remarks

Call
IView::IsCropped
to find out if this drawing view is cropped.
IView::CropViewJaggedOutline is only available when
IView::CropViewNoOutline
is false.
To set the intensity of the jagged outline, call
IView::CropViewJaggedShapeIntensity
.

## Examples

- Crop Drawing View Using Jagged Outline (C#) (Crop_Drawing_View_Using_Jagged_Outline_Example_CSharp.htm)
- Crop Drawing View Using Jagged Outline (VB.NET) (Crop_Drawing_View_Using_Jagged_Outline_Example_VBNET.htm)
- Crop Drawing View Using Jagged Outline (VBA) (Crop_Drawing_View_Using_Jagged_Outline_Example_VB.htm)

## See Also

- `IView.Crop2`
---
type: method
interface: IView
member: Crop2
returns: System.Int32
parameters:
  -
    name: JaggedOutline
    type: System.Boolean
    description: True to use a jagged outline, false to not; only valid if NoOutline is false
  -
    name: NoOutline
    type: System.Boolean
    description: True to not show an outline, false to show an outline
  -
    name: ShapeIntensity
    type: System.Int32
    description: Shape intensity of the jagged outline; valid range is 1 (most) to 5 (least); only valid if JaggedOutline is true
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.CropViewJaggedOutline
  - IView.CropViewJaggedShapeIntensity
  - IView.CropViewNoOutline
  - IView.IsCropped
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - crop
  - view
  - crop2
  - jagged
  - outline
  - boolean
  - no
  - shape
  - intensity
  - int32
  - using
  - vb
  - net
  - vba
---

# IView.Crop2

Crops this view using the selected closed sketch profile.

## Signature

```csharp
System.Int32 Crop2( 
   System.Boolean
JaggedOutline
,
   System.Boolean
NoOutline
,
   System.Int32
ShapeIntensity
)
```
## Parameters

- `JaggedOutline` (System.Boolean): True to use a jagged outline, false to not; only valid if NoOutline is false
- `NoOutline` (System.Boolean): True to not show an outline, false to show an outline
- `ShapeIntensity` (System.Int32): Shape intensity of the jagged outline; valid range is 1 (most) to 5 (least); only valid if JaggedOutline is true

## Return Value

Crop view status as defined in swCropViewErrors_e

## Examples

- Crop Drawing View Using Jagged Outline (C#) (Crop_Drawing_View_Using_Jagged_Outline_Example_CSharp.htm)
- Crop Drawing View Using Jagged Outline (VB.NET) (Crop_Drawing_View_Using_Jagged_Outline_Example_VBNET.htm)
- Crop Drawing View Using Jagged Outline (VBA) (Crop_Drawing_View_Using_Jagged_Outline_Example_VB.htm)

## See Also

- `IView.CropViewJaggedOutline`
- `IView.CropViewJaggedShapeIntensity`
- `IView.CropViewNoOutline`
- `IView.IsCropped`
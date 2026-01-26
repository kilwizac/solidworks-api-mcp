---
type: property
interface: IDetailCircle
member: ShapeIntensity
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - shapeintensity
  - idetailcircle
  - detail
  - circle
  - shape
  - intensity
  - int32
  - create
  - view
  - vb
  - net
  - vba
readonly: null
---

# IDetailCircle.ShapeIntensity

Gets or sets the shape intensity of the jagged outline in the detail view.

## Signature

```csharp
System.Int32 ShapeIntensity {get; set;}
```
## Parameters

None.

## Return Value

Shape intensity of the jagged outline; valid range is 1 (most) to 5 (least) (see Remarks )

## Remarks

This property is only available when
IDetailCircle::JaggedOutline
is true and
IDetailCircle::NoOutline
is false.

## Examples

- Create Detail Circle and Detail View (C#) (Create_Detail_Circle_and_Detail_View_Example_CSharp.htm)
- Create Detail Circle and Detail View (VB.NET) (Create_Detail_Circle_and_Detail_View_Example_VBNET.htm)
- Create Detail Circle and Detail View (VBA) (Create_Detail_Circle_and_Detail_View_Example_VB.htm)
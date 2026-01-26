---
type: property
interface: ISectionViewData
member: ThirdColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related:
  - ISectionViewData.FirstColor
  - ISectionViewData.SecondColor
keywords:
  - thirdcolor
  - isectionviewdata
  - section
  - view
  - data
  - third
  - color
  - int32
  - create
  - model
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.ThirdColor

Gets or sets the third color of the section view in this part or assembly.

## Signature

```csharp
System.Int32 ThirdColor {get; set;}
```
## Parameters

None.

## Return Value

Third RGB value of the color

## Remarks

Use
ISectionViewData::ShowSectionCap
to display the caps of section views and
ISectionView::KeepCapColor
to color them.

## Examples

- Create Section View in Model (C#) (Create_Section_View_in_Model_Example_CSharp.htm)
- Create Section View in Model (VB.NET) (Create_Section_View_in_Model_Example_VBNET.htm)
- Create Section View in Model (VBA) (Create_Section_View_in_Model_Example_VB.htm)
- Get Section View Data (C#) (Get_Section_View_Data_Example_CSharp.htm)
- Get Section View Data (VB.NET) (Get_Section_View_Data_Example_VBNET.htm)
- Get Section View Data (VBA) (Get_Section_View_Data_Example_VB.htm)

## See Also

- `ISectionViewData.FirstColor`
- `ISectionViewData.SecondColor`
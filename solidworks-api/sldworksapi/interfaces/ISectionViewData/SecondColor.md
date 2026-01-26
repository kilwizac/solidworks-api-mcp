---
type: property
interface: ISectionViewData
member: SecondColor
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
  - ISectionViewData.ThirdColor
keywords:
  - secondcolor
  - isectionviewdata
  - section
  - view
  - data
  - second
  - color
  - int32
  - create
  - model
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.SecondColor

Gets or sets the second color of the section view in the part or assembly.

## Signature

```csharp
System.Int32 SecondColor {get; set;}
```
## Parameters

None.

## Return Value

RGB value of the second color

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
- `ISectionViewData.ThirdColor`
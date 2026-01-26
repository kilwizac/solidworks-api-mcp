---
type: property
interface: ISectionViewData
member: ThirdPlane
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related:
  - ISectionViewData.FirstPlane
  - ISectionViewData.GetFirstPlaneParameters
  - ISectionViewData.GetSecondPlaneParameters
  - ISectionViewData.GetThirdPlaneParameters
  - ISectionViewData.SecondPlane
keywords:
  - thirdplane
  - isectionviewdata
  - section
  - view
  - data
  - third
  - plane
  - object
  - create
  - model
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.ThirdPlane

Gets or sets the section plane for the third section of the section view for the part or assembly.

## Signature

```csharp
System.Object ThirdPlane {get; set;}
```
## Parameters

None.

## Return Value

Plane or planar face

## Remarks

To select the section plane for the third section, specify a mark of 4 for
IModelDocExtension::SelectByID2
.

## Examples

- Create Section View in Model (C#) (Create_Section_View_in_Model_Example_CSharp.htm)
- Create Section View in Model (VB.NET) (Create_Section_View_in_Model_Example_VBNET.htm)
- Create Section View in Model (VBA) (Create_Section_View_in_Model_Example_VB.htm)
- Get Section View Data (C#) (Get_Section_View_Data_Example_CSharp.htm)
- Get Section View Data (VB.NET) (Get_Section_View_Data_Example_VBNET.htm)
- Get Section View Data (VBA) (Get_Section_View_Data_Example_VB.htm)

## See Also

- `ISectionViewData.FirstPlane`
- `ISectionViewData.GetFirstPlaneParameters`
- `ISectionViewData.GetSecondPlaneParameters`
- `ISectionViewData.GetThirdPlaneParameters`
- `ISectionViewData.SecondPlane`
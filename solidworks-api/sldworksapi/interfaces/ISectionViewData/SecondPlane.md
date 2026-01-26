---
type: property
interface: ISectionViewData
member: SecondPlane
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
  - ISectionViewData.ThirdPlane
keywords:
  - secondplane
  - isectionviewdata
  - section
  - view
  - data
  - second
  - plane
  - object
  - create
  - model
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.SecondPlane

Gets or sets the section plane for the second section of the section view for the part or assembly.

## Signature

```csharp
System.Object SecondPlane {get; set;}
```
## Parameters

None.

## Return Value

Plane or planar face

## Remarks

To select the section plane for the second section, specify 2 for Mark for
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
- `ISectionViewData.ThirdPlane`
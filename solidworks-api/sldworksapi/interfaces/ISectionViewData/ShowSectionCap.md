---
type: property
interface: ISectionViewData
member: ShowSectionCap
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related: []
keywords:
  - showsectioncap
  - isectionviewdata
  - section
  - view
  - data
  - show
  - cap
  - boolean
  - create
  - model
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.ShowSectionCap

Gets or sets whether to cap the section views.

## Signature

```csharp
System.Boolean ShowSectionCap {get; set;}
```
## Parameters

None.

## Return Value

True to cap the section views, false to see inside the model (see Remarks )

## Remarks

After setting this property to true, specify whether to color the caps by setting
ISectionViewData::KeepCapColor
.

## Examples

- Create Section View in Model (C#) (Create_Section_View_in_Model_Example_CSharp.htm)
- Create Section View in Model (VB.NET) (Create_Section_View_in_Model_Example_VBNET.htm)
- Create Section View in Model (VBA) (Create_Section_View_in_Model_Example_VB.htm)
- Get Section View Data (C#) (Get_Section_View_Data_Example_CSharp.htm)
- Get Section View Data (VB.NET) (Get_Section_View_Data_Example_VBNET.htm)
- Get Section View Data (VBA) (Get_Section_View_Data_Example_VB.htm)
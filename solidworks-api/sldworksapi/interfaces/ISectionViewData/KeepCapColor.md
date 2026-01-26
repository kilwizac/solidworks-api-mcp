---
type: property
interface: ISectionViewData
member: KeepCapColor
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
  - keepcapcolor
  - isectionviewdata
  - section
  - view
  - data
  - keep
  - cap
  - color
  - boolean
  - create
  - model
  - vba
  - vb
  - net
readonly: null
---

# ISectionViewData.KeepCapColor

Gets or sets whether to color the caps of section views.

## Signature

```csharp
System.Boolean KeepCapColor {get; set;}
```
## Parameters

None.

## Return Value

True to color the caps of section views, false to not (see Remarks )

## Remarks

This property is valid only if
ISectionViewData::ShowSectionCap
is true and
ISectionViewData::GraphicsOnlySection
is false.

## Examples

- Create Section View in Model (VBA) (Create_Section_View_in_Model_Example_VB.htm)
- Create Section View in Model (VB.NET) (Create_Section_View_in_Model_Example_VBNET.htm)
- Create Section View in Model (C#) (Create_Section_View_in_Model_Example_CSharp.htm)
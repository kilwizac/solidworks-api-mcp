---
type: property
interface: ISectionViewData
member: GraphicsOnlySection
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
  - section
  - views
  - see
  - also
  - idrsection
  - graphics
  - only
  - graphicsonlysection
  - isectionviewdata
  - view
  - data
  - boolean
  - create
  - model
  - vba
  - vb
  - net
readonly: null
---

# ISectionViewData.GraphicsOnlySection

Gets or sets whether to generate a graphics-only section view.

## Signature

```csharp
System.Boolean GraphicsOnlySection {get; set;}
```
## Parameters

None.

## Return Value

True to generate a graphics-only section view, false to not

## Remarks

This property corresponds to the
Graphics-only section
check box on the Section View PropertyManager page.
When a section view is created, the model is rebuilt. If the model is very large and complex, rebuilding the model slows down the creation of the section view. This property indicates whether to rebuild the model when a section view is created. When this property is set to true:
Keep cap color
check box is selected and inactivated on the Section View PropertyManager page.
ISectionViewData::KeepCapColor
returns only true; setting to false is ignored.
Model is not rebuilt, and the section view is quickly generated.

## Examples

- Create Section View in Model (VBA) (Create_Section_View_in_Model_Example_VB.htm)
- Create Section View in Model (VB.NET) (Create_Section_View_in_Model_Example_VBNET.htm)
- Create Section View in Model (C#) (Create_Section_View_in_Model_Example_CSharp.htm)
---
type: property
interface: IDetailCircle
member: JaggedOutline
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - jaggedoutline
  - idetailcircle
  - detail
  - circle
  - jagged
  - outline
  - boolean
  - create
  - view
  - vb
  - net
  - vba
readonly: null
---

# IDetailCircle.JaggedOutline

Gets or sets whether to show a jagged outline in the detail view.

## Signature

```csharp
System.Boolean JaggedOutline {get; set;}
```
## Parameters

None.

## Return Value

True to show a jagged outline in the detail view, false to not (see Remarks )

## Remarks

This property is only available when
IDetailCircle::NoOutline
is false.
To set the intensity of the jagged outline, call
IDetailCircle::ShapeIntensity
.

## Examples

- Create Detail Circle and Detail View (C#) (Create_Detail_Circle_and_Detail_View_Example_CSharp.htm)
- Create Detail Circle and Detail View (VB.NET) (Create_Detail_Circle_and_Detail_View_Example_VBNET.htm)
- Create Detail Circle and Detail View (VBA) (Create_Detail_Circle_and_Detail_View_Example_VB.htm)
---
type: property
interface: IPropertyManagerPageLabel
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - style
  - ipropertymanagerpagelabel
  - manager
  - page
  - label
  - int32
readonly: null
---

# IPropertyManagerPageLabel.Style

Gets or sets style-related properties of this label.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Control style as defined in swPropMgrPageLabelStyle_e

## Remarks

You can only set this property before the PropertyManager is displayed.
This property value is a combination of several boolean values, each represented by a bit in this long value. The different values are represented in the
swPropMgrPageLabelStyle_e
enumeration. For example, to set a label control to have its text right-justified,
you should set the Style argument to swPropMgrPageLabelStyle_RightText. By default, the text in PropertyManagerPageLabel is left-justified.
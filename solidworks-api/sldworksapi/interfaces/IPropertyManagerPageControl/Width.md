---
type: property
interface: IPropertyManagerPageControl
member: Width
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - width
  - ipropertymanagerpagecontrol
  - manager
  - page
  - control
  - int16
readonly: null
---

# IPropertyManagerPageControl.Width

Gets or sets the width of the control on a PropertyManager page.

## Signature

```csharp
System.Int16 Width {get; set;}
```
## Parameters

None.

## Return Value

Width of the control

## Remarks

This property must be set before the control is displayed.
If you do not specify the position and size of the controls on the PropertyManager page, the controls are created using a default size and placed in a computed default position so that your page matches the look-and-feel of a SOLIDWORKS page. This is generally the best way to go, whenever possible. However, while there are no limitations on how you create the layout of your page, it is recommended that you only use this API if you want to explicitly place controls on the page.
By default, the width of the control is usually set so that it extends to the right edge of its group box. Using this API overrides that default. The value is in dialog units relative to the group box that the control is in. The width of the group box is 100.
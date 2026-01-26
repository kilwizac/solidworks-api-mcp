---
type: property
interface: IPropertyManagerPageGroup
member: BackgroundColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - propertymanager
  - page
  - see
  - also
  - ipropertymanagerpage2
  - message
  - box
  - backgroundcolor
  - ipropertymanagerpagegroup
  - manager
  - group
  - background
  - color
  - int32
readonly: null
---

# IPropertyManagerPageGroup.BackgroundColor

Gets or sets the background color of this PropertyManager group box.

## Signature

```csharp
System.Int32 BackgroundColor {get; set;}
```
## Parameters

None.

## Return Value

COLORREF value

## Remarks

You can use a group box with just a
label
to look like a
message box
on a PropertyManager page. Set the background of the group box and the
background of the label
to the same color and the
label text
to a different color. You can also position the group box anywhere on the PropertyManager page.
NOTE:
If you want to set the background color of the message box to be the same as the color typically used by SOLIDWORKS for a message box, use
ISldWorks::GetUserPreferenceIntegerValue
swPropertyManagerColorImportantMessage to get the COLORREF value.
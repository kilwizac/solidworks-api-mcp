---
type: property
interface: IPropertyManagerPageLabel
member: CharacterBackgroundColor
returns: System.Int32
parameters:
  -
    name: StartChar
    type: System.Int16
    description: 0-based index value of start character
  -
    name: EndChar
    type: System.Int16
    description: 0-based index value of end character
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - characterbackgroundcolor
  - ipropertymanagerpagelabel
  - manager
  - page
  - label
  - character
  - background
  - color
  - start
  - char
  - int16
  - end
  - int32
readonly: null
---

# IPropertyManagerPageLabel.CharacterBackgroundColor

Gets or sets the background color for the specified range of characters in this PropertyManager label.

## Signature

```csharp
System.Int32 CharacterBackgroundColor( 
   System.Int16
StartChar
,
   System.Int16
EndChar
) {get; set;}
```
## Parameters

- `StartChar` (System.Int16): 0-based index value of start character
- `EndChar` (System.Int16): 0-based index value of end character

## Return Value

RGB value for the text background color for the specified characters; if not specified, then the background color for this control is used

## Remarks

You can use a
group box
with just a
label
to look like a
message box
on a PropertyManager page. Set the
background of the group box
and the background of the label to the same color and the
label text
to a different color. You can also position the group box anywhere on the PropertyManager page.
NOTE:
If you want to set the background color of the message box to be the same as the color typically used by SOLIDWORKS for a message box, use
ISldWorks::GetUserPreferenceIntegerValue
swPropertyManagerColorImportantMessage to get the COLORREF value.
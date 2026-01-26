---
type: property
interface: ICenterMark
member: UseDocDisplaySettings
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - usedocdisplaysettings
  - icentermark
  - center
  - mark
  - use
  - doc
  - display
  - settings
  - boolean
  - list
  - marks
  - drawing
  - vba
readonly: null
---

# ICenterMark.UseDocDisplaySettings

Gets or sets whether to use the document defaults for this center mark's display settings.

## Signature

```csharp
System.Boolean UseDocDisplaySettings {get; set;}
```
## Parameters

None.

## Return Value

True uses the document defaults, false does not

## Remarks

You can use the following user-preference methods to get or set these document defaults:
IModelDocExtension::SetUserPreferenceToggle
or
IModelDocExtension::GetUserPreferenceToggle
-  swDetailingCenterMarkShowLines, swDetailingNoOptionSpecified
IModelDocExtension::SetUserPreferenceDouble
or
IModelDocExtension::GetUserPreferenceDouble
- swDetailingCenterMarkSize, swDetailingNoOptionSpecified

## Examples

- List Center Marks in Drawing (VBA) (List_Center_Marks_in_Drawing_Example_VB.htm)
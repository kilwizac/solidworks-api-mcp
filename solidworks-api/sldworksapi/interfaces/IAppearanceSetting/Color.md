---
type: property
interface: IAppearanceSetting
member: Color
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - color
  - iappearancesetting
  - appearance
  - setting
  - int32
  - change
  - component
  - specific
  - display
  - state
  - vb
  - net
  - vba
readonly: null
---

# IAppearanceSetting.Color

Gets or sets the color.

## Signature

```csharp
System.Int32 Color {get; set;}
```
## Parameters

None.

## Return Value

Color value (see Remarks )

## Remarks

color_value
= MAX(MIN(
red_rgb_value
,255),0) + MAX(MIN(
green_rgb_value
,255),0)*16*16 + MAX(MIN(
blue_rgb_value
,255),0)*16*16*16*16
See SOLIDWORKS Help for more information about appearances.

## Examples

- Change Color of Component in Specific Display State (C#) (Change_Color_of_Component_in_Specific_Display_State_Example_CSharp.htm)
- Change Color of Component in Specific Display State (VB.NET) (Change_Color_of_Component_in_Specific_Display_State_Example_VBNET.htm)
- Change Color of Component in Specific Display State (VBA) (Change_Color_of_Component_in_Specific_Display_State_Example_VB.htm)
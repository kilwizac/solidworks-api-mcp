---
type: method
interface: IDrSection
member: SetDisplayOnlySpeedPakBodies
returns: void
parameters:
  -
    name: Display
    type: System.Boolean
    description: True to display only the bodies included in the SpeedPak configuration, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetDisplayOnlySpeedPakBodies
keywords:
  - speedpak
  - setdisplayonlyspeedpakbodies
  - idrsection
  - dr
  - section
  - display
  - only
  - speed
  - pak
  - bodies
  - boolean
  - void
  - create
  - view
  - some
  - data
  - vba
  - vb
  - net
---

# IDrSection.SetDisplayOnlySpeedPakBodies

Sets whether to display in this section view only the bodies included in the SpeedPak configuration.

## Signature

```csharp
void SetDisplayOnlySpeedPakBodies( 
   System.Boolean
Display
)
```
## Parameters

- `Display` (System.Boolean): True to display only the bodies included in the SpeedPak configuration, false to not

## Return Value

Unknown.

## Examples

- Create Section View and Get Some Data (VBA) (Create_Section_View_and_Get_Some_Data_Example_VB.htm)
- Create Section View and Get Some Data (VB.NET) (Create_Section_View_and_Get_Some_Data_Example_VBNET.htm)
- Create Section View and Get Some Data (C#) (Create_Section_View_and_Get_Some_Data_Example_CSharp.htm)

## See Also

- `IDrSection.GetDisplayOnlySpeedPakBodies`
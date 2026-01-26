---
type: method
interface: ISldWorks
member: GetInterfaceBrightnessThemeColors
returns: System.Int32
parameters:
  -
    name: Colors
    type: System.Object
    description: Array of nine RGB (Red, Green, Blue) decimal values corresponding to the nine color types of the SOLIDWORKS background as defined in swInterfaceBrightnessColor_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISwHtmlInterface::GetInterfaceBrightnessTheme
keywords:
  - color
  - solidworks
  - backgrounds
  - background
  - colors
  - themes
  - getinterfacebrightnessthemecolors
  - isldworks
  - sld
  - works
  - brightness
  - theme
  - object
  - int32
---

# ISldWorks.GetInterfaceBrightnessThemeColors

Gets the theme and colors of the SOLIDWORKS background.

## Signature

```csharp
System.Int32 GetInterfaceBrightnessThemeColors( 
   out System.Object
Colors
)
```
## Parameters

- `Colors` (System.Object): Array of nine RGB (Red, Green, Blue) decimal values corresponding to the nine color types of the SOLIDWORKS background as defined in swInterfaceBrightnessColor_e

## Return Value

SOLIDWORKS background theme as defined in swInterfaceBrightnessTheme_e

## Remarks

A SOLIDWORKS add-in can:
use this method to determine the current theme and colors of the SOLIDWORKS background.
be notified when the theme and colors in the SOLIDWORKS background change by registering for the
DSldWorksEvents_InterfaceBrightnessThemeChangeNotifyEventHandler
event.

## See Also

- `ISwHtmlInterface::GetInterfaceBrightnessTheme`
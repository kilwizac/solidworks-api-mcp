---
type: property
interface: IBalloonOptions
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - style
  - iballoonoptions
  - balloon
  - options
  - int32
readonly: null
---

# IBalloonOptions.Style

Gets and sets the style of the balloon.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Balloon style as defined in swBalloonStyle_e ; specify -1 to use the document default balloon style (see Remarks )

## Remarks

To get or set document default values for Style...
Use...
Get
IModelDocExtension::GetUserPreferenceInteger
((swUserPreferenceIntegerValue_e.swDetailingBOMBalloonStyle, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
Set
IModelDocExtension::SetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingBOMBalloonStyle, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonStyle_e.<
Value
>)
See the SOLIDWORKS Help for additional details about balloons.

## Examples

- IBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBalloonOptions)
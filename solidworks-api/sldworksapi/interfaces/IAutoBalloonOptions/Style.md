---
type: property
interface: IAutoBalloonOptions
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
  - iautoballoonoptions
  - auto
  - balloon
  - options
  - int32
readonly: null
---

# IAutoBalloonOptions.Style

Gets and sets the style of the balloons.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Style of the balloons as defined in swBalloonStyle_e ; specify -1 to use the document default balloon style (see Remarks )

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
See the SOLIDWORKS Help for additional details about autoballoons.

## Examples

- IAutoBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAutoBalloonOptions)
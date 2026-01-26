---
type: property
interface: IAutoBalloonOptions
member: Layout
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - layout
  - iautoballoonoptions
  - auto
  - balloon
  - options
  - int32
readonly: null
---

# IAutoBalloonOptions.Layout

Gets and sets the style of the layout of balloons.

## Signature

```csharp
System.Int32 Layout {get; set;}
```
## Parameters

None.

## Return Value

Style of the balloon layout as defined in swBalloonLayoutType_e }}end!kadov ; specify -1 to use the document default layout style (see Remarks )

## Remarks

To get or set the document default values for Layout...
Use...
Get
IModelDocExtension::GetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingAutoBalloonLayout, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
Set
IModelDocExtension::SetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingAutoBalloonLayout, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonLayoutType_e.<
Value
>)
See the SOLIDWORKS Help for additional details about autoballoons.

## Examples

- IAutoBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAutoBalloonOptions)
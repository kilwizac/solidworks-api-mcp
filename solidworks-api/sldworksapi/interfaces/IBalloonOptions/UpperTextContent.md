---
type: property
interface: IBalloonOptions
member: UpperTextContent
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - uppertextcontent
  - iballoonoptions
  - balloon
  - options
  - upper
  - text
  - content
  - int32
readonly: null
---

# IBalloonOptions.UpperTextContent

Gets and sets the style of the upper text of the balloon.

## Signature

```csharp
System.Int32 UpperTextContent {get; set;}
```
## Parameters

None.

## Return Value

Style of the upper text as defined in swBalloonTextContent_e ; specify -1 to use the document default upper text style (see Remarks )

## Remarks

To get or set document default values...
Use...
Get
IModelDocExtension::GetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingBOMUpperText, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
Set
IModelDocExtension::SetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingBOMUpperText, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonTextContent_e.<
Value
>)
See:
INote::PropertyLinkedText
for examples of link strings usable with swBalloonTextContent_e.swBalloonTextCustomProperties.
SOLIDWORKS Help for additional details about balloons.

## Examples

- IBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBalloonOptions)
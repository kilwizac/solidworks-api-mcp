---
type: property
interface: IBalloonOptions
member: LowerTextContent
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - lowertextcontent
  - iballoonoptions
  - balloon
  - options
  - lower
  - text
  - content
  - int32
readonly: null
---

# IBalloonOptions.LowerTextContent

Gets and sets the style of the lower text of the balloon.

## Signature

```csharp
System.Int32 LowerTextContent {get; set;}
```
## Parameters

None.

## Return Value

Style of the lower text as defined in swBalloonTextContent_e ; specify -1 to use the document default lower text style (See Remarks )

## Remarks

This property is valid only when
IBalloonOptions::Style
is set to
swBalloonStyle_e
.swBS_SplitCirc.
To get or set document default values...
Use...
Get
IModelDocExtension::GetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingBOMLowerText, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
Set
IModelDocExtension::SetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingBOMLowerText, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonTextContent_e.<
Value
>)
See:
INote::PropertyLinkedText
for examples of link strings usable with swBalloonTextContent_e.swBalloonTextCustomProperties.
SOLIDWORKS Help for additional details about balloons.
---
type: property
interface: IAutoBalloonOptions
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
  - iautoballoonoptions
  - auto
  - balloon
  - options
  - lower
  - text
  - content
  - int32
readonly: null
---

# IAutoBalloonOptions.LowerTextContent

Gets and sets the style of the lower text of the balloons.

## Signature

```csharp
System.Int32 LowerTextContent {get; set;}
```
## Parameters

None.

## Return Value

Style of the lower text as defined in swBalloonTextContent_e ; specify -1 to use the document default lower text style (see Remarks )

## Remarks

This property is valid only when
IAutoBalloonOptions::Style
is set to
swBalloonStyle_e
.swBS_SplitCirc.
To get or set document default values for LowerTextContent...
Use...
Get
IModelDocExtension::GetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingBOMLowerText, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
Set
IModelDocExtension::SetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingBOMLowerText, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonTextContent_e.<
Value
>)
See the SOLIDWORKS Help for additional details about autoballoons.
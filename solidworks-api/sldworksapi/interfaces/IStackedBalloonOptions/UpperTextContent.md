---
type: property
interface: IStackedBalloonOptions
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
  - istackedballoonoptions
  - stacked
  - balloon
  - options
  - upper
  - text
  - content
  - int32
readonly: null
---

# IStackedBalloonOptions.UpperTextContent

Gets and sets the style of the upper text of the balloons.

## Signature

```csharp
System.Int32 UpperTextContent {get; set;}
```
## Parameters

None.

## Return Value

Style of the upper text as defined in swBalloonTextContent_e ; specify -1 to use the document default upper text style (see Remarks )

## Remarks

To get or set document default values for UpperTextContent...
Use...
Get
IModelDocExtension::GetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingBOMUpperText, swUserPreferenceOption_e.swDetailingNoOptionSpecified)
Set
IModelDocExtension::SetUserPreferenceInteger
(swUserPreferenceIntegerValue_e.swDetailingBOMUpperText, swUserPreferenceOption_e.swDetailingNoOptionSpecified, swBalloonTextContent_e.<
Value
>)
See the SOLIDWORKS Help for additional details about stacked balloons.

## Examples

- IStackedBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IStackedBalloonOptions)
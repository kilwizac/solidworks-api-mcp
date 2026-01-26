---
type: property
interface: IStackedBalloonOptions
member: LowerText
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - lowertext
  - istackedballoonoptions
  - stacked
  - balloon
  - options
  - lower
  - text
  - string
readonly: null
---

# IStackedBalloonOptions.LowerText

Gets and sets the lower text of the balloons.

## Signature

```csharp
System.String LowerText {get; set;}
```
## Parameters

None.

## Return Value

Lower text of the balloons (see Remarks )

## Remarks

This property is valid only when
IStackedBalloonOptions::Style
is set to
swBalloonStyle_e
.swBS_SplitCirc. See the SOLIDWORKS Help for additional details about stacked balloons.

## Examples

- IStackedBalloonOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IStackedBalloonOptions)
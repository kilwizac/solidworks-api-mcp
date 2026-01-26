---
type: method
interface: IAnnotation
member: GetSmartArrowHeadStyle
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getsmartarrowheadstyle
  - iannotation
  - annotation
  - smart
  - arrow
  - head
  - style
  - boolean
---

# IAnnotation.GetSmartArrowHeadStyle

Gets the setting for smart arrowhead style for this annotation.

## Signature

```csharp
System.Boolean GetSmartArrowHeadStyle()
```
## Parameters

None.

## Return Value

True if the smart arrowhead style setting is enabled, false if the smart arrowhead style setting is disabled

## Remarks

The smart arrowhead style flag is a characteristic of the annotation, not individual leaders. You can get or set it whether or not leaders are currently displayed.
Use...
To...
IAnnotation::GetLeaderStyle
Get leader characteristics
IAnnotation::SetLeader3
Set leader characteristics
---
type: method
interface: IGtolFrame
member: GetIndicatorCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getindicatorcount
  - igtolframe
  - gtol
  - frame
  - indicator
  - count
  - int32
---

# IGtolFrame.GetIndicatorCount

Gets the number of indicators in this Gtol frame.

## Signature

```csharp
System.Int32 GetIndicatorCount()
```
## Parameters

None.

## Return Value

Number of indicators in this Gtol frame

## Remarks

Use this method to determine IndicatorIndex parameters before calling:
IGtolFrame::DeleteIndicator
IGtolFrame::GetIndicator
IGtolFrame::SetIndicator

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)
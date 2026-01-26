---
type: method
interface: IGtolFrame
member: DeleteIndicator
returns: System.Boolean
parameters:
  -
    name: IndicatorIndex
    type: System.Int32
    description: One-based index of tolerance indicator to delete from the frame
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - deleteindicator
  - igtolframe
  - gtol
  - frame
  - delete
  - indicator
  - index
  - int32
  - boolean
---

# IGtolFrame.DeleteIndicator

Deletes the tolerance indicator at the specified Gtol frame indicator index.

## Signature

```csharp
System.Boolean DeleteIndicator( 
   System.Int32
IndicatorIndex
)
```
## Parameters

- `IndicatorIndex` (System.Int32): One-based index of tolerance indicator to delete from the frame

## Return Value

True if tolerance indicator successfully deleted, false if not

## Remarks

Before calling this method, use
IGtolFrame:GetIndicatorCount
to determine IndicatorIndex.

## Examples

- IGtolFrame (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IGtolFrame)
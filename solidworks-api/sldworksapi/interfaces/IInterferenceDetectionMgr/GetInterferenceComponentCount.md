---
type: method
interface: IInterferenceDetectionMgr
member: GetInterferenceComponentCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IInterference.Components
  - IInterference.GetComponentCount
  - IInterference.IGetComponents
  - IInterferenceDetectionMgr.GetInterferenceComponents
  - IInterferenceDetectionMgr.MakeInterferingPartsTransparent
  - IInterferenceDetectionMgr.NonInterferingComponentDisplay
  - IInterferenceDetectionMgr.TreatSubAssembliesAsComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - interfering
  - getinterferencecomponentcount
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - component
  - count
  - int32
---

# IInterferenceDetectionMgr.GetInterferenceComponentCount

Calculates and gets the number of interfering components.

## Signature

```csharp
System.Int32 GetInterferenceComponentCount()
```
## Parameters

None.

## Return Value

Number of interfering components

## Remarks

Call this method before calling
IInterferenceDectectionMgr::IGetInterferenceComponents
.

## See Also

- `IInterference.Components`
- `IInterference.GetComponentCount`
- `IInterference.IGetComponents`
- `IInterferenceDetectionMgr.GetInterferenceComponents`
- `IInterferenceDetectionMgr.MakeInterferingPartsTransparent`
- `IInterferenceDetectionMgr.NonInterferingComponentDisplay`
- `IInterferenceDetectionMgr.TreatSubAssembliesAsComponents`
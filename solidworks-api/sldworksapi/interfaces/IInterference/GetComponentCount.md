---
type: method
interface: IInterference
member: GetComponentCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IInterference.Components
  - IInterferenceDetectionMgr.GetInterferenceComponentCount
  - IInterferenceDetectionMgr.GetInterferenceComponents
  - IInterferenceDetectionMgr.IGetInterferenceComponents
  - IInterferenceDetectionMgr.MakeInterferingPartsTransparent
  - IInterferenceDetectionMgr.NonInterferingComponentDisplay
  - IInterferenceDetectionMgr.TreatSubAssembliesAsComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - interfering
  - getcomponentcount
  - iinterference
  - interference
  - component
  - count
  - int32
  - run
  - detection
  - vb
  - net
  - vba
---

# IInterference.GetComponentCount

Gets the number of components interfering with each other.

## Signature

```csharp
System.Int32 GetComponentCount()
```
## Parameters

None.

## Return Value

Number of components interfering with each other

## Remarks

Call this method before calling
IInterference::IGetComponents
.

## Examples

- Run Interference Detection (C#) (Run_Interference_Detection_Example_CSharp.htm)
- Run Interference Detection (VB.NET) (Run_Interference_Detection_Example_VBNET.htm)
- Run Interference Detection (VBA) (Run_Interference_Detection_Example_VB.htm)

## See Also

- `IInterference.Components`
- `IInterferenceDetectionMgr.GetInterferenceComponentCount`
- `IInterferenceDetectionMgr.GetInterferenceComponents`
- `IInterferenceDetectionMgr.IGetInterferenceComponents`
- `IInterferenceDetectionMgr.MakeInterferingPartsTransparent`
- `IInterferenceDetectionMgr.NonInterferingComponentDisplay`
- `IInterferenceDetectionMgr.TreatSubAssembliesAsComponents`
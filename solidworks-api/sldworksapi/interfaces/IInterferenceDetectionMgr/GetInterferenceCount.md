---
type: method
interface: IInterferenceDetectionMgr
member: GetInterferenceCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IInterferenceDetectionMgr.GetInterferences
keywords:
  - getinterferencecount
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - count
  - int32
  - run
  - vb
  - net
  - vba
---

# IInterferenceDetectionMgr.GetInterferenceCount

Calculates and gets the number of interferences.

## Signature

```csharp
System.Int32 GetInterferenceCount()
```
## Parameters

None.

## Return Value

Number of interferences

## Remarks

Call this method before calling
IInterferenceDetectionMgr::IGetInterferences
to determine the size of the array for the interferences.

## Examples

- Run Interference Detection (C#) (Run_Interference_Detection_Example_CSharp.htm)
- Run Interference Detection (VB.NET) (Run_Interference_Detection_Example_VBNET.htm)
- Run Interference Detection (VBA) (Run_Interference_Detection_Example_VB.htm)

## See Also

- `IInterferenceDetectionMgr.GetInterferences`
---
type: method
interface: IInterferenceDetectionMgr
member: IGetInterferences
returns: Interference
parameters:
  -
    name: InterfernceCount
    type: System.Int32
    description: Number of interferences
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IInterferenceDetectionMgr.GetInterferences
keywords:
  - igetinterferences
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - interferences
  - interfernce
  - count
  - int32
---

# IInterferenceDetectionMgr.IGetInterferences

Calculates and gets the interferences.

## Signature

```csharp
Interference IGetInterferences( 
   System.Int32
InterfernceCount
)
```
## Parameters

- `InterfernceCount` (System.Int32): Number of interferences

## Return Value

in-process, unmanaged C++: Pointer to an array of interferences VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IInterferenceDetectionMgr::GetInterferenceCount
to get the size of array for the interferences.

## See Also

- `IInterferenceDetectionMgr.GetInterferences`
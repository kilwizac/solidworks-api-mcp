---
type: property
interface: IInterferenceDetectionMgr
member: TreatCoincidenceAsInterference
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - treatcoincidenceasinterference
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - treat
  - coincidence
  - boolean
  - run
  - vb
  - net
  - vba
  - interferences
  - using
  - transform
readonly: null
---

# IInterferenceDetectionMgr.TreatCoincidenceAsInterference

Gets or sets whether to treat coincident entities as interference.

## Signature

```csharp
System.Boolean TreatCoincidenceAsInterference {get; set;}
```
## Parameters

None.

## Return Value

True to treat coincident entities as interference, false to not

## Remarks

Currently, the value set for this property:
exists only while the InterferenceDetectionMgr object is in scope; i.e., setting this property is temporary.
does not persist across SOLIDWORKS Design sessions.
does not persist into the next invocation of interference detection in the user interface.

## Examples

- Run Interference Detection (C#) (Run_Interference_Detection_Example_CSharp.htm)
- Run Interference Detection (VB.NET) (Run_Interference_Detection_Example_VBNET.htm)
- Run Interference Detection (VBA) (Run_Interference_Detection_Example_VB.htm)
- Get Interferences Using a Transform (C#) (Detect_Interferences_Using_a_Transform_Example_CSharp.htm)
- Get Interferences Using a Transform (VB.NET) (Detect_Interferences_Using_a_Transform_Example_VBNET.htm)
- Get Interferences Using a Transform (VBA) (Detect_Interferences_Using_a_Transform_Example_VB.htm)
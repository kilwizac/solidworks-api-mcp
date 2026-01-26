---
type: property
interface: IInterferenceDetectionMgr
member: IncludeMultibodyPartInterferences
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - parts
related: []
keywords:
  - multibody
  - interference
  - detection
  - includemultibodypartinterferences
  - iinterferencedetectionmgr
  - mgr
  - include
  - part
  - interferences
  - boolean
  - run
  - vb
  - net
  - vba
readonly: null
---

# IInterferenceDetectionMgr.IncludeMultibodyPartInterferences

Gets or sets whether to report interferences between bodies within multibody parts.

## Signature

```csharp
System.Boolean IncludeMultibodyPartInterferences {get; set;}
```
## Parameters

None.

## Return Value

True to report interferences between bodies within multibody parts, false to not

## Remarks

Currently, the value set for this property:
exists only while the InterferenceDetectionMgr object is in scope; i.e., setting this property is temporary.
does not persist across SOLIDWORKS Design sessions.
does not persist into the next invocation of interference detection in the user interface.

## Examples

- Run Interference Detection (C#) (Run_Interference_Detection_Example_CSharp.htm)
- Run Interference Detection (VB.NET) (Run_Interference_Detection_Example_VBNET.htm)
- Run Interference Detection (VBA) (Run_Interference_Detection_Example_VB.htm)
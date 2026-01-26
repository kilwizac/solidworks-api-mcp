---
type: property
interface: IInterferenceDetectionMgr
member: IgnoreHiddenBodies
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - interference
  - detection
  - ignorehiddenbodies
  - iinterferencedetectionmgr
  - mgr
  - ignore
  - hidden
  - boolean
  - run
  - vb
  - net
  - vba
readonly: null
---

# IInterferenceDetectionMgr.IgnoreHiddenBodies

Gets or sets whether to ignore hidden bodies during interference detection.

## Signature

```csharp
System.Boolean IgnoreHiddenBodies {get; set;}
```
## Parameters

None.

## Return Value

True to ignore hidden bodies, false to not

## Remarks

Currently, the value set for this property:
exists only while the InterferenceDetectionMgr object is in scope; i.e., setting this property is temporary.
does not persist across SOLIDWORKS Design sessions.
does not persist into the next invocation of interference detection in the user interface.

## Examples

- Run Interference Detection (C#) (Run_Interference_Detection_Example_CSharp.htm)
- Run Interference Detection (VB.NET) (Run_Interference_Detection_Example_VBNET.htm)
- Run Interference Detection (VBA) (Run_Interference_Detection_Example_VB.htm)